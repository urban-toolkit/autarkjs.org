[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRasterParams

# Interface: UpdateRasterParams

Defined in: [autk-map/src/api.ts:130](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-map/src/api.ts#L130)

Parameters for updating a raster layer's values.

Raster updates replace the value source for an existing raster layer. The
`property` accessor is resolved from `collection.features[0].properties` and
must point to a flat band array such as `band_1`.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:134](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-map/src/api.ts#L134)

GeoTIFF-derived feature collection containing raster payload data.

***

### property

> **property**: `string`

Defined in: [autk-map/src/api.ts:138](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-map/src/api.ts#L138)

Dot-path accessor for the flat raster band array on feature properties.

***

### transferFunction?

> `optional` **transferFunction?**: `TransferFunction`

Defined in: [autk-map/src/api.ts:142](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-map/src/api.ts#L142)

Optional transfer function used to derive raster opacity from values.
