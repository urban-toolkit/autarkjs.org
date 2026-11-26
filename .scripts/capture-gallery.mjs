import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright-core'

/**
 * Captures the gallery card illustrations from a preview of the built site.
 *
 * Run `npm run gallery:build && npm run build && npm run preview`, then:
 *   node .scripts/capture-gallery.mjs guide/public/imgs/gallery [D01 B01 …]
 *
 * Each frame keeps only the example workspace: the site header, the repeated
 * title, and the footer are hidden, so cards show the map and its side panel.
 */
const origin = process.env.GALLERY_ORIGIN ?? 'http://127.0.0.1:4173'
const out = process.argv[2]
const only = process.argv.slice(3)
const images = out
await mkdir(images, { recursive: true })

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--enable-unsafe-webgpu', '--force-device-scale-factor=1'],
})

const listPage = await browser.newPage()
await listPage.goto(`${origin}/gallery/`, { waitUntil: 'load' })
const cards = await listPage.locator('.gallery-catalog-card').evaluateAll((els) =>
  els.map((el) => ({ id: el.querySelector('.gallery-catalog-id')?.textContent?.trim(), href: el.getAttribute('href') })))
await listPage.close()

const failures = []
for (const card of cards) {
  if (only.length && !only.includes(card.id)) continue
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } })
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
  try {
    await page.goto(`${origin}${card.href}`, { waitUntil: 'load', timeout: 45_000 })
    // Let data load, GPU work finish, and the camera settle.
    await page.waitForLoadState('networkidle', { timeout: 45_000 }).catch(() => {})
    await page.waitForTimeout(2500)
    // Keep the card about the visualization, not the page chrome or the repeated title.
    await page.addStyleTag({ content: '.site-header, .back-link, .introduction, .service-notice { display: none !important; }' })
    await page.waitForTimeout(600)
    await page.screenshot({ path: `${images}/${card.id}.png` })
    console.log(`${card.id} ok ${errors.length ? `(console: ${errors.slice(0, 2).join(' | ').slice(0, 160)})` : ''}`)
  } catch (error) {
    failures.push(card.id)
    console.log(`${card.id} FAILED ${error.message.slice(0, 160)}`)
  } finally {
    await page.close()
  }
}

await browser.close()
if (failures.length) {
  console.log('failures:', failures.join(', '))
  process.exitCode = 1
}
