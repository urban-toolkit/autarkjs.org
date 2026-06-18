[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadCollectionConfig

# Interface: LoadCollectionConfig

Defined in: [autk-map/src/api.ts:42](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L42)

Parameters for loading a feature collection as a map layer.

When `type` is omitted, the map may infer a vector layer type from the
collection's non-null geometries. Mixed-geometry collections require an
explicit `type`. Pass `type: 'raster'` together with `property` to load a
GeoTIFF-derived raster layer.

For vector layers, `property` is optional and is used to initialize thematic
mapping immediately after the layer is created. For raster layers, `property`
is required so a numeric value can be extracted from each raster cell.

## Properties

### buildingsZeroHeight?

> `optional` **buildingsZeroHeight?**: `boolean`

Defined in: [autk-map/src/api.ts:46](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L46)

Optional flag to preserve buildings that lack valid height metadata.

***

### polylinesWidth?

> `optional` **polylinesWidth?**: `number`

Defined in: [autk-map/src/api.ts:53](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L53)

Optional full visual width for triangulated polyline/road layers.

The renderer stores polylines as buffered meshes, so this value is applied
while loading the collection rather than as a later render-state update.
