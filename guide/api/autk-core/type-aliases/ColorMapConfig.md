[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / ColorMapConfig

# Type Alias: ColorMapConfig

> **ColorMapConfig** = `object` & \{ `colors?`: `never`; `interpolator`: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md); `type?`: `never`; \} \| [`CustomColorPalette`](CustomColorPalette.md) & `object`

Defined in: [types-colormap.ts:160](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/types-colormap.ts#L160)

Unified color-map configuration used by map rendering and legend generation.

This config couples the selected interpolator with the domain strategy so
both `autk-core` and `@urban-toolkit/autk-map` resolve and display the same scale.

## Type Declaration

### domainSpec

> **domainSpec**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)
