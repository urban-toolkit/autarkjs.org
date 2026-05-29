[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerData

# Interface: LayerData

Defined in: [autk-map/src/types-layers.ts:59](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L59)

Render-ready layer payload produced by loaders and triangulation steps.

## Properties

### border?

> `optional` **border?**: `LayerBorder`[]

Defined in: [autk-map/src/types-layers.ts:65](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L65)

Optional border geometry for outlined 2D triangle layers.

***

### borderComponents?

> `optional` **borderComponents?**: `LayerBorderComponent`[]

Defined in: [autk-map/src/types-layers.ts:67](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L67)

Cumulative border-component metadata aligned with `border`.

***

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/types-layers.ts:63](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L63)

Per-primitive component metadata aligned with `geometry`.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/types-layers.ts:61](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L61)

Geometry buffers for the layer primitives.

***

### pointInstanceCount?

> `optional` **pointInstanceCount?**: `number`

Defined in: [autk-map/src/types-layers.ts:71](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L71)

Number of point instances stored in `pointInstances`.

***

### pointInstances?

> `optional` **pointInstances?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:69](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L69)

Packed point-instance centers `[x, y, ...]` for instanced point rendering.

***

### pointSize?

> `optional` **pointSize?**: `number`

Defined in: [autk-map/src/types-layers.ts:73](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L73)

Base point radius in local planar units for instanced point rendering.

***

### raster?

> `optional` **raster?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:79](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L79)

Raster scalar values, for raster layers only.

***

### rasterResX?

> `optional` **rasterResX?**: `number`

Defined in: [autk-map/src/types-layers.ts:75](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L75)

Raster grid width in cells, for raster layers only.

***

### rasterResY?

> `optional` **rasterResY?**: `number`

Defined in: [autk-map/src/types-layers.ts:77](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L77)

Raster grid height in cells, for raster layers only.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/types-layers.ts:81](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L81)

Per-component or per-cell thematic values used for color mapping.
