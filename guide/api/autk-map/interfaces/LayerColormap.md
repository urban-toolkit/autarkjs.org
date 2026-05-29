[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerColormap

# Interface: LayerColormap

Defined in: [autk-map/src/types-layers.ts:33](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L33)

Runtime colormap state associated with a layer.

## Properties

### computedDomain?

> `optional` **computedDomain?**: `ResolvedDomain`

Defined in: [autk-map/src/types-layers.ts:37](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L37)

Domain resolved from the current thematic or raster data, if available.

***

### computedLabels?

> `optional` **computedLabels?**: `string`[]

Defined in: [autk-map/src/types-layers.ts:39](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L39)

Legend labels derived from the resolved domain, if available.

***

### config

> **config**: `ColorMapConfig`

Defined in: [autk-map/src/types-layers.ts:35](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/types-layers.ts#L35)

User colormap configuration used for thematic styling.
