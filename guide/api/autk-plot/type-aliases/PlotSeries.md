[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotSeries

# Type Alias: PlotSeries

> **PlotSeries** = `object`

Defined in: [plots/registered.ts:142](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L142)

A series the plot drew through its marks (a line, an area, a radar polygon),
and how to draw it again through the selected parts.

## Properties

### area?

> `optional` **area?**: `boolean`

Defined in: [plots/registered.ts:159](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L159)

Whether the series is filled down to the baseline (an area). An area of
parts only means something when parts add up (count, sum), so with avg,
min, or max it is not drawn. Defaults to whether the path is filled; a
filled shape that is not an area (a radar polygon) sets `false`.

***

### element

> **element**: `SVGPathElement`

Defined in: [plots/registered.ts:144](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L144)

The drawn path; the part of the series takes its style, in the highlight color.

***

### path

> **path**: (`value`) => `string` \| `null`

Defined in: [plots/registered.ts:152](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L152)

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

Defined in: [plots/registered.ts:146](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L146)

Rows of the series, in drawing order.
