[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeGeometryCentroid

# Function: computeGeometryCentroid()

> **computeGeometryCentroid**(`geometry`): \[`number`, `number`, `number`\] \| `null`

Defined in: [utils-geojson.ts:117](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-core/src/utils-geojson.ts#L117)

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
