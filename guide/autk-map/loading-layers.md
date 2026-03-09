# Loading Layers

## loadGeoJsonLayer

The primary method for adding data to the map. Accepts any GeoJSON `FeatureCollection`:

```typescript
import { LayerType } from 'autk-map';

// Auto-detect geometry type
map.loadGeoJsonLayer('neighborhoods', geojson);

// Explicit layer type (required for OSM types)
map.loadGeoJsonLayer('buildings', geojson, LayerType.AUTK_OSM_BUILDINGS);
map.loadGeoJsonLayer('roads', geojson, LayerType.AUTK_OSM_ROADS);
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
  map.loadGeoJsonLayer(layer.name, geojson, layer.type as LayerType);
}
```

The `layer.type` property from `autk-db` matches the string values of `LayerType`, so a cast is safe.

## loadGeoTiffLayer

Loads a raster layer from GeoTIFF-derived data (represented as a `FeatureCollection` with raster metadata in feature properties):

```typescript
map.loadGeoTiffLayer('elevation', geotiffFeatureCollection, LayerType.AUTK_RASTER);
```

:::tip Heatmaps
`autk-db`'s `buildHeatmap` returns data in the format expected by `loadGeoTiffLayer`. Pass the result directly.
:::
