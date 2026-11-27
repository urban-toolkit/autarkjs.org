# Type Alias: ColorMapConfig

> **ColorMapConfig** = `object` & \{ `colors?`: `never`; `interpolator`: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md); `type?`: `never`; \} \| [`CustomColorPalette`](CustomColorPalette.md) & `object`

Defined in: [types-colormap.ts:160](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/types-colormap.ts#L160)

Unified color-map configuration used by map rendering and legend generation.

This config couples the selected interpolator with the domain strategy so
both `autk-core` and `@urban-toolkit/autk-map` resolve and display the same scale.

## Type Declaration

### domainSpec

> **domainSpec**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)
