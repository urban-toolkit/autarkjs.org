<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'
import { captureConsole, executeSource, formatValue } from '../../../../playground/runtime.js'
import type { mountPlaygroundEditor } from '../../../../playground/editor.js'
import '../../../../playground/editor.css'
import JsonTree from './JsonTree.vue'

type PlaygroundFile = {
  label: string
  code: string
}

type PlaygroundMount = {
  name: string
  height?: number
  /** Optional DOM id, for libraries that look up their targets by id. */
  id?: string
  /** Element to create. Defaults to 'div'. */
  kind?: 'div' | 'canvas'
}

const props = withDefaults(defineProps<{
  /** Executable JavaScript, displayed with TypeScript highlighting. */
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
  /** Optional DOM id for the default map canvas. */
  canvasId?: string
  /** Also expose the autk-grammar exports (AutkGrammar, ...) to user code. */
  grammar?: boolean
  /** An autk-grammar spec (object literal) to show and run instead of `code`. */
  spec?: string
  /** Element ids passed to `new AutkGrammar(targets)` when running `spec`. */
  targets?: Record<string, string | string[]>
}>(), {
  renderCanvas: true,
})

const showCanvas = computed(() => props.renderCanvas)

const out = computed(() => props.out ?? 'both')
const canvasHeightStyle = computed(() => props.canvasHeight ? `${props.canvasHeight}px` : undefined)
const namedMounts = computed(() => props.mounts ?? [])
const { page } = useData()
const editorEl = ref<HTMLElement | null>(null)
let editor: ReturnType<typeof mountPlaygroundEditor> | undefined
const canvasEl = ref<HTMLCanvasElement | null>(null)
const mount = ref<HTMLDivElement | null>(null)
const namedMountRefs = ref<Record<string, HTMLElement | null>>({})
const status = ref('')
const error = ref<string | null>(null)
const isRunning = ref(false)
const consoleOutput = ref<string[]>([])
const hasDomOutput = ref(false)
const viewsEl = ref<HTMLDivElement | null>(null)
/** A grammar playground draws its maps and plots in panes arranged by the spec's `layout`, not on the default canvas. */
const arrangesViews = computed(() => props.grammar || props.spec !== undefined)
/** Starts the ids of a spec playground's view elements, so that they are unique on the page. */
const viewIdPrefix = `playground-${Math.random().toString(36).slice(2, 8)}-`

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
  if (props.spec !== undefined) {
    return [{ label: 'spec', code: normalizeCode(props.spec) }]
  }

  if (props.files && props.files.length > 0) {
    return props.files.map((file) => ({ label: file.label, code: normalizeCode(file.code) }))
  }

  return [{ label: 'example.ts', code: normalizeCode(props.code ?? '') }]
}

/** Wraps the edited spec in the code that runs it. Specs without a map or plot print their tables. */
function getSpecCode(source: string): string {
  return `
    const spec = (${source}
    )
    setStatus('Running the spec...')
    const grammar = new AutkGrammar(__viewTargets(spec, ${JSON.stringify(props.targets ?? {})}))
    await grammar.run(spec)
    clearStatus()
    if (!spec.map && !spec.plot) {
      for (const name of Object.keys(grammar.data)) {
        const table = await grammar.data[name]
        console.log(name + ': ' + table.features.length + ' features')
        console.log(table.features.slice(0, 3).map((feature) => feature.properties))
      }
    }
  `
}

