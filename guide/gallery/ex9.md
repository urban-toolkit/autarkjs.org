---
title: Neighborhood Histogram
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkMap, MapEvent } from '@urban-toolkit/autk-map'
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

output('<div style="height: 340px;"><div id="plotBody" style="width: 100%; height: 100%;"></div></div>')
const plotDiv = mount.querySelector('#plotBody')

setStatus('Loading neighborhood dataset...')
const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()
map.loadCollection('neighborhoods', { collection: geojson })
map.updateRenderInfo('neighborhoods', { isPick: true })
map.draw()

setStatus('Building histogram...')
const plot = new AutkPlot(plotDiv, {
  type: 'barchart',
  collection: geojson,
  attributes: { axis: ['shape_area', '@transform'] },
  labels: { axis: ['Area range', 'Neighborhood count'], title: 'Neighborhood area histogram' },
  transform: {
    preset: 'binning-1d',
    options: { bins: 10 },
  },
  margins: { left: 60, right: 20, top: 50, bottom: 80 },
  width: plotDiv.clientWidth || 900,
  events: [PlotEvent.BRUSH_X],
})

plot.events.on(PlotEvent.BRUSH_X, ({ selection }) => {
  map.setHighlightedIds('neighborhoods', selection)
})

map.events.on(MapEvent.PICKING, ({ selection }) => {
  plot.setSelection(selection)
})

clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--plot" href="/autk-plot/">autk-plot</a>
</div>

# Neighborhood Histogram

Bin neighborhood areas into a histogram and brush across the x-axis to filter highlighted map features. This example highlights distribution analysis, one-dimensional brushing, and linked filtering.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- histogram built with a one-dimensional transform
- x-axis brushing linked to map highlights
- distribution-focused exploration of neighborhood size
