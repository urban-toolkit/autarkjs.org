[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / resolveCollectionBounds

# Function: resolveCollectionBounds()

> **resolveCollectionBounds**(`collection`): [`BoundingBox`](../interfaces/BoundingBox.md) \| `null`

Defined in: [utils-geojson.ts:64](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/utils-geojson.ts#L64)

Resolves collection bounds from geometry, falling back to a declared 2D or 3D bbox.
Geometry takes precedence; geometry-less rasters use their declared horizontal extent.

## Parameters

### collection

`FeatureCollection`\<`Geometry` \| `null`\>

## Returns

[`BoundingBox`](../interfaces/BoundingBox.md) \| `null`
