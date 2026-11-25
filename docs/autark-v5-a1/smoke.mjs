import assert from 'node:assert/strict'
import { serve } from '../site/node_modules/vitepress/dist/node/index.js'
import { chromium } from 'playwright-core'

const site = new URL('../site/guide/', import.meta.url)
const { server } = await serve({ root: site.pathname, port: 0 })
const origin = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch({
  executablePath: process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--enable-unsafe-webgpu'],
})
try {
  const context = await browser.newContext()
  const errors = []
  const assets = new Map()
  const asset = /duckdb-(?:browser-)?(?:eh|mvp)(?:\.worker\.js|\.wasm)$/
  context.on('response', response => {
    const url = response.url()
    if (asset.test(url) || url.includes('duckdb_extension')) {
      console.log(response.status(), url)
      if (asset.test(url)) assets.set(url, response.status())
    }
  })
  context.on('requestfailed', request => console.log('request failed', request.url(), request.failure()))
  const page = await context.newPage()
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', msg => { if (msg.type() === 'error') console.log('browser:', msg.text()) })
  console.log('Chrome', browser.version(), origin)
  await page.goto(`${origin}/a1-smoke.html`, { waitUntil: 'domcontentloaded' })
  await page.waitForFunction(() => document.querySelector('#a1-status')?.textContent !== 'pending', { timeout: 45_000 })
  assert.match(await page.locator('#a1-status').textContent(), /^pass:/)
  assert.ok(await page.locator('canvas').evaluate(canvas => canvas.width > 0 && canvas.height > 0))
  for (const suffix of ['.worker.js', '.wasm']) {
    assert.ok([...assets].some(([url, status]) => url.startsWith(`${origin}/assets/`) && url.endsWith(suffix) && status === 200), `Expected local HTTP 200 for ${suffix}; ${JSON.stringify([...assets])}`)
  }
  assert.deepEqual(errors, [])
  console.log(await page.locator('#a1-status').textContent())
} finally {
  await browser.close()
  server.close()
}
