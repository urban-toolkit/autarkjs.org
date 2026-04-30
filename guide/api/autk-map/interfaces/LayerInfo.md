[**autk-map**](../index.md)

***

[autk-map](../globals.md) / LayerInfo

# Interface: LayerInfo

Defined in: [autk-map/src/types-layers.ts:23](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L23)

Static metadata used to identify and order a layer in the map stack.

## Properties

### id

> **id**: `string`

Defined in: [autk-map/src/types-layers.ts:25](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L25)

Stable layer identifier used for lookup and updates.

***

### typeLayer

> **typeLayer**: [`LayerType`](../type-aliases/LayerType.md)

Defined in: [autk-map/src/types-layers.ts:29](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L29)

Semantic layer type and geometry family handled by the layer.

***

### zIndex

> **zIndex**: `number`

Defined in: [autk-map/src/types-layers.ts:27](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L27)

Rendering order relative to other layers.
