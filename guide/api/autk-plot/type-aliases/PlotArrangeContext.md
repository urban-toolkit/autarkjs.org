[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotArrangeContext

# Type Alias: PlotArrangeContext

> **PlotArrangeContext** = `object`

Defined in: [plots/registered.ts:123](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L123)

What a registered plot's `arrange` receives.

## Properties

### external

> **external**: `boolean`

Defined in: [plots/registered.ts:135](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L135)

Whether the current selection came from another view (the map, a linked plot).

***

### group

> **group**: `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:125](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L125)

Marks group.

***

### highlighted

> **highlighted**: (`row`) => `boolean`

Defined in: [plots/registered.ts:131](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L131)

Whether a row's mark is highlighted (selected here, or fully by another view).

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

#### Returns

`boolean`

***

### html

> **html**: `d3.Selection`\<`HTMLDivElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:127](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L127)

Container of HTML marks.

***

### parts

> **parts**: [`SegregatedPart`](SegregatedPart.md)[]

Defined in: [plots/registered.ts:133](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L133)

Rows with a selected part (a selection from another view).

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [plots/registered.ts:129](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L129)

Rendered rows, in their order.
