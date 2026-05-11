<script setup lang="ts">
import { onMounted, ref } from 'vue'

const output = ref('Running example...')
const error = ref<string | null>(null)

function formatConsoleValue(value: unknown): string {
  if (typeof value === 'string') return value
  return JSON.stringify(value, null, 2)
}

onMounted(async () => {
  try {
    const { AutkSpatialDb } = await import('@urban-toolkit/autk-db')
    const db = new AutkSpatialDb()
    await db.init()

    await db.loadCsv({
      csvFileUrl: '/data/example.csv',
      outputTableName: 'exampleCSV',
    })

    const logs: string[] = []
    const log = (...values: unknown[]) => {
      logs.push(values.map(formatConsoleValue).join(' '))
    }

    log(db.tables)
    output.value = logs.join('\n')
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err)
    output.value = ''
  }
})
</script>

<template>
  <div class="tables-console-example">
    <div class="console-output" aria-live="polite">
      <div class="console-output__label">Live Example</div>
      <pre v-if="error" class="console-output__error"><code>{{ error }}</code></pre>
      <pre v-else><code>{{ output }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.tables-console-example {
  margin: 16px 0;
}

.console-output {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin-top: 12px;
  overflow: hidden;
  background: var(--vp-code-block-bg);
}

.console-output__label {
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  text-transform: uppercase;
}

.console-output pre {
  margin: 0;
  overflow-x: auto;
  padding: 12px;
}

.console-output code {
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
}

.console-output__error code {
  color: var(--vp-c-danger-1);
}
</style>
