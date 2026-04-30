[**autk-compute**](../index.md)

***

[autk-compute](../globals.md) / RenderLayer

# Interface: RenderLayer

Defined in: [api.ts:18](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L18)

Describes one geometry layer rendered for each sampled viewpoint.

## Properties

### collection

> **collection**: `FeatureCollection`

Defined in: [api.ts:23](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L23)

GeoJSON collection triangulated for this layer.

***

### id

> **id**: `string`

Defined in: [api.ts:20](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L20)

Unique layer identifier used to scope aggregation results.

***

### objectIdProperty?

> `optional` **objectIdProperty?**: `string`

Defined in: [api.ts:29](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L29)

Optional feature property used as a stable object identifier.

***

### type

> **type**: `LayerType`

Defined in: [api.ts:26](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L26)

Layer type used for triangulation and aggregation buckets.
