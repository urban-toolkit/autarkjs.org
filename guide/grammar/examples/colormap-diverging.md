---
title: 'Diverging Colormap'
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
        colorMapInterpolator: 'interpolateSpectral',
        getFnv: 'shape_area',
        normalization: { mode: 'percentile' },
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

# Diverging Colormap

Map neighborhood area with a diverging Spectral colormap, normalized by percentiles so outliers do not wash out the scale.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- diverging `colorMapInterpolator`
- percentile `normalization`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/colormap-diverging.ts).
