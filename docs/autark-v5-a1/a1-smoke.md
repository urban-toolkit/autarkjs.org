# A1 package smoke

<script setup>
import { onMounted, ref } from 'vue'

const status = ref('pending')
const canvas = ref(null)
const host = ref(null)
onMounted(async () => {
  try {
    const { AutkDb } = await import('@urban-toolkit/autk-db')
    const { AutkMap, MapEvent } = await import('@urban-toolkit/autk-map')
    const { AutkPlot, hasRegisteredPlot } = await import('@urban-toolkit/autk-plot')
    const { AutkComputeEngine } = await import('@urban-toolkit/autk-compute')
    const { DEFAULT_WORKSPACE_CRS } = await import('@urban-toolkit/autk-core')
    const { db, map, plot, core, compute } = await import('@urban-toolkit/autk')
    if (db.AutkDb !== AutkDb || map.AutkMap !== AutkMap || plot.AutkPlot !== AutkPlot ||
        core.DEFAULT_WORKSPACE_CRS !== DEFAULT_WORKSPACE_CRS || compute.AutkComputeEngine !== AutkComputeEngine ||
        !MapEvent.CLICK || 'PICKING' in MapEvent || !hasRegisteredPlot('scatterplot')) {
      throw new Error('Expected v5 exports and umbrella re-exports')
    }
    const collection = { type: 'FeatureCollection', features: [
      { type: 'Feature', geometry: { type: 'Point', coordinates: [-74, 40.7] }, properties: { height: 6, area: 7 } },
      { type: 'Feature', geometry: { type: 'Point', coordinates: [-73.99, 40.71] }, properties: { height: 5, area: 3 } },
    ] }
    const database = new AutkDb()
    await database.init()
    await database.setWorkspace('probe', { crs: DEFAULT_WORKSPACE_CRS, precisionGrid: 0.01 })
    await database.loadGeojson({ geojsonObject: collection, outputTableName: 'sample', sourceCrs: 'EPSG:4326' })
    const layer = await database.getLayer('sample')
    if (layer.features.length !== 2 || Math.abs(layer.features[0].geometry.coordinates[0]) < 1e6) {
      throw new Error('DuckDB projected output was not as expected')
    }
    const view = new AutkMap(canvas.value, { showUi: false, crs: DEFAULT_WORKSPACE_CRS })
    await view.init()
    await view.loadCollection('sample', { collection: layer })
    view.fitBounds()
    view.draw()
    const chart = new AutkPlot(host.value, { type: 'scatterplot', collection: layer, attributes: { axis: ['height', 'area'] } })
    if (!host.value.querySelector('svg')) throw new Error('Plot did not render')
    const result = await new AutkComputeEngine().gpgpuPipeline({
      collection: layer, variableMapping: { height: 'properties.height', area: 'properties.area' },
      wgslBody: 'return height * area;', resultField: 'volumeProxy',
    })
    const values = result.features.map(f => f.properties.compute.volumeProxy).sort((a, b) => a - b)
    if (JSON.stringify(values) !== '[15,42]') throw new Error(`Unexpected compute result: ${JSON.stringify(values)}`)
    status.value = 'pass: two projected rows, rendered plot, GPU [15,42]'
  } catch (error) {
    console.error(error)
    status.value = `fail: ${error.message}`
  }
})
</script>

<p id="a1-status">{{ status }}</p>
<canvas ref="canvas" style="width: 480px; height: 320px"></canvas>
<div ref="host"></div>
