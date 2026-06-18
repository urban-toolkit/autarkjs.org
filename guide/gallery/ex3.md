---
title: City Stack
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkSpatialDb } from '@urban-toolkit/autk-db'
import { AutkMap } from '@urban-toolkit/autk-map'

setStatus('Initializing spatial database...')
const db = new AutkSpatialDb()
await db.init()

setStatus('Loading OpenStreetMap layers from a local PBF...')
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: {
    geocodeArea: 'New York',
    areas: ['Battery Park City', 'Financial District'],
  },
  outputTableName: 'table_osm',
  autoLoadLayers: {
    coordinateFormat: 'EPSG:3395',
    layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
    dropOsmTable: true,
  },
})

setStatus('Initializing 3D map...')
const map = new AutkMap(canvas)
await map.init()

setStatus('Rendering layered urban scene...')
for (const layer of db.getLayerTables()) {
  const geojson = await db.getLayer(layer.name)
  map.loadCollection(layer.name, { collection: geojson, type: layer.type })
}

map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# City Stack

Build a layered 3D scene from OpenStreetMap data and render it directly in the browser. This example highlights OSM ingestion, automatic layer extraction, and multi-layer urban rendering with surface, parks, water, roads, and buildings.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- OSM loading from a local PBF file
- automatic extraction of urban feature layers
- multi-layer 3D rendering in a single map view
