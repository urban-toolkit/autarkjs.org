---
title: Linked Views with Map and Chart
aside: false
outline: false
---

<script setup>
import codeFull from '../../examples/ex5.ts?raw'

const codePreview = `
const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((res) => res.json())

this.plotData = this.geojson.features.map((feature, index) => ({
  ...(feature.properties ?? {}),
  __feature_id: index,
}))

this.map = new AutkMap(canvas)
await this.map.init()

this.map.loadGeoJsonLayer('neighborhoods', this.geojson)
this.map.updateRenderInfoProperty('neighborhoods', 'isPick', true)

this.plot = new PlotD3(plotDiv, buildNeighborhoodBarChart, [PlotEvent.CLICK])
this.plot.data = this.plotData
await this.plot.draw()
`.trim()

const objective = `
This example demonstrates linked views in Autark by combining a pickable map with a custom D3 bar chart.

Dataset:
- Manhattan neighborhoods (projected GeoJSON)

How to explore:
- Click a neighborhood on the map to highlight the corresponding bar
- Click a bar in the chart to highlight the corresponding neighborhood
- Use this example as a starting point for coordinated multiple views and interaction design
`.trim()
</script>

<ExamplePage
  title="Linked Views with Map and Chart"
  description="A coordinated multiple views example that links neighborhood selection between an interactive map and a custom bar chart."
  :tags="['autk-map', 'autk-plot']"
  iframe-src="/examples/raw/ex5.html"
  :code-preview="codePreview"
  :code-full="codeFull"
  :objective="objective"
/>