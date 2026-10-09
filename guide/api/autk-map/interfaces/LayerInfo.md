[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerInfo

# Interface: LayerInfo

Defined in: [autk-map/src/types-layers.ts:30](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L30)

Static metadata used to identify and order a layer in the map stack.

## Properties

### id

> **id**: `string`

Defined in: [autk-map/src/types-layers.ts:32](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L32)

Stable layer identifier used for lookup and updates.

***

### typeLayer

> **typeLayer**: `LayerType`

Defined in: [autk-map/src/types-layers.ts:36](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L36)

Semantic layer type and geometry family handled by the layer.

***

### zIndex

> **zIndex**: `number`

Defined in: [autk-map/src/types-layers.ts:34](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L34)

Rendering order relative to other layers.
