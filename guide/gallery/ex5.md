---
title: Computed Neighborhoods
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkSpatialDb } from '@urban-toolkit/autk-db'
import { AutkComputeEngine } from '@urban-toolkit/autk-compute'
import { AutkMap } from '@urban-toolkit/autk-map'

setStatus('Initializing spatial database...')
const db = new AutkSpatialDb()
await db.init()

setStatus('Loading neighborhoods...')
await db.loadCustomLayer({
  geojsonFileUrl: '/data/mnt_neighs.geojson',
  outputTableName: 'neighborhoods',
  coordinateFormat: 'EPSG:3395',
})

let geojson = await db.getLayer('neighborhoods')

setStatus('Computing compactness score...')
const compute = new AutkComputeEngine()
geojson = await compute.gpgpuPipeline({
  collection: geojson,
  variableMapping: {
    x: 'shape_area',
    y: 'shape_leng',
  },
  resultField: 'result',
  wgslBody: 'return (4.0 * 3.1415927 * x) / (y * y);',
})

setStatus('Rendering computed thematic layer...')
const map = new AutkMap(canvas)
await map.init()
map.loadCollection('neighborhoods', { collection: geojson })
map.updateThematic('neighborhoods', { collection: geojson, property: 'properties.compute.result' })
map.updateRenderInfo('neighborhoods', { isColorMap: true })
map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--compute" href="/autk-compute/">autk-compute</a>
</div>

# Computed Neighborhoods

Load neighborhood polygons through the browser database, compute a derived compactness score, and render the result as a thematic map. This example highlights the handoff between database loading, GPU-backed compute, and map styling.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- database-backed GeoJSON loading
- derived metric computation with `AutkComputeEngine`
- thematic rendering from `properties.compute.result`
