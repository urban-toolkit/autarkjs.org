# Interface: UpdateRenderInfoParams

Defined in: [autk-map/src/api.ts:329](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L329)

Parameters for updating one or more render properties of a layer.

Use this to patch render-state fields such as visibility, opacity, picking,
or other supported layer render flags without rebuilding the layer.

## Properties

### renderInfo

> **renderInfo**: `Partial`\<[`LayerRenderInfo`](LayerRenderInfo.md)\>

Defined in: [autk-map/src/api.ts:333](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-map/src/api.ts#L333)

Partial render-state patch applied to the target layer.
