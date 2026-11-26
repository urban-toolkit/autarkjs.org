# Interface: LoadCollectionConfig

Defined in: [autk-map/src/api.ts:82](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L82)

Parameters for loading a feature collection as a map layer.

When `type` is omitted, the map may infer a vector layer type from the
collection's non-null geometries. Mixed-geometry collections require an
explicit `type`. Pass `type: 'raster'` together with `property` to load a
GeoTIFF-derived raster layer.

For vector layers, `property` is optional and is used to initialize thematic
mapping immediately after the layer is created. For raster layers, `property`
selects the band array stored on the raster feature properties (for example
`band_1`).

## Properties

### buildingsZeroHeight?

> `optional` **buildingsZeroHeight?**: `boolean`

Defined in: [autk-map/src/api.ts:86](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L86)

Optional flag to preserve buildings that lack valid height metadata.

***

### rgbRange?

> `optional` **rgbRange?**: [`RasterRgbRange`](../type-aliases/RasterRgbRange.md)

Defined in: [autk-map/src/api.ts:93](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L93)

Band values that map to 0 and 255 when a raster layer is drawn as an RGB
image (`property` given as three bands). Defaults to `[0, 255]` for 8-bit
imagery and to the smallest and largest channel value of complete, finite RGB pixels otherwise.
Use `[0, 1]` explicitly for normalized floating-point imagery.
