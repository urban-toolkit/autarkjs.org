---
title: 'Building Height Squared'
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
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Battery Park City', 'Financial District'],
      },
      outputTableName: 'table_osm',
      autoLoadLayers: {
        layers: ['buildings'],
        dropOsmTable: true,
      },
    },
  ],
  compute: [
    {
      dataRef: 'table_osm_buildings',
      attributes: { x: 'height', y: 'height' },
      outputColumnName: 'height_sq',
      wglsFunction: 'return x * y;',
    },
  ],
  map: {
    style: 'light',
    layerRefs: [
      {
        dataRef: 'table_osm_buildings',
        colorMapInterpolator: 'interpolateRdBu',
        getFnv: 'height_sq',
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

# Building Height Squared

Square the height of every OpenStreetMap building on the GPU and color the 3D buildings by the result.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- compute output written to `outputColumnName`
- diverging colormap on 3D buildings

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/property-func-map.ts).
