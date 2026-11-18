---
title: 'Heatmap: Park Access'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'osm',
      pbfFileUrl: '/data/lower_mnt.osm.pbf',
      queryArea: { bbox: [-74.0195, 40.7, -74.0085, 40.7085] },
      outputTableName: 'tip',
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads'],
      },
    },
    {
      type: 'heatmap',
      joinDataRef: 'tip_parks',
      near: { distance: 200, useCentroid: false },
      outputTableName: 'park_access',
      grid: { rows: 30, columns: 30 },
      groupBy: [{ column: '*', aggregateFn: 'count' }],
    },
  ],
  map: {
    camera: { zoom: 12.6 },
    layerRefs: [
      { dataRef: 'tip_surface' },
      { dataRef: 'tip_parks' },
      { dataRef: 'tip_water' },
      { dataRef: 'tip_roads' },
      { dataRef: 'park_access', title: 'Parks within about 150 m', getFnv: 'count.tip_parks', opacity: 0.6 },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Heatmap: Park Access

Count the parks within about 150 meters of each cell of a 30 by 30 grid at the southern tip of Manhattan, measured from the park edges rather than their centroids.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `near.useCentroid: false` measures from each park's edges
- `groupBy` with `column: '*'` counts the parks
- heatmap values read with `getFnv: 'count.tip_parks'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/heatmap-centroids.ts).
