const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const sourceDir = path.join(root, 'node_modules', '@urban-toolkit', 'autk-db', 'dist')
const targetDir = path.join(root, 'guide', 'public', 'assets', 'chunks')

const files = [
  'duckdb-browser-eh.worker.js',
  'duckdb-browser-mvp.worker.js',
  'duckdb-eh.wasm',
  'duckdb-mvp.wasm',
]

try {
  fs.mkdirSync(targetDir, { recursive: true })

  for (const file of files) {
    const src = path.join(sourceDir, file)
    const dst = path.join(targetDir, file)
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dst)
      console.log(`Copied ${file} -> guide/public/assets/chunks/`)
    }
  }
} catch (error) {
  console.warn('Failed to sync DuckDB runtime assets:', error)
}
