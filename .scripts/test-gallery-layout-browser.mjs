// Checks every published map layout without starting its database/GPU workload.
// Run after npm run build, against npm run preview (or PLAYGROUND_URL).
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { chromium } from 'playwright-core'

const base = process.env.PLAYGROUND_URL ?? 'http://localhost:4173'
const catalog = await readFile('gallery/catalog.ts', 'utf8')
const entries = [...catalog.matchAll(/path: '([^']+\.html)'/g)].map(match => match[1])
const browser = await chromium.launch(process.env.CHROME_BIN
  ? { executablePath: process.env.CHROME_BIN }
  : { channel: 'chrome' })
try {
  const page = await browser.newPage()
  await page.goto(`${base}/gallery/`)
  let checked = 0
  for (const path of entries) {
    const html = await readFile(`guide/.vitepress/dist/gallery/apps/${path}`, 'utf8')
    if (!html.includes('class="map-panel"')) continue
    // Keep all built stylesheets and page-specific styles in their original order.
    // Disable only scripts; the host normally enables embed mode and sends theme tokens.
    await page.setContent(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ''))
    for (const embedded of [false, true]) {
      for (const dark of [false, true]) {
        for (const width of [1440, 390]) {
          await page.setViewportSize({ width, height: 960 })
          await page.evaluate(({ embedded, dark }) => {
            document.documentElement.classList.toggle('gallery-embed', embedded)
            document.documentElement.style.setProperty('--vp-c-divider', dark ? '#2e2e32' : '#e2e2e3')
            document.documentElement.style.setProperty('--vp-c-bg', dark ? '#1b1b1f' : '#ffffff')
            document.documentElement.style.setProperty('--vp-c-bg-soft', dark ? '#202127' : '#f6f6f7')
          }, { embedded, dark })
          const panels = await page.locator('.map-panel').evaluateAll(elements => elements.map(element => {
            const style = getComputedStyle(element)
            return {
              borders: ['Top', 'Right', 'Bottom', 'Left'].map(side => [style[`border${side}Width`], style[`border${side}Style`], style[`border${side}Color`]]),
              corners: ['TopLeft', 'TopRight', 'BottomRight', 'BottomLeft'].map(corner => style[`border${corner}Radius`]),
              overflow: style.overflow,
            }
          }))
          const backgrounds = await page.locator('#app, .workspace, .taxi-analysis').evaluateAll(elements =>
            elements.map(element => getComputedStyle(element).backgroundColor))
          for (const background of backgrounds) {
            assert.equal(background, 'rgba(0, 0, 0, 0)', `${path}: panel gaps stay transparent (embedded=${embedded}, dark=${dark}, width=${width})`)
          }
          assert.ok(panels.length > 0, path)
          for (const panel of panels) {
            const label = `${path}: embedded=${embedded}, dark=${dark}, width=${width}`
            for (const [width, style, color] of panel.borders) {
              assert.equal(width, '1px', `${label}: visible border`)
              assert.equal(style, 'solid', label)
              assert.notEqual(color, 'rgba(0, 0, 0, 0)', label)
              if (embedded) assert.equal(color, dark ? 'rgb(46, 46, 50)' : 'rgb(226, 226, 227)', `${label}: theme border`)
            }
            assert.deepEqual(panel.corners, ['12px', '12px', '12px', '12px'], `${label}: rounded corners`)
            assert.equal(panel.overflow, 'hidden', `${label}: clip map and header to the corners`)
          }
        }
      }
    }
    checked++
  }
  assert.ok(checked >= 30, 'cover the full set of map examples')
  console.log(`${checked} map layouts: rounded borders and clipping passed, standalone/embedded, light/dark, desktop/mobile`)
} finally {
  await browser.close()
}
