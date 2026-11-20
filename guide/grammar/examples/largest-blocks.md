---
title: 'Compute, Then SQL: The Ten Largest Blocks'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'osm',
      pbfFileUrl: '/data/lower_mnt.osm.pbf',
      queryArea: { bbox: [-74.015, 40.703, -74.006, 40.711] },
      outputTableName: 'fidi',
      autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
      },
    },
    {
      type: 'sql',
      outputTableName: 'largest_blocks',
      query: [
        "SELECT 'block ' || CAST(block_id AS VARCHAR) AS block, buildings FROM (",
        "SELECT CAST(properties->'compute'->>'block' AS INTEGER) AS block_id, CAST(count(*) AS INTEGER) AS buildings",
        'FROM fidi_blocks GROUP BY block_id',
        ') ORDER BY buildings DESC, block_id LIMIT 10',
      ].join(' '),
      after: 'compute',
    },
  ],
  compute: [
    { type: 'clusters', dataRef: 'fidi_buildings', outputColumnName: 'block', outputTableName: 'fidi_blocks', writeBack: true },
  ],
  map: {
    camera: { zoom: 13, pitch: 40, bearing: 20 },
    layerRefs: [
      { dataRef: 'fidi_surface' },
      { dataRef: 'fidi_parks' },
      { dataRef: 'fidi_water' },
      { dataRef: 'fidi_roads' },
      {
        dataRef: 'fidi_blocks',
        title: 'Blocks of touching buildings',
        getFnv: 'compute.block',
        colorMapInterpolator: 'interpolateTurbo',
      },
    ],
  },
  plot: {
    dataRef: 'largest_blocks',
    mark: 'bar',
    axis: ['block', 'buildings'],
    axisLabels: ['Block', 'Buildings'],
    // The y axis counts buildings, so its labels are plain numbers: autk-plot's default, SI prefixes, writes 0.5 as 500m.
    tickFormats: [',~f', ',~f'],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--compute" href="/grammar/#compute">compute</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
  <a class="case-tag case-tag--plot" href="/grammar/#plot">plot</a>
</div>

# Compute, Then SQL: The Ten Largest Blocks

Give each building of the Financial District the id of its block of touching buildings and keep the result in autk-db, then count the buildings of each block with a SQL query that runs after the pass, and chart the ten largest blocks below the map.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

:::tip OpenStreetMap data
This spec reads a pre-downloaded OpenStreetMap extract through `pbfFileUrl`, so it loads in seconds. Remove `pbfFileUrl` to query the Overpass API live instead, which can take several minutes because Overpass is rate-limited.
:::

## Highlights

- `writeBack: true` keeps the clusters pass's result in autk-db as the table `fidi_blocks`
- `after: 'compute'` runs the `sql` source once the pass has run, so its query reads `fidi_blocks`
- `properties->'compute'->>'block'` reads the cluster id the pass wrote
- the map colors the blocks by `compute.block`, and the bar chart shows the ten with the most buildings

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/largest-blocks.ts).
