[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ColorMapDomainSpec

# Type Alias: ColorMapDomainSpec

> **ColorMapDomainSpec** = \{ `params`: `number`[] \| `string`[]; `type`: [`USER`](../enumerations/ColorMapDomainStrategy.md#user); \} \| \{ `type`: [`MIN_MAX`](../enumerations/ColorMapDomainStrategy.md#min_max); \} \| \{ `params?`: \[`number`, `number`\]; `type`: [`PERCENTILE`](../enumerations/ColorMapDomainStrategy.md#percentile); \}

Defined in: autk-core/dist/src/types-colormap.d.ts:40

Specification for how a colormap domain should be derived.

`USER` supplies an explicit domain, `MIN_MAX` derives a numeric range from
the input values, and `PERCENTILE` derives a numeric range from percentile
bounds.

## Union Members

### Type Literal

\{ `params`: `number`[] \| `string`[]; `type`: [`USER`](../enumerations/ColorMapDomainStrategy.md#user); \}

Explicit domain supplied by the caller.

***

### Type Literal

\{ `type`: [`MIN_MAX`](../enumerations/ColorMapDomainStrategy.md#min_max); \}

Domain inferred from the minimum and maximum numeric values.

***

### Type Literal

\{ `params?`: \[`number`, `number`\]; `type`: [`PERCENTILE`](../enumerations/ColorMapDomainStrategy.md#percentile); \}

Domain inferred from lower and upper numeric percentiles in the 0-100 range.
