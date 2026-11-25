[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotHighlightContext

# Type Alias: PlotHighlightContext

> **PlotHighlightContext** = `object`

Defined in: [plots/registered.ts:163](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L163)

What a plot's own custom highlight (`highlight` as a function) receives.

## Properties

### color

> **color**: `string`

Defined in: [plots/registered.ts:171](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L171)

Color of the selected part.

***

### drawAuto

> **drawAuto**: () => `void`

Defined in: [plots/registered.ts:173](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L173)

Draws the parts with the inferred highlight (or the one `draw` returns), for a function that adds to them.

#### Returns

`void`

***

### group

> **group**: `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:165](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L165)

Marks group; previous partial elements were already removed.

***

### marksOf

> **marksOf**: (`row`) => `SVGGraphicsElement`[]

Defined in: [plots/registered.ts:169](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L169)

Mark elements of a row.

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

#### Returns

`SVGGraphicsElement`[]

***

### parts

> **parts**: [`SegregatedPart`](SegregatedPart.md)[]

Defined in: [plots/registered.ts:167](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L167)

Selected part of each row: its datum, mark id, and fraction in `[0, 1]`.
