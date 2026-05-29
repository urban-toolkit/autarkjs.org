[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerRenderInfo

# Interface: LayerRenderInfo

Defined in: [autk-map/src/types-layers.ts:43](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L43)

Mutable render state associated with a layer.

## Properties

### colormap

> **colormap**: [`LayerColormap`](LayerColormap.md)

Defined in: [autk-map/src/types-layers.ts:53](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L53)

Current colormap configuration and derived runtime domain or label state.

***

### isColorMap?

> `optional` **isColorMap?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:47](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L47)

Enables thematic color interpolation when `true`.

***

### isPick?

> `optional` **isPick?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:51](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L51)

Enables picking for this layer when `true`.

***

### isSkip?

> `optional` **isSkip?**: `boolean`

Defined in: [autk-map/src/types-layers.ts:49](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L49)

Skips rendering work for this layer when `true`.

***

### opacity

> **opacity**: `number`

Defined in: [autk-map/src/types-layers.ts:45](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L45)

Layer opacity in the range `[0, 1]`.

***

### pickedComps?

> `optional` **pickedComps?**: `number`[]

Defined in: [autk-map/src/types-layers.ts:55](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L55)

Pending canvas-relative pick coordinates `[x, y]` in CSS pixels, if any.
