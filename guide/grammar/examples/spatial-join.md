---
title: 'Spatial Join'
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
      type: 'join',
      tableRootName: 'neighborhoods',
      tableJoinName: 'noise',
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

# Spatial Join

Count the noise complaints that fall inside each Manhattan neighborhood and color the neighborhoods by that count.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

## Highlights

- `join` data source with `tableRootName` and `tableJoinName`
- `groupBy` with a `count` aggregate
- results read with `getFnv: 'sjoin.count.noise'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/spatial-join.ts).
