[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRasterParams

# Interface: UpdateRasterParams

Defined in: [autk-map/src/api.ts:135](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L135)

Parameters for updating a raster layer's values.

Raster updates replace the value source for an existing raster layer. The
`property` accessor is resolved for each raw raster cell payload from
`collection.features[0].properties.raster`.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:139](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L139)

GeoTIFF-derived feature collection containing raster payload data.

***

### property

> **property**: `string`

Defined in: [autk-map/src/api.ts:143](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L143)

Dot-path accessor for the numeric value in each raster cell.

***

### transferFunction?

> `optional` **transferFunction?**: `TransferFunction`

Defined in: [autk-map/src/api.ts:147](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L147)

Optional transfer function used to derive raster opacity from values.
