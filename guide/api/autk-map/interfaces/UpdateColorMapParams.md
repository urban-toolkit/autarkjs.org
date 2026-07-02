[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateColorMapParams

# Interface: UpdateColorMapParams

Defined in: [autk-map/src/api.ts:181](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L181)

Parameters for patching a layer's color-map configuration.

The provided object is treated as a partial patch and merged into the layer's
existing color-map state rather than replacing the full configuration.

## Properties

### colorMap

> **colorMap**: `Partial`\<`ColorMapConfig`\>

Defined in: [autk-map/src/api.ts:185](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L185)

Partial color-map patch merged with the existing layer color-map state.
