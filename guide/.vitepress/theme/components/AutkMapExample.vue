<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const status = ref('Initializing...')

onMounted(async () => {
  if (!canvas.value) return

  try {
    // Dynamic import avoids SSR issues (WebGPU is browser-only)
    const { AutkMap } = await import('autk-map')

    const map = new AutkMap(canvas.value)
    status.value = 'Loading map...'
    await map.init()

    status.value = 'Fetching data...'
    const geojson = await fetch('/guide/data/mnt_neighs_proj.geojson').then(r => r.json())

    map.loadGeoJsonLayer('neighborhoods', geojson)
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
      style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#ccc;font-size:14px;font-family:monospace;"
    >
      {{ status }}
    </div>
  </div>
</template>
