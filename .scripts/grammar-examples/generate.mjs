import fs from 'node:fs'
import path from 'node:path'
import { EXAMPLES, GROUPS } from './examples.mjs'

// Generates guide/grammar/examples/*.md and the grid/sidebar registry from the specs in an
// autk-grammar checkout. Usage: AUTK_GRAMMAR_DIR=../autk-grammar node .scripts/grammar-examples/generate.mjs
const HERE = path.dirname(new URL(import.meta.url).pathname)
const SITE = path.resolve(HERE, '../..')
const REPO = path.resolve(process.env.AUTK_GRAMMAR_DIR ?? path.join(SITE, '../autk-grammar'))
const SRC = path.join(REPO, 'gallery/src/examples')
const OUT = path.join(SITE, 'guide/grammar/examples')

// Data files that live under a different name on the site.
const URL_REWRITES = {
  '/data/mnt_pois_proj.geojson': '/data/mnt_points_test_proj.geojson',
  '/data/niteroi_lst_verao_2001_2024.tif': '/data/temperature.tif',
}
// OSM sources read local extracts (built with .scripts/build-osm-extracts.py) instead of the rate-limited Overpass API.
// A source that names its own `pbfFileUrl` keeps it; every other one takes the next extract listed for its example.
const LOWER_MANHATTAN = '/data/lower_mnt.osm.pbf'
const OSM_EXTRACTS = {
  'osm-layers-api': [LOWER_MANHATTAN],
  'compute-osm-function': [LOWER_MANHATTAN],
  'property-func-map': [LOWER_MANHATTAN],
  'spatial-join-buildings': [LOWER_MANHATTAN],
  'spatial-join-near': [LOWER_MANHATTAN],
  'heatmap-vis': [LOWER_MANHATTAN],
  'osm-layers-api-multi': [LOWER_MANHATTAN, LOWER_MANHATTAN],
  'layer-opacity': ['/data/osm/manhattan.osm.pbf'],
  'osm-layers-api-manhattan': ['/data/osm/manhattan.osm.pbf'],
  'osm-layers-api-chicago': ['/data/osm/chicago_loop.osm.pbf'],
  'osm-layers-api-niteroi': ['/data/osm/niteroi_praias_baia.osm.pbf'],
  'osm-layers-api-paris': ['/data/osm/paris_center.osm.pbf'],
}

const SPEC_FIXES = {
  // The original spec bins `landuse` from a file that has no such column.
  'histogram-brush-landuse': (s) => s.replace("'/data/mnt_neighs_proj.geojson'", "'/data/mnt_neighs_proj_landuse.geojson'"),
  // Both files are WGS84; declaring EPSG:3395 made the 200 m join match everything and run out of memory.
  'temporal-events-click': (s) => s.replace(/coordinateFormat: 'EPSG:3395'/g, "coordinateFormat: 'EPSG:4326'"),
  // The comment is about the gallery hub's console panel, which the site does not have. Beside the map, the plot has
  // half the docs column.
  'interaction-external': (s) => s.replace(/^ *\/\/ The console panel .*\n/m, '').replace('width: 420,', 'width: 300,'),
  'linked-views': (s) => s.replace('width: 560,', 'width: 300,'),
}

// Grammar enums become their string values, so specs are plain data.
const ENUMS = {}
{
  const constants = fs.readFileSync(path.join(REPO, 'grammar/src/constants.ts'), 'utf8')
  for (const [, enumName, body] of constants.matchAll(/export enum (\w+) \{([^}]*)\}/g)) {
    for (const [, key, value] of body.matchAll(/(\w+) = '([^']+)'/g)) ENUMS[`${enumName}.${key}`] = value
  }
}

