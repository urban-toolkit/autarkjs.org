---
title: 'OSM: Paris'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'osm',
      pbfFileUrl: '/data/osm/paris_center.osm.pbf',
      queryArea: {
        geocodeArea: 'Île-de-France',
        areas: [
          'Paris 1er Arrondissement',
          'Paris 2e Arrondissement',
          'Paris 3e Arrondissement',
          'Paris 4e Arrondissement',
          'Paris 5e Arrondissement',
          'Paris 6e Arrondissement',
          'Paris 7e Arrondissement',
          'Paris 8e Arrondissement',
          'Paris 9e Arrondissement',
        ],
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

# OSM: Paris

Combine nine arrondissements of central Paris into one OpenStreetMap source.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- several `areas` in one `queryArea`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/osm-layers-api-paris.ts).
