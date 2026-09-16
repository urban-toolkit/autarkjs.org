---
title: 'GeoJSON Lines'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_roads.geojson',
      outputTableName: 'roads',
      coordinateFormat: 'EPSG:4326',
    },
  ],
  map: {
    layerRefs: [{ dataRef: 'roads', opacity: 0.75 }],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# GeoJSON Lines

Draw the Manhattan road network from a GeoJSON file of line features with a partially transparent layer.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- line geometry loaded from GeoJSON
- layer `opacity` set in the spec

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/geojson-lines-vis.ts).
