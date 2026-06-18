<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useData } from 'vitepress'
import { createHighlighter } from 'shiki'
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript'
import JsonTree from './JsonTree.vue'

let shikiSingleton: Awaited<ReturnType<typeof createHighlighter>> | null = null
let shikiSingletonPromise: Promise<Awaited<ReturnType<typeof createHighlighter>>> | null = null

type PlaygroundFile = {
  label: string
  code: string
}

type PlaygroundMount = {
  name: string
  height?: number
}

const props = withDefaults(defineProps<{
  /** The TypeScript source code to display and execute. */
  code?: string
  /** Optional tabbed source files shown in the editor and concatenated for execution. */
  files?: PlaygroundFile[]
  /** Optional named DOM mounts exposed to user code. */
  mounts?: PlaygroundMount[]
  /** Which output panels to show. Defaults to 'both'. */
  out?: 'dom' | 'console' | 'both'
  /** Run the example automatically after the editor is ready. */
  autoRun?: boolean
  /** Optional fixed canvas height in pixels. */
  canvasHeight?: number
  /** Whether to render the default map canvas. Defaults to true. */
  renderCanvas?: boolean
}>(), {
  renderCanvas: true,
})

const showCanvas = computed(() => props.renderCanvas)

const out = computed(() => props.out ?? 'both')
const canvasHeightStyle = computed(() => props.canvasHeight ? `${props.canvasHeight}px` : undefined)
const namedMounts = computed(() => props.mounts ?? [])
const { isDark } = useData()

const defaultFiles = ref<PlaygroundFile[]>([])
const editableFiles = ref<PlaygroundFile[]>([])
const activeFileIndex = ref(0)
const highlightedCode = ref('')
const canvasEl = ref<HTMLCanvasElement | null>(null)
const mount = ref<HTMLDivElement | null>(null)
const namedMountRefs = ref<Record<string, HTMLElement | null>>({})
const status = ref('')
const error = ref<string | null>(null)
const isRunning = ref(false)
const consoleOutput = ref<string[]>([])
const hasDomOutput = ref(false)

let shiki: Awaited<ReturnType<typeof createHighlighter>> | null = null

const hasTabs = computed(() => editableFiles.value.length > 1)
const activeFile = computed(() => editableFiles.value[activeFileIndex.value] ?? null)
const editableCode = computed({
  get: () => activeFile.value?.code ?? '',
  set: (value: string) => {
    const file = editableFiles.value[activeFileIndex.value]
    if (file) file.code = value
  },
})

function normalizeCode(src: string): string {
  const lines = src.split('\n')
  while (lines.length && lines[0].trim() === '') lines.shift()
  while (lines.length && lines[lines.length - 1].trim() === '') lines.pop()
  if (lines.length === 0) return ''
  const firstIndent = lines[0].match(/^(\s*)/)?.[1] ?? ''
  if (firstIndent) {
    return lines.map((line) => (line.startsWith(firstIndent) ? line.slice(firstIndent.length) : line)).join('\n')
  }
  return lines.join('\n')
}

function buildInitialFiles(): PlaygroundFile[] {
  if (props.files && props.files.length > 0) {
    return props.files.map((file) => ({ label: file.label, code: normalizeCode(file.code) }))
  }

  return [{ label: 'example.ts', code: normalizeCode(props.code ?? '') }]
}

function getUserCode(): string {
  return editableFiles.value
    .map((file) => file.code)
    .join('\n\n')
    .replace(/import\s*{[^}]*}\s*from\s*["'][^"']*["']\s*;?/g, '')
    .trim()
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

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function highlight(src: string): string {
  if (!shiki) return escapeHtml(src)
  const tokens = shiki.codeToTokens(src, {
    lang: 'typescript',
    theme: isDark.value ? 'github-dark' : 'github-light',
  })
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

function setActiveFile(index: number) {
  activeFileIndex.value = index
  updateHighlight()
}

function onTabKey(e: KeyboardEvent) {
  if (e.key === 'Tab') {
    e.preventDefault()
    const ta = e.target as HTMLTextAreaElement
    const start = ta.selectionStart
    const end = ta.selectionEnd
    editableCode.value = editableCode.value.substring(0, start) + '  ' + editableCode.value.substring(end)
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = start + 2
    })
    updateHighlight()
  }
}

