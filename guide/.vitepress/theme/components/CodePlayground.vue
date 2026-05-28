<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { createHighlighter } from 'shiki'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'
import JsonTree from './JsonTree.vue'

let shikiSingleton: Awaited<ReturnType<typeof createHighlighter>> | null = null
let shikiSingletonPromise: Promise<Awaited<ReturnType<typeof createHighlighter>>> | null = null

const props = defineProps<{
  /** The TypeScript source code to display and execute. */
  code: string
  /** Which output panels to show. Defaults to 'both'. */
  out?: 'dom' | 'console' | 'both'
}>()

const out = computed(() => props.out ?? 'both')

const defaultCode = ref('')
const editableCode = ref('')
const highlightedCode = ref('')
const canvas = ref<HTMLCanvasElement | null>(null)
const status = ref('')
const error = ref<string | null>(null)
const isRunning = ref(false)
const consoleOutput = ref<string[]>([])
const headerOutput = ref<string>('')

let shiki: Awaited<ReturnType<typeof createHighlighter>> | null = null

function normalizeCode(src: string): string {
  const lines = src.split('\n')
  // Strip leading/trailing blank lines
  while (lines.length && lines[0].trim() === '') lines.shift()
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop()
  if (lines.length === 0) return ''
  // Detect and strip common leading indent
  const firstIndent = lines[0].match(/^(\s*)/)?.[1] ?? ''
  if (firstIndent) {
    return lines.map((line) => (line.startsWith(firstIndent) ? line.slice(firstIndent.length) : line)).join('\n')
  }
  return lines.join('\n')
}

function isJson(str: string): boolean {
  const trimmed = str.trim()
  return (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
         (trimmed.startsWith('[') && trimmed.endsWith(']'))
}

function parseJson(str: string): unknown {
  try {
    return JSON.parse(str)
  } catch {
    return str
  }
}

// --- Shiki highlighting ---

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlight(src: string): string {
  if (!shiki) return escapeHtml(src)
  const tokens = shiki.codeToTokens(src, { lang: 'typescript', theme: 'github-dark' })
  return tokens.tokens
    .map((line) => {
      const spans = line
        .map((t) => {
          const style = t.color ? `color:${t.color}` : ''
          const fontStyle = t.fontStyle ?? 0
          const classes: string[] = []
          if (fontStyle & 1) classes.push('italic')
          if (fontStyle & 2) classes.push('bold')
          if (fontStyle & 4) classes.push('underline')
          const cls = classes.length ? ` class="${classes.join(' ')}"` : ''
          return style
            ? `<span${cls} style="${style}">${escapeHtml(t.content)}</span>`
            : `<span${cls}>${escapeHtml(t.content)}</span>`
        })
        .join('')
      return `<span class="line">${spans || ' '}</span>`
    })
    .join('')
}

async function updateHighlight() {
  highlightedCode.value = highlight(editableCode.value)
}

// Allow Tab key to insert spaces instead of losing focus
function onTabKey(e: KeyboardEvent) {
  if (e.key === 'Tab') {
    e.preventDefault()
    const ta = e.target as HTMLTextAreaElement
    const start = ta.selectionStart
    const end = ta.selectionEnd
    editableCode.value = editableCode.value.substring(0, start) + '  ' + editableCode.value.substring(end)
    // Re-highlight and restore cursor position
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = start + 2
    })
    updateHighlight()
  }
}

// --- Run code ---

