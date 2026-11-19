// Serves autk-grammar's JSON Schema at its $id, https://autarkjs.org/schema/autk-grammar/v1.json, by copying the
// pinned package's schema into guide/public before VitePress builds. The path comes from the schema's own $id.
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const source = path.join(root, 'node_modules', '@urban-toolkit', 'autk-grammar', 'build', 'autk-grammar-schema.json')
const { $id } = JSON.parse(fs.readFileSync(source, 'utf8'))
const url = new URL($id)
if (url.hostname !== 'autarkjs.org') throw new Error(`autk-grammar's schema $id ${$id} is not on autarkjs.org`)

const target = path.join(root, 'guide', 'public', url.pathname)
fs.mkdirSync(path.dirname(target), { recursive: true })
fs.copyFileSync(source, target)
console.log(`Copied autk-grammar-schema.json -> guide/public${url.pathname}`)
