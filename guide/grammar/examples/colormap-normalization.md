---
title: 'Percentile Normalization'
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
    style: 'light',
    layerRefs: [
      {
        dataRef: 'neighborhoods',
        colorMapInterpolator: 'interpolateReds',
        getFnv: 'shape_area',
        getFnvType: 'quantitative',
        normalization: {
          mode: 'percentile',
          lowerPercentile: 5,
          upperPercentile: 95,
        },
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

# Percentile Normalization

Clamp a sequential colormap to the 5th and 95th percentiles of neighborhood area.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- `getFnvType: 'quantitative'`
- `lowerPercentile` and `upperPercentile` bounds
- sequential Reds colormap

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/colormap-normalization.ts).
