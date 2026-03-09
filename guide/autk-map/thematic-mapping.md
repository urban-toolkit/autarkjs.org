# Thematic Mapping

Thematic mapping colors each feature in a layer based on a data attribute. Use `updateGeoJsonLayerThematic` to apply it.

## Coloring by a Numeric Attribute

Pass a function that returns a `number` from a feature's properties. Values are automatically normalized to `[0, 1]` and mapped through the color scale:

```typescript
import { ColorMapInterpolator } from 'autk-map';

const geojson = await db.getLayer('buildings');

map.updateRenderInfoProperty('buildings', 'colorMapInterpolator', ColorMapInterpolator.SEQUENTIAL_REDS);
map.updateRenderInfoProperty('buildings', 'isColorMap', true);

map.updateGeoJsonLayerThematic(
  'buildings',
  geojson,
  (feature) => feature.properties?.height ?? 0
);
```

The min and max labels in the legend are set automatically from the data range.

## Coloring by a Categorical Attribute

Return a `string` instead of a number. Each unique category gets a color from the active palette. Use `OBSERVABLE10` for categorical data:

```typescript
import { ColorMapInterpolator } from 'autk-map';

map.updateRenderInfoProperty('roads', 'colorMapInterpolator', ColorMapInterpolator.OBSERVABLE10);
map.updateRenderInfoProperty('roads', 'isColorMap', true);

const geojson = await db.getLayer('roads');

map.updateGeoJsonLayerThematic(
  'roads',
  geojson,
  (feature) => {
    const hw = feature.properties?.highway;
    return ['primary', 'secondary'].includes(hw) ? hw : 'other';
  }
);
```

## Grouping Buildings by ID

Buildings in `autk-map` are split into individual faces (walls + roof) internally. If you color by a per-building attribute, pass `groupById: true` so each building uses its own single value instead of coloring face-by-face:

```typescript
map.updateGeoJsonLayerThematic(
  'buildings',
  geojson,
  (feature) => feature.properties?.floor_count ?? 0,
  true // groupById
);
```
