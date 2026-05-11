# Retrieving Data

After loading and analyzing data, use getter methods to move results from DuckDB back into JavaScript. Retrieve only what you need: large tables can be expensive to transfer into JS memory.

## Inspect Registered Tables

Use `db.tables` to inspect the tables registered in the current workspace:

```typescript
console.log(db.tables);
```

Each entry is table metadata, not the table rows themselves. A typical entry includes:

- `name` — the table name used by `autk-db` methods
- `source` — where the table came from, such as `'csv'`, `'json'`, `'osm'`, `'geojson'`, `'geotiff'`, or `'user'`
- `type` — the table kind, such as `'pointset'`, `'polygons'`, `'roads'`, `'buildings'`, or `'raster'`
- `columns` — the DuckDB column names and types

Use this when you want to see what is available before calling `getTableData()`, `getLayer()`, or `getLayerTables()`.

## Get Table Data

`getTableData` returns rows from any registered table as plain JavaScript objects. Use it for charts, UI tables, summaries, or custom processing.

```typescript
const rows = await db.getTableData({ tableName: 'incidents' });
// rows: Array<Record<string, unknown>>
```

Use pagination for large tables:

```typescript
const page = await db.getTableData({
  tableName: 'incidents',
  limit: 100,
  offset: 200,
});
```

## Get a Renderable Table as GeoJSON

`getLayer` exports a renderable table as a GeoJSON `FeatureCollection`. This is the typical way to pass data from `autk-db` to `autk-map` or `autk-plot`.

```typescript
const geojson = await db.getLayer('buildings');
map.loadCollection('buildings', { collection: geojson, type: 'buildings' });
```

The returned `FeatureCollection` includes a `bbox` property. If OSM data is loaded, the OSM bounding box is used; otherwise, the table's own bounding box is computed.

## List Renderable Tables

Not every table can be exported as GeoJSON. `getLayerTables()` returns the subset of `db.tables` that can be exported with `getLayer()`: 

```typescript
const renderableTables = db.getLayerTables();

for (const table of renderableTables) {
  const geojson = await db.getLayer(table.name);
  map.loadCollection(table.name, { collection: geojson, type: table.type });
}
```

Use this when you want to load all available renderable tables into a map.

## Get Bounding Boxes

**OSM bounding box** — the geographic extent of the loaded OSM area:

```typescript
const bbox = db.getOsmBoundingBox();
// [minLon, minLat, maxLon, maxLat] or null
```

**Table bounding box** — computed from the geometry of a renderable table:

```typescript
const bbox = await db.getBoundingBoxFromLayer('neighborhoods');
// { minLon, minLat, maxLon, maxLat }
```

Bounding boxes are useful for camera framing, clipping, and setting grid extents.

## Choosing a Getter

| Method | Returns | Use for |
|---|---|---|
| `getTableData({ tableName })` | `Record<string, unknown>[]` | Plain rows for charts, tables, or custom JS logic |
| `getLayer(name)` | `FeatureCollection` | Renderable tables for `autk-map` or `autk-plot` |
| `getLayerTables()` | Table metadata array | Listing renderable tables |
| `getOsmBoundingBox()` | `[minLon, minLat, maxLon, maxLat] \| null` | Framing the loaded OSM area |
| `getBoundingBoxFromLayer(name)` | Bounding box object | Bounds of one renderable table |
