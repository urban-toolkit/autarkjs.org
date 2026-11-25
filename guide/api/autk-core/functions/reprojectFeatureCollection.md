[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / reprojectFeatureCollection

# Function: reprojectFeatureCollection()

> **reprojectFeatureCollection**(`collection`, `sourceCrs`, `targetCrs`): `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [reproject-geojson.ts:44](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/reproject-geojson.ts#L44)

Reprojects vector geometry and recomputes declared bounds without mutating the input.
Names must be known to Proj4js (or registered with registerCrs); PROJ and WKT strings also work.
EPSG:4326 uses [longitude, latitude]. Properties, IDs, and Z values are preserved.
Identical CRSs return the input. Raster band arrays are not resampled.

## Parameters

### collection

`FeatureCollection`\<`Geometry` \| `null`\>

### sourceCrs

`string`

### targetCrs

`string`

## Returns

`FeatureCollection`\<`Geometry` \| `null`\>
