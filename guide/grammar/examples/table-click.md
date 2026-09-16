---
title: 'Table'
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
    mark: 'table',
    axis: ['ntaname', 'shape_area', 'shape_leng'],
    title: 'Table Visualization',
    width: 600,
    transform: { preset: 'sort', options: { direction: 'asc' } },
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

# Table

Show neighborhoods as a sorted table and click rows to highlight them on the map.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map', plot: 'plot' }" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `mark: 'table'`
- `transform: { preset: 'sort' }`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/table-click.ts).
