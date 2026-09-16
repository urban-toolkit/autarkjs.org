---
title: 'Load CSV and JSON'
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
    {
      type: 'json',
      jsonFileUrl: '/data/mnt.geojson',
      outputTableName: 'mnt',
    },
  ],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
</div>

# Load CSV and JSON

Load a CSV and a JSON file into the same spec, creating two tables side by side in the in-browser database.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ db: 'tables' }" :auto-run="true" out="both" :render-canvas="false" :mounts="[{ name: 'tables', id: 'tables' }]" />
</ClientOnly>

## Highlights

- several entries in the `data` array
- `csv` and `json` sources in one spec
- every table listed as it is loaded

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/load-multiple.ts).
