[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / Binning2dCellRow

# Type Alias: Binning2dCellRow

> **Binning2dCellRow** = `object`

Defined in: [transforms/presets/binning-2d.ts:42](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L42)

A single aggregated cell ready for plot rendering.

`x` and `y` are the bin labels for this cell — either a category string or a
formatted numeric range such as `"1k-2k"`.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-2d.ts:56](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L56)

Merged source feature ids from all rows in this cell, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-2d.ts:54](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L54)

How many rows fell into this cell.

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-2d.ts:52](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L52)

The reduced numeric result (count, sum, avg, min, or max) for this cell.

***

### x

> **x**: `string`

Defined in: [transforms/presets/binning-2d.ts:44](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L44)

Bin label for the x axis — category string or formatted numeric range such as `"1k-2k"`.

***

### xOrder

> **xOrder**: `number`

Defined in: [transforms/presets/binning-2d.ts:48](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L48)

Numeric sort key for the x bin (bin index for quantitative, insertion order for categorical).

***

### y

> **y**: `string`

Defined in: [transforms/presets/binning-2d.ts:46](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L46)

Bin label for the y axis — category string or formatted numeric range such as `"1k-2k"`.

***

### yOrder

> **yOrder**: `number`

Defined in: [transforms/presets/binning-2d.ts:50](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-2d.ts#L50)

Numeric sort key for the y bin (bin index for quantitative, insertion order for categorical).
