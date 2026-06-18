---
title: Chart Types
aside: true
outline: deep
---

<script setup>
const scatterCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'scatterplot',
  collection: geojson,
  attributes: { axis: ['shape_leng', 'shape_area'] },
  labels: {
    axis: ['Perimeter', 'Area'],
    title: 'Neighborhood area vs perimeter',
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 64, right: 30, top: 50, bottom: 56 },
})
`

const parallelCode = `
import { AutkPlot } from '@urban-toolkit/autk-plot'

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

const chart = new AutkPlot(plot, {
  type: 'parallel-coordinates',
  collection: geojson,
  attributes: { axis: ['shape_area', 'shape_leng'] },
  labels: {
    axis: ['Area', 'Perimeter'],
    title: 'Neighborhood metrics',
  },
  width: plot.clientWidth || 900,
  height: 420,
  margins: { left: 60, right: 40, top: 50, bottom: 40 },
})
`
</script>

# Chart Types

`AutkPlot` supports six chart types through a single `type` discriminator. This page shows the two types that work directly on the input GeoJSON without a transform. The remaining types are most useful with a pre-render transform and are covered in [Transformations](./transformations).

## Scatter plot

A scatter plot maps two numeric properties to the X and Y axes. It is ideal for exploring correlations and supports rectangular brush selection.

- Both `attributes.axis[0]` and `attributes.axis[1]` must be numeric.
- Emits `PlotEvent.BRUSH` when the user drags a selection rectangle.

<ClientOnly>
  <CodePlayground :code="scatterCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Parallel coordinates

Parallel coordinates show multiple numeric attributes at once. Each feature is drawn as a polyline that crosses every vertical axis at its value.

- `attributes.axis` is an array of numeric property names.
- Each axis can be brushed independently on the Y axis.
- Emits `PlotEvent.BRUSH_Y`.

<ClientOnly>
  <CodePlayground :code="parallelCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Charts that use transforms

The following chart types are usually paired with a transform. Live examples for each one are in the [Transformations](./transformations) page.

| Chart | Typical transform | Use case |
|---|---|---|
| `barchart` | `sort`, `binning-1d` | Compare magnitudes or show a histogram. |
| `linechart` | `reduce-series`, `binning-events` | Show aggregated time series. |
| `table` | `sort` | Inspect and sort raw values. |
| `heatmatrix` | `binning-2d` | Show 2D density. |

## Next steps

- [Transformations](./transformations) — bar charts, line charts, tables, and heat matrices with transforms.
- [Interactivity](./interactivity) — click, brush, and programmatic selection.
