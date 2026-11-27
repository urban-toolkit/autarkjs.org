---
aside: true
outline: deep
package: autk-plot
title: Chart types
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

`AutkPlot` supports more than twenty chart types through a single `type` discriminator. This page introduces scatterplots and parallel coordinates, which work directly on the input GeoJSON. Bar and bubble charts can also use raw rows; many other types are most useful with a pre-render transform and are covered in [Transformations](./transformations).

| Family | Types |
| --- | --- |
| Relationships | `scatterplot`, `bubble`, `hexbin`, `parallel-coordinates`, `chord` |
| Comparisons | `barchart`, `stackedbar`, `linechart`, `areachart`, `pareto` |
| Distributions | `histogram` via `binning-1d`, `boxplot`, `violin`, `density`, `ecdf` |
| Time | `calendar`, `linechart` with `binning-events` |
| Composition | `pie`, `donut`, `treemap`, `sunburst`, `waffle`, `sankey` |
| Inspection | `table`, `heatmatrix` |
| Custom | `registered` |

Charts without `events` are static: they render, show tooltips, and display selections coming from other views, but they do not select, sort, or recolor on their own. Add the events a chart should emit to make it interactive.

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

## Manual scale domains

Plots infer domains by default. Override only the channels that need a fixed display window or a shared comparison scale:

```ts
scales: {
  x: { domain: ['Low', 'Medium', 'High'] },
  y: { domain: [0, 1] },
}
```

Numeric domains require two finite, increasing bounds. Marks are clipped to the drawing area, not filtered before aggregation; statistics and provenance still use the underlying rows. Categorical domains are ordered lists of unique string keys: missing categories reserve empty slots, while omitted categories are not drawn. Use raw category/bucket keys, not formatted labels. Domains do not change scale types or pixel ranges.

| Chart | Supported domains |
| --- | --- |
| Bar, stacked bar, box, violin | Categorical `x`, numeric `y` |
| Scatter, bubble | Numeric `x` and `y`; bubble also supports numeric `size` |
| Line, area | Categorical `x` (equally spaced buckets), numeric `y` |
| Heat matrix | Categorical `x` and `y` |
| Density, hexbin | Numeric `x` and `y`, without recomputing the density or bins |
| Parallel coordinates | `scales.dimensions[field].domain`, numeric or categorical to match the field |

For bubbles, `scales.size.domain` must be nonnegative; out-of-domain values use the nearest endpoint radius. Colors use `style.colorMap.domainSpec`, not `scales`. See [Series and annotations](./series-and-annotations) for a runnable example with fixed domains, grouped bars, and reference marks.

## Next steps

- [Transformations](./transformations) — bar charts, line charts, tables, and heat matrices with transforms.
- [Series and annotations](./series-and-annotations) — compare groups and add statistical references.
- [Interactivity](./interactivity) — click, brush, hover, and programmatic selection.
- [Extending](./extending) — write a chart in plain D3 and register it.
