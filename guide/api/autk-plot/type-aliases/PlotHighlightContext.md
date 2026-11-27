# Type Alias: PlotHighlightContext

> **PlotHighlightContext** = `object`

Defined in: [plots/registered.ts:191](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L191)

What a plot's own custom highlight (`highlight` as a function) receives.

## Properties

### color

> **color**: `string`

Defined in: [plots/registered.ts:199](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L199)

Color of the selected part.

***

### drawAuto

> **drawAuto**: () => `void`

Defined in: [plots/registered.ts:201](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L201)

Draws the parts with the inferred highlight (or the one `draw` returns), for a function that adds to them.

#### Returns

`void`

***

### group

> **group**: `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:193](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L193)

Marks group; previous partial elements were already removed.

***

### marksOf

> **marksOf**: (`row`) => `SVGGraphicsElement`[]

Defined in: [plots/registered.ts:197](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L197)

Mark elements of a row.

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

#### Returns

`SVGGraphicsElement`[]

***

### parts

> **parts**: [`SegregatedPart`](SegregatedPart.md)[]

Defined in: [plots/registered.ts:195](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L195)

Selected part of each row: its datum, mark id, and fraction in `[0, 1]`.
