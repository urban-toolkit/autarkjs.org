# Function: computeGeometryCentroid()

> **computeGeometryCentroid**(`geometry`): \[`number`, `number`, `number`\] \| `null`

Defined in: [utils-geojson.ts:147](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/utils-geojson.ts#L147)

Computes a geometry-aware weighted centroid for any GeoJSON geometry type.

## Parameters

### geometry

`Geometry` \| `null`

GeoJSON geometry whose centroid should be computed.

## Returns

\[`number`, `number`, `number`\] \| `null`

A three-component centroid tuple `[x, y, z]`, or `null` when the
geometry is `null` or cannot yield a meaningful centroid.

## Throws

Never throws.

## Example

```ts
const centroid = computeGeometryCentroid(polygonGeom);
// centroid → [151.2, -33.8, 0]
```
