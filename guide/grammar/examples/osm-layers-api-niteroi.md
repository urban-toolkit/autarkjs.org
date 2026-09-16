---
title: 'OSM: Niterói'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'osm',
      pbfFileUrl: '/data/osm/niteroi_praias_baia.osm.pbf',
      queryArea: {
        geocodeArea: 'Niterói',
        areas: ['Região Praias da Baía'],
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

# OSM: Niterói

Load OpenStreetMap layers for the Praias da Baía region of Niterói, Brazil.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- non-ASCII area names in `queryArea`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/osm-layers-api-niteroi.ts).
