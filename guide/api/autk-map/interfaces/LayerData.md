[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerData

# Interface: LayerData

Defined in: [autk-map/src/types-layers.ts:78](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L78)

Render-ready layer payload produced by loaders and triangulation steps.

## Properties

### border?

> `optional` **border?**: `LayerBorder`[]

Defined in: [autk-map/src/types-layers.ts:84](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L84)

Optional border geometry for outlined 2D triangle layers.

***

### borderComponents?

> `optional` **borderComponents?**: `LayerBorderComponent`[]

Defined in: [autk-map/src/types-layers.ts:86](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L86)

Cumulative border-component metadata aligned with `border`.

***

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/types-layers.ts:82](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L82)

Per-primitive component metadata aligned with `geometry`.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/types-layers.ts:80](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L80)

Geometry buffers for the layer primitives.

***

### pointInstanceCount?

> `optional` **pointInstanceCount?**: `number`

Defined in: [autk-map/src/types-layers.ts:90](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L90)

Number of point instances stored in `pointInstances`.

***

### pointInstances?

> `optional` **pointInstances?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:88](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L88)

Packed point-instance centers `[x, y, ...]` for instanced point rendering.

***

### polylineAttributes?

> `optional` **polylineAttributes?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:92](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L92)

Width-independent polyline adjacency: previous XY and next XY per node (five topology vertices per node).

***

### raster?

> `optional` **raster?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:98](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L98)

Raster scalar values, for raster layers only.

***

### rasterResX?

> `optional` **rasterResX?**: `number`

Defined in: [autk-map/src/types-layers.ts:94](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L94)

Raster grid width in cells, for raster layers only.

***

### rasterResY?

> `optional` **rasterResY?**: `number`

Defined in: [autk-map/src/types-layers.ts:96](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L96)

Raster grid height in cells, for raster layers only.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/types-layers.ts:100](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L100)

Per-component or per-cell thematic values used for color mapping.
