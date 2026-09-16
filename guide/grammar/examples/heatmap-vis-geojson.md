---
title: 'Heatmap over GeoJSON'
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
      csvFileUrl: '/data/noise.csv',
      outputTableName: 'noise',
      geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
    {
      type: 'heatmap',
      tableJoinName: 'noise',
      near: { distance: 1000 },
      outputTableName: 'heatmap',
      grid: { rows: 30, columns: 30 },
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'neighborhoods' },
      { dataRef: 'heatmap', opacity: 0.5, getFnv: 'count.noise' },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Heatmap over GeoJSON

A finer 30 by 30 noise heatmap drawn over neighborhood boundaries loaded from GeoJSON.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- higher grid resolution
- heatmap layered over a GeoJSON base

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/heatmap-vis-geojson.ts).
