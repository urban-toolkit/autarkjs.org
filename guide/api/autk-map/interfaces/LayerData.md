[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerData

# Interface: LayerData

Defined in: [autk-map/src/types-layers.ts:66](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L66)

Render-ready layer payload produced by loaders and triangulation steps.

## Properties

### border?

> `optional` **border?**: `LayerBorder`[]

Defined in: [autk-map/src/types-layers.ts:72](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L72)

Optional border geometry for outlined 2D triangle layers.

***

### borderComponents?

> `optional` **borderComponents?**: `LayerBorderComponent`[]

Defined in: [autk-map/src/types-layers.ts:74](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L74)

Cumulative border-component metadata aligned with `border`.

***

### components

> **components**: `LayerComponent`[]

Defined in: [autk-map/src/types-layers.ts:70](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L70)

Per-primitive component metadata aligned with `geometry`.

***

### geometry

> **geometry**: `LayerGeometry`[]

Defined in: [autk-map/src/types-layers.ts:68](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L68)

Geometry buffers for the layer primitives.

***

### pointInstanceCount?

> `optional` **pointInstanceCount?**: `number`

Defined in: [autk-map/src/types-layers.ts:78](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L78)

Number of point instances stored in `pointInstances`.

***

### pointInstances?

> `optional` **pointInstances?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:76](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L76)

Packed point-instance centers `[x, y, ...]` for instanced point rendering.

***

### pointSize?

> `optional` **pointSize?**: `number`

Defined in: [autk-map/src/types-layers.ts:80](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L80)

Base point radius in local planar units for instanced point rendering.

***

### raster?

> `optional` **raster?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [autk-map/src/types-layers.ts:86](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L86)

Raster scalar values, for raster layers only.

***

### rasterResX?

> `optional` **rasterResX?**: `number`

Defined in: [autk-map/src/types-layers.ts:82](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L82)

Raster grid width in cells, for raster layers only.

***

### rasterResY?

> `optional` **rasterResY?**: `number`

Defined in: [autk-map/src/types-layers.ts:84](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L84)

Raster grid height in cells, for raster layers only.

***

### thematic?

> `optional` **thematic?**: [`LayerThematic`](LayerThematic.md)[]

Defined in: [autk-map/src/types-layers.ts:88](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-map/src/types-layers.ts#L88)

Per-component or per-cell thematic values used for color mapping.
