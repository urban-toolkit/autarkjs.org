[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRenderInfoParams

# Interface: UpdateRenderInfoParams

Defined in: [autk-map/src/api.ts:179](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L179)

Parameters for updating one or more render properties of a layer.

Use this to patch render-state fields such as visibility, opacity, picking,
or other supported layer render flags without rebuilding the layer.

## Properties

### renderInfo

> **renderInfo**: `Partial`\<[`LayerRenderInfo`](LayerRenderInfo.md)\>

Defined in: [autk-map/src/api.ts:183](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/api.ts#L183)

Partial render-state patch applied to the target layer.
