[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerRenderInfo

# Interface: LayerRenderInfo

Defined in: [autk-map/src/types-layers.ts:44](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L44)

Mutable render state associated with a layer.

## Properties

### color?

> `optional` **color?**: `ColorRGB`

Defined in: [autk-map/src/types-layers.ts:46](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L46)

Optional fixed layer color used when thematic color mapping is disabled.

***

### colormap

> **colormap**: [`LayerColormap`](LayerColormap.md)

Defined in: [autk-map/src/types-layers.ts:58](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L58)

Current colormap configuration and derived runtime domain or label state.

***

### isColorMap?

> `optional` **isColorMap?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:52](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L52)

Enables thematic color interpolation when `true`.

***

### isPick?

> `optional` **isPick?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:56](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L56)

Enables picking for this layer when `true`.

***

### isSkip?

> `optional` **isSkip?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:54](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L54)

Skips rendering work for this layer when `true`.

***

### opacity

> **opacity**: `number`

Defined in: [autk-map/src/types-layers.ts:50](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L50)

Layer opacity in the range `[0, 1]`.

***

### pickedComps?

> `optional` **pickedComps?**: `number`[]

Defined in: [autk-map/src/types-layers.ts:60](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L60)

Pending canvas-relative pick coordinates `[x, y]` in CSS pixels, if any.

***

### strokeColor?

> `optional` **strokeColor?**: `ColorRGB`

Defined in: [autk-map/src/types-layers.ts:48](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-layers.ts#L48)

Optional fixed border/outline color used by layers with a border pass.
