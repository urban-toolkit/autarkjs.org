---
title: 'Heat Matrix'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_neighs_proj_landuse.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:3395',
    },
  ],
  map: {
    layerRefs: [{ dataRef: 'neighborhoods', isPick: true }],
  },
  plot: {
    dataRef: 'neighborhoods',
    mark: 'heatmatrix',
    axis: ['shape_area', 'landuse'],
    color: '@transform',
    title: 'Neighborhoods by Area and Land Use',
    width: 600,
    margins: { left: 100, right: 20, top: 50, bottom: 80 },
    transform: { preset: 'binning-2d', options: { binsX: 5 } },
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

# Heat Matrix

Cross neighborhood area bins with land use in a heat matrix and click cells to select neighborhoods.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map', plot: 'plot' }" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `mark: 'heatmatrix'`
- `binning-2d` transform with `color: '@transform'`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/heatmatrix-click.ts).
