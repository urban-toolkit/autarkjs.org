[**autk-map**](../index.md)

***

[autk-map](../globals.md) / LayerData

# Interface: LayerData

Defined in: [autk-map/src/types-layers.ts:59](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L59)

Render-ready layer payload produced by loaders and triangulation steps.

## Properties

### border?

> `optional` **border?**: [`LayerBorder`](LayerBorder.md)[]

Defined in: [autk-map/src/types-layers.ts:65](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L65)

Optional border geometry for outlined 2D triangle layers.

***

### borderComponents?

> `optional` **borderComponents?**: [`LayerBorderComponent`](LayerBorderComponent.md)[]

Defined in: [autk-map/src/types-layers.ts:67](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L67)

Cumulative border-component metadata aligned with `border`.

***

### components

> **components**: [`LayerComponent`](LayerComponent.md)[]

Defined in: [autk-map/src/types-layers.ts:63](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L63)

Per-primitive component metadata aligned with `geometry`.

***

### geometry

> **geometry**: [`LayerGeometry`](LayerGeometry.md)[]

Defined in: [autk-map/src/types-layers.ts:61](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L61)

Geometry buffers for the layer primitives.

***

### raster?

> `optional` **raster?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:73](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L73)

Raster scalar values, for raster layers only.

***

### rasterResX?

> `optional` **rasterResX?**: `number`

Defined in: [autk-map/src/types-layers.ts:69](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L69)

Raster grid width in cells, for raster layers only.

***

### rasterResY?

> `optional` **rasterResY?**: `number`

Defined in: [autk-map/src/types-layers.ts:71](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L71)

Raster grid height in cells, for raster layers only.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/types-layers.ts:75](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L75)

Per-component or per-cell thematic values used for color mapping.
