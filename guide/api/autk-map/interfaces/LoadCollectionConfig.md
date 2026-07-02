[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadCollectionConfig

# Interface: LoadCollectionConfig

Defined in: [autk-map/src/api.ts:43](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L43)

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

Defined in: [autk-map/src/api.ts:47](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L47)

Optional flag to preserve buildings that lack valid height metadata.

***

### polylinesWidth?

> `optional` **polylinesWidth?**: `number`

Defined in: [autk-map/src/api.ts:54](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L54)

Optional full visual width for triangulated polyline/road layers.

The renderer stores polylines as buffered meshes, so this value is applied
while loading the collection rather than as a later render-state update.
