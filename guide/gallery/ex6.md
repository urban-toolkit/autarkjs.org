---
title: Points over Polygons
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkMap } from '@urban-toolkit/autk-map'

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()

setStatus('Loading neighborhood polygons...')
const neighborhoods = await fetch('/data/mnt_neighs_proj.geojson').then((r) => r.json())

setStatus('Loading point features...')
const points = await fetch('/data/mnt_points_test_proj.geojson').then((r) => r.json())

setStatus('Rendering both layers together...')
map.loadCollection('neighborhoods', { collection: neighborhoods })
map.loadCollection('points', { collection: points })
map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Points over Polygons

Overlay projected point and polygon datasets in the same scene to show how standalone GeoJSON layers can be combined without any database preprocessing. This example highlights multi-layer rendering and mixed geometry visualization.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- standalone `AutkMap` setup
- projected polygon and point GeoJSON layers
- multi-layer browser-side visualization
