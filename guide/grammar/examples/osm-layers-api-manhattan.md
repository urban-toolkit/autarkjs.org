---
title: 'OSM: Manhattan'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'osm',
      pbfFileUrl: '/data/osm/manhattan.osm.pbf',
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Manhattan Island'],
      },
      outputTableName: 'table_osm',
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
        dropOsmTable: true,
      },
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'table_osm_surface' },
      { dataRef: 'table_osm_parks' },
      { dataRef: 'table_osm_water' },
      { dataRef: 'table_osm_roads' },
      { dataRef: 'table_osm_buildings' },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# OSM: Manhattan

Load every OpenStreetMap layer for all of Manhattan Island, the largest OSM area in the gallery.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- a whole borough as the `queryArea`
- surface, parks, water, roads, and buildings layers

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/osm-layers-api-manhattan.ts).