// Whether the object literal holding the line at `offset`, whose keys are indented by `indent`, has the key `key`.
function objectHasKey(s, offset, indent, key) {
  const outside = (line) => line.trim() !== '' && line.length - line.trimStart().length < indent.length
  const isKey = (line) => line.startsWith(`${indent}${key}:`)
  const before = s.slice(0, offset).split('\n').slice(0, -1).reverse()
  const after = s.slice(offset).split('\n')
  for (const lines of [before, after]) {
    for (const line of lines) {
      if (outside(line)) break
      if (isKey(line)) return true
    }
  }
  return false
}

function specSource(source, slug) {
  let s = fs.readFileSync(path.join(SRC, `${source}.ts`), 'utf8').replace(/\r\n/g, '\n')
  s = s.split(/^export (async )?function afterRun/m)[0]
  const marker = 'export const spec: UrbanSpec ='
  s = s.slice(s.indexOf(marker) + marker.length).trim().replace(/;\s*$/, '')
  s = s.replace(/\s+as Array<[^>]*>/gs, '')
  // autk-db 4 has no dropOsmTable, and the grammar ignores it.
  s = s.replace(/^ *dropOsmTable: \w+,\n/gm, '')
  s = s.replace(/\b(ColorMapInterpolator|NormalizationMode)\.(\w+)/g, (m) => {
    if (!ENUMS[m]) throw new Error(`Unknown enum ${m} in ${source}`)
    return `'${ENUMS[m]}'`
  })
  for (const [from, to] of Object.entries(URL_REWRITES)) s = s.split(from).join(to)
  if (SPEC_FIXES[slug]) s = SPEC_FIXES[slug](s)
  const extracts = [...(OSM_EXTRACTS[slug] ?? [])]
  s = s.replace(/^( *)type: 'osm',\n/gm, (line, indent, offset) => {
    if (objectHasKey(s, offset, indent, 'pbfFileUrl')) return line
    const url = extracts.shift()
    if (!url) throw new Error(`No OSM extract for ${slug}`)
    return `${line}${indent}pbfFileUrl: '${url}',\n`
  })
  if (extracts.length) throw new Error(`Unused OSM extracts for ${slug}`)
  // Plots were sized for a full-window hub; fit them to the docs column.
  s = s.replace(/width: 790,/g, 'width: 600,')
  // 4-space indentation to the site's 2 spaces
  s = s.split('\n').map((line) => line.replace(/^( {4})+/, (m) => ' '.repeat(m.length / 2))).join('\n')
  if (!s.startsWith('{') || /\b(UrbanSpec|import|export)\b/.test(s)) throw new Error(`Unexpected spec source in ${source}`)
  return s
}

function targetsFor(layout) {
  switch (layout) {
    case 'map': return "{ map: 'map' }"
    case 'map+plot': return "{ map: 'map', plot: 'plot' }"
    case 'multi-map': return "{ map: ['map0', 'map1'] }"
    case 'data': return "{ db: 'tables' }"
  }
}

// The playground draws a spec's maps and plots in panes it arranges by the spec's layout (autk-grammar's arrangeViews),
// so a spec page names only the element that lists a data example's tables. A JavaScript page's code names its targets.
function playgroundFor(ex) {
  const data = ex.layout === 'data'
  const attrs = ex.javascript
    ? ['grammar', ':code="code"']
    : [':spec="spec"', ...(data ? [`:targets="${targetsFor('data')}"`] : [])]
  attrs.push(':auto-run="true"', `out="${data ? 'both' : 'dom'}"`)
  const mounts = []
  if (data) mounts.push("{ name: 'tables', id: 'tables' }")
  if (ex.events) mounts.push("{ name: 'events' }")
  if (mounts.length) attrs.push(`:mounts="[${mounts.join(', ')}]"`)
  return `<CodePlayground ${attrs.join(' ')} />`
}

function tagsFor(spec) {
  const tags = ['data']
  if (/^ {2}compute:/m.test(spec)) tags.push('compute')
  if (/^ {2}map:/m.test(spec)) tags.push('map')
  if (/^ {2}plot:/m.test(spec)) tags.push('plot')
  return tags
}

