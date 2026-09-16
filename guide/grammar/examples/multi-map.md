---
title: 'Two Maps'
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
  map: [
    {
      style: 'light',
      layerRefs: [
        {
          dataRef: 'neighborhoods',
          colorMapInterpolator: 'interpolateBlues',
          getFnv: 'shape_area',
          getFnvType: 'quantitative',
        },
      ],
    },
    {
      style: 'light',
      layerRefs: [
        {
          dataRef: 'neighborhoods',
          colorMapInterpolator: 'interpolateReds',
          getFnv: 'shape_leng',
          getFnvType: 'quantitative',
        },
      ],
    },
  ],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Two Maps

Give `map` an array to draw two maps from one spec, each with its own colormap and attribute.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: ['map0', 'map1'] }" :auto-run="true" out="dom" canvas-id="map0" :mounts="[{ name: 'map1', id: 'map1', kind: 'canvas', height: 500 }]" />
</ClientOnly>

## Highlights

- `map` as an array of map specs
- one colormap and attribute per map

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/multi-map.ts).
