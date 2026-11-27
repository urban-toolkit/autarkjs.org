# Function: createCoordinateTransform()

> **createCoordinateTransform**(`sourceCrs`, `targetCrs`): (`position`) => `Position`

Defined in: [crs.ts:53](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/crs.ts#L53)

Builds a reusable horizontal transformation for a collection or batch of positions.
Input CRSs may be registered names, PROJ strings, or WKT. Coordinates always use x/y
(longitude/latitude for geographic CRSs). Z and other trailing values are preserved;
this API does not perform vertical-datum transformations or raster resampling.

## Parameters

### sourceCrs

`string`

### targetCrs

`string`

## Returns

(`position`) => `Position`
