---
title: Linked Views
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--plot" href="/autk-plot/">autk-plot</a>
</div>

# Linked Views

This example demonstrates coordinated interaction between **Autark Map** and **Autark Plot**. A neighborhood layer is rendered on the map while a bar chart shows an attribute from the same dataset. Selecting elements in one view highlights the corresponding elements in the other.

## Live Example

<LiveExampleFrame
  id="ex4-live-frame"
  src="/gallery/raw/ex4.html"
  height="clamp(740px, 80vh, 880px)"
/>

## Objective

- render a GeoJSON neighborhood layer with `AutkMap`;
- create an interactive bar chart with `AutkChart`;
- connect map selection to chart highlighting;
- connect chart selection back to the map layer;
- demonstrate linked views entirely in the browser.

## Source Code

```ts
import { AutkMap, MapEvent } from 'autk-map';
import { AutkChart, ChartEvent } from 'autk-plot';

async function main() {
    const canvas = document.querySelector('canvas')!;
    const plotDiv = document.querySelector('#plotBody') as HTMLElement;

    const map = new AutkMap(canvas);
    await map.init();

    const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json());

    map.loadCollection('neighborhoods', { collection: geojson });
    map.updateRenderInfo('neighborhoods', { isPick: true });
    map.draw();

    const plot = new AutkChart(plotDiv, {
        type: 'barchart',
        collection: geojson,
        attributes: { axis: ['ntaname', 'shape_area'] },
        labels: {
            axis: ['Neighborhood', 'Area'],
            title: 'Neighborhood area',
        },
        width: plotDiv.clientWidth || 900,
        events: [ChartEvent.CLICK],
    });

    map.events.addEventListener(MapEvent.PICKING, (selection) => {
        plot.setSelection(selection);
    });

    plot.events.on(ChartEvent.CLICK, ({ selection }) => {
        map.setHighlightedIds('neighborhoods', selection);
    });
}

main();
````

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/gallery/ex4.ts)