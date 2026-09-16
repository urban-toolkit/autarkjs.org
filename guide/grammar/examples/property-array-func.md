---
title: 'Array Attributes'
aside: true
outline: deep
---

<script setup>
const spec = `
{
  data: [
    {
      type: 'geojson',
      geojsonObject: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [0, 0] },
            properties: {
              name: 'Location A',
              temperature: 20.0,
              measurements: [1.0, 2.0, 3.0, 4.0, 5.0],
              weights: [0.5, 1.5, 2.0],
            },
          },
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [1, 1] },
            properties: {
              name: 'Location B',
              temperature: 25.0,
              measurements: [2.0, 4.0, 6.0, 8.0, 10.0],
              weights: [1.0, 2.0, 3.0],
            },
          },
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [2, 2] },
            properties: {
              name: 'Location C',
              temperature: 30.0,
              measurements: [1.5, 2.5, 3.5, 4.5, 5.5],
              weights: [0.8, 1.2],
            },
          },
        ],
      },
      outputTableName: 'locations',
    },
  ],
  compute: [
    {
      dataRef: 'locations',
      attributes: { values: 'measurements' },
      attributeArrays: { values: 5 },
      outputColumnName: 'avg_measurement',
      wglsFunction: \`
        var sum = 0.0;
        for (var i = 0u; i < values_length; i++) {
          sum += values[i];
        }
        return sum / f32(values_length);
      \`,
    },
  ],
}
`
</script>

<div class="case-tags">
  <a class="case-tag case-tag--data" href="/grammar/#data">data</a>
  <a class="case-tag case-tag--compute" href="/grammar/#compute">compute</a>
</div>

# Array Attributes

Average an array property per feature on the GPU, using features defined inline in the spec.

## Live Playground

<ClientOnly>
  <CodePlayground :spec="spec" :targets="{ db: 'tables' }" :auto-run="true" out="both" :render-canvas="false" :mounts="[{ name: 'tables', id: 'tables' }]" />
</ClientOnly>

## Highlights

- `geojsonObject` instead of a file
- `attributeArrays` declares the array length
- WGSL loop over `values_length`

This example comes from the [autk-grammar repository](https://github.com/urban-toolkit/autk-grammar/blob/main/gallery/src/examples/property-array-func.ts).
