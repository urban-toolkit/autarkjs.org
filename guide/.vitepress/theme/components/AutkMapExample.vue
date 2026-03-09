<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const status = ref('Initializing...')

const phaseLabels: Record<string, string> = {
  'querying-osm-server':     'Querying OSM server…',
  'downloading-osm-data':    'Downloading OSM data…',
  'querying-osm-boundaries': 'Querying boundaries…',
  'downloading-boundaries':  'Downloading boundaries…',
  'processing-osm-data':     'Processing data…',
  'processing-boundaries':   'Processing boundaries…',
}

onMounted(async () => {
  if (!canvas.value) return

  try {
    // Dynamic imports avoid SSR issues (WebGPU / DuckDB are browser-only)
    const { AutkMap, LayerType } = await import('autk-map')
    const { SpatialDb } = await import('autk-db')

    const db = new SpatialDb()
    status.value = 'Initializing database…'
    await db.init()

    await db.loadOsmFromOverpassApi({
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Battery Park City', 'Financial District'],
      },
      outputTableName: 'osm',
      autoLoadLayers: {
        coordinateFormat: 'EPSG:3395',
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
        dropOsmTable: true,
      },
      onProgress: (phase: string) => {
        status.value = phaseLabels[phase] ?? 'Loading…'
      },
    })

    const map = new AutkMap(canvas.value)
    await map.init()

    for (const layer of db.getLayerTables()) {
      const geojson = await db.getLayer(layer.name)
      map.loadGeoJsonLayer(layer.name, geojson, layer.type as typeof LayerType[keyof typeof LayerType])
    }

    map.draw()
    status.value = ''
  } catch (e: any) {
    status.value = `Error: ${e?.message ?? e}`
  }
})
</script>

<template>
  <div style="position:relative;width:100%;height:500px;border-radius:8px;overflow:hidden;background:#1a1a2e;">
    <canvas ref="canvas" style="width:100%;height:100%;" />
    <div
      v-if="status"
      style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:0.75rem;color:rgba(255,255,255,0.85);font-size:0.9rem;font-family:monospace;"
    >
      <div style="width:18px;height:18px;flex-shrink:0;border:2px solid rgba(255,255,255,0.25);border-top-color:rgba(255,255,255,0.85);border-radius:50%;animation:autk-spin 0.8s linear infinite;" />
      {{ status }}
    </div>
  </div>
</template>

<style scoped>
@keyframes autk-spin {
  to { transform: rotate(360deg); }
}
</style>
