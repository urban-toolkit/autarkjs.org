# Type Alias: ColorMapOptions

> **ColorMapOptions** = `object` & \{ `colors?`: `never`; `interpolator`: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md); `type?`: `never`; \} \| [`CustomColorPalette`](CustomColorPalette.md) & `object` \| \{ `colors?`: `never`; `interpolator?`: `never`; `type?`: `never`; \}

Defined in: [types-colormap.ts:172](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/types-colormap.ts#L172)

Optional colormap settings for choosing a scale, configuring its domain, or both.

## Type Declaration

### domainSpec?

> `optional` **domainSpec?**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)
