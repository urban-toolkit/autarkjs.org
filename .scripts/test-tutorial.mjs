import assert from 'node:assert/strict'
import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import { test } from 'node:test'

/**
 * Structural checks for the mirrored tutorial, run against the built site.
 * They prove each chapter is published, embedded in the site shell, and served
 * with its own data; the notebook cells themselves are covered by browser checks.
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
  test(`${slug} embeds its chapter inside the site shell`, async () => {
    const html = await readFile(`${dist}/tutorial/${slug}.html`, 'utf8')
    assert.ok(html.includes(`/tutorial/apps/${app}.html?embed=1`), `${slug} frame source`)
    assert.match(html, /VPNav/, 'site navigation stays visible')
    assert.match(html, /tutorial-chapter/)
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

test('the learn page presents both tracks', async () => {
  const html = await readFile(`${dist}/learn/index.html`, 'utf8')
  assert.ok(html.includes('href="/tutorial/"'))
  assert.ok(html.includes('href="/introduction"'))
})
