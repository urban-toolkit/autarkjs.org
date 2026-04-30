[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / UnifiedChartConfig

# Type Alias: UnifiedChartConfig

> **UnifiedChartConfig** = `Omit`\<[`ChartConfig`](ChartConfig.md), `"div"`\> & `object`

Defined in: [autk-plot/src/api.ts:85](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L85)

Configuration passed to `AutkChart`. Identical to `ChartConfig` minus `div`,
which is supplied as a separate constructor argument, plus a `type` discriminant
that selects the chart implementation.

## Type Declaration

### type

> **type**: [`ChartType`](ChartType.md)

Selects which chart implementation to instantiate.
