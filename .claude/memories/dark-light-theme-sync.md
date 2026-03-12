# Dark/Light Theme Sync — How It Works

## Overview

The site has three zones that need to stay in sync:

1. **VitePress docs** (`guide/**/*.md`) — has a built-in toggle, stores preference in `localStorage`
2. **Static example pages** (`guide/public/examples/ex*.html`) — standalone HTML pages
3. **API reference wrapper pages** (`guide/public/docs/autark-*.html`) — wrapper nav/footer + TypeDoc iframe inside

The source of truth is VitePress. When the user toggles dark/light there, all other pages adapt.

---

## Mechanism

VitePress stores the theme preference in `localStorage`:
- Key: `vitepress-theme-appearance`
- Values: `"dark"` (explicit dark) | `"auto"` (system default, used when toggling back to light)

> **Note:** VitePress does NOT write `"light"`. Light mode is represented as `"auto"`.

When dark mode is active, VitePress adds `class="dark"` to `<html>`.

Since all pages are **same-origin**, `localStorage` is shared. Static pages read this key and apply `class="dark"` to their own `<html>`.

---

## Files Involved

| File | Role |
|---|---|
| `guide/public/theme-sync.js` | Core sync script — loaded by all static pages |
| `guide/public/styles.css` | Shared CSS — has `html.dark { ... }` variable overrides |
| `guide/public/examples/ex*.html` | Include `theme-sync.js` + `id="prism-theme"` on Prism link |
| `guide/public/docs/autark-*.html` | Include `theme-sync.js` |

---

## theme-sync.js — How It Works

### 1. Immediate class application (FOUC prevention)
Runs synchronously in `<head>` before the DOM loads:
```js
document.documentElement.classList.toggle('dark', isDarkMode());
```

### 2. `isDarkMode()`
```js
function isDarkMode() {
    var pref = localStorage.getItem('vitepress-theme-appearance');
    if (pref === 'dark') return true;
    if (pref === 'light') return false;       // never set by VitePress, but handled
    return window.matchMedia('(prefers-color-scheme: dark)').matches;  // handles 'auto'
}
```

### 3. DOMContentLoaded
After DOM is parsed:
- `setupIframeListeners()` — attaches **persistent** (no `{ once: true }`) load listeners on iframes, so every TypeDoc page navigation also gets synced
- `applyTheme(isDarkMode())` — applies class + Prism theme + syncs loaded iframes

### 4. TypeDoc iframe sync — `syncTypedocTheme(iframeDoc, dark)`
TypeDoc's generated CSS already has:
```css
:root[data-theme="dark"]  { /* dark colors */ }
:root[data-theme="light"] { /* light colors */ }
```
So we just set the attribute on the iframe's root:
```js
iframeDoc.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
```
This has higher specificity than TypeDoc's `@media (prefers-color-scheme)` rules and works without any CSS injection.

### 5. Live sync
- `storage` event listener: reacts when VitePress changes the theme in another tab
- `matchMedia change` listener: reacts to OS-level dark/light switch (when pref is `'auto'`)

### 6. Prism code highlighting
Example pages have `id="prism-theme"` on the Prism stylesheet `<link>`. `applyTheme` swaps the `href` between `prism-one-light.min.css` and `prism-one-dark.min.css`.

---

## styles.css — Dark Mode CSS

Located at the bottom of `guide/public/styles.css`:
```css
html.dark {
    --primary-color: #9ca3af;
    --text-dark: #e2e8f0;
    --bg-white: #16181d;
    --bg-light: #1e2028;
    --border-color: #2d3748;
    /* ... */
}

/* Special case: footer uses --text-dark as its background in light mode */
html.dark footer {
    background-color: #0f1117;
}
```
Most of the site uses CSS variables throughout, so overriding the variables in `html.dark` is enough for the entire page to flip.

---

## Pitfalls & Past Bugs

### Bug 1: Wrong CSS selector
`html.dark :root` (space = descendant combinator) **never matches** because `:root` IS `html` — it cannot be its own descendant.
**Fix:** Use `html.dark { ... }` directly.

### Bug 2: Injecting into transitional `about:blank`
When `DOMContentLoaded` fires, the iframe `contentDocument` might point to the transitional `about:blank` (which has `readyState === 'complete'`). Injecting into it is useless — the real page replaces the document when it loads.
**Fix:** Use `setupIframeListeners()` with a persistent `load` event listener. The listener fires when the actual TypeDoc page is ready.

### Bug 3: CSS variable injection timing
The original approach injected a `<style>` block with `var(--dark-color-*)` references. If injected before TypeDoc's own stylesheet loaded, those variables were undefined.
**Fix:** Use TypeDoc's `data-theme` attribute instead of CSS injection — no stylesheet dependency.

---

## Adding a New Static Page

If a new standalone HTML page is added to `guide/public/`:
1. Add `<script src="[relative-path]/theme-sync.js"></script>` as the **first element in `<head>`**
2. Make sure it links to `styles.css`
3. If it has a code block with Prism, add `id="prism-theme"` to the Prism theme `<link>`
4. If it embeds a TypeDoc iframe (same-origin), `theme-sync.js` handles it automatically
