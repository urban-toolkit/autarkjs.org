---
title: 'Camera Tour'
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
    camera: {
      center: [-74.011, 40.7069],
      zoom: 13,
      motion: [
        { type: 'zoom', amount: 1.5, seconds: 2 },
        { type: 'pitch', amount: 55, seconds: 2.5, pan: 150 },
        { type: 'bearing', amount: 90, seconds: 4 },
      ],
    },
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

# Camera Tour

Look straight down on the New York Stock Exchange, then move in closer, tilt toward the horizon while the view moves north, and turn a quarter clockwise to face east.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip Interaction
The tour plays once the map is drawn. A drag, a scroll, or a key on the map stops it, and the map's own pan, tilt, and zoom take over from there. Run plays it again.
:::

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `camera.center` is the point the view looks at, in degrees
- `camera.motion` plays its steps one after another once the map is drawn
- a `pitch` step with a `pan` moves the view as it tilts

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/camera-tour.ts).
