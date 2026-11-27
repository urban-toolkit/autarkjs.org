// Turns every <figure class="example"> into an editable, runnable cell.
// Unlike the isolated examples in d3-in-one-page, these cells share state, like cells in a notebook:
// the code is the body of an async function that receives
//   ctx    an object shared by every example on the page (keep the database, loaded layers, ... here)
//   out    the visual-output <div>, for map and plot elements
//   show   show(value) and `return value` render values in the separate console area (Nodes in `out`)
//   table  table(rows) renders an array of objects as a table in the console area
//   withFallback  withFallback(fn) runs fn; requests to the Overpass server that fail are answered from the
//          recordings in data/osm/ (see overpass-fallback.js), so cells that load OpenStreetMap still work
//   xmlView  xmlView(xmlDocument) renders an XML document as a collapsible tree
//   d3, autk, GeoTIFF  workspace dependencies imported by Vite (cell source is not bundled)
//   dataUrl  resolve a bundled sample path relative to the tutorial's assets
// Cells that depend on earlier cells say so; "Run all above" runs them in order.
import * as d3 from "d3";
import * as autk from "@urban-toolkit/autk";
import * as GeoTIFF from "geotiff";
import {mountPlaygroundEditor, highlightStatic} from "../playground/editor.js";
import {captureConsole, executeSource, formatValue} from "../playground/runtime.js";
import {renderTextOutput} from "../playground/output.js";
import {withFallback as withOverpassFallback} from "./overpass-fallback.js";

// Serialize execution even across chapter navigation; Overpass temporarily wraps fetch.
let queue = Promise.resolve();

function dedent(text) {
  const lines = text.replace(/^\n+/, "").replace(/\s+$/, "").split("\n");
  const indent = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
  return lines.map(l => l.slice(indent)).join("\n");
}

// ---------- rendering values ----------
function note(text) { const p = document.createElement("p"); p.className = "status"; p.textContent = text; return p; }
function pre(cls, text) { const p = document.createElement("pre"); p.className = cls; p.textContent = text; return p; }

// Long arrays and FeatureCollections are trimmed so the page stays responsive.
function trim(v, depth = 0) {
  if (Array.isArray(v)) {
    const head = v.slice(0, 8).map(x => trim(x, depth + 1));
    return v.length > 8 ? [...head, `… ${v.length - 8} more`] : head;
  }
  if (v && typeof v === "object" && !ArrayBuffer.isView(v) && !(v instanceof Map) && !(v instanceof Set) && !(v instanceof ArrayBuffer)) {
    const o = {};
    for (const [k, x] of Object.entries(v)) o[k] = depth > 6 ? "…" : trim(x, depth + 1);
    return o;
  }
  return v;
}

export function render(v) {
  if (v instanceof Node) return v;
  if (v === undefined) return null;
  const output = renderTextOutput(formatValue(trim(v)));
  output.classList.add("val");
  return output;
}

export function table(rows, {limit = 50} = {}) {
  const wrap = document.createElement("div");
  const cols = [...new Set(rows.slice(0, 200).flatMap(r => Object.keys(r)))];
  const cell = x => x == null ? "" : typeof x === "object" ? JSON.stringify(x) : typeof x === "number" ? +x.toPrecision(8) : x;
  const t = document.createElement("table");
  t.innerHTML = `<thead><tr>${cols.map(() => `<th></th>`).join("")}</tr></thead><tbody></tbody>`;
  t.querySelectorAll("th").forEach((th, i) => (th.textContent = cols[i]));
  const body = t.querySelector("tbody");
  for (const r of rows.slice(0, limit)) {
    const tr = body.insertRow();
    for (const c of cols) tr.insertCell().textContent = cell(r[c]);
  }
  wrap.append(t);
  if (rows.length > limit) { const m = document.createElement("p"); m.className = "more"; m.textContent = `Showing ${limit} of ${rows.length} rows.`; wrap.append(m); }
  return wrap;
}

export function xmlView(xml) {
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const line = (node, close) => {
    const l = el("span", "xml-line");
    l.append(el("span", "xml-tag", `<${close ? "/" : ""}${node.nodeName}`));
    if (!close) for (const a of node.attributes) {
      const s = el("span", "xml-attr", ` ${a.name}="`); s.append(el("span", "xml-value", a.value), document.createTextNode('"')); l.append(s);
    }
    return l;
  };
  const view = node => {
    if (node.nodeType === Node.TEXT_NODE) { const v = node.textContent.trim(); return v ? el("div", "xml-text", v) : null; }
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const kids = [...node.childNodes].map(view).filter(Boolean);
    if (!kids.length) { const d = el("div", "xml-line"); d.append(line(node)); d.lastChild.append(el("span", "xml-tag", " />")); return d; }
    const d = el("details", "xml-node"); d.open = true;
    const sum = el("summary", "xml-line"); const head = line(node); head.append(el("span", "xml-tag", ">")); sum.append(head);
    const box = el("div", "xml-children"); box.append(...kids);
    const end = el("div", "xml-line"); const tail = line(node, true); tail.append(el("span", "xml-tag", ">")); end.append(tail);
    d.append(sum, box, end); return d;
  };
  const root = el("div", "xml"); root.append(view(xml.documentElement)); return root;
}

