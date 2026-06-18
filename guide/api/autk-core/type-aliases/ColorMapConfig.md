[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / ColorMapConfig

# Type Alias: ColorMapConfig

> **ColorMapConfig** = `object`

Defined in: [types-colormap.ts:160](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/types-colormap.ts#L160)

Unified color-map configuration used by map rendering and legend generation.

This config couples the selected interpolator with the domain strategy so
both `autk-core` and `@urban-toolkit/autk-map` resolve and display the same scale.

## Properties

### domainSpec

> **domainSpec**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)

Defined in: [types-colormap.ts:164](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/types-colormap.ts#L164)

Strategy used to derive the domain passed to the interpolator.

***

### interpolator

> **interpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Defined in: [types-colormap.ts:162](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/types-colormap.ts#L162)

Selected interpolator or color scheme.
