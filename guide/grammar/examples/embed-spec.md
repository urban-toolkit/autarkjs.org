---
title: 'Embedding a Spec'
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkGrammar } from '@urban-toolkit/autk-grammar'

// 1. Describe the application as a spec
const spec = {
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs_proj.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    },
  ],
  map: {
    layerRefs: [{ dataRef: 'neighborhoods', isPick: true }],
  },
  plot: {
    dataRef: 'neighborhoods',
    mark: 'bar',
    axis: ['ntaname', 'shape_area'],
    title: 'Barchart example',
    width: 600,
    margins: { left: 60, right: 20, top: 50, bottom: 200 },
    events: ['click'],
    mapRef: 'neighborhoods',
  },
}

// 2. Point the grammar at the elements to draw into:
//    <canvas id="map"></canvas> and <div id="plot"></div>
const grammar = new AutkGrammar({ map: 'map', plot: 'plot' })

// 3. Load the data and draw the map and the plot
await grammar.run(spec)
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Embedding a Spec

Every other example shows only its spec. This one shows the whole JavaScript file: import `AutkGrammar`, describe the application as a spec, point the grammar at a canvas and a div, and run it.

## Live Playground

<ClientOnly>
  <CodePlayground grammar :code="code" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `new AutkGrammar({ map, plot })` takes the ids of a `<canvas>` and a `<div>`
- `await grammar.run(spec)` loads the data and draws the views
- the page only needs `<canvas id="map"></canvas>` and `<div id="plot"></div>`
