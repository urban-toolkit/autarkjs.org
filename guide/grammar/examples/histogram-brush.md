---
title: 'Histogram'
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
  ],
  map: {
    layerRefs: [{ dataRef: 'neighborhoods' }],
  },
  plot: {
    dataRef: 'neighborhoods',
    mark: 'bar',
    axis: ['shape_area', '@transform'],
    title: 'Histogram example',
    transform: { preset: 'binning-1d', options: { bins: 10 } },
    margins: { left: 60, right: 20, top: 50, bottom: 80 },
    width: 600,
    events: ['brushX'],
    mapRef: 'neighborhoods',
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Histogram

Bin neighborhood areas into a histogram and brush along the x axis to select neighborhoods.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map', plot: 'plot' }" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

## Highlights

- `transform: { preset: 'binning-1d' }`
- `@transform` as an axis
- `events: ['brushX']`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/histogram-brush.ts).
