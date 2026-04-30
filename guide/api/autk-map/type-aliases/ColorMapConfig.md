[**autk-map**](../index.md)

***

[autk-map](../globals.md) / ColorMapConfig

# Type Alias: ColorMapConfig

> **ColorMapConfig** = `object`

Defined in: [autk-core/src/types-colormap.ts:160](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L160)

Unified color-map configuration used by map rendering and legend generation.

This config couples the selected interpolator with the domain strategy so
both `autk-core` and `autk-map` resolve and display the same scale.

## Properties

### domainSpec

> **domainSpec**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)

Defined in: [autk-core/src/types-colormap.ts:164](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L164)

Strategy used to derive the domain passed to the interpolator.

***

### interpolator

> **interpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Defined in: [autk-core/src/types-colormap.ts:162](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L162)

Selected interpolator or color scheme.
