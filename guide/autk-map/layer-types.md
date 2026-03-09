# Layer Types

Every layer in `autk-map` has a type that controls how its geometry is triangulated and rendered. The type is expressed via the `LayerType` enum.

## OSM Layers

These types correspond directly to what `autk-db` extracts from OpenStreetMap data:

| `LayerType` | Geometry | Description |
|-------------|----------|-------------|
| `AUTK_OSM_SURFACE` | Polygon | Ground surface / land cover |
| `AUTK_OSM_PARKS` | Polygon | Parks and green areas |
| `AUTK_OSM_WATER` | Polygon | Water bodies |
| `AUTK_OSM_ROADS` | Polyline | Road network |
| `AUTK_OSM_BUILDINGS` | Polygon | Buildings with 3D extrusion |

`AUTK_OSM_BUILDINGS` is the only type that renders in 3D. Height is derived from OSM `height` and `building:levels` tags when available.

## Custom Geometry Layers

Use these when loading your own GeoJSON data:

| `LayerType` | Geometry |
|-------------|----------|
| `AUTK_GEO_POINTS` | Point / MultiPoint |
| `AUTK_GEO_POLYLINES` | LineString / MultiLineString |
| `AUTK_GEO_POLYGONS` | Polygon / MultiPolygon |

## Raster Layer

| `LayerType` | Description |
|-------------|-------------|
| `AUTK_RASTER` | Grid-based raster data (e.g. GeoTIFF, heatmaps) |

## Auto-detection

If you don't specify a `LayerType`, `loadGeoJsonLayer` detects it from the GeoJSON geometry type:

```typescript
// Type is inferred from the first feature's geometry
map.loadGeoJsonLayer('neighborhoods', geojson);
```

Auto-detection maps `Point` → `AUTK_GEO_POINTS`, `LineString` → `AUTK_GEO_POLYLINES`, `Polygon` → `AUTK_GEO_POLYGONS`. OSM-specific types (surface, buildings, etc.) are not auto-detected — pass them explicitly.
