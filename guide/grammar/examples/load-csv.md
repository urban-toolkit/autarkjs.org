---
title: 'Load CSV'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
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
  ],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
</div>

# Load CSV

Load a CSV of noise complaints and turn its latitude and longitude columns into point geometry. With no map or plot in the spec, the playground prints the loaded table.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ db: 'tables' }" :auto-run="true" out="both" :render-canvas="false" :mounts="[{ name: 'tables', id: 'tables' }]" />
</ClientOnly>

## Highlights

- `csv` data source with `csvFileUrl`
- `geometryColumns` to build points from latitude and longitude

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/load-csv.ts).
