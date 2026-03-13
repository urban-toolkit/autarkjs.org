---
title: Linked Views for Urban Analysis
aside: false
outline: false
---

<script setup>
const ex5Code = `import { SpatialDb } from 'autk-db';
import { AutkMap } from 'autk-map';
import { PlotD3 } from 'autk-plot';

async function main() {
    const db = new SpatialDb();
    await db.init();

    // Load a spatial dataset
    await db.loadCustomLayer({
        geojsonFileUrl: '/data/urban-layer.geojson',
        outputTableName: 'urban_layer',
        coordinateFormat: 'EPSG:3395',
    });

    const geojson = await db.getLayer('urban_layer');

    // Create the map
    const map = new AutkMap(document.querySelector('#map') as HTMLCanvasElement);
    await map.init();
    map.loadGeoJsonLayer('urban-layer', geojson);
    map.draw();

    // Create a coordinated chart
    const plot = new PlotD3({
        container: document.querySelector('#plot')!,
        data: geojson.features,
        type: 'bar',
    });

    // Link interactions
    plot.on('select', selectedFeatures => {
        map.highlightFeatures('urban-layer', selectedFeatures);
    });

    map.on('click', clickedFeature => {
        plot.highlight(clickedFeature);
    });
}

main();`
</script>

<ExamplePage
  title="Linked Views for Urban Analysis"
  description="Link maps and charts to build coordinated urban visual analytics workflows. This example will demonstrate interaction between autk-map, autk-db, and autk-plot in a linked-views analysis interface."
  objective="Select elements in a chart and highlight them on the map, or click map features and reflect the interaction in the chart. This example most directly represents Autark’s broader visual analytics vision: not only viewing data, but coordinating multiple analytical representations in the browser."
  coming-soon
  coming-soon-message="This live example depends on autk-plot, which is not yet available in the current public documentation build pipeline."
  :tags="['autk-plot', 'autk-map', 'autk-db']"
  :code="ex5Code"
/>