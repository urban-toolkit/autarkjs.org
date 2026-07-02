[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / UnifiedPlotConfig

# Type Alias: UnifiedPlotConfig

> **UnifiedPlotConfig** = `Omit`\<[`PlotConfig`](PlotConfig.md), `"div"`\> & `object`

Defined in: [api.ts:85](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/api.ts#L85)

Configuration passed to `AutkPlot`. Identical to `PlotConfig` minus `div`,
which is supplied as a separate constructor argument, plus a `type` discriminant
that selects the plot implementation.

## Type Declaration

### type

> **type**: [`PlotType`](PlotType.md)

Selects which plot implementation to instantiate.
