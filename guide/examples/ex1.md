---
title: Manhattan Neighborhood GeoJSON Viewer
aside: false
outline: false
---

<script setup>
import codeFull from '../../examples/ex1.ts?raw'

const codePreview = `
async function main() {
  const map = new AutkMap(canvas)
  await map.init()

  const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json())

  map.loadGeoJsonLayer('neighborhoods', geojson, LayerType.AUTK_GEO_POLYGONS)
  map.draw()
}

main()
`.trim()

const objective = `
This example shows the simplest possible GeoJSON workflow in Autark: loading a projected neighborhood dataset directly in the browser and rendering it as a polygon layer.

Dataset:
- Manhattan neighborhoods (projected GeoJSON)

How to explore:
- Use the default map navigation controls
- Inspect the neighborhood boundaries in the live view
- Use this example as a baseline before combining multiple datasets or spatial operations
`.trim()
</script>

<ExamplePage
  title="Manhattan Neighborhood GeoJSON Viewer"
  description="A minimal example that loads a projected GeoJSON file of Manhattan neighborhoods and renders it directly in Autark."
  :tags="['autk-map']"
  iframe-src="/examples/raw/ex1.html"
  :code-preview="codePreview"
  :code-full="codeFull"
  :objective="objective"
/>