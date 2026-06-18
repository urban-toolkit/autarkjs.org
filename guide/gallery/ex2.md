---
title: Road Classes
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkDb } from '@urban-toolkit/autk-db'
import { AutkMap, ColorMapInterpolator, MapStyle } from '@urban-toolkit/autk-map'

setStatus('Initializing spatial database...')
const db = new AutkDb()
await db.init()

setStatus('Loading road data into the browser database...')
await db.loadCustomLayer({
  geojsonFileUrl: '/data/mnt_roads.geojson',
  outputTableName: 'roads',
  coordinateFormat: 'EPSG:3395',
})

setStatus('Initializing map...')
MapStyle.setPredefinedStyle('light')
const map = new AutkMap(canvas)
await map.init()

setStatus('Adding database layers to the map...')
for (const layer of db.getLayerTables()) {
  const geojson = await db.getLayer(layer.name)
  map.loadCollection(layer.name, { collection: geojson, type: layer.type })
}

const roads = await db.getLayer('roads')
for (const feature of roads.features) {
  const highway = feature.properties?.highway
  feature.properties.highway_class = ['primary', 'secondary'].includes(highway) ? highway : 'other'
}

setStatus('Applying categorical styling...')
map.updateColorMap('roads', { colorMap: { interpolator: ColorMapInterpolator.OBSERVABLE10 } })
map.updateThematic('roads', { collection: roads, property: 'properties.highway_class' })
map.updateRenderInfo('roads', { isColorMap: true })
map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Road Classes

Load a GeoJSON roads layer into the in-browser spatial database, pull it back out as a renderable layer, and style it by road class. This example highlights browser-side data loading, table-to-layer retrieval, and thematic coloring.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- in-browser spatial database initialization
- GeoJSON import with projected coordinates
- database-backed layer retrieval
- categorical thematic styling with `ColorMapInterpolator`
