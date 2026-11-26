// Build and start `npm run preview` first. Requires Chrome with WebGPU.
import assert from 'node:assert/strict'
import { chromium } from 'playwright-core'

const base = process.env.PLAYGROUND_URL ?? 'http://localhost:4173'
const executablePath = process.env.CHROME_BIN
const browser = await chromium.launch({
  ...(executablePath ? { executablePath } : { channel: 'chrome' }),
  args: ['--enable-unsafe-webgpu'],
})

try {
  const chapters = await Promise.all(['01', '02', '03', '04', '05'].map(async (chapter) => {
    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } })
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    await page.goto(`${base}/tutorial/chapter${chapter}.html?overpass=offline`)
    const cells = page.locator('.tutorial-notebook figure.example')
    await cells.first().locator('button.run').waitFor()
    const outputs = new Map()
    for (const cell of await cells.all()) {
      const title = await cell.getAttribute('data-title')
      const label = `Chapter ${chapter}: ${title}`
      try {
        await cell.locator('button.run').evaluate(button => button.click())
        await cell.locator('.state.ok, .out pre.err').first().waitFor({ timeout: 90000 })
        assert.equal(await cell.locator('.out pre.err').count(), 0, await cell.locator('.out').innerText())
        outputs.set(title, cell.locator('.out'))
      } catch (error) {
        throw new Error(label, { cause: error })
      }
    }

    const value = async title => JSON.parse(await outputs.get(title).locator('pre.val').innerText())
    if (chapter === '02') {
      const workspace = await value('1.2 · Switch workspace')
      assert.equal(workspace.crs, 'EPSG:3395')
      assert.equal(workspace.precisionGrid, 0.01)
      const projected = await value('2.2 · Load GeoJSON')
      assert.ok(Math.abs(projected.sourceDegrees[0]) < 180 && Math.abs(projected.workspaceMeters[0]) > 1000000)
      assert.ok((await value('2.4 · Read the raster back')).cells <= 12000)
      const heatmap = await value('4.2 · Read the heatmap raster')
      assert.equal(heatmap.cells, 1600)
      assert.ok(heatmap.changedCells > 0, 'Gaussian smoothing changes the band')
      assert.ok(heatmap.examples.every(row => Number.isInteger(row.count)))
    }
    if (chapter === '03') {
      assert.match(await outputs.get('0.1 · WebGPU check').innerText(), /WebGPU is available/)
      assert.ok(Math.abs((await value('0.2 · Load neighborhoods and noise events')).firstNoiseLocation[0]) < 180)
      await outputs.get('1.1 · The first map').locator('canvas').first().waitFor()
      await outputs.get('4.1 · Noise heatmap').locator('canvas').first().waitFor()
    }
    if (chapter === '04') {
      const linked = outputs.get('3.2 · Two linked plots')
      assert.equal(await linked.locator('.plotgrid > div > svg').count(), 2)
      const overlay = linked.locator('rect.overlay').first()
      await overlay.scrollIntoViewIfNeeded()
      const { x, y, width, height } = await overlay.boundingBox()
      await page.mouse.move(x + width * 0.1, y + height * 0.1)
      await page.mouse.down()
      await page.mouse.move(x + width * 0.9, y + height * 0.9, { steps: 8 })
      await page.mouse.up()
      await linked.getByText(/\d+ selected · perimeter .* · area /).waitFor()
    }
    if (chapter === '05') {
      assert.equal((await value('2.6 · Measure a multipart road')).lengthMeters, 7)
      const { sky } = await value('3.4 · Sky exposure per road')
      assert.ok(sky >= 0 && sky <= 1, 'sky exposure is a finite fraction')
    }
    assert.deepEqual(errors, [], `Chapter ${chapter} browser errors`)
    console.log(`Chapter ${chapter}: ${outputs.size} cells passed`)
    await page.close()
    return outputs.size
  }))
  console.log(`${chapters.reduce((a, b) => a + b, 0)} tutorial cells passed`)
} finally {
  await browser.close()
}
