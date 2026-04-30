# Styling

Layer appearance is controlled through `updateRenderInfo`. All properties are applied immediately and take effect on the next render frame.

## Opacity

```typescript
map.updateRenderInfo('buildings', { opacity: 0.7 });
```

Value is a `number` between `0.0` (transparent) and `1.0` (opaque).

## Color Map Interpolator

Controls the color scale used when [thematic mapping](./thematic-mapping) is active:

```typescript
import { ColorMapInterpolator } from 'autk-map';

map.updateColorMap('buildings', { colorMap: { interpolator: ColorMapInterpolator.SEQUENTIAL_BLUES } });
```

Available options:

| `ColorMapInterpolator` | Description |
|------------------------|-------------|
| `SEQUENTIAL_REDS` | Light to dark red *(default)* |
| `SEQUENTIAL_BLUES` | Light to dark blue |
| `DIVERGING_RED_BLUE` | Diverging red–blue for positive/negative values |
| `OBSERVABLE10` | 10-color categorical palette |

Use `OBSERVABLE10` for categorical attributes (string values). Use the sequential/diverging options for numeric attributes.

## Enable / Disable Color Map

Toggle thematic coloring on or off without removing the data:

```typescript
map.updateRenderInfo('buildings', { isColorMap: true });  // show thematic colors
map.updateRenderInfo('buildings', { isColorMap: false }); // back to default color
```
