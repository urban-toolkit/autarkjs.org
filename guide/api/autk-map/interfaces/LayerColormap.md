[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / LayerColormap

# Interface: LayerColormap

Defined in: [autk-map/src/types-layers.ts:40](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L40)

Runtime colormap state associated with a layer.

## Properties

### computedDomain?

> `optional` **computedDomain?**: `ResolvedDomain`

Defined in: [autk-map/src/types-layers.ts:44](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L44)

Domain resolved from the current thematic or raster data, if available.

***

### computedLabels?

> `optional` **computedLabels?**: `string`[]

Defined in: [autk-map/src/types-layers.ts:46](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L46)

Legend labels derived from the resolved domain, if available.

***

### config

> **config**: `ColorMapConfig`

Defined in: [autk-map/src/types-layers.ts:42](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-map/src/types-layers.ts#L42)

User colormap configuration used for thematic styling.
