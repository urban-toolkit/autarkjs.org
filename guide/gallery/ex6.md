---
title: Spatial Join
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
</div>

# Spatial Join

This example demonstrates how **Autark Map** can render multiple GeoJSON layers directly in the browser, combining projected neighborhood polygons and projected point features in a single standalone view.

## Live Example

<LiveExampleFrame
  id="ex6-live-frame"
  src="/gallery/raw/ex6.html"
  height="clamp(740px, 80vh, 880px)"
/>

## Objective

- initialize a standalone `AutkMap`;
- load projected neighborhood polygons from GeoJSON;
- load projected point features from a second GeoJSON file;
- render both layers together in the same map view;
- demonstrate multi-layer browser-side visualization without database preprocessing.

## Source Code

```ts
import { AutkMap } from 'autk-map';

export class StandaloneGeojsonLayersVis {
    protected map!: AutkMap;

    public async run(canvas: HTMLCanvasElement): Promise<void> {
        this.map = new AutkMap(canvas);
        await this.map.init();

        const neighs = await fetch('/data/mnt_neighs_proj.geojson').then(res => res.json());
        const points = await fetch('/data/mnt_points_test_proj.geojson').then(res => res.json());

        this.map.loadGeoJsonLayer('neighborhoods', neighs);
        this.map.loadGeoJsonLayer('points', points);

        this.map.draw();
    }
}

async function main() {
    const example = new StandaloneGeojsonLayersVis();

    const canvas = document.querySelector('canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    await example.run(canvas as HTMLCanvasElement);
}

main();
````

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/gallery/ex6.ts)