[**autk-map**](../index.md)

***

[autk-map](../globals.md) / UpdateColorMapParams

# Interface: UpdateColorMapParams

Defined in: [autk-map/src/api.ts:166](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L166)

Parameters for patching a layer's color-map configuration.

The provided object is treated as a partial patch and merged into the layer's
existing color-map state rather than replacing the full configuration.

## Properties

### colorMap

> **colorMap**: `Partial`\<[`ColorMapConfig`](../type-aliases/ColorMapConfig.md)\>

Defined in: [autk-map/src/api.ts:170](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/api.ts#L170)

Partial color-map patch merged with the existing layer color-map state.
