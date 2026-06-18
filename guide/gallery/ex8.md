---
title: Area Scatter
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

setStatus('Building scatterplot...')
const plot = new AutkPlot(plotDiv, {
  type: 'scatterplot',
  collection: geojson,
  attributes: { axis: ['shape_area', 'shape_leng'] },
  labels: { axis: ['Area', 'Perimeter'], title: 'Neighborhood area vs perimeter' },
  width: plotDiv.clientWidth || 900,
  events: [PlotEvent.BRUSH],
})

plot.events.on(PlotEvent.BRUSH, ({ selection }) => {
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

# Area Scatter

Brush a scatterplot of neighborhood area and perimeter to highlight the matching features on the map. This example highlights linked selection, two-dimensional chart brushing, and bidirectional coordination between map and plot.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- scatterplot interaction with rectangular brushing
- bidirectional map and plot selection
- linked exploration of two neighborhood metrics
