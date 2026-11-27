// Run against `npm run preview` (or set PLAYGROUND_URL for a dev server).
import assert from 'node:assert/strict'
import { chromium } from 'playwright-core'

const base = process.env.PLAYGROUND_URL ?? 'http://localhost:4173'
const browser = await chromium.launch(process.env.CHROME_BIN
  ? { executablePath: process.env.CHROME_BIN, args: ['--enable-unsafe-webgpu'] }
  : { channel: 'chrome', args: ['--enable-unsafe-webgpu'] })
try {
  const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] })
  const page = await context.newPage()
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  for (const [route, index] of [['/autk-map/', 1], ['/autk-plot/extending.html', 0]]) {
    await page.goto(`${base}${route}`)
    const output = page.locator('.code-playground').nth(index).locator('.playground-card__state')
    await output.locator('.playground-card__placeholder').waitFor()
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 960 })
      const offsets = await output.locator('.playground-card__placeholder').evaluate(element => {
        const output = element.closest('.playground-card__state')
        const message = element.getBoundingClientRect()
        const bounds = output.getBoundingClientRect()
        const style = getComputedStyle(output)
        return [message.top - bounds.top - parseFloat(style.borderTopWidth) - parseFloat(style.paddingTop), message.left - bounds.left - parseFloat(style.paddingLeft)]
      })
      assert.ok(offsets.every(offset => Math.abs(offset) <= 1), `${route}: initial message is in the footer at ${width}px`)
    }
  }
  await page.setViewportSize({ width: 1440, height: 960 })
  await page.goto(`${base}/autk-db/`)
  const guide = page.locator('.code-playground').first()
  const editor = guide.locator('.cm-content')
  const code = 'console.log({ playground: "unified" }); return { result: [42n] };'
  await editor.fill(code)
  await guide.getByRole('button', { name: 'Copy', exact: true }).click()
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), code)
  await guide.getByRole('button', { name: 'Run', exact: true }).waitFor()
  await editor.press('ControlOrMeta+Enter')
  const guideOutput = guide.locator('.code-playground__console-lines')
  await guideOutput.getByText('{1 key}', { exact: true }).first().waitFor({ timeout: 8000 })
  assert.equal(await guideOutput.getByText('"unified"', { exact: true }).isVisible(), false)
  await guideOutput.getByText('{1 key}', { exact: true }).first().click()
  await guideOutput.getByText('"unified"', { exact: true }).waitFor()
  await guideOutput.getByText('{1 key}', { exact: true }).last().click()
  await guideOutput.getByText('Array(1)', { exact: true }).click()
  await guideOutput.getByText('42', { exact: true }).waitFor()
  await guide.locator('.playground-card__output + .playground-card__state').getByText(/Done in/).waitFor()
  await editor.fill('const =')
  await guide.getByRole('button', { name: 'Run', exact: true }).click()
  await guide.getByText(/unexpected token/i).waitFor()
  await editor.fill(code)
  await guide.getByRole('button', { name: 'Run', exact: true }).click()
  await guideOutput.getByText('{1 key}', { exact: true }).first().waitFor()
  await page.reload()
  await editor.waitFor()
  assert.equal(await editor.innerText(), code)
  assert.ok(await guide.getByText('Run this example to see the result.').isVisible(), 'restored edits do not auto-run')
  assert.equal(await guide.locator('.playground-card__output').isVisible(), false, 'no blank output before execution')
  assert.equal(await guide.locator('.playground-card__state .playground-card__placeholder').count(), 1, 'console initial message uses the same footer')
  await guide.getByRole('button', { name: 'Reset', exact: true }).click()
  assert.notEqual(await editor.innerText(), code)

  const style = card => card.evaluate(root => {
    const props = [
      ['', ['borderRadius', 'backgroundColor', 'boxShadow']],
      ['.playground-card__caption', ['padding', 'fontSize', 'backgroundColor']],
      ['.playground-toolbar', ['padding', 'backgroundColor']],
      ['.playground-card__output', ['padding', 'fontSize', 'lineHeight', 'minHeight', 'maxHeight', 'overflowY']],
    ]
    return props.map(([selector, names]) => {
      const css = getComputedStyle(selector ? root.querySelector(selector) : root)
      return names.map(name => css[name])
    })
  })
  const guideStyle = await style(guide)
  await page.goto(`${base}/tutorial/chapter01.html`)
  const notebook = page.locator('.tutorial-notebook figure.example').first()
  await notebook.locator('.cm-content').waitFor()
  assert.deepEqual(await style(notebook), guideStyle, 'Guide and Tutorial share the same card and output style')

  await page.goto(`${base}/autk-map/`)
  const mapExample = page.locator('.code-playground').nth(1)
  await mapExample.locator('.cm-content').fill('return ["DOM-only result"];')
  await mapExample.getByRole('button', { name: 'Run', exact: true }).click()
  const result = mapExample.locator('.code-playground__dom-output')
  await result.getByText('Array(1)', { exact: true }).click()
  await result.getByText('"DOM-only result"', { exact: true }).waitFor()

  await page.goto(`${base}/autk-plot/`)
  const combined = page.locator('.code-playground').first()
  await combined.locator('.code-playground__named-mount svg').waitFor()
  await combined.getByRole('button', { name: 'Copy', exact: true }).click()
  const combinedSource = await page.evaluate(() => navigator.clipboard.readText())
  await combined.locator('.cm-content').fill(`${combinedSource}\nconsole.log('Stacked output'); console.log('Long output '.repeat(400));`)
  await combined.getByRole('button', { name: 'Run', exact: true }).click()
  await combined.locator('.code-playground__console-lines').getByText('Stacked output', { exact: true }).waitFor()
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 960 })
    const layout = await combined.locator('.code-playground__output').evaluate(element => ({
      height: element.clientHeight, content: element.scrollHeight, overflow: getComputedStyle(element).overflowY,
      areas: [...element.querySelectorAll(':scope > section')].filter(area => getComputedStyle(area).display !== 'none').map(area => ({
        label: area.querySelector('.playground-card__area-label').textContent,
        top: area.getBoundingClientRect().top, bottom: area.getBoundingClientRect().bottom,
      })),
    }))
    assert.deepEqual(layout.areas.map(area => area.label), ['Map', 'Plot', 'Console'])
    assert.equal(layout.overflow, 'visible', 'the shared wrapper never clips console output')
    assert.ok(layout.content <= layout.height + 1)
    assert.ok(layout.areas[1].top >= layout.areas[0].bottom && layout.areas[2].top >= layout.areas[1].bottom, 'map, plot and console have separate stacked areas')
  }
  const consoleSize = await combined.locator('.playground-card__console').evaluate(element => ({ height: element.clientHeight, content: element.scrollHeight }))
  assert.ok(consoleSize.content > consoleSize.height, 'long console messages scroll only inside the console area')
  await page.setViewportSize({ width: 1440, height: 960 })

  await page.goto(`${base}/gallery/ex7.html`)
  const files = page.locator('.code-playground').first()
  const tabs = files.getByRole('tab')
  await tabs.nth(1).click()
  await files.locator('.cm-content:visible').fill('// Edit only this tab')
  await tabs.nth(1).press('ArrowLeft')
  assert.equal(await tabs.nth(0).getAttribute('aria-selected'), 'true')
  assert.notEqual(await files.locator('.cm-content:visible').innerText(), '// Edit only this tab')
  await tabs.nth(0).press('ArrowRight')
  assert.equal(await files.locator('.cm-content:visible').innerText(), '// Edit only this tab')

  await page.goto(`${base}/gallery/examples/d01.html`)
  const demo = page.frameLocator('.gallery-example-frame')
  await demo.locator('canvas').first().waitFor()
  assert.equal(await demo.locator('.playground-editor, .code-playground').count(), 0, 'the current Gallery demo has no playground')

  await page.goto(`${base}/grammar/examples/geojson-vis.html`)
  await page.locator('.code-playground .cm-content').waitFor()
  await page.locator('.code-playground canvas[data-view="map"]').waitFor()

  await page.goto(`${base}/tutorial/chapter04.html`)
  const plot = page.locator('.tutorial-notebook figure.example').nth(1)
  const chartPanel = plot.locator('.out')
  await chartPanel.waitFor({ state: 'attached' })
  await plot.getByRole('button', { name: 'Run all above' }).click()
  await chartPanel.locator('svg').first().waitFor({ timeout: 30000 })
  await plot.locator('.state.ok').waitFor()
  const chartHeight = await chartPanel.locator('svg').first().evaluate(el => el.getBoundingClientRect().height)
  assert.ok(await chartPanel.locator('.notebook-visual-area').evaluate(el => el.clientHeight) <= chartHeight + 64, 'tutorial plot area fits the chart and its label')
  await plot.getByRole('button', { name: 'Copy', exact: true }).click()
  const plotSource = await page.evaluate(() => navigator.clipboard.readText())
  await plot.locator('.cm-content').fill(`${plotSource}\nconsole.log('Plot result');`)
  await plot.getByRole('button', { name: 'Run', exact: true }).click()
  await plot.locator('.notebook-console-area').getByText('Plot result', { exact: true }).waitFor()
  const visualBox = await plot.locator('.notebook-visual-area').boundingBox()
  const consoleBox = await plot.locator('.notebook-console-area').boundingBox()
  assert.ok(consoleBox.y >= visualBox.y + visualBox.height, 'tutorial console is stacked below its plot')
  assert.equal(await chartPanel.evaluate(el => getComputedStyle(el).overflowY), 'visible')

  // The standalone build (outside VitePress) uses the same library and storage key.
  await page.goto(`${base}/tutorial/apps/formats.html`)
  const standalone = page.locator('figure.example').first()
  const notebookCode = 'console.info("Shared across builds", "[not JSON]"); show(["item"]); return { nested: [17, 23], text: "long output ".repeat(120) };'
  await standalone.locator('.cm-content').fill(notebookCode)
  await page.goto(`${base}/tutorial/chapter01.html`)
  const formats = page.locator('.tutorial-notebook figure.example').first()
  assert.equal(await formats.locator('.cm-content').innerText(), notebookCode)
  const notebookOutput = formats.locator('.notebook-console-output')
  await formats.getByRole('button', { name: 'Run', exact: true }).click()
  await notebookOutput.getByText('Shared across builds', { exact: true }).waitFor()
  await formats.locator('.playground-card__output + .playground-card__state').getByText(/Done in/).waitFor()
  await notebookOutput.getByText('[not JSON]', { exact: true }).waitFor()
  const collapsedHeight = await notebookOutput.evaluate(el => el.clientHeight)
  await notebookOutput.locator('summary').filter({ hasText: 'Array(1)' }).press('Enter')
  await notebookOutput.getByText('"item"', { exact: true }).waitFor()
  await notebookOutput.getByText('{2 keys}', { exact: true }).click()
  await notebookOutput.getByText('17', { exact: true }).waitFor({ state: 'hidden' })
  await notebookOutput.getByText('"text"', { exact: true }).waitFor()
  const list = notebookOutput.getByText('Array(2)', { exact: true })
  assert.equal(await notebookOutput.getByText('17', { exact: true }).isVisible(), false)
  await list.click()
  await notebookOutput.getByText('17', { exact: true }).waitFor()
  const size = await notebookOutput.evaluate(el => ({ height: el.clientHeight, content: el.scrollHeight }))
  assert.ok(size.height > collapsedHeight, 'opening structured output expands the panel')
  assert.ok(size.content > size.height, 'long output scrolls after reaching the height limit')
  await list.click()
  await notebookOutput.getByText('17', { exact: true }).waitFor({ state: 'hidden' })
  await notebookOutput.getByText('{2 keys}', { exact: true }).click()
  await notebookOutput.locator('summary').filter({ hasText: 'Array(1)' }).click()
  assert.equal(await notebookOutput.evaluate(el => el.clientHeight), collapsedHeight)

  const csv = page.locator('figure.example').filter({ hasText: 'CSV with a WKT column' })
  await csv.getByRole('button', { name: 'Run', exact: true }).click()
  const table = csv.locator('.out table')
  await table.waitFor()
  assert.equal(await table.evaluate(el => getComputedStyle(el.parentElement).borderTopWidth), '0px')
  assert.notEqual(await table.locator('th').first().evaluate(el => getComputedStyle(el).borderTopWidth), '0px')
  assert.deepEqual(errors, [])
  console.log('Shared editor, copy, shortcuts, persistence, tabs, Grammar views, and notebook context passed.')
} finally {
  await browser.close()
}
