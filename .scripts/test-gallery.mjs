import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { test } from 'node:test'

/**
 * Structural checks for the mirrored gallery, run against the built site.
 * They prove every catalog entry, its assets, and its data are published under
 * the site prefix; interaction is covered by the browser checks.
 */
const dist = resolve('guide/.vitepress/dist')
const apps = `${dist}/gallery/apps`
const catalog = await readFile('gallery/catalog.ts', 'utf8')
const entries = [...catalog.matchAll(/path: '([^']+\.html)'/g)].map((match) => match[1])

test('the catalog is not empty and every page is unique', () => {
  assert.ok(entries.length >= 30, `expected the full catalog, found ${entries.length}`)
  assert.equal(new Set(entries).size, entries.length)
})

for (const path of entries) {
  test(`${path} publishes a self-contained page`, async () => {
    const html = await readFile(`${apps}/${path}`, 'utf8')
    assert.match(html, /<main[^>]*id="main"/)
    assert.match(html, /<title>Autark — /)
    const assets = [...html.matchAll(/(?:src|href)="(\/gallery\/apps\/assets\/[^" ]+)"/g)]
    assert.ok(assets.length >= 2, 'page must ship bundled JS and CSS')
    for (const [, asset] of assets) assert.ok((await stat(`${dist}${asset}`)).size > 0, asset)
    assert.doesNotMatch(html, /src="\.\/[^"]+\.ts"/, 'sources must be bundled, not served as .ts')
  })
}

test('the gallery index lists every entry of the catalog', async () => {
  const html = await readFile(`${apps}/index.html`, 'utf8')
  const script = html.match(/src="(\/gallery\/apps\/assets\/index-[^"]+\.js)"/)?.[1]
  assert.ok(script, 'index must ship its own script')
  const chunkFiles = (await readdir(`${apps}/assets`)).filter((name) => name.endsWith('.js'))
  const code = (await Promise.all(chunkFiles.map((name) => readFile(`${apps}/assets/${name}`, 'utf8')))).join('\n')
  for (const path of entries) assert.ok(code.includes(path), `${path} is missing from the gallery bundles`)
})

test('DuckDB workers and WASM are published beside the gallery bundles', async () => {
  for (const file of ['duckdb-browser-eh.worker.js', 'duckdb-browser-mvp.worker.js', 'duckdb-eh.wasm', 'duckdb-mvp.wasm']) {
    assert.ok((await stat(`${apps}/assets/${file}`)).size > 0, file)
  }
})

test('every vendored gallery dataset is published unchanged', async () => {
  for (const file of await readdir('gallery/public/data')) {
    if (file.startsWith('.')) continue
    const source = await readFile(`gallery/public/data/${file}`)
    const published = await readFile(`${apps}/data/${file}`)
    assert.deepEqual(published, source, file)
  }
})

test('every catalog entry has a card illustration published with the site', async () => {
  const catalogIds = [...catalog.matchAll(/id: '([A-Z]\d{2})'/g)].map((match) => match[1])
  assert.ok(catalogIds.length >= 30)
  for (const id of catalogIds) {
    const file = `${dist}/imgs/gallery/${id}.png`
    assert.ok((await stat(file)).size > 10_000, `${id} illustration`)
  }
})

test('each example has a VitePress page that embeds it in the site shell', async () => {
  const catalogEntries = [...catalog.matchAll(/\{ id: '([A-Z]\d{2})'[^}]*?path: '([^']+)'/g)].map((match) => ({ id: match[1], path: match[2] }))
  assert.equal(catalogEntries.length, entries.length)
  for (const { id, path } of catalogEntries) {
    const html = await readFile(`${dist}/gallery/examples/${id.toLowerCase()}.html`, 'utf8')
    assert.match(html, /gallery-example-frame/)
    assert.ok(html.includes(`/gallery/apps/${path}?embed=1`), `${path} frame source`)
    assert.match(html, /VPNav/, 'site navigation stays visible')
  }
})

test('the generated example pages do not drift from the catalog', async () => {
  const ids = [...catalog.matchAll(/\{ id: '([A-Z]\d{2})'/g)].map((match) => `${match[1].toLowerCase()}.md`).sort()
  const pages = (await readdir('guide/gallery/examples')).filter((name) => name.endsWith('.md')).sort()
  assert.deepEqual(pages, ids, 'run npm run gallery:pages after changing gallery/catalog.ts')
})

test('the VitePress gallery page links to the mirrored apps', async () => {
  const html = await readFile(`${dist}/gallery/index.html`, 'utf8')
  assert.match(html, /\/gallery\/examples\/d01/)
})
