---
title: 3D Manhattan from OpenStreetMap
aside: false
outline: false
---

<script setup>
import codeFull from '../../examples/ex3.ts?raw'

const codePreview = `
const db = new SpatialDb()
await db.init()

await db.loadOsmFromOverpassApi({
  queryArea: {
    geocodeArea: 'New York',
    areas: ['Manhattan Island'],
  },
  outputTableName: 'table_osm',
  autoLoadLayers: {
    coordinateFormat: 'EPSG:3395',
    layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
    dropOsmTable: true,
  },
})

const map = new AutkMap(canvas)
await map.init()

for (const layerData of db.getLayerTables()) {
  const geojson = await db.getLayer(layerData.name)
  map.loadGeoJsonLayer(layerData.name, geojson, layerData.type)
}

map.draw()
`.trim()

const objective = `
This example shows how Autark can query OpenStreetMap data directly from Overpass API and render a multi-layer 3D scene in the browser.

Datasets:
- OSM surface
- OSM parks
- OSM water
- OSM roads
- OSM buildings

How to explore:
- Navigate the 3D scene of Manhattan
- Inspect multiple OSM-derived layers rendered together
- Use this example as a baseline for richer OSM-driven urban analytics workflows
`.trim()
</script>

<ExamplePage
  title="3D Manhattan from OpenStreetMap"
  description="A live example that queries OpenStreetMap through Overpass API and renders a multi-layer 3D scene of Manhattan directly in the browser."
  :tags="['autk-db', 'autk-map']"
  iframe-src="/examples/raw/ex3.html"
  :code-preview="codePreview"
  :code-full="codeFull"
  :objective="objective"
/>