---
title: 'Building Windows'
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
      queryArea: { bbox: [-74.0125, 40.705, -74.008, 40.7085] },
      outputTableName: 'wall_st',
      autoLoadLayers: {
        layers: ['surface', 'roads', 'buildings'],
      },
    },
  ],
  compute: [
    { type: 'windows', dataRef: 'wall_st_buildings', floors: 3, outputTableName: 'wall_st_windows' },
  ],
  map: {
    camera: { zoom: 13.8 },
    layerRefs: [
      { dataRef: 'wall_st_surface' },
      { dataRef: 'wall_st_roads' },
      {
        dataRef: 'wall_st_windows',
        title: 'Windows, by building height (m)',
        getFnv: 'buildingHeight',
        colorMapInterpolator: 'interpolateInferno',
        pointSize: 1.5,
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

# Building Windows

Place the windows of every building around Wall Street, three rows on each facade, as the points of a new table, and color them by their building's height: seen from above, they trace the walls.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `type: 'windows'` compute pass with `floors`, run on the CPU
- one point a window, placed as a render pass's `building-windows` viewpoints are
- colored by the window's `buildingHeight`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/building-windows.ts).
