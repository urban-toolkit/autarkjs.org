---
package: autk-plot
title: Extending
---

<script setup>
const registeredPlotCode = `
import * as d3 from 'd3';
import { AutkPlot, PlotEvent, registerPlot } from '@urban-toolkit/autk-plot';

const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json());

registerPlot({
  name: 'dots-demo',
  draw({ group, rows, value, width, height, axisX, axisY }) {
    const x = d3.scaleLinear(d3.extent(rows, row => Number(value(row, 0))), [0, width]);
    const y = d3.scaleLinear(d3.extent(rows, row => Number(value(row, 1))), [height, 0]);
    axisX(d3.axisBottom(x));
    axisY(d3.axisLeft(y));
    group.selectAll('circle').data(rows).join('circle')
      .attr('class', 'autkMark')
      .attr('cx', row => x(Number(value(row, 0))))
      .attr('cy', row => y(Number(value(row, 1))))
      .attr('r', 4);
  },
});

const chart = new AutkPlot(plot, {
  type: 'registered',
  plot: 'dots-demo',
  collection: geojson,
  attributes: { axis: ['shape_leng', 'shape_area'] },
  labels: { axis: ['Perimeter', 'Area'], title: 'A chart written in plain D3' },
  width: plot.clientWidth || 860,
  height: 420,
  events: [PlotEvent.BRUSH],
});

chart.events.on(PlotEvent.BRUSH, ({ selection }) => {
  console.log(selection.length + ' neighborhoods brushed');
});
`
</script>

<style scoped>
.package-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}
</style>

<div class="package-page">

# Extending autk-plot

The built-in charts and transforms are not special. All 24 plots and 12 transforms are registered through the same public functions available to your code, and drawn and run by the same engine. `registeredPlot('barchart')` and `registeredTransform('fold')` return the frozen built-in definitions, which you can read as reference implementations.

Built-in names are reserved, so pick your own.

## Registering a chart

A chart is plain D3 code. `draw` receives the rendered rows and an SVG group; bind the rows themselves to selectable marks and give them the class `autkMark`. Selection, linking, the segregated view, and the highlight then come with the engine.

<ClientOnly>
  <CodePlayground :code="registeredPlotCode" out="dom" :auto-run="false" :render-canvas="false" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

Beyond `group` and `rows`, the drawing context provides:

| Member | Purpose |
| --- | --- |
| `value(row, i)` | Reads the i-th field of `attributes.axis`, nested paths included (`'sjoin.count.noise'`). |
| `axisX(axis)` / `axisY(axis)` | Draws an axis labeled with its field; pass a field index or a custom text. |
| `format(i)` / `hasFormat(i)` | The axis's configured number format, or the default SI/decimal convention. |
| `tickCount(i)` | The requested tick count for that axis. |
| `legend(...)` | Places a legend inside the drawing context. |
| `html` | A container for HTML marks such as a table body. |
| `interactive` | Whether the configuration asks for any `events`. |

Only `name` and `draw` are required. Optional fields declare the transforms and reducers the chart reads (`transforms`, `requiresTransform`, `reducers`), the highlight (`highlight`: `'boolean'`, `'subset'`, `'glyph'`, `'trace'`, a rule per mark family, or a function that draws the parts), and `defaults` / `validate` for the configuration. `markStyle` styles anything that is not the mark's color.

## Registering a transform

A transform turns one row per feature into the rows a chart draws, with their provenance. It returns `rows` plus the relation graph that lets selections travel in both directions.

```ts
import { binnedProvenance, collectBuckets, indexedBins, registerTransform } from '@urban-toolkit/autk-plot'

registerTransform({
  name: 'by-initial',
  shape: 'category-value', // { label, value } rows
  run(rows, options, columns) {
    const buckets = collectBuckets({
      rows,
      reducer: 'count',
      bucketOf: row => String(row[columns[0]] ?? '').charAt(0) || null,
    })
    const keys = buckets.map(bucket => bucket.key)
    return {
      rows: buckets.map(bucket => ({ label: bucket.key, value: bucket.value, autkIds: bucket.autkIds })),
      provenance: binnedProvenance({
        rows, buckets, bins: indexedBins(keys, keys, 'initials'),
        binLabel: 'initials', rowKeys: keys, reducer: 'count',
      }),
    }
  },
})

new AutkPlot(container, {
  type: 'barchart',
  collection,
  attributes: { axis: ['name', '@transform'] },
  transform: { preset: 'registered', name: 'by-initial' },
})
```

The row shape decides which charts can read the output: `category-value`, `series`, `hierarchy`, `flows`, and the other eight shapes are shared by every plot that reads them. A registered transform is used as `{ preset: 'registered', name }`.

## Checking a definition

`checkPlot` and `checkTransform` verify the drawing contract before you ship a definition, and `checkPlotReport` / `checkTransformReport` return the violations instead of throwing. A registered plot is checked for six drawing invariants and a transform for six provenance invariants.

```ts
import { checkPlot, registeredPlot } from '@urban-toolkit/autk-plot'

// Returns a report; throws on an unmet invariant.
checkPlot({ name: 'dots', draw: /* … */ })
```

`treeOf(rows)` builds a hierarchy from flat rows for treemap and sunburst charts, and `PlotStyle` exposes the shared default and highlight style helpers.

## Next steps

- [Overview](./) — the unified constructor and linked map example.
- [Transformations](./transformations) — the presets and the `@transform` slot.
- [`PlotDefinition`](/api/autk-plot/type-aliases/PlotDefinition) and [`ContractReport`](/api/autk-plot/type-aliases/ContractReport).

</div>
