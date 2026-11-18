---
title: 'Map Camera'
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
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
      },
    },
  ],
  map: {
    camera: { zoom: 13, pitch: 55, bearing: 30 },
    layerRefs: [
      { dataRef: 'fidi_surface' },
      { dataRef: 'fidi_parks' },
      { dataRef: 'fidi_water' },
      { dataRef: 'fidi_roads' },
      { dataRef: 'fidi_buildings' },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Map Camera

Look at the 3D buildings of the Financial District from a tilted, turned camera instead of straight down.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `camera` with `zoom`, `pitch`, and `bearing`
- a `bbox` query area read from a local extract
- 3D buildings seen at an angle

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/map-camera.ts).
