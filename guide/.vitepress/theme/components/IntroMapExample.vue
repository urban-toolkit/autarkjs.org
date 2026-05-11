<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const status = ref('Initializing...')
const error = ref<string | null>(null)

const phaseLabels: Record<string, string> = {
  'querying-osm-server': 'Querying OSM server…',
  'downloading-osm-data': 'Downloading OSM data…',
  'querying-osm-boundaries': 'Querying boundaries…',
  'downloading-boundaries': 'Downloading boundaries…',
  'processing-osm-data': 'Processing data…',
  'processing-boundaries': 'Processing boundaries…',
}

onMounted(async () => {
  if (!canvas.value) return

  try {
    const { AutkMap } = await import('@urban-toolkit/autk-map')
    const { AutkSpatialDb } = await import('@urban-toolkit/autk-db')

    const db = new AutkSpatialDb()
    status.value = 'Initializing database…'
    await db.init()

    await db.loadOsm({
      queryArea: {
        geocodeArea: 'New York',
        areas: ['Financial District'],
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
      map.loadCollection(layer.name, { collection: geojson, type: layer.type })
    }

    map.draw()
    status.value = ''
  } catch (e: any) {
    error.value = e?.message ?? String(e)
    status.value = ''
  }
})
</script>

<template>
  <div class="intro-map-example" aria-live="polite">
    <div class="intro-map-example__label">Live Example</div>
    <div class="intro-map-example__canvas-wrap">
      <canvas ref="canvas" class="intro-map-example__canvas" />
      <div
        v-if="status || error"
        class="intro-map-example__overlay"
      >
        <div v-if="error" class="intro-map-example__error">
          {{ error }}
        </div>
        <div v-else class="intro-map-example__status">
          <div class="intro-map-example__spinner" />
          {{ status }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-map-example {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-code-block-bg);
}

.intro-map-example__label {
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  text-transform: uppercase;
}

.intro-map-example__canvas-wrap {
  position: relative;
  width: 100%;
  height: 500px;
  background: #1a1a2e;
}

.intro-map-example__canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.intro-map-example__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.intro-map-example__status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  font-family: monospace;
}

.intro-map-example__spinner {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  animation: autk-spin 0.8s linear infinite;
}

.intro-map-example__error {
  color: var(--vp-c-danger-1);
  font-family: monospace;
  font-size: 0.85rem;
  text-align: center;
}

@keyframes autk-spin {
  to { transform: rotate(360deg); }
}
</style>
