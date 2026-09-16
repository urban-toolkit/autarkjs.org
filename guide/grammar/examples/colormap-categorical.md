---
title: 'Categorical Colormap'
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
    style: 'light',
    layerRefs: [
      {
        dataRef: 'roads',
        colorMapInterpolator: 'schemeObservable10',
        getFnv: 'highway',
        colorMapDomain: ['primary', 'secondary'],
        catchAllCategory: 'other',
      },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Categorical Colormap

Color roads by their OpenStreetMap highway class, keeping primary and secondary roads and grouping the rest as other.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- `getFnv` reads the value to color by
- categorical `colorMapInterpolator`
- `colorMapDomain` and `catchAllCategory` to limit the categories

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/colormap-categorical.ts).
