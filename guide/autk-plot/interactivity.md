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
Because [`autk-map`](../autk-map/) also refers to features by their position in the loaded collection, a selection produced by a plot can be passed directly to `map.setSelection(..., selection)` and vice-versa. An aggregated mark carries the **shares** of the features it covers, so a bar that represents 40% of a feature sends that fraction on, not an all-or-nothing id.
:::

## Supported events

| Event | Trigger | Available on |
|---|---|---|
| `PlotEvent.CLICK` | Click a mark | Bar chart, table, box plot, heat matrix, timeline |
| `PlotEvent.HOVER` | Point at a mark | Every plot |
| `PlotEvent.BRUSH` | Drag a 2D brush | Scatter plot, heat matrix |
| `PlotEvent.BRUSH_X` | Brush horizontally | Bar chart (binned), parallel coordinates |
| `PlotEvent.BRUSH_Y` | Brush vertically | Parallel coordinates |

Every event payload contains a `selection` array with the source feature indices (positions in the input `collection.features`). Brush events also carry an `extent`, and aggregated marks include `shares` with the fraction of each feature they cover.

::: warning Enable the event you need
Events are only emitted if they are requested through the `events` array in the plot config. Some plots also emit them by default depending on type, but it is safest to declare them explicitly.
:::

## Hover

Enable `PlotEvent.HOVER` to color hovered marks temporarily with the map's hover color. Hover never changes the selection, and leaving the mark restores its normal or selected color. When hover clears, the payload is `{ selection: [], datum: null }`.

Hover also comes from other views: `plot.setHover(selection)` highlights source features without selecting them, and `plot.setHover([])` clears it. In an aggregated plot, only the hovered feature is drawn as a part of its mark, which is how a map hover highlights plot marks.

```ts
map.updateRenderInfo('neighborhoods', { isHover: true })
map.events.on(MapEvent.HOVER, ({ selection, source }) => {
  if (source === 'pointer') chart.setHover(selection)
})
```

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

## Brush extents

Brush events include an `extent` alongside `selection`. An active brush always reports `extent.pixels` in the brush group's local SVG coordinates; a cleared brush reports `extent: null`, even if another brush still contributes to the selection.

Where axis scales exist, `extent.data` gives numeric `range` values (low to high) or categorical `keys` in axis order. Bar brushes report overlapping category bands; line and area brushes report raw bucket keys inside the interval, independent of the displayed tick labels, and a gap can return `keys: []`. Parallel coordinates also report the brushed field in `extent.dimension`.

```ts
chart.events.on(PlotEvent.BRUSH, ({ selection, extent }) => {
  console.log(extent?.data?.range, selection.length)
})
```

## Axis brushes

Parallel coordinates support per-axis brushes. `BRUSH_Y` is emitted when the user brushes along any Y axis, and the current `selection` is the intersection of all active brushes.

<ClientOnly>
  <CodePlayground :code="axisBrushCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Programmatic selection

You can highlight features from code with `setSelection`. This is the main mechanism for linked views: a map click becomes a chart highlight, and a chart brush becomes a map selection.

```typescript
plot.setSelection([0, 3, 7]);
// Optional second argument: the share of each feature covered in the emitting view.
plot.setSelection([0, 3, 7], [0.5, 1, 0.25]);
```

To clear the selection, pass an empty array:

```typescript
plot.setSelection([]);
```

::: tip Inspect the current selection
`plot.selection` returns the active selection as an array of source feature indices, and `plot.provenance` exposes the relation graph of the current draw, from source features to marks. In an aggregated view, an aggregated mark highlights only the part produced by the selected features, and a mark selected there sends each covered feature's share.
:::

A mark can show a selection from another view in three modes: `boolean` (the whole mark), `subset` (the default: the mark redrawn with the value of the selected subset through its own encoding), or a custom preset (`glyph`, `trace`, `members`, or a function). For a plain D3 chart, the channel of the subset render is inferred from the geometry of its marks; when no channel is proven, a preset stands in. `provenance: { highlight: 'boolean' }` gives any plot the whole-mark highlight.

## Updating data

Call `updateCollection` to replace the data and redraw in place:

```typescript
plot.updateCollection(newGeojson);
```

This is useful when the chart is filtered by another view or when new data arrives from [`autk-db`](../autk-db/retrieving-data).

## Next steps

- [Overview](../autk-plot/) — a complete linked map + plot example.
- [Extending](./extending) — give a registered chart the same linking and provenance.
