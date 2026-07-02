[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRenderInfoParams

# Interface: UpdateRenderInfoParams

Defined in: [autk-map/src/api.ts:194](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L194)

Parameters for updating one or more render properties of a layer.

Use this to patch render-state fields such as visibility, opacity, picking,
or other supported layer render flags without rebuilding the layer.

## Properties

### renderInfo

> **renderInfo**: `Partial`\<[`LayerRenderInfo`](LayerRenderInfo.md)\>

Defined in: [autk-map/src/api.ts:198](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L198)

Partial render-state patch applied to the target layer.
