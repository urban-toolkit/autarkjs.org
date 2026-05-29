[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateColorMapParams

# Interface: UpdateColorMapParams

Defined in: [autk-map/src/api.ts:166](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/api.ts#L166)

Parameters for patching a layer's color-map configuration.

The provided object is treated as a partial patch and merged into the layer's
existing color-map state rather than replacing the full configuration.

## Properties

### colorMap

> **colorMap**: `Partial`\<`ColorMapConfig`\>

Defined in: [autk-map/src/api.ts:170](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/api.ts#L170)

Partial color-map patch merged with the existing layer color-map state.
