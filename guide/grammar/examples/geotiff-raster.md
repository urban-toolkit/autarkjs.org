---
title: 'GeoTIFF Raster'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geotiff',
      geotiffFileUrl: '/data/temperature.tif',
      outputTableName: 'lst',
      coordinateFormat: 'EPSG:4326',
      maxRasterCells: 200,
      resampleMethod: 'nearest',
    },
    {
      type: 'geojson',
      outputTableName: 'extent',
      geojsonObject: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-43.1391, -22.9897],
                  [-42.943, -22.9897],
                  [-42.943, -22.8538],
                  [-43.1391, -22.8538],
                  [-43.1391, -22.9897],
                ],
              ],
            },
          },
        ],
      },
    },
  ],
  map: {
    camera: { zoom: 8.8 },
    layerRefs: [
      { dataRef: 'extent', title: 'Raster extent' },
      {
        dataRef: 'lst',
        title: 'Summer surface temperature, 2024 (°C)',
        getFnv: 'band_24',
        colorMapInterpolator: 'interpolateYlOrRd',
        transferFunction: { opacityMin: 1, opacityMax: 1 },
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

# GeoTIFF Raster

Load a GeoTIFF of summer land surface temperature in Niterói, Brazil, and draw its 2024 band over a polygon of the raster's extent.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :auto-run="true" out="dom" />
</ClientOnly>

## Highlights

- `geotiff` data source with `geotiffFileUrl`
- `maxRasterCells` and `resampleMethod` downsample the raster
- `getFnv: 'band_24'` picks the band to draw

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/geotiff-raster.ts).
