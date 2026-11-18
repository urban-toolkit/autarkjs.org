---
title: 'Points at True Size'
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
      queryArea: { bbox: [-74.015, 40.703, -74.006, 40.711] },
      outputTableName: 'fidi',
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads'],
      },
    },
    {
      type: 'csv',
      csvFileUrl: '/data/noise_manhattan_clean.csv',
      outputTableName: 'noise',
      geometryColumns: {
        latColumnName: 'latitude',
        longColumnName: 'longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
  ],
  map: {
    camera: { zoom: 12.6 },
    layerRefs: [
      { dataRef: 'fidi_surface' },
      { dataRef: 'fidi_parks' },
      { dataRef: 'fidi_water' },
      { dataRef: 'fidi_roads' },
      { dataRef: 'noise', title: 'Noise complaints', color: '#d62728', pointSize: 10 },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Points at True Size

Draw noise complaints in the Financial District as points 10 meters in radius on the ground, over OpenStreetMap layers.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `pointSize: 10`, a radius in meters on the ground
- the grammar converts meters to the map's planar units at the layer's latitude
- a fixed `color` for the points

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/points-true-size.ts).
