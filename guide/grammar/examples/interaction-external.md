---
title: 'External Interactions'
aside: true
outline: deep
---

<script setup>
const code = `
import { AutkGrammar } from '@urban-toolkit/autk-grammar'

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
    mark: 'scatter',
    axis: ['shape_area', 'shape_leng'],
    title: 'Neighborhood Areas',
    width: 420,
    events: ['click', 'brush'],
    mapRef: 'neighborhoods',
  },
}

setStatus('Running the spec...')
const grammar = new AutkGrammar({ map: 'map', plot: 'plot' })
await grammar.run(spec)
clearStatus()

// Listen: grammar events reach your code
const log = document.createElement('pre')
log.style.cssText = 'height:160px;overflow:auto;margin:0;font-size:12px'
const format = (ids) => ids.length > 5 ? \`[\${ids.slice(0, 5).join(', ')}, +\${ids.length - 5}]\` : \`[\${ids.join(', ')}]\`
const write = (line) => { log.textContent = line + '\\n' + log.textContent }

grammar.interactions.on('map:picking', ({ layerId, selection }) => {
  write(\`map:picking layer=\${layerId} selection=\${format(selection)}\`)
})
grammar.interactions.on('plot:selection', ({ plotId, event, selection }) => {
  write(\`plot:selection plot=\${plotId} event=\${event} selection=\${format(selection)}\`)
})

// Trigger: your code drives the grammar
const actions = {
  'highlightOnMap [0, 1, 2]': () => grammar.highlightOnMap('neighborhoods', [0, 1, 2]),
  'setPlotSelection [0, 1, 2]': () => grammar.setPlotSelection('neighborhoods', [0, 1, 2]),
  'clearHighlightOnMap': () => grammar.clearHighlightOnMap('neighborhoods'),
  'clearHighlightOnPlot': () => grammar.clearHighlightOnPlot('neighborhoods'),
}
const buttons = document.createElement('div')
for (const [label, run] of Object.entries(actions)) {
  const button = document.createElement('button')
  button.textContent = label
  button.style.cssText = 'margin:0 8px 8px 0;padding:4px 10px;border:1px solid var(--vp-c-divider);border-radius:6px;font-size:12px'
  button.onclick = () => { run(); write(\`call \${label}\`) }
  buttons.append(button)
}
events.replaceChildren(buttons, log)
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# External Interactions

Listen to grammar selection events from your own code, and drive map highlights and plot selections from outside the spec.

## Live Playground

<ClientOnly>
  <CodePlayground grammar :code="code" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }, { name: 'events' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `grammar.interactions.on('map:picking' | 'plot:selection')`
- `highlightOnMap` and `setPlotSelection`
- `clearHighlightOnMap` and `clearHighlightOnPlot`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/interaction-external.ts).
