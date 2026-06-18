[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadCollectionParams

# Interface: LoadCollectionParams

Defined in: [autk-map/src/api.ts:56](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L56)

Parameter types for the main `AutkMap` loading and update APIs.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:63](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L63)

Source feature collection to load.

Raster-derived collections may contain `null` geometries because values
are resolved from raster cell payloads rather than vector geometry.

***

### loadConfig?

> `optional` **loadConfig?**: [`LoadCollectionConfig`](LoadCollectionConfig.md)

Defined in: [autk-map/src/api.ts:75](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L75)

Optional geometry-building configuration applied while loading.

***

### property?

> `optional` **property?**: `string`

Defined in: [autk-map/src/api.ts:87](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L87)

Property accessor used to derive layer values.

Use a dot-path string accessor such as `properties.shape_area`.

For vector layers, the path is resolved from each feature and is applied
immediately as the initial thematic mapping when provided.

For raster layers, the path is resolved from each raster cell object and
is required to populate the raster value texture.

***

### type?

> `optional` **type?**: `LayerType` \| `null`

Defined in: [autk-map/src/api.ts:71](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/api.ts#L71)

Optional explicit layer type override.

Provide this when geometry-based inference is ambiguous, such as for
mixed-geometry collections, or when the intended semantic layer type
should not be derived automatically.
