[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderLayer

# Interface: RenderLayer

Defined in: [api.ts:18](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L18)

Describes one geometry layer rendered for each sampled viewpoint.

## Properties

### collection

> **collection**: `FeatureCollection`

Defined in: [api.ts:23](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L23)

GeoJSON collection triangulated for this layer.

***

### id

> **id**: `string`

Defined in: [api.ts:20](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L20)

Unique layer identifier used to scope aggregation results.

***

### objectIdProperty?

> `optional` **objectIdProperty?**: `string`

Defined in: [api.ts:29](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L29)

Optional feature property used as a stable object identifier.

***

### type

> **type**: `LayerType`

Defined in: [api.ts:26](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L26)

Layer type used for triangulation and aggregation buckets.
