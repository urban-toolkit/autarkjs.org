---
title: 'Terrain'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    { type: 'geojson', outputTableName: 'neighborhoods', geojsonFileUrl: '/data/mnt_neighs.geojson' },
    { type: 'geotiff', outputTableName: 'elevation', geotiffFileUrl: '/data/mnt_dem.tif', coordinateFormat: 'EPSG:3857' },
  ],
  map: {
    terrain: { dataRef: 'elevation' },
    camera: { zoom: 10, pitch: 60, bearing: 30 },
    layerRefs: [
      { dataRef: 'neighborhoods', title: 'Neighborhoods', color: '#f2efe9', stroke: '#8c8c8c' },
      {
        dataRef: 'elevation',
        title: 'Elevation (m)',
        colorMapInterpolator: 'interpolateYlGn',
        transferFunction: { opacityMin: 0.8, opacityMax: 0.8 },
      },
    ],
  },
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--map" href="/grammar/#map">map</a>
</div>

# Terrain

Raise Manhattan to its elevation, from a GeoTIFF of about 30 m cells from the USGS 3D Elevation Program, drape its neighborhoods and the elevation's colors over the ground, and look up the island from Midtown.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

## Highlights

- `terrain: { dataRef: 'elevation' }` raises the ground to the heights of a raster table
- the flat layers are draped over the ground
- the view fits the raster, and `camera` tilts and turns it from there

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/map-terrain.ts).
