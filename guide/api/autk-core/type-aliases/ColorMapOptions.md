[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / ColorMapOptions

# Type Alias: ColorMapOptions

> **ColorMapOptions** = `object` & \{ `colors?`: `never`; `interpolator`: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md); `type?`: `never`; \} \| [`CustomColorPalette`](CustomColorPalette.md) & `object` \| \{ `colors?`: `never`; `interpolator?`: `never`; `type?`: `never`; \}

Defined in: [types-colormap.ts:172](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/types-colormap.ts#L172)

Optional colormap settings for choosing a scale, configuring its domain, or both.

## Type Declaration

### domainSpec?

> `optional` **domainSpec?**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)
