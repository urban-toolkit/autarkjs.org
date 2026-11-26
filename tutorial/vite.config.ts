import { cp, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

/**
 * Site build for the vendored Autark tutorial.
 *
 * The upstream app is a multi-page Vite project. This config keeps one page per
 * chapter, publishes them under `/tutorial/apps/`, and copies the datasets that
 * the cells fetch at runtime.
 */
const root = fileURLToPath(new URL('.', import.meta.url))
const outDir = fileURLToPath(new URL('../guide/public/tutorial/apps', import.meta.url))

const chapters = ['formats', 'db', 'map', 'plot', 'compute']

/** Vite copies `public/`, but the tutorial keeps its datasets in `data/`. */
const publishData = {
  name: 'publish-tutorial-data',
  async closeBundle() {
    await mkdir(`${outDir}/data`, { recursive: true })
    await cp(`${root}data`, `${outDir}/data`, { recursive: true })
  },
}

export default defineConfig({
  root,
  base: '/tutorial/apps/',
  publicDir: false,
  plugins: [publishData],
  optimizeDeps: {
    exclude: ['@urban-toolkit/autk', '@urban-toolkit/autk-core', '@urban-toolkit/autk-map', '@urban-toolkit/autk-db', '@urban-toolkit/autk-plot', '@urban-toolkit/autk-compute', '@duckdb/duckdb-wasm'],
  },
  server: {
    fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] },
    open: process.env.PLAYWRIGHT ? false : '/',
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(chapters.map((chapter) => [
        chapter,
        fileURLToPath(new URL(`./${chapter}.html`, import.meta.url)),
      ])),
    },
  },
})
