# Loading Data

`autk-db` can load data from multiple sources. Each method registers the result as a named table in DuckDB — **load methods do not return data into JavaScript memory**. To read data back into JS, use [`getLayer()`](./retrieving-data#get-a-layer-as-geojson) or [`getTableData()`](./retrieving-data#get-raw-table-data) after loading.

## OpenStreetMap via Overpass API

`loadOsmFromOverpassApi` fetches OSM data from the public [Overpass API](https://overpass-api.de/) and stores it in DuckDB.

```typescript
await db.loadOsmFromOverpassApi({
  queryArea: {
    geocodeArea: 'New York',      // city or region name
    areas: ['Financial District'], // sub-areas within the city
  },
  outputTableName: 'osm',
});
```

### Auto-loading Layers

The `autoLoadLayers` option extracts ready-to-render layers (buildings, roads, surface, parks, water) from the raw OSM data automatically:

```typescript
await db.loadOsmFromOverpassApi({
  queryArea: { geocodeArea: 'New York', areas: ['Financial District'] },
  outputTableName: 'osm',
  autoLoadLayers: {
    coordinateFormat: 'EPSG:3395', // projection for the output geometries
    layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
    dropOsmTable: true,            // remove the raw OSM table after extraction
  },
});
```

After this call, `db.getLayerTables()` returns one table per extracted layer. Each table is typed and ready to pass to `autk-map`.

**Table naming:** each layer is stored as `{outputTableName}_{layer}`. With `outputTableName: 'osm'` and `layers: ['surface', 'roads', 'buildings']`, the resulting tables are `osm_surface`, `osm_roads`, and `osm_buildings`.

:::tip Coordinate format
Use `'EPSG:3395'` (World Mercator) for most city-scale visualizations. This is the format expected by `autk-map`.
:::

### Tracking Progress

Use `onProgress` to update a UI indicator during the (potentially slow) OSM download:

```typescript
await db.loadOsmFromOverpassApi({
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
| `queryArea.areas` | `string[]` | — | Sub-areas (neighborhoods, districts) within the geocoded area. |
| `autoLoadLayers` | `object` | — | If set, automatically extracts layers from the raw OSM data. See below. |
| `autoLoadLayers.coordinateFormat` | `string` | — | Target projection for the extracted layers (e.g. `'EPSG:3395'`). |
| `autoLoadLayers.layers` | `LayerType[]` | — | Layers to extract: `'surface'`, `'water'`, `'parks'`, `'roads'`, `'buildings'`. |
| `autoLoadLayers.dropOsmTable` | `boolean` | — | If `true`, removes the raw OSM table after layer extraction. |
| `onProgress` | `(phase: LoadingPhase) => void` | — | Callback fired at each loading phase. |

### Manual Layer Extraction

If you loaded OSM data without `autoLoadLayers`, call `loadLayer` to extract individual layers. You can also provide a custom `outputTableName` to override the default naming:

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

You can also pass a `boundingBox` to crop the extracted layer to a specific area:

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
| `layer` | `LayerType` | — | Layer to extract: `'surface'`, `'water'`, `'parks'`, `'roads'`, `'buildings'`, `'points'`, `'polygons'`, `'polylines'`, or `'raster'`. |
| `coordinateFormat` | `string` | — | Target projection (e.g. `'EPSG:3395'`). |
| `outputTableName` | `string` | `{osmInputTableName}_{layer}` | Custom name for the resulting table. |
| `boundingBox` | `BoundingBox` | — | Optional bounding box to crop the layer. |

## External GeoJSON

`loadCustomLayer` loads a GeoJSON `FeatureCollection` from a URL (or in-memory object) and stores it as a layer table:

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

If OSM data was previously loaded in the same workspace, the bounding box of that OSM area is **automatically applied to crop the GeoJSON** — so only features within the OSM region are kept. This happens without any extra configuration.

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `geojsonFileUrl` | `string` | — | URL of the GeoJSON file to load. Mutually exclusive with `geojsonObject`. |
| `geojsonObject` | `FeatureCollection` | — | In-memory GeoJSON FeatureCollection. Mutually exclusive with `geojsonFileUrl`. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `coordinateFormat` | `string` | — | Target projection (e.g. `'EPSG:3395'`). Optional — omit to keep the original coordinates. |

## CSV

```typescript
await db.loadCsv({
  csvFileUrl: '/data/incidents.csv',
  outputTableName: 'incidents',
});
```

The CSV is loaded as a plain table (no geometry) by default. You can join it with a layer table afterwards using [spatialJoin](./querying#spatial-join) or [rawQuery](./querying#raw-sql).

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `csvFileUrl` | `string` | — | URL of the CSV file to load. Mutually exclusive with `csvObject`. |
| `csvObject` | `unknown[][]` | — | In-memory 2D array to load instead of a file. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `delimiter` | `string` | `','` | Column delimiter character. Use `'\t'` for TSV files. |
| `geometryColumns` | `object` | — | See below. |

### Geospatial columns

If your CSV has latitude and longitude columns, pass `geometryColumns` to create a spatial geometry column:

```typescript
await db.loadCsv({
  csvFileUrl: '/data/incidents.csv',
  outputTableName: 'incidents',
  geometryColumns: {
    latColumnName: 'lat',
    longColumnName: 'lon',
    coordinateFormat: 'EPSG:3395', // defaults to EPSG:4326
  },
});
```

This creates a `geoPoint` geometry column (via `ST_Transform`) and a spatial RTREE index automatically. The table can then be used directly in `spatialJoin` and `buildHeatmap`.

### In-memory loading

```typescript
const rows = [['id', 'name'], ['1', 'Alice'], ['2', 'Bob']];

await db.loadCsv({
  csvObject: rows,
  outputTableName: 'people',
});
```

## JSON

```typescript
await db.loadJson({
  jsonFileUrl: '/data/metadata.json',
  outputTableName: 'metadata',
});
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `jsonFileUrl` | `string` | — | URL of the JSON file to load. Mutually exclusive with `jsonObject`. |
| `jsonObject` | `unknown[]` | — | In-memory array of objects to load instead of a file. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `geometryColumns` | `object` | — | Same as CSV — see [Geospatial columns](#geospatial-columns) above. |

### In-memory loading

```typescript
const records = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

await db.loadJson({
  jsonObject: records,
  outputTableName: 'people',
});
```

## Grid Layer

A grid layer creates a regular rectangular grid over a bounding box. Useful as the base for heatmaps or spatial aggregations.

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
