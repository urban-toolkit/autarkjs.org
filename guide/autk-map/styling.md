# Styling

Layer appearance is controlled through `updateRenderInfoProperty`. All properties are applied immediately and take effect on the next render frame.

## Opacity

```typescript
map.updateRenderInfoProperty('buildings', 'opacity', 0.7);
```

Value is a `number` between `0.0` (transparent) and `1.0` (opaque).

## Color Map Interpolator

Controls the color scale used when [thematic mapping](./thematic-mapping) is active:

```typescript
import { ColorMapInterpolator } from 'autk-map';

map.updateRenderInfoProperty('buildings', 'colorMapInterpolator', ColorMapInterpolator.SEQUENTIAL_BLUES);
```

Available options:

| `ColorMapInterpolator` | Description |
|------------------------|-------------|
| `SEQUENTIAL_REDS` | Light to dark red *(default)* |
| `SEQUENTIAL_BLUES` | Light to dark blue |
| `DIVERGING_RED_BLUE` | Diverging red–blue for positive/negative values |
| `OBSERVABLE10` | 10-color categorical palette |

Use `OBSERVABLE10` for categorical attributes (string values). Use the sequential/diverging options for numeric attributes.

## Color Map Labels

Set the legend labels shown at the min and max of the color scale:

```typescript
map.updateRenderInfoProperty('buildings', 'colorMapLabels', ['0 m', '50 m']);
```

Labels are automatically set by `updateGeoJsonLayerThematic`, but you can override them here.

## Enable / Disable Color Map

Toggle thematic coloring on or off without removing the data:

```typescript
map.updateRenderInfoProperty('buildings', 'isColorMap', true);  // show thematic colors
map.updateRenderInfoProperty('buildings', 'isColorMap', false); // back to default color
```
