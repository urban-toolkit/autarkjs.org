# Function: resolveCollectionBounds()

> **resolveCollectionBounds**(`collection`): [`BoundingBox`](../interfaces/BoundingBox.md) \| `null`

Defined in: [utils-geojson.ts:64](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/utils-geojson.ts#L64)

Resolves collection bounds from geometry, falling back to a declared 2D or 3D bbox.
Geometry takes precedence; geometry-less rasters use their declared horizontal extent.

## Parameters

### collection

`FeatureCollection`\<`Geometry` \| `null`\>

## Returns

[`BoundingBox`](../interfaces/BoundingBox.md) \| `null`
