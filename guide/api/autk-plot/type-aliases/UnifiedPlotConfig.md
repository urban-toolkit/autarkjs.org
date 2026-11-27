# Type Alias: UnifiedPlotConfig

> **UnifiedPlotConfig** = `Omit`\<[`PlotConfig`](PlotConfig.md), `"div"`\> & `object`

Defined in: [api.ts:196](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L196)

Configuration passed to `AutkPlot`. Identical to `PlotConfig` minus `div`,
which is supplied as a separate constructor argument, plus a `type` discriminant
that selects the plot.

## Type Declaration

### type

> **type**: [`PlotType`](PlotType.md)

Name of the plot to draw.
