---
title: City Stack
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkDb } from '@urban-toolkit/autk-db'
import { AutkMap } from '@urban-toolkit/autk-map'

setStatus('Initializing spatial database...')
const db = new AutkDb()
await db.init()

setStatus('Loading OpenStreetMap layers from the local PBF...')
await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: {
    geocodeArea: 'New York',
    areas: ['Financial District']
  },
  autoLoadLayers: {
    layers: ['surface', 'parks', 'water', 'roads', 'buildings']
  }
})

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()

setStatus('Rendering physical layers...')
for (const layer of db.getLayersMetadata()) {
  const { name, type } = layer
  const collection = await db.getLayer(name)
  map.loadCollection(name, { collection, type })
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
