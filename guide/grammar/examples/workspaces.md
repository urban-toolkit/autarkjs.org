---
title: 'Workspaces'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs.geojson',
      outputTableName: 'manhattan',
      coordinateFormat: 'EPSG:4326',
      workspace: 'manhattan',
    },
    {
      type: 'csv',
      csvFileUrl: '/data/nyc_neigs.csv',
      outputTableName: 'city',
      geometryColumns: { wktColumnName: 'the_geom', coordinateFormat: 'EPSG:4326' },
      workspace: 'city',
    },
  ],
  map: [
    {
      workspace: 'manhattan',
      camera: { zoom: 8.1 },
      layerRefs: [{ dataRef: 'manhattan', title: 'Manhattan' }],
    },
    {
      workspace: 'city',
      camera: { zoom: 6.9 },
      layerRefs: [
        {
          dataRef: 'city',
          title: 'New York City by borough',
          getFnv: 'BoroName',
          colorMapInterpolator: 'schemeTableau10',
        },
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

# Workspaces

Load Manhattan and the whole city into two workspaces, so the city is not cut to the extent of Manhattan, and draw each in its own map.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: ['map0', 'map1'] }" :auto-run="true" out="dom" canvas-id="map0" :mounts="[{ name: 'map1', id: 'map1', kind: 'canvas', height: 500 }]" />
</ClientOnly>

## Highlights

- `workspace` on each data source and each map
- the first source of a workspace sets its extent
- WKT geometry read from a CSV with `geometryColumns.wktColumnName`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/workspaces.ts).
