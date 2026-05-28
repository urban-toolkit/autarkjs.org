[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ColorMapConfig

# Type Alias: ColorMapConfig

> **ColorMapConfig** = `object`

Defined in: autk-core/dist/src/types-colormap.d.ts:163

Unified color-map configuration used by map rendering and legend generation.

This config couples the selected interpolator with the domain strategy so
both `autk-core` and `@urban-toolkit/autk-map` resolve and display the same scale.

## Properties

### domainSpec

> **domainSpec**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)

Defined in: autk-core/dist/src/types-colormap.d.ts:167

Strategy used to derive the domain passed to the interpolator.

***

### interpolator

> **interpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Defined in: autk-core/dist/src/types-colormap.d.ts:165

Selected interpolator or color scheme.
