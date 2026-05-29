[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderPipelineParams

# Interface: RenderPipelineParams

Defined in: [api.ts:110](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-compute/src/api.ts#L110)

Parameters for the render pipeline.

## Properties

### aggregation

> **aggregation**: [`RenderAggregation`](../type-aliases/RenderAggregation.md)

Defined in: [api.ts:115](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-compute/src/api.ts#L115)

Reduction strategy applied after rendering.

***

### camera?

> `optional` **camera?**: [`RenderCameraOptions`](RenderCameraOptions.md)

Defined in: [api.ts:121](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-compute/src/api.ts#L121)

Optional camera controls.

***

### layers

> **layers**: [`RenderLayer`](RenderLayer.md)[]

Defined in: [api.ts:112](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-compute/src/api.ts#L112)

Geometry layers rendered from each sampled camera.

***

### tileSize?

> `optional` **tileSize?**: `number`

Defined in: [api.ts:124](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-compute/src/api.ts#L124)

Tile resolution in pixels; must be a multiple of 8.

#### Default

```ts
64
```

***

### viewpoints

> **viewpoints**: [`RenderViewpoints`](RenderViewpoints.md)

Defined in: [api.ts:118](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-compute/src/api.ts#L118)

Viewpoint collection and origin/sampling strategy used for the render pass.
