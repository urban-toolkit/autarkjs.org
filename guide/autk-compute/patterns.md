# Patterns

## Compute → Update Table → Thematic Map

The most common pattern: compute a new value per feature, write it back to the database, then color the map layer by it.

```typescript
import { geojsonCompute } from 'autk-compute';
import { ColorMapInterpolator, LayerType } from 'autk-map';

// 1. Get the current layer data from autk-db
const geojson = await db.getLayer('buildings');

// 2. Compute a new property via GPU
const enriched = await geojsonCompute.computeFunctionIntoProperties({
  geojson,
  variableMapping: {
    area: 'properties.area',
    floors: 'properties.floors',
  },
  outputColumnName: 'volume',
  wglsFunction: 'return area * floors;',
});

// 3. Write the result back to autk-db
await db.updateTable({
  tableName: 'buildings',
  data: enriched,
  strategy: 'replace',
});

// 4. Refresh the map layer with thematic coloring
const updated = await db.getLayer('buildings');
map.updateRenderInfoProperty('buildings', 'colorMapInterpolator', ColorMapInterpolator.SEQUENTIAL_BLUES);
map.updateRenderInfoProperty('buildings', 'isColorMap', true);
map.updateGeoJsonLayerThematic(
  'buildings',
  updated,
  (f) => f.properties?.compute?.volume ?? 0,
  true
);
```

## Performance Notes

- `autk-compute` launches one GPU workgroup per feature. The overhead of GPU dispatch dominates for very small datasets (< ~500 features). For those cases, plain JavaScript is faster.
- All features must have the same property schema. Missing values default to `0`.
- The returned `FeatureCollection` is a new object; the original `geojson` is not mutated.
