import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { test } from 'node:test'

/**
 * Structural checks for the mirrored tutorial, run against the built site.
 * They prove each chapter uses the Guide layout and publishes the original
 * notebook cells and their data; execution is covered by browser checks.
 */
const dist = resolve('guide/.vitepress/dist')
const chapters = [
  ['chapter01', 'formats'],
  ['chapter02', 'db'],
  ['chapter03', 'map'],
  ['chapter04', 'plot'],
  ['chapter05', 'compute'],
]

test('the tutorial landing lists every chapter', async () => {
  const html = await readFile(`${dist}/tutorial/index.html`, 'utf8')
  for (const [slug] of chapters) assert.ok(html.includes(`/tutorial/${slug}`), slug)
  assert.match(html, /Observable|Original notebooks/)
})

for (const [slug, app] of chapters) {
  test(`${slug} uses the native Guide layout and headings`, async () => {
    const html = await readFile(`${dist}/tutorial/${slug}.html`, 'utf8')
    const source = await readFile(`tutorial/${app}.html`, 'utf8')
    assert.match(html, /class="VPDoc has-sidebar has-aside/)
    assert.match(html, /class="VPDocAsideOutline/)
    assert.match(html, /class="guide-eyebrow"/)
    assert.equal((html.match(/ id="intro"/g) ?? []).length, 1)
    assert.match(html, /<h1 id="intro"/)
    for (const [, anchor] of source.matchAll(/<section id="([\w-]+)">\s*<h2>/g)) {
      assert.ok(html.includes(`<h2 id="${anchor}">`), `preserve #${anchor} deep link`)
      assert.ok(html.includes(`class="header-anchor" href="#${anchor}"`), `link to #${anchor}`)
    }
    assert.doesNotMatch(html, /<iframe|app-embed-page|class="series-nav"/)
    assert.equal((html.match(/<figure class="example"/g) ?? []).length,
      (source.match(/<figure class="example"/g) ?? []).length, 'all notebook cells are present')
    assert.doesNotMatch(html, /(?:src|href)="(?:data\/|index\.html)/)
  })

  test(`${app}.html is published with bundled assets`, async () => {
    const html = await readFile(`${dist}/tutorial/apps/${app}.html`, 'utf8')
    const assets = [...html.matchAll(/(?:src|href)="(\/tutorial\/apps\/assets\/[^" ]+)"/g)]
    assert.ok(assets.length >= 2, 'chapter must ship bundled JS and CSS')
    for (const [, asset] of assets) assert.ok((await stat(`${dist}${asset}`)).size > 0, asset)
    assert.doesNotMatch(html, /src="\.\/[^"]+\.js"/)
  })
}

test('the tutorial datasets are published unchanged', async () => {
  for (const file of ['manifest.json']) {
    const source = await readFile(`tutorial/data/osm/${file}`)
    const published = await readFile(`${dist}/tutorial/apps/data/osm/${file}`)
    assert.deepEqual(published, source, file)
  }
  const shared = await readdir('tutorial/data/shared')
  for (const file of shared.filter((name) => !name.startsWith('.'))) {
    const source = await readFile(`tutorial/data/shared/${file}`)
    const published = await readFile(`${dist}/tutorial/apps/data/shared/${file}`)
    assert.deepEqual(published, source, file)
  }
})

test('the introduction links to the User Guide and Tutorial', async () => {
  const html = await readFile(`${dist}/introduction.html`, 'utf8')
  assert.ok(html.includes('href="/tutorial/"'))
  assert.ok(html.includes('href="/autk-db/"'))
  assert.match(html, /<span[^>]*>User Guide<\/span>/, 'Learn menu label')
  assert.match(html, /<h2[^>]*>User Guide<\/h2>/, 'sidebar label')
  assert.match(html, /class="learn-track-kicker"[^>]*>User Guide<\/span>/, 'Getting started card label')
})
