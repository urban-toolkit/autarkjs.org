---
title: Transformations
aside: true
outline: deep
---

<script setup>
const barCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

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
})
`

const lineCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot'

setStatus('Loading daily noise data...')
const collection = await fetch('/data/noise_daily.json').then((res) => res.json())
clearStatus()

const chart = new AutkPlot(plot, {
  type: 'linechart',
  collection,
  attributes: { axis: ['series', '@transform'] },
  labels: {
    axis: ['Date', 'Complaints'],
    title: 'Daily noise complaints in Manhattan',
  },
  transform: {
    preset: 'reduce-series',
    options: { timestamp: 'timestamp', value: 'value', reducer: 'avg' },
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 56, right: 30, top: 50, bottom: 84 },
})
`

const tableCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'table',
  collection: geojson,
  attributes: { axis: ['cdta2020', 'shape_area', 'shape_leng'] },
  labels: {
    axis: ['District', 'Area', 'Perimeter'],
    title: 'Neighborhoods sorted by area',
  },
  transform: {
    preset: 'sort',
    options: { column: 'shape_area', direction: 'desc' },
  },
  width: plot.clientWidth || 900,
  height: 420,
})
`

const heatCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'heatmatrix',
  collection: geojson,
  attributes: { axis: ['shape_leng', 'shape_area'], color: '@transform' },
  labels: {
    axis: ['Perimeter', 'Area'],
    title: '2D density of neighborhood metrics',
  },
  transform: {
    preset: 'binning-2d',
    options: { binsX: 16, binsY: 16, reducer: 'count' },
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 64, right: 30, top: 50, bottom: 64 },
})
`
</script>

# Transformations

`AutkPlot` can pre-process a `FeatureCollection` before rendering through the `transform` config. Transforms let you bin, sort, aggregate arrays, and reduce time series without leaving the charting API.

This page shows the chart types that are most useful with a transform: bar charts, line charts, tables, and heat matrices. Scatter plots and parallel coordinates, which work directly on the input GeoJSON, are covered in the [Overview](./).

## The `@transform` placeholder

Most presets require you to mark where the computed result should appear:

- For `binning-1d`, put `'@transform'` in `attributes.axis[1]`.
- For `binning-2d`, put `'@transform'` in `attributes.color`.
- For `binning-events` and `reduce-series`, put `'@transform'` in `attributes.axis[1]`.

`sort` is the exception: it reorders the original rows and does not use `'@transform'`.

## Transform presets

| Preset | Purpose | Output channel | Typical chart |
|---|---|---|---|
| `sort` | Reorder rows by a column | none | Bar chart, table |
| `binning-1d` | Group a numeric attribute into bins | `axis[1]` | Bar chart |
| `binning-2d` | Group two numeric attributes into a grid | `color` | Heat matrix |
| `binning-events` | Bucket event arrays by time | `axis[1]` | Line chart, bar chart |
| `reduce-series` | Reduce series arrays by timestamp | `axis[1]` | Line chart |

## Bar chart

A bar chart expects a categorical first axis and a numeric second axis. Pair it with `binning-1d` to turn a numeric attribute into a histogram: each bar becomes an area range, and the height shows how many features fall inside it.

<ClientOnly>
  <CodePlayground :code="barCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

::: tip Sorted bars
Use the `sort` transform with `attributes: { axis: ['cdta2020', 'shape_area'] }` when you want to rank categorical bars by value instead of binning a numeric attribute.
:::

## Line chart

Line charts connect sequential numeric values. The example below loads a pre-aggregated file where each feature holds a `series` array of daily noise-complaint counts, then uses `reduce-series` to render the line.

<ClientOnly>
  <CodePlayground :code="lineCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

::: tip From raw events to a series
If you start from raw event rows, use `binning-events` to bucket them into a daily series. If you already aggregated the data, store it as a `series` array and use `reduce-series` as shown here.
:::

## Table

The table chart displays raw feature properties. Adding a `sort` transform orders the rows by any column, which is often more useful than the original GeoJSON order.

<ClientOnly>
  <CodePlayground :code="tableCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Heat matrix

A heat matrix requires `binning-2d`. Two numeric attributes define the grid, and the reducer determines the color of each cell.

<ClientOnly>
  <CodePlayground :code="heatCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Reducers and resolutions

Supported reducers are `count`, `sum`, `avg`, `min`, and `max`. For `binning-events`, `resolution` can be `year`, `month`, `week`, `day`, `hour`, `minute`, or `second`.

::: tip Transform results are ephemeral
The original `collection` is not modified. The transform produces an internal derived table used only for rendering. Call `updateCollection` if you need to change the source data.
:::

## Next steps

- [Overview](./) — scatter plots and parallel coordinates, plus a linked map + plot example.
- [Interactivity](./interactivity) — add click and brush events.
- [`PlotTransformConfig`](../api/autk-plot/type-aliases/PlotTransformConfig.md) — full API reference.
