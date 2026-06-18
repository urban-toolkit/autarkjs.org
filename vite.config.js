import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['@urban-toolkit/autk-db', '@duckdb/duckdb-wasm'],
  },
  build: {
    outDir: 'dist-temp',
    emptyOutDir: true,
    sourcemap: false,
  },
})
