# Loading Layers

## loadCollection

The primary method for adding data to the map. Accepts any GeoJSON `FeatureCollection` via a params object:

```typescript
// Auto-detect geometry type (Point → 'points', LineString → 'polylines', Polygon → 'polygons')
map.loadCollection('neighborhoods', { collection: geojson });

// Explicit layer type (required for OSM semantic types)
map.loadCollection('buildings', { collection: geojson, type: 'buildings' });
map.loadCollection('roads', { collection: geojson, type: 'roads' });

// Raster layer with property for value extraction
map.loadCollection('elevation', { collection: geotiffFC, type: 'raster', property: 'properties.band_1' });
```

### Bounding Box

The first layer loaded sets the map's bounding box and initial camera framing. If the GeoJSON includes a `bbox` property (as returned by `db.getLayer()`), it is used directly. Otherwise, the bounding box is computed from the geometries.

You can also set the bounding box manually before loading any layer:

```typescript
map.boundingBox = [minLon, minLat, maxLon, maxLat];
```

### Loading Multiple Layers from autk-db

```typescript
for (const layer of db.getLayerTables()) {
  const geojson = await db.getLayer(layer.name);
  map.loadCollection(layer.name, { collection: geojson, type: layer.type });
}
```

The `layer.type` property from `autk-db` already carries the correct `LayerType` string, so no cast is needed.

## Raster Layers

Load raster data by passing `type: 'raster'` and a `property` accessor to `loadCollection`:

```typescript
map.loadCollection('elevation', {
  collection: geotiffFeatureCollection,
  type: 'raster',
  property: 'properties.band_1',
});
```

Use `updateRaster` to change the active band or data source:

```typescript
map.updateRaster('elevation', {
  collection: geotiffFeatureCollection,
  property: 'properties.band_3',
});
```

:::tip Heatmaps
`autk-db`'s `buildHeatmap` returns data in the format expected by raster layers. Pass the result directly.
:::
