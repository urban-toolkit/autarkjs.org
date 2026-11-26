/** Render formatted JSON as a lazy, keyboard-accessible tree, or leave other text as-is. */
export function renderTextOutput(text, plainTag = 'pre') {
  const trimmed = text.trim()
  if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
    try {
      return renderNode(JSON.parse(trimmed))
    } catch { /* Invalid JSON is plain text. */ }
  }
  const plain = document.createElement(plainTag)
  plain.className = 'playground-card__text'
  plain.textContent = text
  return plain
}

function renderNode(value, key) {
  const isObject = value !== null && typeof value === 'object'
  const node = document.createElement(isObject ? 'details' : 'div')
  node.className = isObject ? 'playground-tree' : 'playground-tree__leaf'
  const label = isObject ? document.createElement('summary') : node
  if (key !== undefined) {
    const name = document.createElement('span')
    name.className = 'playground-tree__key'
    name.textContent = typeof key === 'number' ? String(key) : JSON.stringify(key)
    label.append(name, ': ')
  }
  const preview = document.createElement('span')
  preview.className = 'playground-tree__value'
  label.append(preview)
  if (!isObject) {
    preview.textContent = JSON.stringify(value)
    return node
  }

  const array = Array.isArray(value)
  const keys = array ? null : Object.keys(value)
  const count = array ? value.length : keys.length
  preview.textContent = array ? `Array(${count})` : `{${count} ${count === 1 ? 'key' : 'keys'}}`
  node.append(label)
  node.addEventListener('toggle', function expand() {
    if (!node.open) return
    node.removeEventListener('toggle', expand)
    const children = document.createElement('div')
    children.className = 'playground-tree__children'
    for (let i = 0; i < count; i++) {
      const key = array ? i : keys[i]
      children.append(renderNode(value[key], key))
    }
    node.append(children)
  })
  return node
}
