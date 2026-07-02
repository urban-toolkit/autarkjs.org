[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRasterParams

# Interface: UpdateRasterParams

Defined in: [autk-map/src/api.ts:137](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L137)

Parameters for updating a raster layer's values.

Raster updates replace the value source for an existing raster layer. The
`property` accessor is resolved from `collection.features[0].properties` and
must point to a flat band array such as `band_1`.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:141](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L141)

GeoTIFF-derived feature collection containing raster payload data.

***

### property

> **property**: `string`

Defined in: [autk-map/src/api.ts:145](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L145)

Dot-path accessor for the flat raster band array on feature properties.

***

### transferFunction?

> `optional` **transferFunction?**: `TransferFunction`

Defined in: [autk-map/src/api.ts:149](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L149)

Optional transfer function used to derive raster opacity from values.
