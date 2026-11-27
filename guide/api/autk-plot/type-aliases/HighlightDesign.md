# Type Alias: HighlightDesign

> **HighlightDesign** = [`HighlightRule`](HighlightRule.md) & `object`

Defined in: [plots/partial-design.ts:68](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/partial-design.ts#L68)

Highlight resolved for one mark family, declared or inferred, with its evidence.

## Type Declaration

### fit?

> `optional` **fit?**: `number`

R² of the fit that proved the channel.

### kind

> **kind**: [`MarkKind`](MarkKind.md)

### marks

> **marks**: `number`

Number of marks of the family.

### reason

> **reason**: `string`

Why this highlight was chosen.

### unproven?

> `optional` **unproven?**: `true`

The glyph preset stands in because the drawing gives no evidence for a channel (fewer than
three distinct values), not because none follows the value: declaring the channel would
draw a subset render. Never set on a declared highlight.
