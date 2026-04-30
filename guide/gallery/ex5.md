---
title: Compute Engine
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--compute" href="/autk-compute/">autk-compute</a>
</div>

# Compute Engine

This example demonstrates how **Autark Database**, **Autark Compute**, and **Autark Map** can be combined in the browser. A neighborhood layer is loaded into the in-browser spatial database, a derived attribute is computed from existing properties, and the result is rendered as a thematic map.

## Live Example

<LiveExampleFrame
  id="ex5-live-frame"
  src="/gallery/raw/ex5.html"
  height="clamp(740px, 80vh, 880px)"
/>

## Objective

- load a GeoJSON layer into the in-browser spatial database;
- compute a new property using `AutkComputeEngine`;
- map existing attributes into a WGSL function;
- store the result in `feature.properties.compute.result`;
- render the computed values as a thematic layer with `AutkMap`.

## Source Code

```ts
import { AutkSpatialDb } from 'autk-db';
import { AutkComputeEngine } from 'autk-compute';
import { AutkMap } from 'autk-map';

async function main() {
    const db = new AutkSpatialDb();
    await db.init();

    await db.loadCustomLayer({
        geojsonFileUrl: '/data/mnt_neighs.geojson',
        outputTableName: 'neighborhoods',
        coordinateFormat: 'EPSG:3395',
    });

    let geojson = await db.getLayer('neighborhoods');

    const compute = new AutkComputeEngine();
    geojson = await compute.gpgpuPipeline({
        collection: geojson,
        variableMapping: {
            x: 'shape_area',
            y: 'shape_leng',
        },
        resultField: 'result',
        wgslBody: 'return x / y;',
    });

    const canvas = document.querySelector('canvas')!;
    const map = new AutkMap(canvas);
    await map.init();

    map.loadCollection('neighborhoods', { collection: geojson });
    map.updateThematic('neighborhoods', { collection: geojson, property: 'properties.compute.result' });
    map.updateRenderInfo('neighborhoods', { isColorMap: true });

    map.draw();
}

main();
````

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/gallery/ex5.ts)