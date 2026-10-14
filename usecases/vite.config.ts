import { copyFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: '/usecases/apps/',
  plugins: [{
    name: 'copy-duckdb-runtime',
    async closeBundle() {
      const destination = new URL('../guide/public/usecases/apps/assets/', import.meta.url)
      await mkdir(destination, { recursive: true })
      for (const file of ['duckdb-browser-eh.worker.js', 'duckdb-browser-mvp.worker.js', 'duckdb-eh.wasm', 'duckdb-mvp.wasm']) {
        await copyFile(
          new URL(`../node_modules/@urban-toolkit/autk-db/dist/${file}`, import.meta.url),
          new URL(file, destination),
        )
      }
    },
  }],
  build: {
    outDir: '../guide/public/usecases/apps',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        urbane: fileURLToPath(new URL('./src/urbane/main.html', import.meta.url)),
        shadows: fileURLToPath(new URL('./src/shadows/main.html', import.meta.url)),
        heat: fileURLToPath(new URL('./src/niteroi/main.html', import.meta.url)),
      },
    },
  },
})
