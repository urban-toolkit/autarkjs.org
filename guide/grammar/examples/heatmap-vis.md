---
title: 'Heatmap over OSM'
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
      type: 'heatmap',
      tableJoinName: 'noise',
      near: { distance: 1000 },
      outputTableName: 'heatmap',
      grid: { rows: 20, columns: 20 },
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'table_osm_surface' },
      { dataRef: 'table_osm_parks' },
      { dataRef: 'table_osm_water' },
      { dataRef: 'table_osm_roads' },
      { dataRef: 'heatmap', opacity: 0.5, getFnv: 'count.noise', defaultFnv: 0 },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Heatmap over OSM

Aggregate noise complaints into a 20 by 20 grid and draw it as a translucent heatmap over OpenStreetMap layers.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map' }" :auto-run="true" out="dom" canvas-id="map" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `heatmap` data source with a `grid`
- `near` distance for each grid cell
- heatmap values read with `getFnv: 'count.noise'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/heatmap-vis.ts).