async function runCode() {
  isRunning.value = true
  error.value = null
  status.value = 'Running…'
  consoleOutput.value = []
  headerOutput.value = ''

  try {
    const { AutkMap } = await import('@urban-toolkit/autk-map')
    const { AutkDb } = await import('@urban-toolkit/autk-db')

    const userCode = editableCode.value
      .replace(/import\s*{[^}]*}\s*from\s*["'][^"']*["']\s*;?/g, '')
      .trim()

    const wrapped = `
      return (async () => {
        const AutkMap = __modules.AutkMap;
        const AutkDb = __modules.AutkDb;
        const canvas = __canvas;
        const console = {
          log: (...args) => __consoleOut.push({ type: 'log', message: args.map(a => typeof a === 'string' ? a : JSON.stringify(a, null, 2)).join(' ') }),
          error: (...args) => __consoleOut.push({ type: 'error', message: args.map(a => typeof a === 'string' ? a : JSON.stringify(a, null, 2)).join(' ') }),
          warn: (...args) => __consoleOut.push({ type: 'warn', message: args.map(a => typeof a === 'string' ? a : JSON.stringify(a, null, 2)).join(' ') }),
        };
        const output = (html) => { __htmlOut.value = html; };
        ${userCode}
      })()
    `

    const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor
    const consoleOut: Array<{ type: 'log' | 'error' | 'warn'; message: string }> = []
    const htmlOut = { value: '' }

    await new AsyncFunction('__modules', '__canvas', '__consoleOut', '__htmlOut', wrapped)(
      { AutkMap, AutkDb },
      canvas.value,
      consoleOut,
      htmlOut,
    )

    consoleOutput.value = consoleOut.map((e) => e.message)
    headerOutput.value = htmlOut.value
    status.value = ''
  } catch (e: any) {
    error.value = e?.message ?? String(e)
    consoleOutput.value.push(e?.message ?? String(e))
    status.value = ''
  } finally {
    isRunning.value = false
  }
}

function resetCode() {
  editableCode.value = defaultCode.value
  updateHighlight()
}

onMounted(async () => {
  defaultCode.value = normalizeCode(props.code)
  editableCode.value = defaultCode.value

  if (!shikiSingletonPromise) {
    const jsEngine = createJavaScriptRegexEngine()
    shikiSingletonPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['typescript'],
      engine: jsEngine,
    })
  }

  shikiSingleton = await shikiSingletonPromise
  shiki = shikiSingleton
  updateHighlight()
})
</script>

<template>
  <div class="code-playground" aria-live="polite">
    <div class="code-playground__label">Live Code</div>

    <div class="code-playground__editor">
      <div class="code-playground__code-wrap">
        <div
          class="code-playground__highlight"
          aria-hidden="true"
          v-html="highlightedCode"
        />
        <textarea
          v-model="editableCode"
          class="code-playground__textarea"
          spellcheck="false"
          @input="updateHighlight"
          @keydown="onTabKey"
        />
      </div>

      <div class="code-playground__toolbar">
        <button
          class="code-playground__btn code-playground__btn--run"
          :disabled="isRunning"
          @click="runCode"
        >
          {{ isRunning ? 'Running…' : '▶ Run' }}
        </button>
        <button
          class="code-playground__btn code-playground__btn--reset"
          @click="resetCode"
        >
          ↺ Reset
        </button>
      </div>
    </div>

    <div class="code-playground__output">
      <!-- Output section header: only shown when there is HTML output -->
      <div v-if="out !== 'dom' && headerOutput" class="code-playground__output-label">Output</div>

      <!-- DOM / Canvas Output -->
      <div v-if="out !== 'console'" class="code-playground__canvas-wrap">
        <canvas ref="canvas" class="code-playground__canvas" />
        <div v-if="status || error" class="code-playground__overlay">
          <div v-if="error" class="code-playground__error">{{ error }}</div>
          <div v-else class="code-playground__status">
            <div class="code-playground__spinner" />
            {{ status }}
          </div>
        </div>
      </div>

      <!-- HTML Output -->
      <div v-if="out !== 'dom' && headerOutput" class="code-playground__html-output">
        <div class="code-playground__html-output-body" v-html="headerOutput" />
      </div>

      <!-- Console Output -->
      <div v-if="out !== 'dom'" class="code-playground__console">
        <div class="code-playground__console-label">Console Output</div>
        <div class="code-playground__console-lines">
          <template v-if="consoleOutput.length === 0 && !headerOutput">
            <span class="code-playground__console-placeholder">Output will appear here…</span>
          </template>
          <template v-else>
            <div
              v-for="(line, i) in consoleOutput"
              :key="i"
              class="code-playground__console-line"
            >
              <JsonTree v-if="isJson(line)" :value="parseJson(line)" />
              <span v-else v-text="line" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-playground {
  position: relative;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  background: var(--vp-code-block-bg);
}

