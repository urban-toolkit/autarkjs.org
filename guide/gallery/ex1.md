---
title: Standalone GeoJSON
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Standalone GeoJSON

This example demonstrates the simplest possible Autark workflow for loading and rendering a projected GeoJSON dataset directly in the browser.

## Live Example

<LiveExampleFrame
  id="ex1-live-frame"
  src="/gallery/raw/ex1.html"
  height="clamp(740px, 80vh, 880px)"
/>

## Objective

This example shows how to:

- create and initialize an `AutkMap`;
- load a projected GeoJSON dataset with `fetch`;
- add the dataset directly as a map layer;
- render the result immediately in the canvas.

It serves as the most basic standalone map example before introducing multiple datasets, joins, or linked analytical views.

## Source Code

```ts
import { AutkMap } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;

    const map = new AutkMap(canvas);
    await map.init();

    const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json());

    map.loadCollection('neighborhoods', { collection: geojson });
    map.draw();
}

main();
```

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/gallery/ex1.ts)