# Retrieving Data

After loading and analyzing data, you can export it back as GeoJSON for rendering or as plain arrays for charts and tables.

## Get a Layer as GeoJSON

`getLayer` returns a `FeatureCollection` ready to pass to `autk-map`:

```typescript
const geojson = await db.getLayer('buildings');
map.loadCollection('buildings', { collection: geojson, type: 'buildings' });
```

The returned `FeatureCollection` includes a `bbox` property. If OSM data is loaded, the OSM bounding box is used; otherwise, the layer's own bounding box is computed.

## Get Raw Table Data

`getTableData` returns the rows of any table as plain JavaScript objects. It works with layer tables, CSV tables, and JSON tables alike:

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

## Get Bounding Boxes

**OSM bounding box** — the geographic extent of the loaded OSM area:

```typescript
const bbox = db.getOsmBoundingBox();
// [minLon, minLat, maxLon, maxLat] or null
```

**Layer bounding box** — computed from the geometry of any layer:

```typescript
const bbox = await db.getBoundingBoxFromLayer('neighborhoods');
// { minLon, minLat, maxLon, maxLat }
```

## List All Layer Tables

`getLayerTables` returns only the tables that contain geometry (OSM layers, GeoJSON layers):

```typescript
const layers = db.getLayerTables();
// Useful for iterating and passing each layer to autk-map

for (const layer of layers) {
  const geojson = await db.getLayer(layer.name);
  map.loadCollection(layer.name, { collection: geojson, type: layer.type });
}
```

## Remove a Table

`removeLayer` drops a table from DuckDB and removes it from the current workspace:

```typescript
await db.removeLayer('incidents');
```

After removal, the table will no longer appear in `db.tables` or `db.getLayerTables()`.