// ---------- cells ----------
function setup(figure, index, notebook) {
  const {cells, ctx, page, dataUrl} = notebook;
  const src = figure.querySelector("script[type='text/plain']");
  const original = dedent(src.textContent);
  const title = figure.dataset.title || `Example ${index + 1}`;
  const needs = figure.dataset.needs ? `<span class="needs">needs: ${figure.dataset.needs}</span>` : "";

  figure.classList.add("playground-card");
  figure.innerHTML = `
    <figcaption class="playground-card__caption"><span>${title}</span><span class="playground-card__meta mode">JavaScript · ${needs || "standalone"}</span></figcaption>
    <div class="editor"></div>
    <div class="playground-card__output playground-card__output--stacked out" tabindex="0" role="region" aria-label="Playground output" aria-live="polite" hidden>
      <section class="notebook-visual-area playground-card__area" aria-label="Visual output">
        <div class="playground-card__area-label notebook-visual-label">Result</div>
        <div class="notebook-visual-output playground-card__visual"></div>
      </section>
      <section class="notebook-console-area playground-card__area" aria-label="Console output">
        <div class="playground-card__area-label">Console</div>
        <div class="notebook-console-output playground-card__console"></div>
      </section>
    </div>
    <div class="playground-card__state state" role="status"><span class="playground-card__placeholder">Run this example to see the result.</span></div>`;

  const outEl = figure.querySelector(".out");
  const visualEl = figure.querySelector(".notebook-visual-output");
  const consoleEl = figure.querySelector(".notebook-console-output");
  const visualLabel = figure.querySelector(".notebook-visual-label");
  const state = figure.querySelector(".state");
  let disposed = false;

  const exec = async () => {
    if (disposed) return;
    editor.setBusy(true);
    outEl.hidden = false;
    visualEl.replaceChildren();
    consoleEl.replaceChildren();
    outEl.scrollTo(0, 0);
    state.className = "playground-card__state state run"; state.textContent = "Running…";
    const show = v => { const n = render(v); if (n) (v instanceof Node ? visualEl : consoleEl).append(n); };
    const t0 = performance.now();
    try {
      const result = await executeSource(editor.getSources()[0], {
        ctx, out: visualEl, show, table: rows => consoleEl.append(table(rows)), xmlView,
        withFallback: fn => withOverpassFallback(fn, {
          note: m => consoleEl.append(note(m)), recordings: dataUrl("osm/manifest.json"),
        }), d3, autk, GeoTIFF, dataUrl,
        console: captureConsole(show, () => consoleEl.replaceChildren()),
      });
      show(result);
      state.className = "playground-card__state state ok"; state.textContent = `Done in ${((performance.now() - t0) / 1000).toFixed(1)} s`;
      return true;
    } catch (e) {
      consoleEl.append(pre("err", e && e.stack ? `${e.name}: ${e.message}` : String(e)));
      console.error(e);
      state.className = "playground-card__state state error"; state.textContent = "Run failed";
      return false;
    } finally {
      visualLabel.textContent = visualEl.querySelector("canvas") ? "Map" : visualEl.querySelector("svg") ? "Plot" : "Result";
      if (!disposed) editor.setBusy(false);
    }
  };
  const run = () => (queue = queue.then(exec));
  const editor = mountPlaygroundEditor(figure.querySelector(".editor"), {
    files: [{label: "example.js", code: original}],
    title,
    storageKey: `autark-tutorial:${page}:${title}`,
    onRun: run,
    onRunAll: index > 0 ? () => {
      for (let i = 0; i <= index; i++) cells[i].enqueue();
    } : undefined,
  });
  cells.push({enqueue: run, dispose() {
    disposed = true;
    editor.destroy();
  }});
}

export function mountNotebook(root, page, assets = location.href) {
  const cells = [];
  const notebook = {cells, ctx: {}, page, dataUrl: name => new URL(`data/${name}`, assets).href};
  root.querySelectorAll("figure.example").forEach((figure, index) => setup(figure, index, notebook));
  // Code blocks in the prose get the same highlighting as the editors.
  root.querySelectorAll("pre > code").forEach(code => code.replaceChildren(highlightStatic(code.textContent)));
  return () => cells.forEach(cell => cell.dispose());
}