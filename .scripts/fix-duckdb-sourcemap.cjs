const fs = require('fs')
const path = require('path')

const mapPath = path.join(
  __dirname,
  '..',
  'node_modules',
  '@urban-toolkit',
  'autk-db',
  'dist',
  'duckdb-browser-eh.worker.js.map'
)

const emptyMap = {
  version: 3,
  file: 'duckdb-browser-eh.worker.js',
  sources: [],
  sourcesContent: [],
  names: [],
  mappings: ''
}

try {
  if (!fs.existsSync(mapPath)) {
    fs.mkdirSync(path.dirname(mapPath), { recursive: true })
    fs.writeFileSync(mapPath, JSON.stringify(emptyMap))
    console.log(`Created missing sourcemap: ${mapPath}`)
  }
} catch (error) {
  console.warn('Failed to create duckdb worker sourcemap:', error)
}
