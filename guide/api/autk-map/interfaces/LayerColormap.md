[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerColormap

# Interface: LayerColormap

Defined in: [autk-map/src/types-layers.ts:34](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/types-layers.ts#L34)

Runtime colormap state associated with a layer.

## Properties

### computedDomain?

> `optional` **computedDomain?**: `ResolvedDomain`

Defined in: [autk-map/src/types-layers.ts:38](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/types-layers.ts#L38)

Domain resolved from the current thematic or raster data, if available.

***

### computedLabels?

> `optional` **computedLabels?**: `string`[]

Defined in: [autk-map/src/types-layers.ts:40](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/types-layers.ts#L40)

Legend labels derived from the resolved domain, if available.

***

### config

> **config**: `ColorMapConfig`

Defined in: [autk-map/src/types-layers.ts:36](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-map/src/types-layers.ts#L36)

User colormap configuration used for thematic styling.
