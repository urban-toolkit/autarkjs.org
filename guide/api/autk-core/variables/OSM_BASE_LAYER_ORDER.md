# Variable: OSM\_BASE\_LAYER\_ORDER

> `const` **OSM\_BASE\_LAYER\_ORDER**: readonly [`LayerType`](../type-aliases/LayerType.md)[]

Defined in: [types-layer.ts:51](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/types-layer.ts#L51)

OSM base layer types in fixed bottom-up render order.

Buildings are always rendered last and are not included here.
This order is independent of the `LayerType` union definition order.
