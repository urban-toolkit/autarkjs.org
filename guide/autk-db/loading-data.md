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

## CSV

```typescript
await db.loadCsv({
  fileUrl: '/data/incidents.csv',
  outputTableName: 'incidents',
});
```

The CSV is loaded as a plain table (no geometry) by default. You can join it with a layer table afterwards using [spatialJoin](./querying#spatial-join) or [rawQuery](./querying#raw-sql).

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `fileUrl` | `string` | — | URL of the CSV file to load. Mutually exclusive with `csvObject`. |
| `csvObject` | `unknown[][]` | — | In-memory 2D array to load instead of a file. |
| `outputTableName` | `string` | — | Name for the resulting table. |
| `delimiter` | `string` | `','` | Column delimiter character. Use `'\t'` for TSV files. |
| `geometryColumns` | `object` | — | See below. |

### Geospatial columns

If your CSV has latitude and longitude columns, pass `geometryColumns` to create a spatial geometry column:

```typescript
await db.loadCsv({
  fileUrl: '/data/incidents.csv',
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
  fileUrl: '/data/metadata.json',
  outputTableName: 'metadata',
});
```

### Options

| Option | Type | Default | Description |
|---|---|---|---|
| `fileUrl` | `string` | — | URL of the JSON file to load. Mutually exclusive with `jsonObject`. |
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

If `boundingBox` is omitted and OSM data is loaded, the OSM bounding box is used automatically.
