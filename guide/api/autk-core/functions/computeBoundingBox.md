[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeBoundingBox

# Function: computeBoundingBox()

> **computeBoundingBox**(`source`): [`BoundingBox`](../interfaces/BoundingBox.md) \| `null`

Defined in: [utils-geojson.ts:72](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/utils-geojson.ts#L72)

Computes the geographic bounding box of a GeoJSON collection or geometry.

## Parameters

### source

`Geometry` \| `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\> \| `null`

GeoJSON feature collection or geometry to inspect.
Pass `null` to receive a `null` result.

## Returns

[`BoundingBox`](../interfaces/BoundingBox.md) \| `null`

A named bounding box, or `null` when the source is empty or has no coordinates.

## Throws

Never throws.

## Example

```ts
const bbox = computeBoundingBox(fc);
// bbox → { minLon: 151.0, minLat: -34.0, maxLon: 151.5, maxLat: -33.5 }
```
