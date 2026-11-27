// Run after npm run build, against npm run preview (or PLAYGROUND_URL).
import assert from 'node:assert/strict'
import { chromium } from 'playwright-core'

const base = process.env.PLAYGROUND_URL ?? 'http://localhost:4173'
const browser = await chromium.launch({
  ...(process.env.CHROME_BIN ? { executablePath: process.env.CHROME_BIN } : { channel: 'chrome' }),
  args: ['--enable-unsafe-webgpu'],
})
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 } })
  const errors = []
  const missing = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('response', response => {
    if (response.status() >= 400 && !response.url().endsWith('/favicon.ico')) missing.push(response.url())
  })
  await page.goto(`${base}/autk-plot/series-and-annotations.html`)
  const examples = page.locator('.code-playground')
  const bars = examples.nth(0)
  await bars.locator('rect.autkMark').first().waitFor()
  assert.equal(await bars.locator('rect.autkMark').count(), 4)
  await bars.locator('[data-annotation-id="mean"] line').waitFor({ state: 'attached' })
  await bars.getByText('East', { exact: true }).waitFor()
  await bars.locator('rect.autkMark').first().click()
  await bars.locator('.code-playground__console-lines').getByText('Array(1)', { exact: true }).waitFor()

  const lines = examples.nth(1)
  await lines.scrollIntoViewIfNeeded()
  await lines.locator('circle.autkMark').first().waitFor()
  assert.equal(await lines.locator('circle.autkMark').count(), 5, 'the missing month is not a row')
  const proposalPath = await lines.locator('[data-series="Proposal"] > path').first().getAttribute('d')
  assert.equal((proposalPath.match(/M/g) ?? []).length, 2, 'the missing month breaks the path')
  await lines.locator('[data-annotation-id="proposal"] circle').waitFor()

  for (const id of ['p10', 'p11', 'p12']) {
    await page.goto(`${base}/gallery/examples/${id}.html`)
    await page.locator('.gallery-example-frame').scrollIntoViewIfNeeded()
    const frame = page.frameLocator('.gallery-example-frame')
    await frame.locator('.autkMark').first().waitFor({ timeout: 60000 })
    await frame.locator('[data-annotation-id]').first().waitFor()
    assert.equal(await frame.locator('.site-header').isVisible(), false)
    assert.equal(await frame.locator('.introduction').isVisible(), true)
    assert.ok(await frame.locator('.autkMark').count() > 10, `${id} draws data`)
    if (id === 'p11') {
      const select = frame.locator('#taxi-destination')
      const before = await frame.locator('#taxi-route-status').innerText()
      await select.selectOption({ index: 1 })
      await page.waitForFunction(({ selector, before }) => {
        const doc = document.querySelector('iframe.gallery-example-frame').contentDocument
        return doc.querySelector(selector).textContent !== before
      }, { selector: '#taxi-route-status', before })
      assert.notEqual(await frame.locator('#taxi-route-status').innerText(), before)
      const overlay = frame.locator('#taxi-timeline rect.overlay').first()
      await overlay.scrollIntoViewIfNeeded()
      const box = await overlay.boundingBox()
      await page.mouse.move(box.x + box.width * 0.25, box.y + box.height / 2)
      await page.mouse.down()
      await page.mouse.move(box.x + box.width * 0.45, box.y + box.height / 2, { steps: 8 })
      await page.mouse.up()
      await frame.locator('#taxi-hours-status').getByText(/07:00|08:00|09:00/).waitFor()
    }
    if (id === 'p12') {
      await frame.locator('#taxi-hourly rect.autkMark').filter({ visible: true }).first().click()
      await frame.locator('#taxi-sample-status').getByText(/selected/).waitFor()
    }
    await page.evaluate(() => {
      document.documentElement.classList.add('dark')
      localStorage.setItem('vitepress-theme-appearance', 'dark')
    })
    await page.setViewportSize({ width: 390, height: 844 })
    await frame.locator('.autkMark').first().waitFor()
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${id} has no page overflow on mobile`)
    await page.setViewportSize({ width: 1440, height: 960 })
    console.log(`${id}: embedded charts, references, controls, and mobile dark layout passed`)
  }
  assert.deepEqual(errors, [], 'no browser exceptions')
  assert.deepEqual(missing, [], 'no missing resources')
  console.log('Plot guide: grouped bars, manual categories, line gaps, and annotations passed')
} finally {
  await browser.close()
}
