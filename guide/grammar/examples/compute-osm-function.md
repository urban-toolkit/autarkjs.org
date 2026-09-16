---
title: 'Compute on OSM Roads'
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
        layers: ['surface', 'parks', 'water', 'roads'],
        dropOsmTable: true,
      },
    },
  ],
  compute: [
    {
      dataRef: 'table_osm_roads',
      attributes: { x: 'lanes' },
      outputColumnName: 'result',
      wglsFunction: \`
        if (x <= 0) {
          return 1;
        }
        return x;
      \`,
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'table_osm_surface' },
      { dataRef: 'table_osm_parks' },
      { dataRef: 'table_osm_water' },
      {
        dataRef: 'table_osm_roads',
        getFnv: 'compute.result',
        getFnvType: 'quantitative',
        defaultFnv: 0,
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

# Compute on OSM Roads

Run a WGSL function over OpenStreetMap road segments to fill in missing lane counts, then color roads by lanes.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- multi-line WGSL with a conditional
- compute over an OSM layer table

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/compute-osm-function.ts).
