---
title: Bar chart
aside: true
outline: deep
---

<script setup>
const code = `
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

setStatus('Building histogram...')
const chart = new AutkPlot(plot, {
  type: 'barchart',
  collection: geojson,
  attributes: { axis: ['shape_area', '@transform'] },
  labels: { axis: ['Area range', 'Neighborhood count'], title: 'Neighborhood area histogram' },
  transform: {
    preset: 'binning-1d',
    options: { bins: 10 },
  },
  margins: { left: 44, right: 20, top: 50, bottom: 56 },
  width: plot.clientWidth || 900,
  height: 420,
  events: [PlotEvent.BRUSH_X],
})

chart.events.on(PlotEvent.BRUSH_X, ({ selection }) => {
  map.setHighlightedIds('neighborhoods', selection)
})

map.events.on(MapEvent.PICKING, ({ selection }) => {
  chart.setSelection(selection)
})

clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--plot" href="/autk-plot/">autk-plot</a>
</div>

# Bar chart

Bin neighborhood areas into a histogram and brush across the x-axis to filter highlighted map features. This example highlights distribution analysis, one-dimensional brushing, and linked filtering.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" :mounts="[{ name: 'plot', height: 420 }]" />
</ClientOnly>

## Highlights

- histogram built with a one-dimensional transform
- x-axis brushing linked to map highlights
- distribution-focused exploration of neighborhood size