function getUserCode(sources: string[]): string {
  return sources.join('\n\n')
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

/** The grammars the last run created: the next run and unmounting destroy them, which releases their maps. */
let grammars: Array<{ destroy(): void }> = []
let unmounted = false

function destroyGrammars() {
  const last = grammars
  grammars = []
  for (const grammar of last) grammar.destroy()
}

type ViewTargets = Record<string, string | string[] | undefined>
/** autk-grammar's `arrangeViews`: where each map and plot of a spec goes, as its `layout` says. */
type ArrangeViews = (spec: unknown) => {
  columns: number
  gap: number
  panes: Array<{ kind: 'map' | 'plot', index: number, row: number, column: number }>
}

/** The targets of a spec playground's grammar: the page's own, such as `db`, and an element id for each map and plot. */
function viewTargets(arrangeViews: ArrangeViews, spec: unknown, pageTargets: ViewTargets): ViewTargets {
  const ids: Record<'map' | 'plot', string[]> = { map: [], plot: [] }
  for (const pane of arrangeViews(spec).panes) ids[pane.kind][pane.index] = `${viewIdPrefix}${pane.kind}-${pane.index}`
  return {
    ...pageTargets,
    ...(ids.map.length > 0 && { map: ids.map }),
    ...(ids.plot.length > 0 && { plot: ids.plot }),
  }
}

/**
 * Places a pane for each map and plot of `spec` where `arrangeViews` puts it, on a grid of its columns, `gap` pixels
 * apart, and in it the element the view's target names: a canvas for a map, a div for a plot. Each pane is positioned,
 * since autk-map adds its controls to the canvas's parent. The panes are made at run time, so their styles are inline.
 */
function placeViews(arrangeViews: ArrangeViews, spec: unknown, targets: ViewTargets | undefined) {
  const container = viewsEl.value
  if (!container) return
  const { columns, gap, panes } = arrangeViews(spec)
  Object.assign(container.style, { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: `${gap}px` })
  const placed = new Set(Array.from(container.querySelectorAll('[data-view]'), (element) => element.id))
  for (const pane of panes) {
    const target = targets?.[pane.kind]
    const id = Array.isArray(target) ? target[pane.index] : target
    // A single plot id names one element, which holds every plot.
    if (id === undefined || placed.has(id)) continue
    placed.add(id)

    const isMap = pane.kind === 'map'
    const cell = document.createElement('div')
    Object.assign(cell.style, {
      position: 'relative',
      minWidth: '0',
      gridRow: `${pane.row + 1}`,
      gridColumn: `${pane.column + 1}`,
      ...(isMap
        ? { height: '500px', overflow: 'hidden', background: 'var(--vp-c-bg-soft)' }
        : { overflow: 'auto', padding: '12px', background: 'var(--vp-c-bg)' }),
    })
    const element = document.createElement(isMap ? 'canvas' : 'div')
    element.id = id
    element.dataset.view = pane.kind
    Object.assign(element.style, { display: 'block', width: '100%', ...(isMap && { height: '100%' }) })
    cell.appendChild(element)
    container.appendChild(cell)
  }
}

function clearViews() {
  viewsEl.value?.replaceChildren()
}

type GrammarClass = new (...args: any[]) => { destroy(): void, run(spec: unknown): Promise<unknown> }

/**
 * The AutkGrammar class user code sees. It records each grammar it makes, so the next run and unmounting can destroy
 * it, and before a run places the panes of the spec's views, in the elements the grammar's targets name.
 */
function trackGrammars<T extends GrammarClass>(Grammar: T, arrangeViews: ArrangeViews): T {
  const targetsOf = new WeakMap<object, ViewTargets | undefined>()
  return class extends Grammar {
    constructor(...args: any[]) {
      super(...args)
      targetsOf.set(this, args[0])
      grammars.push(this)
    }

    async run(spec: unknown) {
      placeViews(arrangeViews, spec, targetsOf.get(this))
      return super.run(spec)
    }
  }
}

async function runCode() {
  if (!editor || isRunning.value || unmounted) return
  const sources = editor.getSources()
  isRunning.value = true
  editor.setBusy(true)
  error.value = null
  status.value = 'Running…'
  consoleOutput.value = []

  try {
    destroyGrammars()
    clearCanvas()
    clearViews()
    clearMount()

    const autkMap = await import('@urban-toolkit/autk-map')
    const autkDb = await import('@urban-toolkit/autk-db')
    const autkCore = await import('@urban-toolkit/autk-core')
    const autkCompute = await import('@urban-toolkit/autk-compute')
    const autkPlot = await import('@urban-toolkit/autk-plot')
    const autkGrammar = props.grammar || props.spec !== undefined ? await import('@urban-toolkit/autk-grammar') : {}

    const modules: Record<string, unknown> = {
      ...autkMap,
      ...autkDb,
      ...autkCore,
      ...autkCompute,
      ...autkPlot,
      ...autkGrammar,
    }
    const arrangeViews = (autkGrammar as { arrangeViews?: ArrangeViews }).arrangeViews
    if ('AutkGrammar' in autkGrammar && arrangeViews) modules.AutkGrammar = trackGrammars(autkGrammar.AutkGrammar, arrangeViews)

    const scopeDeclarations = Object.keys(modules)
      .filter((key) => /^[$A-Z_][0-9A-Z_$]*$/i.test(key))
      .map((key) => `const ${key} = __modules.${key};`)
      .join('\n')

    const userCode = props.spec !== undefined ? getSpecCode(sources[0]) : getUserCode(sources)

    const namedMountDeclarations = getNamedMountScopeDeclarations()

    const wrapped = `
      return (async () => {
        ${scopeDeclarations}
        ${namedMountDeclarations}
        const canvas = __canvas;
        const mount = __mount;
        const console = __console;
        const output = (html) => __setMountHtml(html);
        const setStatus = (message) => __setStatus(message);
        const clearStatus = () => __clearStatus();
        const clearOutput = () => __clearMount();
        ${userCode}
      })()
    `

    const result = await executeSource(wrapped, {
      __modules: modules,
      __canvas: canvasEl.value,
      __mount: mount.value,
      __console: captureConsole((value: unknown) => consoleOutput.value.push(formatValue(value))),
      __setMountHtml: setMountHtml,
      __setStatus: setPlaygroundStatus,
      __clearStatus: clearPlaygroundStatus,
      __clearMount: clearMount,
      __namedMounts: namedMountRefs.value,
      __viewTargets: (spec: unknown, pageTargets: ViewTargets) => viewTargets(arrangeViews as ArrangeViews, spec, pageTargets),
    })
    if (result instanceof Node) mount.value?.append(result)
    else if (result !== undefined) {
      if (out.value !== 'dom') consoleOutput.value.push(formatValue(result))
      else if (mount.value) {
        const value = document.createElement('pre')
        value.textContent = formatValue(result)
        mount.value.append(value)
      }
    }

    hasDomOutput.value = (mount.value?.childNodes.length ?? 0) > 0 || namedMounts.value.length > 0
    status.value = ''
  } catch (e: any) {
    error.value = e?.message ?? String(e)
    consoleOutput.value.push(e?.message ?? String(e))
    status.value = ''
  } finally {
    isRunning.value = false
    editor?.setBusy(false)
    // A run that ends after the playground is gone still releases its maps.
    if (unmounted) destroyGrammars()
  }
}

onMounted(async () => {
  const root = editorEl.value
  if (!root) return
  const siblings = (root.closest('.vp-doc') ?? document).querySelectorAll('.code-playground__editor')
  const key = `autark-playground:${page.value.relativePath}:${Array.from(siblings).indexOf(root)}`
  const { mountPlaygroundEditor } = await import('../../../../playground/editor.js')
  if (unmounted) return
  editor = mountPlaygroundEditor(root, {
    files: buildInitialFiles(),
    title: props.spec !== undefined ? 'Live Spec' : 'Live Code',
    storageKey: key,
    onRun: runCode,
  })
  // Restore edits without executing them on page load; Run opts in to execution.
  if (props.autoRun && !editor.hasEdits()) await runCode()
})

onBeforeUnmount(() => {
  unmounted = true
  editor?.destroy()
  editor = undefined
  // A run still going destroys its grammars when it ends.
  if (!isRunning.value) destroyGrammars()
})
</script>

<template>
  <div class="code-playground">
    <div class="code-playground__label">{{ spec !== undefined ? 'Live Spec' : 'Live Code' }}</div>
    <div ref="editorEl" class="code-playground__editor" />

    <div class="code-playground__output" aria-live="polite">
      <div v-if="error && out === 'dom' && !arrangesViews && !showCanvas" class="code-playground__error">{{ error }}</div>
      <div
        v-if="arrangesViews && out !== 'console'"
        class="code-playground__views-wrap"
        :class="{ 'code-playground__views-wrap--busy': status || error }"
      >
        <div ref="viewsEl" class="code-playground__views" />
        <div v-if="status || error" class="code-playground__overlay">
          <div v-if="error" class="code-playground__error">{{ error }}</div>
          <div v-else class="code-playground__status">
            <div class="code-playground__spinner" />
            {{ status }}
          </div>
        </div>
      </div>
      <div v-else-if="showCanvas && out !== 'console'" class="code-playground__canvas-wrap" :style="canvasHeightStyle ? { height: canvasHeightStyle } : undefined">
        <canvas ref="canvasEl" class="code-playground__canvas" :id="canvasId" />
        <div v-if="status || error" class="code-playground__overlay">
          <div v-if="error" class="code-playground__error">{{ error }}</div>
          <div v-else class="code-playground__status">
            <div class="code-playground__spinner" />
            {{ status }}
          </div>
        </div>
      </div>

      <div ref="mount" class="code-playground__dom-output" :class="{ 'code-playground__dom-output--active': hasDomOutput }" />
      <div v-if="namedMounts.length > 0" class="code-playground__named-mounts">
        <component
          :is="namedMount.kind ?? 'div'"
          v-for="namedMount in namedMounts"
          :key="namedMount.name"
          :id="namedMount.id"
          class="code-playground__named-mount"
          :class="{ 'code-playground__named-mount--canvas': namedMount.kind === 'canvas' }"
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

.code-playground__canvas-wrap {
  position: relative;
  width: 100%;
  height: 500px;
  background: var(--vp-c-bg-soft);
}

.code-playground__views-wrap {
  position: relative;
}

.code-playground__views-wrap--busy {
  min-height: 120px;
}

.code-playground__views {
  display: grid;
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
  overflow-x: auto;
}

.code-playground__named-mount--canvas {
  display: block;
  width: 100%;
  background: var(--vp-c-bg-soft);
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

/* autk-plot draws its axis titles inside the axis groups, whose fill is none, and leaves their color to the page. */
.code-playground :deep(.axis-label) {
  fill: currentColor;
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
