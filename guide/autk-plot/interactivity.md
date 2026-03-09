# Interactivity

`autk-plot` emits events when the user interacts with a chart. Listen to them via `chart.plotEvents.on(event, handler)`.

## Events

| `PlotEvent` | Trigger | Available on |
|-------------|---------|-------------|
| `CLICK` | User clicks a mark | Bar chart |
| `BRUSH` | User drags a 2D brush | Scatter plot |
| `BRUSH_X` | User drags a brush on the X axis | Parallel coordinates |
| `BRUSH_Y` | User drags a brush on the Y axis | Parallel coordinates |

## Click

```typescript
import { PlotEvent } from 'autk-plot';

chart.plotEvents.on(PlotEvent.CLICK, (selectedIds) => {
  console.log('Clicked feature indices:', selectedIds);
});
```

`selectedIds` is an array of row indices (by position in `data.features`).

## Brush

```typescript
chart.plotEvents.on(PlotEvent.BRUSH, (selectedIds) => {
  console.log('Brushed features:', selectedIds);
});
```

A 2D brush lets users drag a rectangle over the scatter plot to select a subset of points.

## Axis Brushes (Parallel Coordinates)

```typescript
chart.plotEvents.on(PlotEvent.BRUSH_Y, (selectedIds) => {
  // User brushed on one of the Y axes
  console.log('Filtered features:', selectedIds);
});
```

Each axis in a parallel coordinates chart can have an independent brush. The intersection of all axis brushes determines `selectedIds`.
