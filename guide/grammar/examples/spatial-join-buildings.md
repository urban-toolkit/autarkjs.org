---
title: 'Join: Buildings and Noise'
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
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
        dropOsmTable: true,
      },
    },
    {
      type: 'csv',
      csvFileUrl: '/data/noise.csv',
      outputTableName: 'noise',
      geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
    {
      type: 'join',
      tableRootName: 'table_osm_buildings',
      tableJoinName: 'noise',
      near: { distance: 1000 },
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'table_osm_surface' },
      { dataRef: 'table_osm_parks' },
      { dataRef: 'table_osm_water' },
      { dataRef: 'table_osm_roads' },
      { dataRef: 'table_osm_buildings', getFnv: 'sjoin.count.noise' },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Join: Buildings and Noise

Count noise complaints within 1000 meters of each OpenStreetMap building and color the buildings by the result.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `near` join with a `distance`
- joining onto an OSM layer table

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/spatial-join-buildings.ts).
