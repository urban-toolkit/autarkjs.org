---
title: Map and Database Integration
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--db" href="/autk-db/">autk-db</a>
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Map and Database Integration

This example demonstrates how **Autark Database** and **Autark Map** work together in the browser. A GeoJSON roads dataset is first loaded into the in-browser spatial database, then automatically retrieved and rendered on the map with thematic styling based on road type.

## Result

<LiveExampleFrame
  id="ex2-live-frame"
  src="/examples/raw/ex2.html"
  height="540px"
/>

## Objective

- initialize an in-browser spatial database;
- load a GeoJSON file as a custom layer;
- retrieve layers from the database;
- render them with `AutkMap`;
- apply thematic coloring based on feature properties.

## Source Code

```ts
import { SpatialDb } from 'autk-db';
import { AutkMap, ColorMapInterpolator, LayerType, MapStyle } from 'autk-map';

async function main() {
    const canvas = document.querySelector('canvas')!;

    const db = new SpatialDb();
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
        map.loadGeoJsonLayer(layer.name, geojson, layer.type as LayerType);
    }

    const roadsGeojson = await db.getLayer('roads');
    map.updateRenderInfoProperty('roads', 'colorMapInterpolator', ColorMapInterpolator.OBSERVABLE10);
    map.updateGeoJsonLayerThematic('roads', roadsGeojson, (feature) => {
        const highway = feature.properties?.highway;
        return ['primary', 'secondary'].includes(highway) ? highway : 'other';
    });

    map.draw();
}

main();
```

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/examples/ex2.ts)