# Function: computeOrigin()

> **computeOrigin**(`geojson`): \[`number`, `number`\]

Defined in: [utils-geojson.ts:82](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/utils-geojson.ts#L82)

Computes a spatial origin from a feature collection's bounding-box center.

The box comes from the feature geometries. Collections without geometry,
such as a GeoTIFF-derived raster whose features carry `geometry: null`, fall
back to their declared GeoJSON `bbox`.

## Parameters

### geojson

`FeatureCollection`

Feature collection to summarize.

## Returns

\[`number`, `number`\]

The `[longitude, latitude]` center, or `[0, 0]` when neither geometry nor a declared `bbox` is present.

## Throws

Never throws.

## Example

```ts
const origin = computeOrigin(fc);
// origin → [151.2, -33.8]
```
