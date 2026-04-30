---
title: Map and Database
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Map and Database

This example demonstrates how **Autark Database** and **Autark Map** work together in the browser. A GeoJSON roads dataset is first loaded into the in-browser spatial database, then automatically retrieved and rendered on the map with thematic styling based on road type.

## Result

<LiveExampleFrame
  id="ex2-live-frame"
  src="/gallery/raw/ex2.html"
  height="clamp(740px, 80vh, 880px)"
/>

## Objective

- initialize an in-browser spatial database;
- load a GeoJSON file as a custom layer;
- retrieve layers from the database;
- render them with `AutkMap`;
- apply thematic coloring based on feature properties.

## Source Code

```ts
import { AutkSpatialDb } from 'autk-db';
import { AutkMap, ColorMapInterpolator, MapStyle } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;

    const db = new AutkSpatialDb();
    await db.init();

    await db.loadCustomLayer({
        geojsonFileUrl: '/data/mnt_roads.geojson',
        outputTableName: 'roads',
        coordinateFormat: 'EPSG:3395',
    });

    const map = new AutkMap(canvas);
    MapStyle.setPredefinedStyle('light');
    await map.init();

    for (const layer of db.getLayerTables()) {
        const geojson = await db.getLayer(layer.name);
        map.loadCollection(layer.name, { collection: geojson, type: layer.type });
    }

    const roadsGeojson = await db.getLayer('roads');
    for (const feature of roadsGeojson.features) {
        const highway = feature.properties?.highway;
        feature.properties!.highway_class = ['primary', 'secondary'].includes(highway) ? highway : 'other';
    }
    map.updateColorMap('roads', { colorMap: { interpolator: ColorMapInterpolator.OBSERVABLE10 } });
    map.updateThematic('roads', { collection: roadsGeojson, property: 'properties.highway_class' });
    map.updateRenderInfo('roads', { isColorMap: true });

    map.draw();
}

main();
```

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/gallery/ex2.ts)