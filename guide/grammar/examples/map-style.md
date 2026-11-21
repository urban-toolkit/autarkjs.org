---
title: 'Map Style'
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
    style: {
      background: '#0b1a2a',
      surface: '#13263a',
      parks: '#1f4d3a',
      water: '#08121d',
      roads: '#4a6584',
      buildings: '#c9a96e',
      points: '#f2c14e',
      polylines: '#7f97ad',
      polygons: '#2a3d52',
    },
    showUi: false,
    camera: { zoom: 13, pitch: 45, bearing: 30 },
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

# Map Style

Draw the Financial District in a night style of the spec's own, each type of layer in a color of its palette, without the map's menu and legend.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `style` as an object of nine colors: the background and each type of layer
- layers without a `color` take their type's color
- `showUi: false` hides the menu of layers and the legend

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/map-style.ts).
