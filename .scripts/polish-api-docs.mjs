import { readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

/**
 * Trims the repeated package header TypeDoc writes at the top of every page.
 *
 * Each generated page starts with three near-identical lines: a linked package
 * name, a rule, and a breadcrumb (`pkg / Symbol`). The sidebar and page title
 * already say both, so the site drops them, leaving the title as the first
 * element. Run after importing a new reference:
 *   node .scripts/polish-api-docs.mjs
 */
const root = new URL('../guide/api/', import.meta.url)

async function* markdown(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* markdown(path)
    else if (entry.name.endsWith('.md')) yield path
  }
}

let touched = 0
for await (const file of markdown(root.pathname)) {
  const original = await readFile(file, 'utf8')
  let text = original

  // `[**@urban-toolkit/autk-map**](../index.md)` + rule + breadcrumb.
  text = text.replace(/^\[\*\*@urban-toolkit\/[^\]]+\*\*\]\([^)]+\)\n\n\*\*\*\n\n\[[^\]]+\]\([^)]+\) \/ .+\n\n/, '')

  // A globals page has no breadcrumb: drop the same link and rule.
  text = text.replace(/^\[\*\*@urban-toolkit\/[^\]]+\*\*\]\([^)]+\)\n\n\*\*\*\n\n/, '')

  // Its only heading repeats the package name.
  text = text.replace(/^# @urban-toolkit\/([a-z-]+)$/m, '# $1')

  if (text !== original) {
    await writeFile(file, text)
    touched += 1
  }
}

console.log(`Polished ${touched} API pages.`)
