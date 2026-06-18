---
title: Geojson Layer
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

# Geojson Layer

Render a projected GeoJSON layer directly in the browser with the smallest possible Autark map workflow. This example highlights standalone map initialization, local data loading, and immediate layer rendering.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

:::tip Enable picking from the map menu
Use the hamburger menu in the top-left corner of the map to open the layer controls, then click the pointer icon <svg viewBox="0 0 16 16" width="20" height="20" fill="#555" style="display:inline-block; vertical-align:middle; margin:0 4px;"><path d="M2 1l4.5 13 2.1-5.1L14 6.8z"></path></svg> next to the layer to enable **picking**. Once picking is active, you can **double click** map features to inspect and highlight them.
:::

## Highlights

- standalone `AutkMap` initialization
- projected GeoJSON fetched from a local dataset
- direct `loadCollection()` rendering without database preprocessing
