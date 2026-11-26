import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

/**
 * Publishes the gallery datasets and the DuckDB runtime beside the gallery apps.
 *
 * The built apps are committed, so `npm run dev` works without building the
 * gallery. Their large payloads are not: the datasets come from the vendored
 * `gallery/public/data`, and the workers/WASM from the installed `autk-db`.
 */
const root = fileURLToPath(new URL('..', import.meta.url))
const apps = `${root}guide/public/gallery/apps`
const data = `${root}gallery/public/data`
const duckdb = `${root}node_modules/@urban-toolkit/autk-db/dist`

await mkdir(`${apps}/data`, { recursive: true })
let datasets = 0
for (const file of await readdir(data)) {
  if (file.startsWith('.')) continue
  await copyFile(`${data}/${file}`, `${apps}/data/${file}`)
  datasets += 1
}

await mkdir(`${apps}/assets`, { recursive: true })
for (const file of ['duckdb-browser-eh.worker.js', 'duckdb-browser-mvp.worker.js', 'duckdb-eh.wasm', 'duckdb-mvp.wasm']) {
  await copyFile(`${duckdb}/${file}`, `${apps}/assets/${file}`)
}

console.log(`Gallery runtime ready: ${datasets} datasets and the DuckDB assets beside ${apps}.`)
