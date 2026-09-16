---
title: 'Points and Boundaries'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs_proj.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    },
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_points_test_proj.geojson',
      outputTableName: 'points',
      coordinateFormat: 'EPSG:3395',
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'neighborhoods' },
      { dataRef: 'points' },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Points and Boundaries

Overlay a point layer on neighborhood boundaries, both stored in a projected coordinate system.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- projected input declared with `coordinateFormat: 'EPSG:3395'`
- polygon and point layers in one map
- layers drawn in `layerRefs` order

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/standalone-points-geojson-vis.ts).
