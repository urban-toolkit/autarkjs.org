---
title: 'Building Clusters'
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
    { type: 'clusters', dataRef: 'fidi_buildings', outputColumnName: 'block', outputTableName: 'fidi_blocks' },
  ],
  map: {
    camera: { zoom: 13, pitch: 40, bearing: 20 },
    layerRefs: [
      { dataRef: 'fidi_surface' },
      { dataRef: 'fidi_parks' },
      { dataRef: 'fidi_water' },
      { dataRef: 'fidi_roads' },
      {
        dataRef: 'fidi_blocks',
        title: 'Buildings that share walls',
        getFnv: 'compute.block',
        colorMapInterpolator: 'interpolateTurbo',
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

# Building Clusters

Give each building of the Financial District the id of the block of touching buildings it is in, and color the buildings by it, so buildings that share walls share a color.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `type: 'clusters'` compute pass, run on the CPU
- buildings that touch, directly or through others, share a cluster id
- ids written to a new table, read with `getFnv: 'compute.block'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/building-clusters.ts).
