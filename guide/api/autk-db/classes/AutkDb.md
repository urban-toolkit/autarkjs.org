[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / AutkDb

# Class: AutkDb

Defined in: [db.ts:65](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L65)

DuckDB-backed spatial database for loading, querying, and managing urban datasets.

Supports multiple isolated workspaces, each with its own schema, registered tables, and cached spatial metadata.

## Throws

Never throws. Initialization happens later via `init()`.

## Example

```ts
const db = new AutkDb();
await db.init();
await db.loadOsm({
  queryArea: { geocodeArea: 'New York', areas: ['Manhattan Island'] },
  autoLoadLayers: { layers: ['buildings', 'roads', 'parks', 'water'] },
});
```

## Constructors

### Constructor

> **new AutkDb**(): `AutkDb`

#### Returns

`AutkDb`

## Methods

### buildHeatmap()

> **buildHeatmap**(`params`): `Promise`\<[`Table`](../type-aliases/Table.md)\>

Defined in: [db.ts:952](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L952)

Builds a heatmap table by creating a grid internally and aggregating source values into its cells.

Uses the cached workspace bounding box as the grid extent, runs a NEAR spatial aggregation into the generated grid, then rewrites the result as raster-band properties.

#### Parameters

##### params

[`BuildHeatmapParams`](../interfaces/BuildHeatmapParams.md)

Source table, NEAR settings, grid configuration, and aggregation method.

#### Returns

`Promise`\<[`Table`](../type-aliases/Table.md)\>

The resulting heatmap table metadata.

#### Throws

If the database is not initialized, if the workspace has no bounding box, or if the source table is missing.

#### Example

```ts
const heatmap = await db.buildHeatmap({
  tableJoinName: 'incidents',
  near: { distance: 500 },
  outputTableName: 'heatmap_result',
  grid: { rows: 50, columns: 50 },
  groupBy: [{ column: '*', aggregateFn: 'count' }],
});
```

***

### getBoundingBoxFromLayer()

> **getBoundingBoxFromLayer**(`layerName`): `Promise`\<`BoundingBox`\>

Defined in: [db.ts:740](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L740)

Computes the bounding box of a layer from its geometry column.

#### Parameters

##### layerName

`string`

Name of the layer table.

#### Returns

`Promise`\<`BoundingBox`\>

The layer bounding box.

#### Throws

If the database is not initialized, the table is missing, or it has no geometry column.

#### Example

```ts
const bbox = await db.getBoundingBoxFromLayer('osm_buildings');
console.log(bbox.minLon, bbox.maxLon);
```

***

### getCurrentWorkspace()

> **getCurrentWorkspace**(): `string`

Defined in: [db.ts:274](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L274)

Returns the name of the workspace currently selected for operations.

This value changes when `setWorkspace()` succeeds.

#### Returns

`string`

Current workspace name.

#### Throws

Never throws.

#### Example

```ts
console.log(db.getCurrentWorkspace()); // 'autk'
```

***

### getLayer()

> **getLayer**(`layerTableName`, `options?`): `Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

Defined in: [db.ts:693](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L693)

Exports a loaded layer as a GeoJSON FeatureCollection with an automatically computed bounding box.

The bbox is resolved from the immutable workspace bounds, then the layer's own bounds.

#### Parameters

##### layerTableName

`string`

Name of the layer table to export.

##### options?

[`GetLayerOptions`](../interfaces/GetLayerOptions.md) = `{}`

Optional per-OSM-element export with preserved source tags and typed IDs.

#### Returns

`Promise`\<`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>\>

A FeatureCollection with `bbox` when workspace or nonempty layer bounds are available.

#### Throws

If the database is not initialized, the table is missing, or it is not a layer table.

#### Example

```ts
const buildings = await db.getLayer('osm_buildings');
map.loadCollection('buildings', { collection: buildings, type: 'buildings' });
```

***

### getLayersMetadata()

> **getLayersMetadata**(): [`Table`](../type-aliases/Table.md) & `object`[]

Defined in: [db.ts:775](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L775)

Returns metadata for all vector layers in the current workspace.

#### Returns

[`Table`](../type-aliases/Table.md) & `object`[]

Filtered array of vector layer metadata.

#### Throws

If the active workspace is missing from the internal registry.

#### Example

```ts
const layers = db.getLayersMetadata();
for (const l of layers) await map.loadCollection(l.name, { collection: await db.getLayer(l.name), type: l.type });
```

***

### getRaster()

> **getRaster**(`tableName`): `Promise`\<`FeatureCollection`\<`null`, `GeoJsonProperties`\>\>

Defined in: [db.ts:669](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L669)

Exports a compact raster table as a packed raster FeatureCollection for rendering.

This applies to GeoTIFF rasters and compact heatmap rasters.
The returned feature contains flat band arrays (`band_1`, `band_2`, ...) and raster resolution metadata.
Pass one of the band ids as the raster property selector in `AutkMap.loadCollection()`.

#### Parameters

##### tableName

`string`

Name of the compact raster table.

#### Returns

`Promise`\<`FeatureCollection`\<`null`, `GeoJsonProperties`\>\>

A FeatureCollection with a single feature containing flat band arrays and resolution metadata.

#### Throws

If the database is not initialized, the table is missing, or it is not a compact raster table.

#### Example

```ts
const fc = await db.getRaster('temperature');
map.loadCollection('temperature', {
  collection: fc,
  type: 'raster',
  property: 'band_1',
});
```

***

### getRastersMetadata()

> **getRastersMetadata**(): [`Table`](../type-aliases/Table.md) & `object`[]

Defined in: [db.ts:787](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L787)

Returns metadata for all raster tables in the current workspace.

#### Returns

[`Table`](../type-aliases/Table.md) & `object`[]

Filtered array of raster table metadata.

#### Throws

If the active workspace is missing from the internal registry.

***

### getTable()

> **getTable**(`tableName`): `Promise`\<[`GetTableOutput`](../type-aliases/GetTableOutput.md)\>

Defined in: [db.ts:803](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L803)

Reads all rows from a table as plain JavaScript objects.

#### Parameters

##### tableName

`string`

Table name.

#### Returns

`Promise`\<[`GetTableOutput`](../type-aliases/GetTableOutput.md)\>

Array of plain objects where each object represents one row.

#### Throws

If the database is not initialized or the table is not found.

#### Example

```ts
const rows = await db.getTable('stations');
console.log(rows[0]);
```

***

### getTablesMetadata()

> **getTablesMetadata**(): [`Table`](../type-aliases/Table.md)[]

Defined in: [db.ts:146](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L146)

Returns metadata for all tables in the current workspace.

Exposes the live table registry for the active workspace without querying DuckDB again.

#### Returns

[`Table`](../type-aliases/Table.md)[]

Array of table metadata objects for the current workspace.

#### Throws

If the active workspace is missing from the internal registry.

#### Example

```ts
const tables = db.getTablesMetadata();
console.log(tables.map((table) => table.name));
```

***

### getWorkspaceConfiguration()

> **getWorkspaceConfiguration**(): [`WorkspaceConfiguration`](../interfaces/WorkspaceConfiguration.md)

Defined in: [db.ts:283](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L283)

Returns the CRS and precision grid used for stored vectors and spatial results in the active workspace.

#### Returns

[`WorkspaceConfiguration`](../interfaces/WorkspaceConfiguration.md)

A copy of the active workspace configuration.

***

### getWorkspaces()

> **getWorkspaces**(): `string`[]

Defined in: [db.ts:260](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L260)

Returns the names of all workspaces known to this instance.

Uses the in-memory workspace registry rather than discovering schemas from DuckDB.

#### Returns

`string`[]

Array of registered workspace names.

#### Throws

Never throws.

#### Example

```ts
const names = db.getWorkspaces();
console.log(names); // ['autk', 'analysis-a']
```

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [db.ts:161](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L161)

Initializes DuckDB and the spatial extension for use by the database wrapper.

Must be called before any other database operation so workspaces, use cases, and the shared connection are ready.

#### Returns

`Promise`\<`void`\>

Resolves when DuckDB, the spatial extension, and the default workspace have been initialized.

#### Throws

If DuckDB WebAssembly fails to load, the connection cannot be opened, or the spatial extension cannot be installed.

#### Example

```ts
const db = new AutkDb();
await db.init();
```

***

### loadCsv()

> **loadCsv**(`params`): `Promise`\<[`CsvTable`](../interfaces/CsvTable.md)\>

Defined in: [db.ts:518](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L518)

Loads a CSV file into the database, optionally creating geometry from coordinate or WKT columns.

Supports the default `Latitude` / `Longitude` shorthand, custom lat/lng column names, or a single WKT geometry column.

#### Parameters

##### params

[`LoadCsvParams`](../interfaces/LoadCsvParams.md)

File URL or array, table name, and optional geometry column mapping.

#### Returns

`Promise`\<[`CsvTable`](../interfaces/CsvTable.md)\>

The created CSV table metadata.

#### Throws

If the database is not initialized, both `csvFileUrl` and `csvObject` are provided, geometry creation fails, or WKT geometry families are mixed.

#### Example

```ts
const table = await db.loadCsv({
  csvFileUrl: '/data/stations.csv',
  outputTableName: 'stations',
  geometryColumns: true,
});
```

***

### loadGeojson()

> **loadGeojson**(`params`): `Promise`\<[`GeojsonTable`](../interfaces/GeojsonTable.md)\>

Defined in: [db.ts:602](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L602)

Loads a GeoJSON FeatureCollection as a spatial layer, optionally auto-clipping to the workspace bbox when OSM data is present.

Building features keep their own identity and original parts; independent GeoJSON
features are never clustered merely because their geometries overlap.

#### Parameters

##### params

[`LoadGeojsonParams`](../interfaces/LoadGeojsonParams.md)

File URL or object, table name, and layer type.

#### Returns

`Promise`\<[`GeojsonTable`](../interfaces/GeojsonTable.md)\>

The created custom layer table metadata.

#### Throws

If the database is not initialized, or the GeoJSON is not a FeatureCollection.

#### Example

```ts
const neighborhoods = await db.loadGeojson({
  geojsonFileUrl: '/data/neighborhoods.geojson',
  outputTableName: 'neighborhoods',
  layerType: 'parks',
});
```

***

### loadGeoTiff()

> **loadGeoTiff**(`params`): `Promise`\<[`GeotiffTable`](../interfaces/GeotiffTable.md)\>

Defined in: [db.ts:632](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L632)

Loads a GeoTIFF raster as a compact raster table with metadata and flat in-memory band arrays.

Large rasters are downsampled when needed so browser memory use stays bounded.

#### Parameters

##### params

[`LoadGeoTiffParams`](../interfaces/LoadGeoTiffParams.md)

File URL or ArrayBuffer, table name, and optional CRS override.

#### Returns

`Promise`\<[`GeotiffTable`](../interfaces/GeotiffTable.md)\>

The created GeoTIFF table metadata.

#### Throws

If the database is not initialized or if the input sources are invalid.

#### Example

```ts
const raster = await db.loadGeoTiff({
  geotiffFileUrl: '/data/lst.tif',
  outputTableName: 'temperature',
});
```

***

### loadJson()

> **loadJson**(`params`): `Promise`\<[`JsonTable`](../interfaces/JsonTable.md)\>

Defined in: [db.ts:544](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L544)

Loads a JSON array into the database, optionally creating geometry from coordinate or WKT fields.

Supports the default `Latitude` / `Longitude` shorthand, custom lat/lng field names, or a single WKT geometry field.

#### Parameters

##### params

[`LoadJsonParams`](../interfaces/LoadJsonParams.md)

File URL or array, table name, and optional geometry field mapping.

#### Returns

`Promise`\<[`JsonTable`](../interfaces/JsonTable.md)\>

The created JSON table metadata, including a renderable `type` when geometry is materialized.

#### Throws

If the database is not initialized, both `jsonFileUrl` and `jsonObject` are provided, or geometry creation fails.

#### Example

```ts
const table = await db.loadJson({
  jsonFileUrl: '/data/events.json',
  outputTableName: 'events',
  geometryColumns: { wktColumnName: 'wkt' },
});
```

***

### loadOsm()

> **loadOsm**(`params`): `Promise`\<[`OsmLoadTimings`](../interfaces/OsmLoadTimings.md)\>

Defined in: [db.ts:308](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L308)

Loads OpenStreetMap data from the Overpass API or a PBF file and extracts thematic layers.

`autoLoadLayers` is required. The raw OSM import tables are treated as temporary
staging tables and are always dropped after the requested layers are extracted.
Surface is always built, excluding sea when coastline reconstruction succeeds.
It stays hidden unless requested. Other layers and typed tag sets are clipped
to it; buildings are filtered as complete features without modifying their parts.

#### Parameters

##### params

[`LoadOsmParams`](../type-aliases/LoadOsmParams.md)

Area query, optional output table name, and required layer extraction settings.

#### Returns

`Promise`\<[`OsmLoadTimings`](../interfaces/OsmLoadTimings.md)\>

Timing breakdown for OSM download and layer extraction.

#### Throws

If the database is not initialized.

#### Example

```ts
const timings = await db.loadOsm({
  queryArea: { geocodeArea: 'New York', areas: ['Manhattan Island'] },
  autoLoadLayers: {
    layers: ['buildings', 'roads', 'surface'],
  },
});
```

***

### rawQuery()

> **rawQuery**\<`T`\>(`params`): `Promise`\<[`Table`](../type-aliases/Table.md) \| `T`\>

Defined in: [db.ts:896](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L896)

Executes arbitrary SQL against the current workspace.

#### Type Parameters

##### T

`T` = [`RawQueryOutput`](../type-aliases/RawQueryOutput.md)

#### Parameters

##### params

[`RawQueryParams`](../interfaces/RawQueryParams.md)

SQL query string and optional output configuration to create a table from the result.

#### Returns

`Promise`\<[`Table`](../type-aliases/Table.md) \| `T`\>

The raw query result, or a Table if `output.type` is `'CREATE_TABLE'`.

#### Throws

If the database is not initialized.

#### Example

```ts
const result = await db.rawQuery({
  query: 'SELECT COUNT(*) as cnt FROM manhattan_buildings',
});
```

***

### removeLayer()

> **removeLayer**(`tableName`): `Promise`\<`void`\>

Defined in: [db.ts:917](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L917)

Drops a table from DuckDB and unregisters it from the active workspace.

Keeps the in-memory workspace registry aligned with the physical schema after a table is removed.

#### Parameters

##### tableName

`string`

Name of the table to remove.

#### Returns

`Promise`\<`void`\>

Resolves when the table has been dropped and unregistered.

#### Throws

If the database is not initialized.

#### Example

```ts
await db.removeLayer('osm_raw');
```

***

### setWorkspace()

> **setWorkspace**(`name`, `configuration?`): `Promise`\<`void`\>

Defined in: [db.ts:217](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L217)

Switches to a workspace, creating its schema and cache entry if needed.

Updates both the active DuckDB schema and the in-memory workspace registry used by this instance.

#### Parameters

##### name

`string`

The name of the workspace to activate.

##### configuration?

[`WorkspaceConfiguration`](../interfaces/WorkspaceConfiguration.md)

Optional CRS and precision grid. Both values are required together.

#### Returns

`Promise`\<`void`\>

Resolves when the workspace has been created if necessary and set as active.

#### Throws

If the database has not been initialized, configuration is invalid, or existing tables would change CRS.

#### Example

```ts
await db.setWorkspace('my-analysis', { coordinateFormat: 'EPSG:3395', precisionGrid: 0.01 });
await db.loadCsv({ csvFileUrl: '/data.csv', outputTableName: 'points' });
```

***

### spatialQuery()

> **spatialQuery**(`params`): `Promise`\<[`Table`](../type-aliases/Table.md)\>

Defined in: [db.ts:874](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L874)

Performs a spatial join between two tables using predicates like INTERSECT or NEAR.

The join always modifies the root table in place using a LEFT join.

#### Parameters

##### params

[`SpatialQueryParams`](../interfaces/SpatialQueryParams.md)

Root and join table names, spatial predicate, optional near distance, and optional grouping.

#### Returns

`Promise`\<[`Table`](../type-aliases/Table.md)\>

The updated root table.

#### Throws

If the database is not initialized.

#### Example

```ts
await db.spatialQuery({
  tableRootName: 'roads',
  tableJoinName: 'lst',
  near: { distance: 1000 },
});
```

***

### updateTable()

> **updateTable**(`params`): `Promise`\<[`Table`](../type-aliases/Table.md)\>

Defined in: [db.ts:826](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/db.ts#L826)

Updates an existing table with new data using a replace or record-level update strategy.

#### Parameters

##### params

`Omit`\<[`UpdateTableParams`](../interfaces/UpdateTableParams.md), `"workspace"`\>

Table name, data, strategy (`'replace'` or `'update'`), and optional `idColumn` for update strategy.

#### Returns

`Promise`\<[`Table`](../type-aliases/Table.md)\>

The updated table with refreshed column metadata.

#### Throws

If the database is not initialized, the table is missing, or `idColumn` is required but omitted.

#### Example

```ts
await db.updateTable({
  tableName: 'stations',
  data: updatedRows,
  strategy: 'replace',
});
```
