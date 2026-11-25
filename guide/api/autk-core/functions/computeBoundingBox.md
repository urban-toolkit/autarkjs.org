[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / computeBoundingBox

# Function: computeBoundingBox()

> **computeBoundingBox**(`source`): [`BoundingBox`](../interfaces/BoundingBox.md) \| `null`

Defined in: [utils-geojson.ts:102](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/utils-geojson.ts#L102)

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
