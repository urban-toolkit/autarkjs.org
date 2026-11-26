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

test('Gallery and Demo Apps share the Examples menu and sidebar', async () => {
  const gallery = await readFile(`${dist}/gallery/index.html`, 'utf8')
  assert.match(gallery, /id="use-cases"[^>]*>[^<]*<a[^>]*href="\/demo-apps\/"/)
  for (const route of ['gallery/index', 'demo-apps/index', 'gallery/examples/d01']) {
    const html = await readFile(`${dist}/${route}.html`, 'utf8')
    const nav = html.match(/<nav[^>]+class="VPNavBarMenu menu"[^>]*>[\s\S]*?<\/nav>/)?.[0]
    assert.ok(nav, `${route} navbar`)
    assert.match(nav, />Examples<\/span>/)
    assert.match(nav, /href="\/gallery\/"[^>]*><!--\[--><span[^>]*>Gallery<\/span>/)
    assert.match(nav, /href="\/demo-apps\/"[^>]*><!--\[--><span[^>]*>Demo Apps<\/span>/)
    const sidebar = html.match(/<nav[^>]+id="VPSidebarNav"[^>]*>[\s\S]*?<\/nav>/)?.[0]
    assert.ok(sidebar, `${route} sidebar`)
    for (const href of ['/gallery/', '/demo-apps/']) {
      assert.ok(sidebar.match(new RegExp(`href="${href}"[^>]*><!--\\[--><p[^>]*>Overview</p>`)), `${route}: ${href} Overview link`)
    }
    for (const href of ['/gallery/examples/d01.html', '/usecases/live/heat.html']) {
      assert.ok(sidebar.includes(`href="${href}"`), `${route}: ${href}`)
    }
  }
})

test('Demo Apps uses Gallery-style cards linking to the existing live URLs', async () => {
  const demo = await readFile(`${dist}/demo-apps/index.html`, 'utf8')
  const gallery = await readFile(`${dist}/gallery/index.html`, 'utf8')
  assert.match(demo, /<h2 id="full-applications"[^>]*>Full applications<\/h2>/)
  assert.match(demo, /class="gallery-catalog-description"/)
  for (const slug of ['urbane', 'shadows', 'heat']) {
    const card = new RegExp(`href="/usecases/live/${slug}\\.html" class="gallery-catalog-card"`)
    assert.match(demo, card, slug)
    assert.doesNotMatch(gallery, card, 'app cards belong to Demo Apps')
  }
  assert.doesNotMatch(demo, /href="\/gallery\/examples\/d01(?:\.html)?" class="gallery-catalog-card"/)
})
