# Layer Types

Every layer in `autk-map` has a type that controls how its geometry is triangulated and rendered. The type is a string from the `LayerType` union.

## OSM Layers

These types correspond directly to what `autk-db` extracts from OpenStreetMap data:

| Type | Geometry | Description |
|------|----------|-------------|
| `'surface'` | Polygon | Ground surface / land cover |
| `'parks'` | Polygon | Parks and green areas |
| `'water'` | Polygon | Water bodies |
| `'roads'` | Polyline | Road network |
| `'buildings'` | Polygon | Buildings with 3D extrusion |

`'buildings'` is the only type that renders in 3D. Height is derived from OSM `height` and `building:levels` tags when available.

## Custom Geometry Layers

Use these when loading your own GeoJSON data:

| Type | Geometry |
|------|----------|
| `'points'` | Point / MultiPoint |
| `'polylines'` | LineString / MultiLineString |
| `'polygons'` | Polygon / MultiPolygon |

## Raster Layer

| Type | Description |
|------|-------------|
| `'raster'` | Grid-based raster data (e.g. GeoTIFF, heatmaps) |

## Auto-detection

If you don't specify a type in `loadCollection`, it is inferred from the GeoJSON geometry type:

```typescript
// Type is inferred from the first feature's geometry
map.loadCollection('neighborhoods', { collection: geojson });
```

Auto-detection maps `Point` → `'points'`, `LineString` → `'polylines'`, `Polygon` → `'polygons'`. OSM-specific types (`'surface'`, `'buildings'`, etc.) are not auto-detected — pass them explicitly.
