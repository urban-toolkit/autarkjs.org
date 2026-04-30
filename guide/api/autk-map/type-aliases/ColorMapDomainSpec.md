[**autk-map**](../index.md)

***

[autk-map](../globals.md) / ColorMapDomainSpec

# Type Alias: ColorMapDomainSpec

> **ColorMapDomainSpec** = \{ `params`: `number`[] \| `string`[]; `type`: [`USER`](../enumerations/ColorMapDomainStrategy.md#user); \} \| \{ `type`: [`MIN_MAX`](../enumerations/ColorMapDomainStrategy.md#min_max); \} \| \{ `params?`: \[`number`, `number`\]; `type`: [`PERCENTILE`](../enumerations/ColorMapDomainStrategy.md#percentile); \}

Defined in: [autk-core/src/types-colormap.ts:43](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L43)

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
