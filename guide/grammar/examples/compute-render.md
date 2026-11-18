---
title: 'Render Pass'
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
    {
      type: 'render',
      outputTableName: 'street_sky',
      layers: [{ id: 'buildings', dataRef: 'wall_st_buildings', type: 'buildings' }],
      viewpoints: {
        dataRef: 'wall_st_roads',
        sampling: { directions: 4, pitchDeg: 45 },
      },
      aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
      tileSize: 64,
    },
  ],
  map: {
    camera: { zoom: 13.8 },
    layerRefs: [
      { dataRef: 'wall_st_surface' },
      { dataRef: 'wall_st_buildings' },
      {
        dataRef: 'street_sky',
        title: 'Share of sky seen from the street',
        getFnv: 'compute.render.classes.sky',
        colorMapInterpolator: 'interpolateBlues',
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

# Render Pass

From each road segment around Wall Street, render the buildings in four directions on the GPU, and color the roads by the share of sky seen from them.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `type: 'render'` compute pass with `layers` and `viewpoints`
- `aggregation` by classes, with the background counted as `sky`
- results read with `getFnv: 'compute.render.classes.sky'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/compute-render.ts).
