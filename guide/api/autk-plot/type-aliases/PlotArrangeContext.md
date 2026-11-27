# Type Alias: PlotArrangeContext

> **PlotArrangeContext** = `object`

Defined in: [plots/registered.ts:151](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L151)

What a registered plot's `arrange` receives.

## Properties

### external

> **external**: `boolean`

Defined in: [plots/registered.ts:163](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L163)

Whether the current selection came from another view (the map, a linked plot).

***

### group

> **group**: `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:153](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L153)

Marks group.

***

### highlighted

> **highlighted**: (`row`) => `boolean`

Defined in: [plots/registered.ts:159](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L159)

Whether a row's mark is highlighted (selected here, or fully by another view).

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

#### Returns

`boolean`

***

### html

> **html**: `d3.Selection`\<`HTMLDivElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:155](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L155)

Container of HTML marks.

***

### parts

> **parts**: [`SegregatedPart`](SegregatedPart.md)[]

Defined in: [plots/registered.ts:161](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L161)

Rows with a selected part (a selection from another view).

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [plots/registered.ts:157](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L157)

Rendered rows, in their order.
