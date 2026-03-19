---
title: Boston Streets and EV Charging Stations
aside: false
outline: false
---

<script setup>
import codeFull from '../../examples/ex1.ts?raw'

const codePreview = `
async function main() {
  const db = new SpatialDb()
  await db.init()

  await db.loadCustomLayer({
    geojsonFileUrl: '/data/boston_streets.geojson',
    outputTableName: 'boston_streets',
    coordinateFormat: 'EPSG:3395',
  })

  await db.loadCustomLayer({
    geojsonFileUrl: '/data/boston_charging_stations.geojson',
    outputTableName: 'boston_charging_stations',
    coordinateFormat: 'EPSG:3395',
  })

  const streets = await db.getLayer('boston_streets')
  const stations = await db.getLayer('boston_charging_stations')

  const map = new AutkMap(canvas)
  await map.init()

  map.loadGeoJsonLayer('boston_streets', streets, LayerType.AUTK_GEO_POLYLINES)
  map.loadGeoJsonLayer('boston_charging_stations', stations, LayerType.AUTK_GEO_POINTS)

  map.draw()
}

main()
`.trim()

const objective = `
This first version of the Boston example focuses on a stable visual baseline: loading and displaying two real datasets in the same live map.

Datasets:
- OpenStreetMap street network for Boston
- Electric vehicle charging stations from Boston open data

How to explore:
- Use the built-in layer controls inside the map
- Inspect how both datasets are rendered together
- Use this example as the foundation for the next iteration, where spatial filtering and analysis will be added
`.trim()
</script>

<ExamplePage
  title="Boston Streets and EV Charging Stations"
  description="A stable baseline example that visualizes the Boston street network together with electric vehicle charging stations in the same live map."
  :tags="['autk-db', 'autk-map']"
  iframe-src="/examples/raw/ex1.html"
  :code-preview="codePreview"
  :code-full="codeFull"
  :objective="objective"
/>