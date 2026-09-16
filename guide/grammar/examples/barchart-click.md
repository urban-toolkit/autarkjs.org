---
title: 'Bar Chart'
aside: true
outline: deep
---

<script setup>
const spec = `
{
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
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Bar Chart

A bar chart of neighborhood areas linked to the map: click bars to highlight neighborhoods.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map', plot: 'plot' }" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `plot` section with `mark: 'bar'`
- `events: ['click']`
- `mapRef` links the plot to a map layer

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/barchart-click.ts).
