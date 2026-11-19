---
title: 'Plot Colors'
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
      geojsonFileUrl: '/data/mnt_neighs.geojson',
      outputTableName: 'neighborhoods',
      coordinateFormat: 'EPSG:4326',
    },
    {
      type: 'csv',
      csvFileUrl: '/data/noise.csv',
      outputTableName: 'noise',
      geometryColumns: {
        latColumnName: 'Latitude',
        longColumnName: 'Longitude',
        coordinateFormat: 'EPSG:4326',
      },
    },
    {
      type: 'join',
      dataRef: 'neighborhoods',
      joinDataRef: 'noise',
      groupBy: [{ column: 'Unique Key', aggregateFn: 'count' }],
    },
    {
      type: 'sql',
      outputTableName: 'noisiest',
      query: "SELECT properties->>'ntaname' AS name, CAST(properties->'sjoin'->'count'->>'noise' AS INTEGER) AS complaints, geometry FROM neighborhoods ORDER BY complaints DESC NULLS LAST LIMIT 10",
      layerType: 'polygons',
    },
  ],
  map: {
    id: 'noiseMap',
    layerRefs: [
      { dataRef: 'neighborhoods', title: 'Manhattan neighborhoods', color: '#d9d9d9' },
      {
        dataRef: 'noisiest',
        title: 'Noise complaints',
        getFnv: 'complaints',
        colorMapInterpolator: 'interpolateReds',
        colorMapRange: [0, 80],
      },
    ],
  },
  plot: {
    id: 'noiseChart',
    dataRef: 'noisiest',
    mark: 'bar',
    axis: ['name', 'complaints'],
    color: 'complaints',
    colorMapInterpolator: 'interpolateReds',
    colorMapRange: [0, 80],
    axisLabels: ['Neighborhood', 'Noise complaints'],
    title: 'The ten noisiest neighborhoods',
    selection: [0],
    highlightColor: '#1f77b4',
    events: ['click'],
    width: 300,
    height: 460,
    margins: { left: 60, right: 20, top: 50, bottom: 170 },
  },
  links: [{ source: 'noiseChart', target: 'noiseMap', layer: 'Noise complaints' }],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Plot Colors

Draw the ten Manhattan neighborhoods with the most noise complaints on a map and in a bar chart side by side, both in reds over one range, so a count has one color in both. The chart titles its axes and selects the noisiest neighborhood, which the map highlights.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip Interaction
Click a bar to select its neighborhood: the map highlights it through the link.
:::

## Highlights

- `colorMapInterpolator` and `colorMapRange` on the plot, as on the map layer
- `axisLabels` titles the axes in place of the column names
- `selection: [0]` selects the first bar as the chart is drawn, and the link highlights it on the map
- `highlightColor` for the selected bar

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/plot-colors.ts).
