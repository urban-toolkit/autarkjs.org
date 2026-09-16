---
title: 'GeoJSON Polygons'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:4326',
    },
  ],
  map: {
    layerRefs: [{ dataRef: 'neighborhoods' }],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# GeoJSON Polygons

The smallest map spec: load Manhattan neighborhoods from GeoJSON and draw them as a map layer.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- `geojson` data source in WGS84 (`EPSG:4326`)
- one `map.layerRefs` entry per layer
- no plotting or compute sections

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/geojson-vis.ts).
