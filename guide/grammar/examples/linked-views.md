---
title: 'Linked Views'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  layout: { type: 'horizontal', gap: 12 },
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs_proj.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    },
  ],
  map: {
    id: 'neighborhoodMap',
    camera: { zoom: 8.1 },
    layerRefs: [{ dataRef: 'neighborhoods', title: 'Neighborhood area', getFnv: 'shape_area' }],
  },
  plot: {
    id: 'shapePlot',
    dataRef: 'neighborhoods',
    mark: 'scatter',
    axis: ['shape_area', 'shape_leng'],
    title: 'Area and perimeter of each neighborhood',
    width: 560,
    height: 460,
    events: ['click', 'brush'],
  },
  links: [{ source: 'shapePlot', target: 'neighborhoodMap', layer: 'Neighborhood area' }],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Linked Views

A map and a scatterplot of Manhattan neighborhoods, linked by `links` and arranged side by side by `layout`. Click or brush the plot to highlight neighborhoods on the map.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map', plot: 'plot' }" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `layout: { type: 'horizontal' }` places the map and the plot side by side
- `id` on the map and the plot
- `links` joins the plot to a map layer named by its `title`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/linked-views.ts).
