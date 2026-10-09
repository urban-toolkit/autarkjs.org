[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateRenderInfoParams

# Interface: UpdateRenderInfoParams

Defined in: [autk-map/src/api.ts:187](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L187)

Parameters for updating one or more render properties of a layer.

Use this to patch render-state fields such as visibility, opacity, picking,
or other supported layer render flags without rebuilding the layer.

## Properties

### renderInfo

> **renderInfo**: `Partial`\<[`LayerRenderInfo`](LayerRenderInfo.md)\>

Defined in: [autk-map/src/api.ts:191](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/api.ts#L191)

Partial render-state patch applied to the target layer.
