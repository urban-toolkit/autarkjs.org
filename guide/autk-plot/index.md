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
map.updateRenderInfo('neighborhoods', { isClick: true, isHover: true })
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
  events: [PlotEvent.CLICK, PlotEvent.BRUSH_X, PlotEvent.HOVER],
})

clearStatus()

// Map → plot: keep the map selection mirrored in the chart.
map.events.on(MapEvent.CLICK, ({ selection }) => {
  chart.setSelection(selection)
})

// Map → plot: hover is transient and never changes the selection.
map.events.on(MapEvent.HOVER, ({ selection, source }) => {
  if (source === 'pointer') chart.setHover(selection)
})

// Plot → map: click and brush share the same component ids.
chart.events.on(PlotEvent.CLICK, ({ selection }) => {
  map.setSelection('neighborhoods', selection)
})

chart.events.on(PlotEvent.BRUSH_X, ({ selection }) => {
  map.setSelection('neighborhoods', selection)
})

// Plot → map: hovering a bar previews its neighborhoods.
chart.events.on(PlotEvent.HOVER, ({ selection }) => {
  map.setHover('neighborhoods', selection)
})
`
const numericColorCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot';
import { ColorMapDomainStrategy, ColorMapInterpolator } from '@urban-toolkit/autk-core';

const neighborhoods = await fetch('/data/mnt_neighs_proj.geojson').then(res => res.json());
const numericPlot = new AutkPlot(plot, {
  type: 'scatterplot',
  collection: neighborhoods,
  attributes: { axis: ['shape_area', 'shape_leng'], color: 'shape_area' },
  style: {
    colorMap: {
      interpolator: ColorMapInterpolator.SEQ_BLUES,
      domainSpec: { type: ColorMapDomainStrategy.USER, params: [0, 40000000] },
    },
  },
  ticks: { x: { format: '~s' }, y: { format: ',.0f' } },
  width: plot.clientWidth || 800, height: 400,
});
numericPlot.draw();
// Apply the initial unselected color state.
numericPlot.setSelection([]);
`

const categoricalColorCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot';
import { ColorMapDomainStrategy, ColorMapInterpolator } from '@urban-toolkit/autk-core';

