import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { test } from 'node:test'

const dist = resolve('guide/.vitepress/dist')

for (const [slug, application] of [['urbane', 'urbane'], ['shadows', 'shadows'], ['heat', 'niteroi']]) {
  test(`${slug} publishes a navigation-only wrapper and a bundled application`, async () => {
    const wrapper = await readFile(`${dist}/usecases/live/${slug}.html`, 'utf8')
    assert.match(wrapper, /live-case-page/)
    assert.match(wrapper, /VPNav/)
    assert.ok(wrapper.includes(`src="/usecases/apps/src/${application}/main.html"`))
    assert.doesNotMatch(wrapper, /class="VPSidebar/)

    const html = await readFile(`${dist}/usecases/apps/src/${application}/main.html`, 'utf8')
    const assets = [...html.matchAll(/(?:src|href)="(\/usecases\/apps\/assets\/[^" ]+)"/g)]
    assert.ok(assets.length >= 2, 'application must include bundled JS and CSS')
    assert.doesNotMatch(html, /src="\.\/main.ts"/)
    for (const [, asset] of assets) assert.ok((await stat(`${dist}${asset}`)).size > 0)
  })
}

test('local DuckDB workers and WASM are available beside the app bundles', async () => {
  for (const file of ['duckdb-browser-eh.worker.js', 'duckdb-browser-mvp.worker.js', 'duckdb-eh.wasm', 'duckdb-mvp.wasm']) {
    assert.ok((await stat(`${dist}/usecases/apps/assets/${file}`)).size > 0, file)
  }
})

test('every vendored dataset is published unchanged', async () => {
  for (const file of await readdir('usecases/public/data')) {
    if (file.startsWith('.')) continue
    const source = await readFile(`usecases/public/data/${file}`)
    const published = await readFile(`${dist}/usecases/apps/data/${file}`)
    assert.deepEqual(published, source, file)
  }
})

test('gallery links to all three exact public URLs', async () => {
  const html = await readFile(`${dist}/gallery/index.html`, 'utf8')
  for (const slug of ['urbane', 'shadows', 'heat']) {
    assert.ok(html.includes(`href="/usecases/live/${slug}.html"`), slug)
  }
})
