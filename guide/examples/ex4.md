---
title: Linked Views - Map + Bar Chart
aside: true
outline: deep
---

<div class="case-tags">
  <a class="case-tag case-tag--map" href="/autk-map/">autk-map</a>
  <a class="case-tag case-tag--plot" href="/autk-plot/">autk-plot</a>
</div>

# Linked Views - Map + Bar Chart

This example demonstrates coordinated interaction between **Autark Map** and **Autark Plot**. A neighborhood layer is rendered on the map while a bar chart shows an attribute from the same dataset. Selecting elements in one view highlights the corresponding elements in the other.

## Live Example

<LiveExampleFrame
  id="ex4-live-frame"
  src="/examples/raw/ex4.html"
  height="940px"
/>

## Objective

- render a GeoJSON neighborhood layer with `AutkMap`;
- create an interactive bar chart with `Barchart`;
- connect map selection to chart highlighting;
- connect chart selection back to the map layer;
- demonstrate linked views entirely in the browser.

## Source Code

```ts
import { AutkMap, MapEvent, VectorLayer } from 'autk-map';
import { Barchart, PlotEvent } from 'autk-plot';

async function main() {
    const canvas = document.querySelector('canvas')!;
    const plotDiv = document.querySelector('#plotBody') as HTMLElement;

    const map = new AutkMap(canvas);
    await map.init();

    const geojson = await fetch('/data/mnt_neighs_proj.geojson').then(r => r.json());

    map.loadGeoJsonLayer('neighborhoods', geojson);
    map.updateRenderInfoProperty('neighborhoods', 'isPick', true);
    map.draw();

    const plot = new Barchart({
        div: plotDiv,
        data: geojson,
        attributes: ['ntaname', 'shape_area'],
        labels: {
            axis: ['Neighborhood', 'Area'],
            title: 'Neighborhood area',
        },
        width: plotDiv.clientWidth || 900,
        events: [PlotEvent.CLICK],
    });

    map.mapEvents.addEventListener(MapEvent.PICK, (selection) => {
        const normalizedSelection = selection.map((id) =>
            typeof id === 'string' ? Number(id) : id
        );
        plot.setHighlightedIds(normalizedSelection);
    });

    plot.plotEvents.addEventListener(PlotEvent.CLICK, (selection) => {
        const layer = map.layerManager.searchByLayerId('neighborhoods') as VectorLayer | null;
        layer?.setHighlightedIds(selection);
    });
}

main();
````

## Full Code

You can access the complete source file here:

- [View full code](https://raw.githubusercontent.com/urban-toolkit/autarkjs.org/main/examples/ex4.ts)