function clearCanvas() {
  const el = canvasEl.value
  if (!el) return
  const width = Math.max(1, el.clientWidth)
  const height = Math.max(1, el.clientHeight)
  el.width = width
  el.height = height
}

function clearMount() {
  if (mount.value) {
    mount.value.innerHTML = ''
  }
  for (const mountName of Object.keys(namedMountRefs.value)) {
    const el = namedMountRefs.value[mountName]
    if (el) el.innerHTML = ''
  }
  hasDomOutput.value = false
}

function setMountHtml(html: string) {
  if (!mount.value) return
  mount.value.innerHTML = html
  hasDomOutput.value = html.trim().length > 0 || namedMounts.value.length > 0
}

function setNamedMountRef(name: string, el: HTMLElement | null) {
  namedMountRefs.value[name] = el
}

function getNamedMountScopeDeclarations(): string {
  return namedMounts.value
    .filter((mount) => /^[$A-Z_][0-9A-Z_$]*$/i.test(mount.name))
    .map((mount) => `const ${mount.name} = __namedMounts.${mount.name};`)
    .join('\n')
}

function setPlaygroundStatus(message: string) {
  status.value = message
}

function clearPlaygroundStatus() {
  status.value = ''
}

async function runCode() {
  isRunning.value = true
  error.value = null
  status.value = 'Running…'
  consoleOutput.value = []
  clearCanvas()
  clearMount()

  try {
    const autkMap = await import('@urban-toolkit/autk-map')
    const autkDb = await import('@urban-toolkit/autk-db')
    const autkCore = await import('@urban-toolkit/autk-core')
    const autkCompute = await import('@urban-toolkit/autk-compute')
    const autkPlot = await import('@urban-toolkit/autk-plot')

    const modules = {
      ...autkMap,
      ...autkDb,
      ...autkCore,
      ...autkCompute,
      ...autkPlot,
    }

    const scopeDeclarations = Object.keys(modules)
      .filter((key) => /^[$A-Z_][0-9A-Z_$]*$/i.test(key))
      .map((key) => `const ${key} = __modules.${key};`)
      .join('\n')

    const userCode = getUserCode()

    const namedMountDeclarations = getNamedMountScopeDeclarations()

    const wrapped = `
      return (async () => {
        ${scopeDeclarations}
        ${namedMountDeclarations}
        const canvas = __canvas;
        const mount = __mount;
        const console = {
          log: (...args) => __appendConsole('log', args.map(a => typeof a === 'string' ? a : JSON.stringify(a, null, 2)).join(' ')),
          error: (...args) => __appendConsole('error', args.map(a => typeof a === 'string' ? a : JSON.stringify(a, null, 2)).join(' ')),
          warn: (...args) => __appendConsole('warn', args.map(a => typeof a === 'string' ? a : JSON.stringify(a, null, 2)).join(' ')),
        };
        const output = (html) => __setMountHtml(html);
        const setStatus = (message) => __setStatus(message);
        const clearStatus = () => __clearStatus();
        const clearOutput = () => __clearMount();
        ${userCode}
      })()
    `

    const AsyncFunction = Object.getPrototypeOf(async function () { }).constructor
    const appendConsole = (_type: 'log' | 'error' | 'warn', message: string) => {
      consoleOutput.value = [...consoleOutput.value, message]
    }

    await new AsyncFunction(
      '__modules',
      '__canvas',
      '__mount',
      '__appendConsole',
      '__setMountHtml',
      '__setStatus',
      '__clearStatus',
      '__clearMount',
      '__namedMounts',
      wrapped,
    )(
      modules,
      canvasEl.value,
      mount.value,
      appendConsole,
      setMountHtml,
      setPlaygroundStatus,
      clearPlaygroundStatus,
      clearMount,
      namedMountRefs.value,
    )

    hasDomOutput.value = (mount.value?.childNodes.length ?? 0) > 0 || namedMounts.value.length > 0
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
  editableFiles.value = defaultFiles.value.map((file) => ({ ...file }))
  activeFileIndex.value = 0
  updateHighlight()
}

onMounted(async () => {
  defaultFiles.value = buildInitialFiles()
  editableFiles.value = defaultFiles.value.map((file) => ({ ...file }))

  if (!shikiSingletonPromise) {
    const jsEngine = createJavaScriptRegexEngine()
    shikiSingletonPromise = createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['typescript'],
      engine: jsEngine,
    })
  }

  shikiSingleton = await shikiSingletonPromise
  shiki = shikiSingleton
  updateHighlight()

  if (props.autoRun) {
    await runCode()
  }
})

