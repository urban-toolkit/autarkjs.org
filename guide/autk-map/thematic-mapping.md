# Thematic Mapping

Thematic mapping colors each feature in a layer based on a data attribute. Use `updateThematic` to apply it, passing the feature collection and a dot-path property accessor.

## Coloring by a Numeric Attribute

Pass the GeoJSON and a dot-path to the numeric property. Values are automatically normalized to `[0, 1]` and mapped through the color scale:

```typescript
import { ColorMapInterpolator } from 'autk-map';

const geojson = await db.getLayer('buildings');

map.updateColorMap('buildings', { colorMap: { interpolator: ColorMapInterpolator.SEQUENTIAL_REDS } });
map.updateThematic('buildings', { collection: geojson, property: 'properties.height' });
map.updateRenderInfo('buildings', { isColorMap: true });
```

The min and max labels in the legend are set automatically from the data range.

## Coloring by a Categorical Attribute

Use a dot-path to a string property. Each unique category gets a color from the active palette. Use `OBSERVABLE10` for categorical data:

```typescript
import { ColorMapInterpolator } from 'autk-map';

map.updateColorMap('roads', { colorMap: { interpolator: ColorMapInterpolator.OBSERVABLE10 } });

const geojson = await db.getLayer('roads');

// Pre-classify values into a new property if needed
for (const feature of geojson.features) {
  const hw = feature.properties?.highway;
  feature.properties!.highway_class = ['primary', 'secondary'].includes(hw) ? hw : 'other';
}

map.updateThematic('roads', { collection: geojson, property: 'properties.highway_class' });
map.updateRenderInfo('roads', { isColorMap: true });
```

## Updating Thematic Values

To change the active property or data source, call `updateThematic` again with the new collection and property:

```typescript
map.updateThematic('buildings', { collection: newGeojson, property: 'properties.compute.score' });
```
