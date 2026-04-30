---
title: 3D OSM Map
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# 3D OSM Map

This example demonstrates how **Autark Database** and **Autark Map** can be combined to query OpenStreetMap data through the Overpass API and render a layered 3D urban scene directly in the browser.

## Live Example

<LiveExampleFrame
  id="ex3-live-frame"
  src="/gallery/raw/ex3.html"
  height="clamp(740px, 80vh, 880px)"
/>

## Objective

- initialize an in-browser spatial database;
- query OSM data directly from Overpass API via `loadOsm`;
- auto-load urban layers such as roads, water, parks, surface, and buildings;
- render all returned layers in the browser with `loadCollection`.

## Source Code

```ts
import { AutkSpatialDb } from 'autk-db';
import { AutkMap } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;

    const db = new AutkSpatialDb();
    await db.init();

    await db.loadOsm({
        queryArea: {
            geocodeArea: 'New York',
            areas: ['Battery Park City', 'Financial District'],
        },
        outputTableName: 'table_osm',
        autoLoadLayers: {
            coordinateFormat: 'EPSG:3395',
            layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
            dropOsmTable: true,
        },
    });

    const map = new AutkMap(canvas);
    await map.init();

    for (const layer of db.getLayerTables()) {
        const geojson = await db.getLayer(layer.name);
        map.loadCollection(layer.name, { collection: geojson, type: layer.type });
    }

    map.draw();
}

main();
```

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/gallery/ex3.ts)