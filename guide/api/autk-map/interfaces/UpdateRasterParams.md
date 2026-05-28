[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRasterParams

# Interface: UpdateRasterParams

Defined in: [autk-map/src/api.ts:122](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L122)

Parameters for updating a raster layer's values.

Raster updates replace the value source for an existing raster layer. The
`property` accessor is resolved for each raw raster cell payload from
`collection.features[0].properties.raster`.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:126](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L126)

GeoTIFF-derived feature collection containing raster payload data.

***

### property

> **property**: `string`

Defined in: [autk-map/src/api.ts:130](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L130)

Dot-path accessor for the numeric value in each raster cell.

***

### transferFunction?

> `optional` **transferFunction?**: `TransferFunction`

Defined in: [autk-map/src/api.ts:134](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L134)

Optional transfer function used to derive raster opacity from values.
