---
title: 'Multiple Joins'
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
      type: 'csv',
      csvFileUrl: '/data/parking.csv',
      outputTableName: 'parking',
      geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
    {
      type: 'join',
      tableRootName: 'neighborhoods',
      tableJoinName: 'noise',
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
    {
      type: 'join',
      tableRootName: 'neighborhoods',
      tableJoinName: 'parking',
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'neighborhoods', getFnv: 'sjoin.count.noise', defaultFnv: 0 },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Multiple Joins

Join both noise complaints and parking violations to neighborhoods in one spec.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- two `join` sources on the same root table
- each join adds its own `sjoin.*` columns

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/spatial-join-multi.ts).
