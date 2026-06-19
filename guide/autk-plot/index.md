---
title: autk-plot
aside: true
outline: deep
---

<script setup>
const linkedCode = `
import { AutkMap, MapEvent } from '@urban-toolkit/autk-map'
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

setStatus('Loading neighborhood dataset...')
const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()
map.loadCollection('neighborhoods', { collection: geojson })
map.updateRenderInfo('neighborhoods', { isPick: true })
map.draw()

setStatus('Initializing chart...')
const chart = new AutkPlot(plot, {
  type: 'barchart',
  collection: geojson,
  attributes: { axis: ['shape_area', '@transform'] },
  labels: {
    axis: ['Area range', 'Neighborhood count'],
    title: 'Neighborhood area histogram',
  },
  transform: {
    preset: 'binning-1d',
    options: { bins: 12, reducer: 'count' },
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 56, right: 20, top: 50, bottom: 64 },
  events: [PlotEvent.CLICK, PlotEvent.BRUSH_X],
})

clearStatus()

map.events.on(MapEvent.PICKING, ({ selection }) => {
  chart.setSelection(selection)
})

chart.events.on(PlotEvent.CLICK, ({ selection }) => {
  map.setHighlightedIds('neighborhoods', selection)
})

chart.events.on(PlotEvent.BRUSH_X, ({ selection }) => {
  map.setHighlightedIds('neighborhoods', selection)
})
`
</script>

# autk-plot

[![npm version](https://img.shields.io/badge/npm-v2.4.1-8b5cf6?logo=npm&labelColor=111827)](https://www.npmjs.com/package/@urban-toolkit/autk-plot)

`autk-plot` is a D3-based chart library that takes a GeoJSON `FeatureCollection` as input and turns `feature.properties` into interactive charts. Because it shares the same data model as [`autk-db`](../autk-db/) and [`autk-map`](../autk-map/), it is straightforward to build coordinated visualizations where charts and maps selection stay in sync.

The library is also extensible. It exposes base classes such as [`PlotBaseData`](../api/autk-plot/classes/PlotBaseData.md), [`PlotBaseInteractive`](../api/autk-plot/classes/PlotBaseInteractive.md), and [`PlotStyle`](../api/autk-plot/classes/PlotStyle.md), so custom plot types can reuse the same GeoJSON input, event model, and selection mechanism.

## What it covers

- **Overview**: a complete map + plot linked example using a bar chart with a binning transform.
- **Chart types**: scatter plots and parallel coordinates work directly on raw GeoJSON properties.
- **Transformations**: bar charts, line charts, tables, and heat matrices combined with sorting, binning, and aggregation.
- **Interactivity**: click, brush, and programmatic selection.
- **Linked views**: react to map picking and drive map highlights from the chart.

## Installation

```bash
npm install @urban-toolkit/autk-plot
```

## Basic usage

Every chart is created through the unified [`AutkPlot`](../api/autk-plot/classes/AutkPlot.md) constructor. Pass the host element as the first argument and a configuration object as the second:

```typescript
import { AutkPlot } from '@urban-toolkit/autk-plot';

const plot = new AutkPlot(div, {
  type: 'scatterplot',
  collection: geojson,
  attributes: { axis: ['shape_leng', 'shape_area'] },
  labels: {
    axis: ['Perimeter', 'Area'],
    title: 'Neighborhood area vs perimeter',
  },
  width: 800,
  height: 420,
});
```

The `collection` is a standard GeoJSON `FeatureCollection`. Each feature becomes one data row, and property names are mapped to visual channels through `attributes`.

::: tip Property names are just strings
`attributes.axis` accepts the property keys found in `feature.properties`. There is no data-frame abstraction — the chart reads directly from GeoJSON.
:::

## Linked map + plot example

The example below loads the same neighborhood layer into a map and a histogram. The bars are created with a `binning-1d` transform; clicking or brushing a bin highlights every neighborhood that falls inside that area range on the map.

<ClientOnly>
  <CodePlayground :code="linkedCode" out="dom" :auto-run="true" :canvas-height="500" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Common configuration

| Option | Type | Description |
|---|---|---|
| `type` | `string` | Chart type: `scatterplot`, `parallel-coordinates`, `barchart`, `linechart`, `table`, `heatmatrix`. |
| `collection` | `FeatureCollection` | Source GeoJSON. |
| `attributes.axis` | `string[]` | Property names mapped to axes. |
| `attributes.color` | `string` | Optional property mapped to the color channel. |
| `labels` | `object` | Human-readable axis labels, title, and color legend label. |
| `margins` | `object` | Pixel margins around the drawing area. |
| `width` / `height` | `number` | Canvas size in pixels. |
| `events` | `PlotEvent[]` | Events the plot should emit. |
| `transform` | `object` | Optional pre-render transform such as sorting or binning. |

::: warning Categorical vs numeric axes
Scatter plots and parallel coordinates require numeric axes. Bar charts expect a categorical first axis and a numeric second axis.
:::

## Margins

Default margins work for most cases, but long labels or rotated tick text often need more room. Override them in the constructor:

```typescript
new AutkPlot(div, {
  ...
  margins: { left: 80, right: 20, top: 50, bottom: 80 },
});
```

## What’s next

- [Chart Types](./chart-types) — scatter plots and parallel coordinates.
- [Transformations](./transformations) — bar charts, line charts, tables, and heat matrices with transforms.
- [Interactivity](./interactivity) — click, brush, and programmatic selection.
