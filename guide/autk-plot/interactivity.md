---
title: Interactivity
aside: true
outline: deep
---

<script setup>
const barClickCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'barchart',
  collection: geojson,
  attributes: { axis: ['shape_area', '@transform'] },
  labels: {
    axis: ['Area range', 'Neighborhood count'],
    title: 'Click an area range',
  },
  transform: {
    preset: 'binning-1d',
    options: { bins: 12, reducer: 'count' },
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 56, right: 20, top: 50, bottom: 64 },
  events: [PlotEvent.CLICK],
})

chart.events.on(PlotEvent.CLICK, ({ selection }) => {
  console.log('Clicked indices:', selection)
})
`

const tableClickCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'table',
  collection: geojson,
  attributes: { axis: ['cdta2020', 'shape_area', 'shape_leng'] },
  labels: {
    axis: ['District', 'Area', 'Perimeter'],
    title: 'Click a row',
  },
  width: plot.clientWidth || 900,
  height: 420,
  events: [PlotEvent.CLICK],
})

chart.events.on(PlotEvent.CLICK, ({ selection }) => {
  console.log('Clicked row indices:', selection)
})
`

const scatterBrushCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'scatterplot',
  collection: geojson,
  attributes: { axis: ['shape_leng', 'shape_area'] },
  labels: {
    axis: ['Perimeter', 'Area'],
    title: 'Brush to select neighborhoods',
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 64, right: 30, top: 50, bottom: 56 },
  events: [PlotEvent.BRUSH],
})

chart.events.on(PlotEvent.BRUSH, ({ selection }) => {
  console.log('Brushed indices:', selection)
})
`

const heatBrushCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'heatmatrix',
  collection: geojson,
  attributes: { axis: ['shape_leng', 'shape_area'], color: '@transform' },
  transform: { preset: 'binning-2d' },
  labels: {
    axis: ['Perimeter', 'Area'],
    title: 'Brush cells',
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 64, right: 30, top: 50, bottom: 64 },
  events: [PlotEvent.BRUSH],
})

chart.events.on(PlotEvent.BRUSH, ({ selection }) => {
  console.log('Brushed cell indices:', selection)
})
`

const axisBrushCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'parallel-coordinates',
  collection: geojson,
  attributes: { axis: ['shape_area', 'shape_leng'] },
  labels: {
    axis: ['Area', 'Perimeter'],
    title: 'Brush any axis',
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 60, right: 40, top: 50, bottom: 40 },
  events: [PlotEvent.BRUSH_Y],
})

chart.events.on(PlotEvent.BRUSH_Y, ({ selection }) => {
  console.log('Filtered indices:', selection)
})
`
</script>

# Interactivity

`autk-plot` emits events when users interact with marks. You can listen through `plot.events.on(event, handler)` and respond by updating another UI elements.

## Data model

`AutkPlot` expects a GeoJSON `FeatureCollection` as input. Each feature in `collection.features` becomes one data row, and `feature.properties` keys are mapped to visual channels through `attributes`.

Selections — whether from clicks, brushes, or `setSelection` — are always expressed as arrays of **source feature indices**, i.e., the positions of the selected features inside the original `collection.features` array.

```typescript
chart.events.on(PlotEvent.CLICK, ({ selection }) => {
  // selection is [3, 12, 41], not feature ids
});
```

::: tip Same indices everywhere
Because [`autk-map`](../autk-map/) also refers to features by their position in the loaded collection, a selection produced by a plot can be passed directly to `map.setHighlightedIds(..., selection)` and vice-versa.
:::

## Supported events

| Event | Trigger | Available on |
|---|---|---|
| `PlotEvent.CLICK` | Click a mark | Bar chart, table |
| `PlotEvent.BRUSH` | Drag a 2D brush | Scatter plot, heat matrix |
| `PlotEvent.BRUSH_X` | Brush horizontally | Bar chart (binned), parallel coordinates |
| `PlotEvent.BRUSH_Y` | Brush vertically | Parallel coordinates |

Every event payload contains a `selection` array with the source feature indices (positions in the input `collection.features`).

::: warning Enable the event you need
Events are only emitted if they are requested through the `events` array in the plot config. Some plots also emit them by default depending on type, but it is safest to declare them explicitly.
:::

## Click

Click selection is useful for bar charts and tables where the user picks a single category or row.

### Bar chart click

<ClientOnly>
  <CodePlayground :code="barClickCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

### Table click

<ClientOnly>
  <CodePlayground :code="tableClickCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Brush

Scatter plots and heat matrices support rectangular 2D brushes. The event fires while the user drags and again on release.

### Scatter plot brush

<ClientOnly>
  <CodePlayground :code="scatterBrushCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

### Heat matrix brush

<ClientOnly>
  <CodePlayground :code="heatBrushCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Axis brushes

Parallel coordinates support per-axis brushes. `BRUSH_Y` is emitted when the user brushes along any Y axis, and the current `selection` is the intersection of all active brushes.

<ClientOnly>
  <CodePlayground :code="axisBrushCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Programmatic selection

You can highlight features from code with `setSelection`. This is the main mechanism for linked views: a map picking event becomes a chart highlight, and a chart brush becomes a map highlight.

```typescript
plot.setSelection([0, 3, 7]);
```

To clear the selection, pass an empty array:

```typescript
plot.setSelection([]);
```

::: tip Inspect the current selection
`plot.selection` returns the active selection as an array of source feature indices.
:::

## Updating data

Call `updateCollection` to replace the data and redraw in place:

```typescript
plot.updateCollection(newGeojson);
```

This is useful when the chart is filtered by another view or when new data arrives from [`autk-db`](../autk-db/retrieving-data).

## Next steps

- [Overview](../autk-plot/) — a complete linked map + plot example.
