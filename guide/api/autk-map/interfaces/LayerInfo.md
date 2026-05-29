[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerInfo

# Interface: LayerInfo

Defined in: [autk-map/src/types-layers.ts:23](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L23)

Static metadata used to identify and order a layer in the map stack.

## Properties

### id

> **id**: `string`

Defined in: [autk-map/src/types-layers.ts:25](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L25)

Stable layer identifier used for lookup and updates.

***

### typeLayer

> **typeLayer**: `LayerType`

Defined in: [autk-map/src/types-layers.ts:29](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L29)

Semantic layer type and geometry family handled by the layer.

***

### zIndex

> **zIndex**: `number`

Defined in: [autk-map/src/types-layers.ts:27](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L27)

Rendering order relative to other layers.
