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
  await editor.fill('const =')
  await guide.getByRole('button', { name: 'Run', exact: true }).click()
  await guide.getByText(/unexpected token/i).waitFor()
  await editor.fill(code)
  await guide.getByRole('button', { name: 'Run', exact: true }).click()
  await guideOutput.getByText('{1 key}', { exact: true }).first().waitFor()
  await page.reload()
  await editor.waitFor()
  assert.equal(await editor.innerText(), code)
  assert.ok(await guide.getByText('Output will appear here…').isVisible(), 'restored edits do not auto-run')
  await guide.getByRole('button', { name: 'Reset', exact: true }).click()
  assert.notEqual(await editor.innerText(), code)

  await page.goto(`${base}/autk-map/`)
  const mapExample = page.locator('.code-playground').nth(1)
  await mapExample.locator('.cm-content').fill('return ["DOM-only result"];')
  await mapExample.getByRole('button', { name: 'Run', exact: true }).click()
  const result = mapExample.locator('.code-playground__dom-output')
  await result.getByText('Array(1)', { exact: true }).click()
  await result.getByText('"DOM-only result"', { exact: true }).waitFor()

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

  await page.goto(`${base}/grammar/examples/geojson-vis.html`)
  await page.locator('.code-playground .cm-content').waitFor()
  await page.locator('.code-playground canvas[data-view="map"]').waitFor()

  await page.goto(`${base}/tutorial/chapter04.html`)
  const plot = page.locator('.tutorial-notebook figure.example').nth(1)
  await plot.getByRole('button', { name: 'Run all above' }).click()
  await plot.locator('.out svg').first().waitFor({ timeout: 30000 })
  await plot.locator('.state.ok').waitFor()

  // The standalone build (outside VitePress) uses the same library and storage key.
  await page.goto(`${base}/tutorial/apps/formats.html`)
  const standalone = page.locator('figure.example').first()
  const notebookCode = 'console.info("Shared across builds", "[not JSON]"); show(["item"]); return { nested: [17, 23] };'
  await standalone.locator('.cm-content').fill(notebookCode)
  await page.goto(`${base}/tutorial/chapter01.html`)
  const formats = page.locator('.tutorial-notebook figure.example').first()
  assert.equal(await formats.locator('.cm-content').innerText(), notebookCode)
  await formats.getByRole('button', { name: 'Run', exact: true }).click()
  const notebookOutput = formats.locator('.out')
  await notebookOutput.getByText('Shared across builds', { exact: true }).waitFor()
  await notebookOutput.getByText('[not JSON]', { exact: true }).waitFor()
  await notebookOutput.locator('summary').filter({ hasText: 'Array(1)' }).press('Enter')
  await notebookOutput.getByText('"item"', { exact: true }).waitFor()
  await notebookOutput.getByText('{1 key}', { exact: true }).click()
  const list = notebookOutput.getByText('Array(2)', { exact: true })
  assert.equal(await notebookOutput.getByText('17', { exact: true }).isVisible(), false)
  await list.click()
  await notebookOutput.getByText('17', { exact: true }).waitFor()
  await list.click()
  await notebookOutput.getByText('17', { exact: true }).waitFor({ state: 'hidden' })
  assert.deepEqual(errors, [])
  console.log('Shared editor, copy, shortcuts, persistence, tabs, Grammar views, and notebook context passed.')
} finally {
  await browser.close()
}