function javascriptFor(ex, spec) {
  if (ex.slug === 'embed-spec') {
    return [
      "import { AutkGrammar } from '@urban-toolkit/autk-grammar'",
      '',
      '// 1. Describe the application as a spec',
      `const spec = ${spec}`,
      '',
      '// 2. Point the grammar at the elements to draw into:',
      '//    <canvas id="map"></canvas> and <div id="plot"></div>',
      "const grammar = new AutkGrammar({ map: 'map', plot: 'plot' })",
      '',
      '// 3. Load the data and draw the map and the plot',
      'await grammar.run(spec)',
    ].join('\n')
  }
  return [
    "import { AutkGrammar } from '@urban-toolkit/autk-grammar'",
    '',
    `const spec = ${spec}`,
    '',
    "setStatus('Running the spec...')",
    `const grammar = new AutkGrammar(${targetsFor(ex.layout)})`,
    'await grammar.run(spec)',
    'clearStatus()',
    ...(ex.output ? ['', ex.output] : []),
  ].join('\n')
}

const escapeTemplate = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')

fs.rmSync(OUT, { recursive: true, force: true })
fs.mkdirSync(OUT, { recursive: true })
const registry = []

for (const ex of EXAMPLES) {
  const source = ex.source ?? ex.slug
  const spec = specSource(source, ex.slug)
  const tags = tagsFor(spec)
  const scriptVar = ex.javascript ? 'code' : 'spec'
  const scriptValue = ex.javascript ? javascriptFor(ex, spec) : spec

  const md = [
    '---',
    `title: '${ex.title.replace(/'/g, "''")}'`,
    'aside: true',
    'outline: deep',
    '---',
    '',
    '<script setup>',
    `const ${scriptVar} = \``,
    escapeTemplate(scriptValue),
    '`',
    '</script>',
    '',
    '<div class="case-tags">',
    ...tags.map((t) => `  <a class="case-tag case-tag--${t}" href="/grammar/#${t}">${t}</a>`),
    '</div>',
    '',
    `# ${ex.title}`,
    '',
    ex.description,
    '',
    '## Live Playground',
    '',
    '<ClientOnly>',
    `  ${playgroundFor(ex)}`,
    '</ClientOnly>',
    '',
    ...(ex.tip ? [':::tip Interaction', ex.tip, ':::', ''] : []),
    ...(/^ *pbfFileUrl:/m.test(spec)
      ? [':::tip OpenStreetMap data', 'This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.', ':::', '']
      : []),
    '## Highlights',
    '',
    ...ex.highlights.map((h) => `- ${h}`),
    '',
    ...(ex.slug === 'embed-spec'
      ? []
      : [`This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/${source}.ts).`, '']),
  ].join('\n')

  fs.writeFileSync(path.join(OUT, `${ex.slug}.md`), md)
  registry.push({ slug: ex.slug, group: ex.group, title: ex.title, description: ex.description, tags })
}

fs.copyFileSync(path.join(HERE, 'index.md'), path.join(OUT, 'index.md'))

const quote = (v) => `'${v.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
const ts = `// Grammar examples shown at /grammar/examples/, used by the gallery grid and the sidebar.

export type GrammarExample = {
  slug: string
  group: string
  title: string
  description: string
  tags: string[]
}

export const GRAMMAR_EXAMPLE_GROUPS = [
${GROUPS.map((g) => `  ${quote(g)},`).join('\n')}
]

export const GRAMMAR_EXAMPLES: GrammarExample[] = [
${registry.map((r) => `  {
    slug: ${quote(r.slug)},
    group: ${quote(r.group)},
    title: ${quote(r.title)},
    description: ${quote(r.description)},
    tags: [${r.tags.map(quote).join(', ')}],
  },`).join('\n')}
]
`
fs.mkdirSync(path.join(SITE, 'guide/.vitepress/theme/data'), { recursive: true })
fs.writeFileSync(path.join(SITE, 'guide/.vitepress/theme/data/grammarExamples.ts'), ts)
console.log(`wrote ${registry.length} pages`)
