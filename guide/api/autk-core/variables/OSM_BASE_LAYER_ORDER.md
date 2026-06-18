[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / OSM\_BASE\_LAYER\_ORDER

# Variable: OSM\_BASE\_LAYER\_ORDER

> `const` **OSM\_BASE\_LAYER\_ORDER**: readonly [`LayerType`](../type-aliases/LayerType.md)[]

Defined in: [types-layer.ts:49](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/types-layer.ts#L49)

OSM base layer types in fixed bottom-up render order.

Buildings are always rendered last and are not included here.
This order is independent of the `LayerType` union definition order.
