[**autk-map**](../index.md)

***

[autk-map](../globals.md) / LayerColormap

# Interface: LayerColormap

Defined in: [autk-map/src/types-layers.ts:33](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L33)

Runtime colormap state associated with a layer.

## Properties

### computedDomain?

> `optional` **computedDomain?**: [`ResolvedDomain`](../type-aliases/ResolvedDomain.md)

Defined in: [autk-map/src/types-layers.ts:37](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L37)

Domain resolved from the current thematic or raster data, if available.

***

### computedLabels?

> `optional` **computedLabels?**: `string`[]

Defined in: [autk-map/src/types-layers.ts:39](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L39)

Legend labels derived from the resolved domain, if available.

***

### config

> **config**: [`ColorMapConfig`](../type-aliases/ColorMapConfig.md)

Defined in: [autk-map/src/types-layers.ts:35](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-layers.ts#L35)

User colormap configuration used for thematic styling.