const neighborhoods = await fetch('/data/mnt_neighs_proj.geojson').then(res => res.json());
// Derived categories make the sample self-contained; use your own classifications in production.
const categories = ['residential', 'commercial', 'mixed'];
const categorizedNeighborhoods = {
  ...neighborhoods,
  features: neighborhoods.features.map((feature, index) => ({
    ...feature, properties: { ...feature.properties, category: categories[index % categories.length] },
  })),
};
const categoricalPlot = new AutkPlot(plot, {
  type: 'scatterplot',
  collection: categorizedNeighborhoods,
  attributes: { axis: ['shape_area', 'shape_leng'], color: 'category' },
  style: {
    colorMap: {
      interpolator: ColorMapInterpolator.CAT_OBSERVABLE10,
      domainSpec: { type: ColorMapDomainStrategy.USER, params: categories },
    },
  },
  width: plot.clientWidth || 800, height: 400,
});
categoricalPlot.draw();
// Apply the initial unselected color state.
categoricalPlot.setSelection([]);
`
</script>

# autk-plot

[![npm version](https://img.shields.io/npm/v/@urban-toolkit/autk-plot?color=8b5cf6&logo=npm&labelColor=111827)](https://www.npmjs.com/package/@urban-toolkit/autk-plot)

`autk-plot` is a D3-based chart library that takes a GeoJSON `FeatureCollection` as input and turns `feature.properties` into interactive charts. Because it shares the same data model as [`autk-db`](../autk-db/) and [`autk-map`](../autk-map/), it is straightforward to build coordinated visualizations where charts and maps selection stay in sync.

The library is also extensible. Built-in plots and transforms are registered with the same public functions available to you, so a custom chart reuses the GeoJSON input, event model, selection mechanism, and provenance tracking. See [Extending autk-plot](./extending).

## What it covers

- **Overview**: a complete map + plot linked example using a bar chart with a binning transform.
- **Chart types**: the full catalog, from scatter plots and parallel coordinates to box plots, sankey, and maps of relationships.
- **Transformations**: bar charts, line charts, tables, and heat matrices combined with sorting, binning, and aggregation.
- **Interactivity**: click, brush, hover, and programmatic selection, with brush extents and proportional shares.
- **Linked views**: react to map clicking and hovering, and drive map selection and hover from the chart.
- **Extending**: register your own D3 chart or transform with the same API as the built-ins.

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
| `style` | `object` | Per-plot appearance: `radius`, `barPadding`, `columnFormats`, and `colorMap` for both numeric and categorical values. |
| `ticks` | `object` | Axis tick counts and D3 format strings: `ticks.x`, `ticks.y`, and `ticks.dimensions` for parallel coordinates. |
| `filter` | `object` | Keeps only rows meeting one or more conditions (`==`, `!=`, `>`, `>=`, `<`, `<=`, `in`, `not-in`). |
| `topK` | `object` | Keeps the `k` largest rows, optionally gathering the rest in an “Others” row. |
| `provenance` | `object` | `{ path: true }` shows how far a selection reaches at each stage; `{ highlight }` picks `boolean`, `subset`, or a custom preset. |

::: warning Categorical vs numeric axes
Scatter plots and parallel coordinates require numeric axes. Bar charts expect a categorical first axis and a numeric second axis.
:::

## Colors and axis formatting

The color scale lives in [`style.colorMap`](/api/autk-plot/type-aliases/PlotConfig), which accepts the same object as `map.updateColorMap(layerId, { colorMap })`. Named interpolators handle numeric ramps and categorical schemes alike; `domainSpec` decides where the values fall. The chart reads the field from `attributes.color`, so there is no separate numeric or categorical palette option.

<ClientOnly>
  <CodePlayground :code="numericColorCode" out="dom" :auto-run="false" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

`ticks: { x: { format: '~s' }, y: { format: ',.0f' } }` formats axis labels: `~s` gives compact SI values and `,.0f` integers with thousands separators. These are [D3 format strings](https://d3js.org/d3-format), not JavaScript format expressions. Add `count` to request about a number of ticks; D3 may adjust it to keep tick values round. Table columns use `style.columnFormats`, and parallel coordinates use `ticks.dimensions`.

`MIN_MAX` derives a numeric range from the data; `PERCENTILE` can limit it to percentile bounds such as `params: [5, 95]`. `USER` accepts explicit numeric bounds or category strings. Share the same numeric domain and interpolator across charts (or a thematic map) to keep equal values the same color.

For a string property such as `category`, configure a categorical palette and an explicit category order:

<ClientOnly>
  <CodePlayground :code="categoricalColorCode" out="dom" :auto-run="false" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

The named properties must exist in your input collection. Use the same category domain/order across related views instead of inferring a different order from each subset. See [`PlotConfig`](/api/autk-plot/type-aliases/PlotConfig) for all options.

## Filtering and top-K

`filter` keeps only the source features that match every condition, before the transform runs. Each condition names a dot-path `attribute`, an operator (`==`, `!=`, `>`, `>=`, `<`, `<=`, `in`, or `not-in`), and a `value`. Ordering operators compare numbers; equality and membership compare strings. Excluded features have no image in the provenance graph, so a selection still points back to the right features.

`topK` keeps only the `k` rendered rows with the highest value of `attributes.axis[1]`, after the transform runs. It is supported by the bar, pie, and donut charts, and by user plots whose rows have a label and a value. `others: true` gathers the rest into an "Others" row instead of dropping them.

```ts
new AutkPlot(div, {
  type: 'barchart',
  collection,
  attributes: { axis: ['name', 'value'] },
  filter: { attribute: 'value', op: '>', value: 0 },
  topK: { k: 10, others: true },
})
```

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
