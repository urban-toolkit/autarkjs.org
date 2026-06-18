---
title: Categorical Data
aside: true
outline: deep
---

<script setup>
const code = `
import {
  ColorMapDomainStrategy,
  ColorMapInterpolator
} from '@urban-toolkit/autk-core'

import { AutkMap } from '@urban-toolkit/autk-map'

setStatus('Initializing map...')
const map = new AutkMap(canvas)
await map.init()

setStatus('Loading categorized road data...')
const collection = await fetch('/data/mnt_roads_categorized_proj.geojson')
  .then((res) => res.json())
map.loadCollection('roads', { collection })

setStatus('Applying categorical thematic colors...')
map.updateColorMap('roads', {
  colorMap: {
    interpolator: ColorMapInterpolator.CAT_OBSERVABLE10,
    domainSpec: {
      type: ColorMapDomainStrategy.USER,
      params: ['primary', 'secondary', 'other']
    }
  }
})

map.updateThematic('roads', {
  collection,
  property: 'properties.compute.highwayGroup'
})
map.updateRenderInfo('roads', { isColorMap: true })

map.draw()
clearStatus()
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Categorical Data

Render pre-grouped road categories with a stable categorical palette. This example highlights thematic styling, user-defined class domains, and property-path driven color mapping.

## Live Playground

<ClientOnly>
  <CodePlayground :code="code" out="dom" :auto-run="true" />
</ClientOnly>

## Highlights

- standalone `AutkMap` initialization
- categorical palette via `ColorMapInterpolator.CAT_OBSERVABLE10`
- explicit class ordering with `ColorMapDomainStrategy.USER`
- thematic rendering from `properties.compute.highwayGroup`
