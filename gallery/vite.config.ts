import { copyFile, mkdir } from 'node:fs/promises'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

/**
 * Site build for the vendored Autark gallery.
 *
 * The upstream app is a multi-page Vite build: `index.html` plus one HTML file
 * per catalog entry. This config keeps that shape, publishes it under the
 * site's `/gallery/apps/` path, and derives the page list from `catalog.ts` so
 * a new example cannot be added upstream without being built here.
 */
const root = fileURLToPath(new URL('.', import.meta.url))
const catalog = readFileSync(new URL('./catalog.ts', import.meta.url), 'utf8')
const paths = [...catalog.matchAll(/path: '([^']+\.html)'/g)].map((match) => match[1])
if (!paths.length) throw new Error('gallery/catalog.ts declares no example pages.')

const input = {
  index: fileURLToPath(new URL('./index.html', import.meta.url)),
  ...Object.fromEntries(paths.map((path) => [
    path.replace(/^src\//, '').replace(/\.html$/, '').replaceAll('/', '-'),
    fileURLToPath(new URL(`./${path}`, import.meta.url)),
  ])),
}

/**
 * The database resolves its worker and WASM beside its own bundle with
 * `new URL(..., import.meta.url)`, which Vite leaves untouched. Publish those
 * four files next to the gallery chunks, as the use-case build does.
 */
const duckdbRuntime = {
  name: 'copy-duckdb-runtime',
  async closeBundle() {
    const destination = new URL('../guide/public/gallery/apps/assets/', import.meta.url)
    await mkdir(destination, { recursive: true })
    for (const file of ['duckdb-browser-eh.worker.js', 'duckdb-browser-mvp.worker.js', 'duckdb-eh.wasm', 'duckdb-mvp.wasm']) {
      await copyFile(
        new URL(`../node_modules/@urban-toolkit/autk-db/dist/${file}`, import.meta.url),
        new URL(file, destination),
      )
    }
  },
}

export default defineConfig({
  root,
  plugins: [duckdbRuntime],
  base: '/gallery/apps/',
  optimizeDeps: {
    exclude: ['@urban-toolkit/autk-core', '@urban-toolkit/autk-map', '@urban-toolkit/autk-db', '@urban-toolkit/autk-plot', '@urban-toolkit/autk-compute', '@duckdb/duckdb-wasm'],
  },
  server: {
    fs: { allow: [fileURLToPath(new URL('..', import.meta.url))] },
    open: process.env.PLAYWRIGHT ? false : '/',
  },
  build: {
    outDir: fileURLToPath(new URL('../guide/public/gallery/apps', import.meta.url)),
    emptyOutDir: true,
    rollupOptions: { input },
  },
})
