---
title: Neighborhood Explorer
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkMap } from '@urban-toolkit/autk-map'

setStatus('Initializing map...')

const map = new AutkMap(canvas)
await map.init()

setStatus('Loading Manhattan neighborhoods...')
const geojson = await fetch('/data/mnt_neighs_proj.geojson').then((r) => r.json())

setStatus('Rendering GeoJSON layer...')
map.loadCollection('neighborhoods', { collection: geojson })
map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Neighborhood Explorer

Render a projected GeoJSON layer directly in the browser with the smallest possible Autark map workflow. This example highlights standalone map initialization, local data loading, and immediate layer rendering.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- standalone `AutkMap` initialization
- projected GeoJSON fetched from a local dataset
- direct `loadCollection()` rendering without database preprocessing
