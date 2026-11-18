---
title: 'Compute into a New Table'
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
  compute: [
    {
      dataRef: 'fidi_buildings',
      attributes: { meters: 'height' },
      outputColumnName: 'feet',
      wgslFunction: 'return meters * 3.28084;',
      outputTableName: 'building_heights',
      layerType: 'polygons',
    },
  ],
  map: {
    camera: { zoom: 12.6 },
    layerRefs: [
      { dataRef: 'fidi_surface' },
      { dataRef: 'fidi_parks' },
      { dataRef: 'fidi_water' },
      { dataRef: 'fidi_roads' },
      {
        dataRef: 'building_heights',
        title: 'Building height (ft)',
        getFnv: 'compute.feet',
        colorMapInterpolator: 'interpolateViridis',
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

# Compute into a New Table

Convert the height of every building in the Financial District from meters to feet on the GPU, writing the result into a new table that the map draws.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `outputTableName` writes the result into a new table, and the buildings table stays as it is
- `layerType: 'polygons'` sets how the map draws the new table
- results read with `getFnv: 'compute.feet'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/compute-output-table.ts).
