[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateColorMapParams

# Interface: UpdateColorMapParams

Defined in: [autk-map/src/api.ts:174](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-map/src/api.ts#L174)

Parameters for patching a layer's color-map configuration.

The provided object is treated as a partial patch and merged into the layer's
existing color-map state rather than replacing the full configuration.

## Properties

### colorMap

> **colorMap**: `Partial`\<`ColorMapConfig`\>

Defined in: [autk-map/src/api.ts:178](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-map/src/api.ts#L178)

Partial color-map patch merged with the existing layer color-map state.
