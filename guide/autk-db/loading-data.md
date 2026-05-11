# Loading Data

`autk-db` can load data from multiple sources. Each load method registers data as one or more named tables in DuckDB. Those table names are what you use later in queries, joins, updates, and retrieval methods. Load methods return table metadata; they do **not** return all rows into JavaScript memory.

To inspect loaded table metadata, use [`db.tables`](./retrieving-data#inspect-registered-tables). To retrieve data later, use [`getTableData()`](./retrieving-data#get-table-data) or [`getLayer()`](./retrieving-data#get-a-renderable-table-as-geojson).

## OpenStreetMap via Overpass API

`loadOsm` fetches OSM data from the public [Overpass API](https://overpass-api.de/) and stores it in DuckDB.

```typescript
await db.loadOsm({
  queryArea: {
    geocodeArea: 'New York',
    areas: ['Financial District'],
  },
  outputTableName: 'osm',
});
```

### Auto-loading Renderable Tables

The `autoLoadLayers` option extracts ready-to-render tables such as buildings, roads, surface, parks, and water from the raw OSM data:

```typescript
await db.loadOsm({
  queryArea: { geocodeArea: 'New York', areas: ['Financial District'] },
  outputTableName: 'osm',
  autoLoadLayers: {
    coordinateFormat: 'EPSG:3395',
    layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
    dropOsmTable: true,
  },
});
```

After this call, `db.getLayerTables()` returns one table per extracted renderable table. Each table is typed and ready to export with `getLayer()` and pass to `autk-map`.

**Table naming:** each extracted OSM table is stored as `{outputTableName}_{layer}`. With `outputTableName: 'osm'` and `layers: ['surface', 'roads', 'buildings']`, the resulting tables are `osm_surface`, `osm_roads`, and `osm_buildings`.

:::tip Coordinate format
Use `'EPSG:3395'` (World Mercator) for most city-scale visualizations. This is the format expected by `autk-map`.
:::

### Tracking Progress

Use `onProgress` to update a UI indicator during the OSM request and processing steps:

```typescript
await db.loadOsm({
  queryArea: { geocodeArea: 'Chicago', areas: ['The Loop'] },
  outputTableName: 'osm',
  onProgress: (phase) => console.log('Loading:', phase),
});
```

Possible phases: `querying-osm-server`, `downloading-osm-data`, `querying-osm-boundaries`, `downloading-boundaries`, `processing-osm-data`, `processing-boundaries`.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `outputTableName` | `string` | — | Base name for the resulting tables. |
| `queryArea.geocodeArea` | `string` | — | City or region name for the Overpass geocode query. |
| `queryArea.areas` | `string[]` | — | Sub-areas within the geocoded area. |
| `autoLoadLayers` | `object` | — | Automatically extracts renderable OSM tables. |
| `autoLoadLayers.coordinateFormat` | `string` | — | Target projection for extracted tables. |
| `autoLoadLayers.layers` | `LayerType[]` | — | Tables to extract: `'surface'`, `'water'`, `'parks'`, `'roads'`, `'buildings'`. |
| `autoLoadLayers.dropOsmTable` | `boolean` | — | If `true`, removes the raw OSM table after extraction. |
| `onProgress` | `(phase: LoadingPhase) => void` | — | Callback fired at each loading phase. |

### Manual OSM Table Extraction

If you loaded OSM data without `autoLoadLayers`, call `loadLayer` to extract individual renderable tables. You can provide a custom `outputTableName` to override the default naming.

```typescript
// Default: creates table named 'osm_buildings'
await db.loadLayer({
  osmInputTableName: 'osm',
  layer: 'buildings',
  coordinateFormat: 'EPSG:3395',
});

// Custom name: creates table named 'my_buildings'
await db.loadLayer({
  osmInputTableName: 'osm',
  layer: 'buildings',
  coordinateFormat: 'EPSG:3395',
  outputTableName: 'my_buildings',
});
```

You can also pass a `boundingBox` to crop the extracted table to a specific area:

```typescript
await db.loadLayer({
  osmInputTableName: 'osm',
  layer: 'roads',
  coordinateFormat: 'EPSG:3395',
  boundingBox: { minLon: -74.01, minLat: 40.70, maxLon: -74.00, maxLat: 40.71 },
});
```

| Option | Type | Default | Description |
|---|---|---|---|
| `osmInputTableName` | `string` | — | Name of the OSM table to extract from. |
| `layer` | `LayerType` | — | Table to extract: `'surface'`, `'water'`, `'parks'`, `'roads'`, `'buildings'`, `'points'`, `'polygons'`, `'polylines'`, or `'raster'`. |
| `coordinateFormat` | `string` | — | Target projection. |
| `outputTableName` | `string` | `{osmInputTableName}_{layer}` | Custom name for the resulting table. |
| `boundingBox` | `BoundingBox` | — | Optional bounding box to crop the result. |

## GeoJSON

`loadCustomLayer` loads a GeoJSON `FeatureCollection` from a URL or in-memory object and stores it as a renderable table:

```typescript
await db.loadCustomLayer({
  geojsonFileUrl: '/data/neighborhoods.geojson',
  outputTableName: 'neighborhoods',
  coordinateFormat: 'EPSG:3395',
});
```

You can also pass an in-memory `FeatureCollection` directly:

```typescript
await db.loadCustomLayer({
  geojsonObject: myFeatureCollection,
  outputTableName: 'neighborhoods',
  coordinateFormat: 'EPSG:3395',
});
```

If OSM data was previously loaded in the same workspace, the OSM bounding box is automatically applied to crop the GeoJSON.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `geojsonFileUrl` | `string` | — | URL of the GeoJSON file to load. Mutually exclusive with `geojsonObject`. |
| `geojsonObject` | `FeatureCollection` | — | In-memory GeoJSON FeatureCollection. Mutually exclusive with `geojsonFileUrl`. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `coordinateFormat` | `string` | — | Target projection. Omit to keep the original coordinates. |

## CSV

```typescript
await db.loadCsv({
  csvFileUrl: '/data/incidents.csv',
  outputTableName: 'incidents',
});
```

By default, a CSV is loaded as a named table for tabular analysis. If the CSV has latitude and longitude columns, pass `geometryColumns` to create geometry during loading.

### Geospatial Columns

```typescript
await db.loadCsv({
  csvFileUrl: '/data/incidents.csv',
  outputTableName: 'incidents',
  geometryColumns: {
    latColumnName: 'lat',
    longColumnName: 'lon',
    coordinateFormat: 'EPSG:3395',
  },
});
```

This creates a `geoPoint` geometry column and a spatial RTREE index automatically. The table can then participate in spatial operations such as `spatialJoin` and `buildHeatmap`.

### In-memory Loading

```typescript
const rows = [['id', 'name'], ['1', 'Alice'], ['2', 'Bob']];

await db.loadCsv({
  csvObject: rows,
  outputTableName: 'people',
});
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `csvFileUrl` | `string` | — | URL of the CSV file to load. Mutually exclusive with `csvObject`. |
| `csvObject` | `unknown[][]` | — | In-memory 2D array to load instead of a file. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `delimiter` | `string` | `','` | Column delimiter character. Use `'\t'` for TSV files. |
| `geometryColumns` | `object` | — | Latitude/longitude columns used to create geometry. |

## JSON

```typescript
await db.loadJson({
  jsonFileUrl: '/data/metadata.json',
  outputTableName: 'metadata',
});
```

JSON data can also include latitude and longitude fields through the same `geometryColumns` option used by CSV.

```typescript
const records = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

await db.loadJson({
  jsonObject: records,
  outputTableName: 'people',
});
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `jsonFileUrl` | `string` | — | URL of the JSON file to load. Mutually exclusive with `jsonObject`. |
| `jsonObject` | `unknown[]` | — | In-memory array of objects to load instead of a file. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `geometryColumns` | `object` | — | Same as CSV — see [Geospatial Columns](#geospatial-columns). |

## Grid

A grid table creates a regular rectangular grid over a bounding box. This is useful as the base for heatmaps or spatial aggregations.

```typescript
await db.loadGridLayer({
  outputTableName: 'grid',
  rows: 20,
  columns: 20,
});
```

If `boundingBox` is omitted and OSM data is loaded, the OSM bounding box is used automatically. You can also provide an explicit bounding box:

```typescript
await db.loadGridLayer({
  outputTableName: 'grid',
  rows: 20,
  columns: 20,
  boundingBox: { minLon: -74.01, minLat: 40.70, maxLon: -74.00, maxLat: 40.71 },
});
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `outputTableName` | `string` | — | Name for the resulting table. |
| `rows` | `number` | — | Number of rows in the grid. |
| `columns` | `number` | — | Number of columns in the grid. |
| `boundingBox` | `BoundingBox` | OSM bbox | Bounding box for the grid extent. Falls back to the OSM bounding box if omitted. |

## GeoTIFF

`loadGeoTiff` loads raster data from a URL or an `ArrayBuffer` and registers it as a raster table.

```typescript
await db.loadGeoTiff({
  geotiffFileUrl: '/data/surface-temperature.tif',
  outputTableName: 'temperature',
  coordinateFormat: 'EPSG:3395',
});
```

For large rasters, pass a `boundingBox` or reduce `maxPixels` to avoid loading too many pixels into browser memory.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `geotiffFileUrl` | `string` | — | URL of the GeoTIFF file. Mutually exclusive with `geotiffArrayBuffer`. |
| `geotiffArrayBuffer` | `ArrayBuffer` | — | Already-fetched GeoTIFF data. Mutually exclusive with `geotiffFileUrl`. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `coordinateFormat` | `string` | `'EPSG:4326'` | Target coordinate format. |
| `sourceCrs` | `string` | — | CRS of the input GeoTIFF, required when transforming coordinates. |
| `boundingBox` | `BoundingBox` | — | Optional clip area in the source CRS. Strongly recommended for large rasters. |
| `maxPixels` | `number` | `500000` | Maximum decoded pixels before throwing an error. |
