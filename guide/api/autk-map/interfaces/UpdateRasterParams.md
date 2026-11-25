[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRasterParams

# Interface: UpdateRasterParams

Defined in: [autk-map/src/api.ts:187](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L187)

Parameters for updating a raster layer's values.

Raster updates replace the value source for an existing raster layer. The
`property` accessor is resolved from `collection.features[0].properties` and
must point to a flat band array such as `band_1`, or be three such accessors
to draw the bands as a true-color RGB image.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:191](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L191)

GeoTIFF-derived feature collection containing raster payload data.

***

### property

> **property**: `string` \| [`RasterRgbBands`](../type-aliases/RasterRgbBands.md)

Defined in: [autk-map/src/api.ts:201](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L201)

Dot-path accessor for the flat raster band array on feature properties.

Pass three accessors in red, green, blue order, such as
`['band_1', 'band_2', 'band_3']`, to draw them as a true-color RGB image.
Each band must match the existing layer's width times height; updates do not resize the grid.
The bands must have the same length, and the color map and
`transferFunction` do not apply.

***

### rgbRange?

> `optional` **rgbRange?**: [`RasterRgbRange`](../type-aliases/RasterRgbRange.md)

Defined in: [autk-map/src/api.ts:213](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L213)

Band values that map to 0 and 255 for an RGB raster. Defaults to
`[0, 255]` for 8-bit imagery and to the smallest and largest channel value of complete, finite pixels
otherwise, so reflectance data may need an explicit range such as
`[0, 3000]` to look right. Use `[0, 1]` explicitly for normalized imagery.

***

### transferFunction?

> `optional` **transferFunction?**: `TransferFunction`

Defined in: [autk-map/src/api.ts:206](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L206)

Optional transfer function used to derive raster opacity from values.
Ignored for an RGB raster.
