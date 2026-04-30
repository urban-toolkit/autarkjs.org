# Interactivity

`autk-plot` emits events when the user interacts with a chart. Listen to them via `chart.events.on(event, handler)`.

## Events

| `ChartEvent` | Trigger | Available on |
|-------------|---------|-------------|
| `CLICK` | User clicks a mark | Bar chart, Table |
| `BRUSH` | User drags a 2D brush | Scatter plot |
| `BRUSH_X` | User drags a brush on the X axis | Bar chart (binned mode), Parallel coordinates |
| `BRUSH_Y` | User drags a brush on the Y axis | Parallel coordinates |

## Click

```typescript
import { ChartEvent } from 'autk-plot';

chart.events.on(ChartEvent.CLICK, ({ selection }) => {
  console.log('Clicked feature indices:', selection);
});
```

`selection` is an array of row indices (by position in `collection.features`).

## Brush

```typescript
chart.events.on(ChartEvent.BRUSH, ({ selection }) => {
  console.log('Brushed features:', selection);
});
```

A 2D brush lets users drag a rectangle over the scatter plot to select a subset of points.

## Axis Brushes (Parallel Coordinates)

```typescript
chart.events.on(ChartEvent.BRUSH_Y, ({ selection }) => {
  // User brushed on one of the Y axes
  console.log('Filtered features:', selection);
});
```

Each axis in a parallel coordinates chart can have an independent brush. The intersection of all axis brushes determines `selection`.

## Programmatic Selection

```typescript
// Highlight features by their index in the source collection
chart.setSelection([0, 3, 7]);
```
