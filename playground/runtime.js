const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor

/** Run a trusted editable snippet with the bindings supplied by its host. */
export function executeSource(source, scope) {
  const bindings = Object.entries(scope)
  const run = new AsyncFunction(...bindings.map(([name]) => name), source)
  return run(...bindings.map(([, value]) => value))
}

/** Route console output and optional clearing to the playground without hiding other methods. */
export function captureConsole(emit, clear) {
  const log = (...values) => values.forEach(value => emit(value))
  return Object.assign(Object.create(globalThis.console), { log, info: log, warn: log, error: log, debug: log, ...(clear && { clear }) })
}

/** Keep structured values readable in the console even when they are not plain JSON. */
export function formatValue(value) {
  if (typeof value === 'string') return value
  const seen = new WeakSet()
  return JSON.stringify(value, (_key, entry) => {
    if (typeof entry === 'bigint') return Number.isSafeInteger(Number(entry)) ? Number(entry) : String(entry)
    if (entry && typeof entry === 'object') {
      if (seen.has(entry)) return '[circular]'
      seen.add(entry)
    }
    if (entry instanceof Map) return Object.fromEntries(entry)
    if (entry instanceof Set) return [...entry]
    if (ArrayBuffer.isView(entry) && !(entry instanceof DataView)) return `${entry.constructor.name}(${entry.length})`
    if (entry instanceof ArrayBuffer) return `ArrayBuffer(${entry.byteLength})`
    return entry
  }, 2) ?? String(value)
}
