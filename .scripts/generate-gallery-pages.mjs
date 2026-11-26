import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'

/**
 * Writes one VitePress page per catalog entry.
 *
 * Each page renders the site's navigation and page title, then embeds the built
 * example workspace, so a gallery example looks like the rest of the site
 * instead of a detached standalone document. Run after syncing `gallery/`:
 *   node .scripts/generate-gallery-pages.mjs
 */
const catalog = await readFile('gallery/catalog.ts', 'utf8')
const pages = 'guide/gallery/examples'

const modules = Object.fromEntries([...catalog.matchAll(/'(@?autk-[a-z]+)': \{ label: '([^']+)', color: '([^']+)' \}/g)].map((match) => [match[1], { label: match[2], color: match[3] }]))
const sections = Object.fromEntries([...catalog.matchAll(/\{ id: '([a-z]+)', title: '([^']+)'/g)].map((match) => [match[1], match[2]]))
const entries = [...catalog.matchAll(/\{ id: '([A-Z]\d{2})', section: '([a-z]+)', title: '([^']+)', description: '([^']+)', path: '([^']+)', modules: \[([^\]]+)\]/g)].map((match) => ({
  id: match[1],
  section: match[2],
  title: match[3],
  description: match[4],
  path: match[5],
  modules: match[6].split(',').map((name) => modules[name.trim().replaceAll("'", '')]).filter(Boolean),
}))

if (entries.length < 30) throw new Error(`Only ${entries.length} gallery entries found in catalog.ts.`)

await rm(pages, { recursive: true, force: true })
await mkdir(pages, { recursive: true })

for (const entry of entries) {
  const slug = entry.id.toLowerCase()
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(entry.title)}`,
    'layout: page',
    "pageClass: gallery-example-page",
    'editLink: false',
    '---',
    '',
    `<GalleryExample`,
    `  src="/gallery/apps/${entry.path}"`,
    `  title=${JSON.stringify(entry.title)}`,
    `  description=${JSON.stringify(entry.description)}`,
    `  section=${JSON.stringify(sections[entry.section] ?? entry.section)}`,
    `  :modules='${JSON.stringify(entry.modules)}'`,
    `/>`,
    '',
    `[Back to the gallery](/gallery/)`,
    '',
  ].join('\n')
  await writeFile(`${pages}/${slug}.md`, frontmatter)
}

console.log(`Wrote ${entries.length} gallery pages to ${pages}.`)
