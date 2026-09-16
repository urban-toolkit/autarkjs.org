---
title: 'Temporal Events'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonFileUrl: '/data/mnt_roads.geojson',
      outputTableName: 'roads',
      coordinateFormat: 'EPSG:4326',
    },
    {
      type: 'csv',
      csvFileUrl: '/data/noise_manhattan_clean.csv',
      outputTableName: 'noise',
      geometryColumns: {
        latColumnName: 'latitude',
        longColumnName: 'longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
    {
      type: 'join',
      tableRootName: 'roads',
      tableJoinName: 'noise',
      near: { distance: 200 },
      groupBy: [
        { column: 'key', aggregateFn: 'count' },
        { column: 'date', aggregateFn: 'collect' },
      ],
    },
  ],
  map: {
    style: 'light',
    layerRefs: [
      { dataRef: 'roads', isPick: true, getFnv: 'sjoin.count.noise' },
    ],
  },
  plot: {
    dataRef: 'roads',
    mark: 'linechart',
    axis: ['sjoin.collect.noise', '@transform'],
    title: 'Monthly noise events per road',
    transform: {
      preset: 'binning-events',
      options: {
        timestamp: 'date',
        resolution: 'day',
        reducer: 'count',
      },
    },
    margins: { left: 60, right: 20, top: 50, bottom: 140 },
    width: 600,
    events: ['brushX'],
    mapRef: 'roads',
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Temporal Events

Join noise complaints to nearby roads, collect their dates, and brush a daily time series to find the roads involved.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ map: 'map', plot: 'plot' }" :auto-run="true" out="dom" canvas-id="map" :mounts="[{ name: 'plot', id: 'plot' }]" />
</ClientOnly>

:::tip Interaction
Double click a feature on the map to select it. The selection is shared with the plot, and selecting in the plot highlights the matching features on the map.
:::

## Highlights

- `collect` aggregate keeps every joined date
- `mark: 'linechart'` with the `binning-events` transform
- time brushing linked to the road layer

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/temporal-events-click.ts).
