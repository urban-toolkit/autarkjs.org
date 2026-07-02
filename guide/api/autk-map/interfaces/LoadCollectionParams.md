[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LoadCollectionParams

# Interface: LoadCollectionParams

Defined in: [autk-map/src/api.ts:57](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L57)

Parameter types for the main `AutkMap` loading and update APIs.

## Properties

### collection

> **collection**: `FeatureCollection`\<`Geometry` \| `null`\>

Defined in: [autk-map/src/api.ts:65](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L65)

Source feature collection to load.

Raster-derived collections may contain `null` geometries because values
are provided as flat band arrays on the feature properties rather than as
per-cell vector geometries.

***

### loadConfig?

> `optional` **loadConfig?**: [`LoadCollectionConfig`](LoadCollectionConfig.md)

Defined in: [autk-map/src/api.ts:77](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L77)

Optional geometry-building configuration applied while loading.

***

### property?

> `optional` **property?**: `string`

Defined in: [autk-map/src/api.ts:89](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L89)

Property accessor used to derive layer values.

Use a dot-path string accessor such as `properties.shape_area`.

For vector layers, the path is resolved from each feature and is applied
immediately as the initial thematic mapping when provided.

For raster layers, the path is resolved from the feature properties and
must point to a flat band array such as `band_1`.

***

### type?

> `optional` **type?**: `LayerType` \| `null`

Defined in: [autk-map/src/api.ts:73](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L73)

Optional explicit layer type override.

Provide this when geometry-based inference is ambiguous, such as for
mixed-geometry collections, or when the intended semantic layer type
should not be derived automatically.
