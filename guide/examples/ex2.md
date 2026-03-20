---
title: Spatial Join in the Browser
aside: false
outline: false
---

<script setup>
import codeFull from '../../examples/ex2.ts?raw'

const codePreview = `
const db = new SpatialDb()
await db.init()

await db.loadCustomLayer({
  geojsonFileUrl: '/data/mnt_neighs.geojson',
  outputTableName: 'neighborhoods',
  coordinateFormat: 'EPSG:3395',
})

await db.loadCustomLayer({
  geojsonFileUrl: '/data/noise.geojson',
  outputTableName: 'noise',
  coordinateFormat: 'EPSG:3395',
})

const counts = await db.rawQuery({
  query: \`
    SELECT
      struct_extract(neighborhoods.properties, 'nta2020') AS neighborhood_id,
      COUNT(noise.geometry) AS noise_count
    FROM neighborhoods
    LEFT JOIN noise
      ON ST_Intersects(neighborhoods.geometry, noise.geometry)
    GROUP BY 1
  \`,
  output: { type: 'RETURN_OBJECT' },
})
`.trim()

const objective = `
This example demonstrates how to execute a spatial join directly in the browser with Autark, combining neighborhood polygons and a point dataset.

Datasets:
- Manhattan neighborhoods
- Noise complaint points

How to explore:
- Inspect the thematic coloring of neighborhood polygons
- Compare polygon counts with the raw point layer
- Use this example as a starting point for client-side spatial aggregation workflows
`.trim()
</script>

<ExamplePage
  title="Spatial Join in the Browser"
  description="A browser-side spatial join example that counts noise points inside Manhattan neighborhoods and visualizes the result as a thematic map."
  :tags="['autk-db', 'autk-map']"
  iframe-src="/examples/raw/ex2.html"
  :code-preview="codePreview"
  :code-full="codeFull"
  :objective="objective"
/>