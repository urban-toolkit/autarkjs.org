---
title: 'SQL: The Ten Noisiest Neighborhoods'
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
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:4326',
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
      dataRef: 'neighborhoods',
      joinDataRef: 'noise',
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
    {
      type: 'sql',
      outputTableName: 'noisiest',
      query: "SELECT properties->>'ntaname' AS name, CAST(properties->'sjoin'->'count'->>'noise' AS INTEGER) AS complaints, geometry FROM neighborhoods ORDER BY complaints DESC NULLS LAST LIMIT 10",
      layerType: 'polygons',
    },
  ],
  map: {
    layerRefs: [
      { dataRef: 'neighborhoods', title: 'Manhattan neighborhoods', color: '#d9d9d9' },
      {
        dataRef: 'noisiest',
        title: 'Noise complaints, the ten noisiest',
        getFnv: 'complaints',
        colorMapInterpolator: 'interpolateReds',
      },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# SQL: The Ten Noisiest Neighborhoods

Count the noise complaints in each Manhattan neighborhood with a spatial join, then save the ten neighborhoods with the most complaints as a new table with a SQL query, and draw them in reds over the others.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

## Highlights

- `sql` data source whose `query` reads the joined `neighborhoods` table
- `properties->>'ntaname'` reads a GeoJSON property as text, and `geometry` keeps each neighborhood's shape
- `layerType: 'polygons'` lets the map draw the new table
- results read with `getFnv: 'complaints'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/sql-source.ts).
