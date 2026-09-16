---
title: 'OSM: Two Neighborhoods'
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
        areas: ['Battery Park City'],
      },
      outputTableName: 'table_osm_battery',
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
        dropOsmTable: true,
      },
    },
    {
      type: 'osm',
      pbfFileUrl: '/data/lower_mnt.osm.pbf',
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Financial District'],
      },
      outputTableName: 'table_osm',
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
        dropOsmTable: true,
      },
    },
  ],
  map: [
    {
      layerRefs: [
        { dataRef: 'table_osm_battery_surface' },
        { dataRef: 'table_osm_battery_parks' },
        { dataRef: 'table_osm_battery_water' },
        { dataRef: 'table_osm_battery_roads' },
        { dataRef: 'table_osm_battery_buildings' },
      ],
    },
    {
      layerRefs: [
        { dataRef: 'table_osm_surface' },
        { dataRef: 'table_osm_parks' },
        { dataRef: 'table_osm_water' },
        { dataRef: 'table_osm_roads' },
        { dataRef: 'table_osm_buildings' },
      ],
    },
  ],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# OSM: Two Neighborhoods

Load Battery Park City and the Financial District as separate sources and show each in its own map.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: ['map0', 'map1'] }" :auto-run="true" out="dom" canvas-id="map0" :mounts="[{ name: 'map1', id: 'map1', kind: 'canvas', height: 500 }]" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- two `osm` sources with different `outputTableName`s
- one map per source

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/osm-layers-api-multi.ts).
