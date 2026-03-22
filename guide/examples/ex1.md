---
title: Standalone GeoJSON Viewer
aside: true
outline: deep
---

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

let cleanup: (() => void) | null = null

onMounted(() => {
  const iframe = document.getElementById('ex1-live-frame') as HTMLIFrameElement | null
  if (!iframe) return

  let savedScrollY = 0

  const saveScroll = () => {
    savedScrollY = window.scrollY
  }

  const restoreScroll = () => {
    requestAnimationFrame(() => {
      window.scrollTo(0, savedScrollY)
    })
  }

  const onPointerDown = () => saveScroll()
  const onFocus = () => restoreScroll()

  iframe.addEventListener('pointerdown', onPointerDown, true)
  iframe.addEventListener('mousedown', onPointerDown, true)
  iframe.addEventListener('focus', onFocus, true)

  const attachFrameGuards = () => {
    try {
      const frameWindow = iframe.contentWindow
      const frameDocument = iframe.contentDocument
      if (!frameWindow || !frameDocument) return

      frameDocument.addEventListener('pointerdown', saveScroll, true)
      frameDocument.addEventListener('mousedown', saveScroll, true)
      frameDocument.addEventListener('focusin', restoreScroll, true)
      frameDocument.addEventListener('click', restoreScroll, true)
      frameWindow.addEventListener('focus', restoreScroll, true)

      cleanup = () => {
        iframe.removeEventListener('pointerdown', onPointerDown, true)
        iframe.removeEventListener('mousedown', onPointerDown, true)
        iframe.removeEventListener('focus', onFocus, true)

        frameDocument.removeEventListener('pointerdown', saveScroll, true)
        frameDocument.removeEventListener('mousedown', saveScroll, true)
        frameDocument.removeEventListener('focusin', restoreScroll, true)
        frameDocument.removeEventListener('click', restoreScroll, true)
        frameWindow.removeEventListener('focus', restoreScroll, true)

        iframe.removeEventListener('load', attachFrameGuards)
      }
    } catch (_) {
      cleanup = () => {
        iframe.removeEventListener('pointerdown', onPointerDown, true)
        iframe.removeEventListener('mousedown', onPointerDown, true)
        iframe.removeEventListener('focus', onFocus, true)
        iframe.removeEventListener('load', attachFrameGuards)
      }
    }
  }

  iframe.addEventListener('load', attachFrameGuards)
  attachFrameGuards()
})

onUnmounted(() => {
  cleanup?.()
})
</script>

# Standalone GeoJSON Viewer

This example demonstrates the simplest possible Autark workflow for loading and rendering a projected GeoJSON dataset directly in the browser.

## Live Example

<div style="border: 1px solid var(--vp-c-divider); border-radius: 18px; overflow: hidden; background: var(--vp-c-bg-soft);">
  <iframe
    id="ex1-live-frame"
    src="/examples/raw/ex1.html"
    title="Standalone GeoJSON Viewer"
    scrolling="no"
    tabindex="-1"
    style="width: 100%; height: 72vh; min-height: 620px; border: 0; display: block; background: #0b1220;"
  ></iframe>
</div>

## Objective

This example shows how to:

- create and initialize an `AutkMap`
- load a projected GeoJSON dataset with `fetch`
- add the dataset directly as a map layer
- render the result immediately in the canvas

It serves as the most basic standalone map example before introducing multiple datasets, joins, or linked analytical views.

## Source Code

```typescript
import { AutkMap } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;

    // Create and initialize the map
    const map = new AutkMap(canvas);
    await map.init();

    // Load a GeoJSON dataset directly in the browser
    const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json());

    // Add the layer and render it
    map.loadGeoJsonLayer('neighborhoods', geojson);
    map.draw();
}

main();
```

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/examples/ex1.ts)