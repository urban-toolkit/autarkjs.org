import { createEditor } from './vendor/codemirror.js'
export { highlightStatic } from './vendor/codemirror.js'

let nextEditorId = 0

/**
 * Mount the common file editor and controls. The host supplies execution and owns output.
 * Single-file edits retain the tutorial's existing { original, code } storage format.
 * @param {HTMLElement} root
 * @param {{ files: { label: string, code: string }[], title: string, storageKey: string,
 *   onRun: () => unknown, onRunAll?: () => unknown }} options
 */
export function mountPlaygroundEditor(root, { files, title, storageKey, onRun, onRunAll }) {
  const originals = files.map(file => file.code)
  const single = files.length === 1
  const original = single ? originals[0] : JSON.stringify(originals)
  let restored
  try {
    const entry = JSON.parse(localStorage.getItem(storageKey) ?? 'null')
    const saved = single ? [entry?.code] : entry?.code
    if (entry?.original === original && Array.isArray(saved) &&
        saved.length === files.length && saved.every(code => typeof code === 'string')) restored = saved
  } catch { /* Storage may be disabled or corrupt. */ }
  const code = restored ?? [...originals]

  root.classList.add('playground-editor')
  root.innerHTML = `
    <div class="playground-tabs" role="tablist" aria-label="Code files" hidden></div>
    <div class="playground-panes"></div>
    <div class="playground-toolbar">
      <button type="button" class="run" title="Run (⌘/Ctrl + Enter)">Run</button>
      ${onRunAll ? '<button type="button" class="all" title="Run every example above this one, then this example">Run all above</button>' : ''}
      <button type="button" class="reset">Reset</button>
      <button type="button" class="copy">Copy</button>
      <span class="playground-edits" aria-live="polite" hidden></span>
      <span class="playground-shortcut" aria-hidden="true">⌘/Ctrl + Enter</span>
    </div>`
  const tabs = root.querySelector('.playground-tabs')
  const panes = root.querySelector('.playground-panes')
  const run = root.querySelector('.run')
  const runAll = root.querySelector('.all')
  const copy = root.querySelector('.copy')
  const edits = root.querySelector('.playground-edits')
  const id = `playground-editor-${++nextEditorId}`
  const entries = files.map((file, index) => {
    const tab = document.createElement('button')
    const pane = document.createElement('div')
    if (!single) {
      tab.type = 'button'
      tab.id = `${id}-tab-${index}`
      pane.id = `${id}-pane-${index}`
      tab.setAttribute('role', 'tab')
      tab.setAttribute('aria-controls', pane.id)
      pane.setAttribute('role', 'tabpanel')
      pane.setAttribute('aria-labelledby', tab.id)
      tab.textContent = file.label
      tab.addEventListener('click', () => select(index))
      tabs.append(tab)
    }
    panes.append(pane)
    return { tab, pane, editor: null }
  })
  tabs.hidden = single
  let active = 0
  let busy = false
  let resetting = false
  let copyTimer
  let disposed = false
  const requestRun = () => { if (!busy && !disposed) onRun() }
  run.addEventListener('click', requestRun)
  runAll?.addEventListener('click', () => { if (!busy && !disposed) onRunAll() })
  tabs.addEventListener('keydown', (event) => {
    let index
    switch (event.key) {
      case 'ArrowLeft': index = (active + entries.length - 1) % entries.length; break
      case 'ArrowRight': index = (active + 1) % entries.length; break
      case 'Home': index = 0; break
      case 'End': index = entries.length - 1; break
      default: return
    }
    event.preventDefault()
    select(index)
    entries[index].tab.focus()
  })

  function save() {
    const dirty = code.some((value, index) => value !== originals[index])
    let saved = false
    try {
      if (dirty) localStorage.setItem(storageKey, JSON.stringify({ original, code: single ? code[0] : code }))
      else localStorage.removeItem(storageKey)
      saved = true
    } catch { /* Keep the in-memory edit if storage is unavailable. */ }
    edits.hidden = !dirty
    edits.textContent = saved ? 'Edits saved' : 'Edited'
  }

  function select(index) {
    active = index
    for (const [i, entry] of entries.entries()) {
      entry.tab.setAttribute('aria-selected', String(i === index))
      entry.tab.tabIndex = i === index ? 0 : -1
      entry.pane.hidden = i !== index
    }
    const entry = entries[index]
    if (entry.editor) return
    const file = files[index]
    entry.editor = createEditor(entry.pane, code[index], {
      onChange: () => {
        if (resetting) return
        code[index] = entry.editor.get()
        save()
      },
      onRun: requestRun,
      label: single ? `${title} source code` : `${file.label} source code`,
      typescript: /\.tsx?$/.test(file.label),
    })
  }

  root.querySelector('.reset').addEventListener('click', () => {
    resetting = true
    for (const [i, entry] of entries.entries()) {
      code[i] = originals[i]
      if (entry.editor && entry.editor.get() !== originals[i]) entry.editor.set(originals[i])
    }
    resetting = false
    select(0)
    save()
  })
  copy.addEventListener('click', async () => {
    let label = 'Copied'
    try { await navigator.clipboard.writeText(code[active]) } catch { label = 'Copy failed' }
    if (disposed) return
    copy.textContent = label
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copy.textContent = 'Copy' }, 1200)
  })

  select(0)
  edits.hidden = !code.some((value, index) => value !== originals[index])
  edits.textContent = 'Edits saved'
  return {
    getSources: () => [...code],
    hasEdits: () => code.some((value, index) => value !== originals[index]),
    setBusy(value) {
      busy = value
      run.disabled = busy
      run.textContent = busy ? 'Running…' : 'Run'
      if (runAll) runAll.disabled = busy
    },
    destroy() {
      disposed = true
      clearTimeout(copyTimer)
      for (const entry of entries) entry.editor?.destroy()
      root.replaceChildren()
    },
  }
}