.code-playground__label {
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  padding: 8px 12px;
  text-transform: uppercase;
}

.code-playground__editor {
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-playground__toolbar {
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
}

.code-playground__btn {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 12px;
  transition: background-color 0.15s;
}

.code-playground__btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.code-playground__btn--run {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.code-playground__btn--run:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}

.code-playground__btn--reset {
  background: var(--vp-c-default-3);
  color: var(--vp-c-text-1);
}

.code-playground__btn--reset:hover {
  background: var(--vp-c-default-2);
}

/* --- Code area: grid overlay technique --- */

.code-playground__code-wrap {
  display: grid;
  max-height: 800px;
  overflow: auto;
}

.code-playground__highlight,
.code-playground__textarea {
  grid-area: 1 / 1;
  margin: 0;
  padding: 12px;
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  line-height: 21px;
  tab-size: 2;
  -moz-tab-size: 2;
  white-space: pre;
  border: none;
  background: transparent;
  overflow-wrap: normal;
  word-wrap: normal;
}

.code-playground__highlight {
  pointer-events: none;
}

/* Ensure Shiki spans render correctly */
:deep(.code-playground__highlight span[style]) {
  background: none !important;
}

:deep(.code-playground__highlight .line) {
  display: block;
}

.code-playground__textarea {
  color: transparent;
  caret-color: var(--vp-c-text-1);
  outline: none;
  resize: none;
  -webkit-text-fill-color: transparent;
}

.code-playground__textarea::selection {
  background: rgba(96, 165, 250, 0.25);
}

/* --- Canvas output --- */

.code-playground__canvas-wrap {
  position: relative;
  width: 100%;
  height: 500px;
  background: #1a1a2e;
}

/* Output header label */
.code-playground__output-label {
  border-bottom: 1px solid var(--vp-c-divider);
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  text-transform: uppercase;
}

/* When canvas + other panels are shown, shrink canvas slightly */
.code-playground__output:has(.code-playground__console) .code-playground__canvas-wrap,
.code-playground__output:has(.code-playground__html-output) .code-playground__canvas-wrap {
  height: 350px;
}

/* When both HTML output and console are shown, shrink canvas more */
.code-playground__output:has(.code-playground__console):has(.code-playground__html-output) .code-playground__canvas-wrap {
  height: 280px;
}

.code-playground__canvas {
  width: 100%;
  height: 100%;
  display: block;
}

/* --- Header / HTML output --- */

.code-playground__html-output {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  max-height: 200px;
  overflow: auto;
}

.code-playground__html-output-body {
  padding: 12px;
}

.code-playground__html-output-body :deep(*) {
  margin: 0;
}

/* --- Console output --- */

.code-playground__console {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-code-block-bg);
  max-height: 250px;
  display: flex;
  flex-direction: column;
}

.code-playground__console-label {
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  text-transform: uppercase;
  flex-shrink: 0;
}

.code-playground__console-lines {
  overflow-y: auto;
  padding: 8px 12px;
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  line-height: 1.6;
  flex: 1;
}

.code-playground__console-placeholder {
  color: var(--vp-c-text-3);
  font-style: italic;
}

.code-playground__console-line {
  color: var(--vp-c-text-1);
  word-break: break-word;
  white-space: pre-wrap;
}

.code-playground__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.code-playground__status {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  font-family: monospace;
}

.code-playground__spinner {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-top-color: rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  animation: autk-spin 0.8s linear infinite;
}

.code-playground__error {
  color: var(--vp-c-danger-1);
  font-family: monospace;
  font-size: 0.85rem;
  text-align: center;
  max-width: 90%;
  white-space: pre-wrap;
}

@keyframes autk-spin {
  to { transform: rotate(360deg); }
}
</style>