watch(isDark, () => {
  updateHighlight()
})
</script>

<template>
  <div class="code-playground" aria-live="polite">
    <div class="code-playground__label">Live Code</div>

    <div class="code-playground__editor">
      <div v-if="hasTabs" class="code-playground__file-tabs" role="tablist" aria-label="Code files">
        <button
          v-for="(file, index) in editableFiles"
          :key="file.label"
          type="button"
          class="code-playground__file-tab"
          :class="{ 'code-playground__file-tab--active': index === activeFileIndex }"
          :aria-selected="index === activeFileIndex"
          @click="setActiveFile(index)"
        >
          {{ file.label }}
        </button>
      </div>

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
      <div v-if="showCanvas && out !== 'console'" class="code-playground__canvas-wrap" :style="canvasHeightStyle ? { height: canvasHeightStyle } : undefined">
        <canvas ref="canvasEl" class="code-playground__canvas" />
        <div v-if="status || error" class="code-playground__overlay">
          <div v-if="error" class="code-playground__error">{{ error }}</div>
          <div v-else class="code-playground__status">
            <div class="code-playground__spinner" />
            {{ status }}
          </div>
        </div>
      </div>

      <div v-if="out !== 'console' && hasDomOutput" class="code-playground__output-label">Output</div>
      <div ref="mount" class="code-playground__dom-output" :class="{ 'code-playground__dom-output--active': hasDomOutput }" />
      <div v-if="namedMounts.length > 0" class="code-playground__named-mounts">
        <div
          v-for="namedMount in namedMounts"
          :key="namedMount.name"
          class="code-playground__named-mount"
          :style="namedMount.height ? { height: `${namedMount.height}px` } : undefined"
          :ref="(el) => setNamedMountRef(namedMount.name, el as HTMLElement | null)"
        />
      </div>

      <div v-if="out !== 'dom'" class="code-playground__console">
        <div class="code-playground__console-label">Console Output</div>
        <div class="code-playground__console-lines">
          <template v-if="consoleOutput.length === 0 && !hasDomOutput">
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

.code-playground__file-tabs {
  display: flex;
  gap: 8px;
  padding: 8px 12px 0;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-playground__file-tab {
  border: 1px solid var(--vp-c-divider);
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 7px 12px;
}

.code-playground__file-tab--active {
  background: var(--vp-code-block-bg);
  color: var(--vp-c-text-1);
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

.code-playground__canvas-wrap {
  position: relative;
  width: 100%;
  height: 500px;
  background: var(--vp-c-bg-soft);
}

.code-playground__output-label {
  border-bottom: 1px solid var(--vp-c-divider);
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  text-transform: uppercase;
}

.code-playground__canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.code-playground__dom-output {
  min-height: 0;
}

.code-playground__dom-output:empty {
  display: none;
}

.code-playground__dom-output--active {
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 12px;
}

.code-playground__dom-output--active :deep(*) {
  box-sizing: border-box;
}

.code-playground__named-mounts {
  display: grid;
  gap: 12px;
  padding: 12px;
  border-top: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}

.code-playground__named-mount {
  min-height: 120px;
}

.code-playground :deep(.autk-table-container) {
  border: none !important;
  border-radius: 0 !important;
  display: flex;
  justify-content: center;
}

.code-playground :deep(.autk-table) {
  width: auto !important;
  margin: 0 auto !important;
  text-align: center !important;
}

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
  color: var(--vp-c-text-1);
  font-size: 0.9rem;
  font-family: monospace;
  background: color-mix(in srgb, var(--vp-c-bg) 82%, transparent);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 10px 14px;
}

.code-playground__spinner {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 2px solid color-mix(in srgb, var(--vp-c-text-2) 25%, transparent);
  border-top-color: var(--vp-c-text-1);
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
