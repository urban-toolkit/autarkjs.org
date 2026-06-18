---
title: Neighborhood Bars
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkMap, MapEvent } from '@urban-toolkit/autk-map'
import { AutkPlot, PlotEvent } from '@urban-toolkit/autk-plot'

output('<div style="height: 320px;"><div id="plotBody" style="width: 100%; height: 100%;"></div></div>')
const plotDiv = mount.querySelector('#plotBody')

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()

setStatus('Loading Manhattan neighborhoods...')
const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((r) => r.json())
map.loadCollection('neighborhoods', { collection: geojson })
map.updateRenderInfo('neighborhoods', { isPick: true })
map.draw()

setStatus('Building linked bar chart...')
const plot = new AutkPlot(plotDiv, {
  type: 'barchart',
  collection: geojson,
  attributes: { axis: ['ntaname', 'shape_area'] },
  labels: {
    axis: ['Neighborhood', 'Area'],
    title: 'Neighborhood area',
  },
  margins: { left: 60, right: 20, top: 50, bottom: 280 },
  width: plotDiv.clientWidth || 900,
  events: [PlotEvent.CLICK],
})

map.events.addEventListener(MapEvent.PICKING, (selection) => {
  plot.setSelection(selection)
})

plot.events.on(PlotEvent.CLICK, ({ selection }) => {
  map.setHighlightedIds('neighborhoods', selection)
})

clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--plot" href="/autk-plot/">autk-plot</a>
</div>

# Neighborhood Bars

Link a neighborhood map to an interactive bar chart so picks and chart clicks stay synchronized. This example highlights coordinated selection, shared data across views, and lightweight linked analysis in the browser.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- linked `autk-map` and `autk-plot` views
- map picking forwarded to the chart
- chart clicks reflected back onto the map
