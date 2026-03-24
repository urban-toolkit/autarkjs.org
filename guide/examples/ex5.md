---
title: Compute Function on GeoJSON Properties
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--compute" href="/autk-compute/">autk-compute</a>
</div>

# Compute Function on GeoJSON Properties

This example demonstrates how **Autark Database**, **Autark Compute**, and **Autark Map** can be combined in the browser. A neighborhood layer is loaded into the in-browser spatial database, a derived attribute is computed from existing properties, and the result is rendered as a thematic map.

## Live Example

<LiveExampleFrame
  id="ex5-live-frame"
  src="/examples/raw/ex5.html"
  height="540px"
/>

## Objective

- load a GeoJSON layer into the in-browser spatial database;
- compute a new property using `GeojsonCompute`;
- map existing attributes into a compute function;
- store the result in `compute.result`;
- render the computed values as a thematic layer with `AutkMap`.

## Source Code

```ts
import { SpatialDb } from 'autk-db';
import { GeojsonCompute } from 'autk-compute';
import { AutkMap } from 'autk-map';

async function main() {
    const db = new SpatialDb();
    await db.init();

    await db.loadCustomLayer({
        geojsonFileUrl: '/data/mnt_neighs.geojson',
        outputTableName: 'neighborhoods',
        coordinateFormat: 'EPSG:3395',
    });

    let geojson = await db.getLayer('neighborhoods');

    const geojsonCompute = new GeojsonCompute();
    geojson = await geojsonCompute.computeFunctionIntoProperties({
        geojson,
        variableMapping: {
            x: 'shape_area',
            y: 'shape_leng',
        },
        outputColumnName: 'result',
        wglsFunction: 'return x / y;',
    });

    const canvas = document.querySelector('canvas')!;
    const map = new AutkMap(canvas);
    await map.init();

    map.loadGeoJsonLayer('neighborhoods', geojson);
    map.updateGeoJsonLayerThematic('neighborhoods', geojson, (feature) => {
        return feature.properties?.compute?.result || 0;
    });

    map.draw();
}

main();
````

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/examples/ex5.ts)