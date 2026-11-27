---
aside: true
outline: deep
package: autk-plot
title: Series and annotations
---

<script setup>
const barsCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'
import { ColorMapDomainStrategy } from '@urban-toolkit/autk-core'

const observations = [
  ['North', 'Before', 80], ['North', 'After', 125],
  ['South', 'Before', 100], ['South', 'After', 150],
]
const collection = {
  type: 'FeatureCollection',
  features: observations.map(([district, period, trips]) => ({
    type: 'Feature', geometry: null, properties: { district, period, trips },
  })),
}
const chart = new AutkPlot(plot, {
  type: 'barchart', collection,
  attributes: { axis: ['district', 'trips'], series: 'period' },
  labels: { axis: ['District', 'Trips'], title: 'Before and after' },
  width: 'auto', height: 420,
  scales: { x: { domain: ['North', 'South', 'East'] }, y: { domain: [0, 200] } },
  style: { colorMap: {
    type: 'categorical', colors: ['#087e78', '#875194'],
    domainSpec: { type: ColorMapDomainStrategy.USER, params: ['Before', 'After'] },
  } },
  events: [PlotEvent.CLICK],
})
chart.setAnnotations([
  { id: 'target', type: 'band', y: [110, 135], label: 'Target range' },
  { id: 'mean', type: 'line', y: 'mean', label: 'Mean trips' },
])
chart.events.on(PlotEvent.CLICK, ({ selection }) => console.log(selection))
`
const linesCode = `
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

const collection = {
  type: 'FeatureCollection',
  features: [
    { scenario: 'Baseline', monthly: [
      { timestamp: '2025-01', value: 10 },
      { timestamp: '2025-02', value: 20 },
      { timestamp: '2025-03', value: 15 },
    ] },
    { scenario: 'Proposal', monthly: [
      { timestamp: '2025-01', value: 14 },
      { timestamp: '2025-03', value: 24 },
    ] },
  ].map(properties => ({ type: 'Feature', geometry: null, properties })),
}
const chart = new AutkPlot(plot, {
  type: 'linechart', collection,
  attributes: { axis: ['monthly'], series: 'scenario' },
  transform: { preset: 'reduce-series', options: { reducer: 'avg' } },
  labels: { axis: ['Month', 'Value'], title: 'Compare scenarios, preserving gaps' },
  width: 'auto', height: 420,
  scales: { x: { domain: ['2025-01', '2025-02', '2025-03'] }, y: { domain: [0, 30] } },
  events: [PlotEvent.CLICK, PlotEvent.BRUSH_X],
})
chart.setAnnotations([
  { id: 'review', type: 'line', x: '2025-02', label: 'Review' },
  { id: 'proposal', type: 'point', series: 'Proposal', x: '2025-03', label: 'Proposal' },
])
`
</script>

# Series and annotations

Compare groups on shared scales with `attributes.series`, then add reference marks with `setAnnotations()`. Both preserve source-feature selection and provenance: a series is an encoding, not a second collection.

## Grouped bars, scatterplots, and bubbles

Set `attributes.series` to a property containing nonempty string keys. Scatter, bubble, and bar charts draw the groups with categorical colors and a legend. Filtering keeps each group's original color and each bar's series slot.

<ClientOnly>
  <CodePlayground :code="barsCode" out="both" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

Grouped bars need exactly one finite, nonnegative value per `(category, series)` pair. Missing pairs leave empty slots; duplicate pairs raise an error. Aggregate repeated observations before creating the collection. The example reserves an empty `East` category with a [manual domain](./chart-types#manual-scale-domains).

For scatterplots use `attributes: { axis: ['distance', 'fare'], series: 'dayType' }`; for bubbles also provide the size field in `attributes.axis[2]`.

::: warning Series constraints
Do not combine `attributes.series` with `attributes.color` or `topK`. In series mode, transforms are supported only by line charts using `reduce-series`. To override series colors, use a categorical `style.colorMap`; an explicit color domain must include every source series key, including filtered-out groups. Color-domain order controls colors, not bar-slot order.
:::

## Grouped line charts

Use `attributes.series` with `transform: { preset: 'reduce-series' }` to reduce each group's arrays independently and draw one path per group. All groups share the union of observed bucket keys in line-chart order. `scales.x.domain` can specify their exact order and reserve entirely absent buckets.

<ClientOnly>
  <CodePlayground :code="linesCode" out="dom" :auto-run="true" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

A missing bucket breaks the path and its linked highlight: it is neither a zero nor a selectable row. Clicks and brushes on bucket points still emit original feature indices. In this example the Proposal path has a gap in February.

## Fixed reference marks

Scatter, bubble, bar, and line charts support `chart.setAnnotations(list)`. Each annotation needs a unique, nonempty `id`; `label` and CSS `color` are optional.

| Type | Coordinates | Example |
| --- | --- | --- |
| `line` | Exactly one of `x` or `y` | `{ id: 'target', type: 'line', y: 100 }` |
| `point` | Both `x` and `y` | `{ id: 'place', type: 'point', x: 5, y: 100 }` |
| `band` | A two-value interval on one axis | `{ id: 'range', type: 'band', y: [80, 120] }` |

Use numbers on numeric axes and raw, unformatted keys on category or bucket axes. For a grouped line's point callout, supply `series` and the raw `x` bucket key, **without `y`**: it follows the transformed point and defaults to the series color. A missing or out-of-window point remains installed but hidden.

Reference marks do not extend automatic domains, select data, or contribute to provenance. Out-of-view marks are hidden or clipped. Calling `setAnnotations()` replaces the complete list without redrawing the data; `setAnnotations([])` clears it. An invalid replacement leaves the previous list installed.

## Statistical references

Use `'min'`, `'max'`, or `'mean'` instead of a numeric line or point coordinate. Scatter and bubble support both axes; bar and line support Y only. On categorical/bucket axes these strings remain literal keys. Band endpoints must be fixed coordinates.

```ts
scatter.setAnnotations([
  { id: 'average', type: 'line', y: 'mean', label: 'Mean fare' },
  { id: 'centroid', type: 'point', x: 'mean', y: 'mean' },
  { id: 'trend', type: 'line', fit: 'linear' },
])
```

Statistics pool finite observations across series **after filtering and transforms, before manual display windows**. A single-axis statistic uses all finite values on that axis; a centroid or least-squares fit uses complete X/Y pairs only. The fitted line spans the observed X extent and is hidden with fewer than two pairs or no X variation. A line chart's mean uses transformed bucket values, not the original observations inside each bucket.

## Explore linked studies

- [Manhattan’s noise rhythms](/gallery/examples/p10) — grouped timelines and a linked location view.
- [Two airports, one destination](/gallery/examples/p11) — grouped timelines, reference marks, a map, and duration distributions.
- [Same route, different ride](/gallery/examples/p12) — shared-scale scatterplots, fitted lines, centroids, and linked hourly bars.

See [Extending](./extending#series-and-reference-marks) for the registered-chart hooks and [`PlotAnnotation`](/api/autk-plot/type-aliases/PlotAnnotation) for the complete annotation type.
