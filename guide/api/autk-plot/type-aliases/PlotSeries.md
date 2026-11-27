# Type Alias: PlotSeries

> **PlotSeries** = `object`

Defined in: [plots/registered.ts:170](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L170)

A series the plot drew through its marks (a line, an area, a radar polygon),
and how to draw it again through the selected parts.

## Properties

### area?

> `optional` **area?**: `boolean`

Defined in: [plots/registered.ts:187](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L187)

Whether the series is filled down to the baseline (an area). An area of
parts only means something when parts add up (count, sum), so with avg,
min, or max it is not drawn. Defaults to whether the path is filled; a
filled shape that is not an area (a radar polygon) sets `false`.

***

### element

> **element**: `SVGPathElement`

Defined in: [plots/registered.ts:172](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L172)

The drawn path; the part of the series takes its style, in the highlight color.

***

### path

> **path**: (`value`) => `string` \| `null`

Defined in: [plots/registered.ts:180](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L180)

Path of the series with `value(row)` in place of each row's value: the
selected part of the row, `0` for a row without one when parts add up,
or `null` (a gap) when they do not. `null` draws nothing.

#### Parameters

##### value

(`row`) => `number` \| `null`

#### Returns

`string` \| `null`

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [plots/registered.ts:174](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L174)

Rows of the series, in drawing order.
