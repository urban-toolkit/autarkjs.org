# Type Alias: SegregatedPart

> **SegregatedPart** = `object`

Defined in: [plot-base-interactive.ts:33](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot-base-interactive.ts#L33)

Part of a rendered mark produced by the selected features (segregated view).

## Properties

### datum

> **datum**: [`AutkDatum`](AutkDatum.md)

Defined in: [plot-base-interactive.ts:35](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot-base-interactive.ts#L35)

Rendered row bound to the mark.

***

### fraction

> **fraction**: `number`

Defined in: [plot-base-interactive.ts:44](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot-base-interactive.ts#L44)

Fraction of the mark to fill, in `[0, 1]`: selected value over row value
for additive reducers, selected units over row units otherwise.

***

### mark

> **mark**: [`ProvenanceId`](ProvenanceId.md)

Defined in: [plot-base-interactive.ts:37](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot-base-interactive.ts#L37)

Mark id of the rendered row.

***

### part

> **part**: [`MarkContribution`](MarkContribution.md)

Defined in: [plot-base-interactive.ts:39](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot-base-interactive.ts#L39)

Contribution of the selected features to the row.
