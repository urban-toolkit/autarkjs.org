---
title: 'GPU Compute'
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
    {
      type: 'csv',
      outputTableName: 'noise',
      csvFileUrl: '/data/noise.csv',
      geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
  ],
  compute: [
    {
      dataRef: 'neighborhoods',
      attributes: {
        x: 'shape_area',
        y: 'shape_leng',
      },
      outputColumnName: 'result',
      wglsFunction: 'return (4.0 * 3.1415927 * x) / (y * y);',
    },
  ],
  map: {
    style: 'light',
    layerRefs: [
      {
        dataRef: 'neighborhoods',
        getFnv: 'compute.result',
        getFnvType: 'quantitative',
        defaultFnv: 0,
      },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--compute" href="/grammar/#compute">compute</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# GPU Compute

Compute a compactness score for each neighborhood on the GPU and map the result.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- `compute` section with a WGSL `wglsFunction`
- `attributes` bind feature properties to WGSL variables
- results read with `getFnv: 'compute.result'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/compute-function.ts).
