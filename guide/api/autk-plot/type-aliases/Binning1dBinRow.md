[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / Binning1dBinRow

# Type Alias: Binning1dBinRow

> **Binning1dBinRow** = `object`

Defined in: [transforms/presets/binning-1d.ts:38](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-1d.ts#L38)

A single bin row ready for plot rendering.

`label` is either a category string or a formatted numeric range such as `"1k-2k"`.
`order` is the numeric sort key for the bin (bin index for quantitative, insertion order for categorical).

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-1d.ts:48](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-1d.ts#L48)

Merged source feature ids from all rows in this bin, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-1d.ts:46](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-1d.ts#L46)

How many rows fell into this bin.

***

### label

> **label**: `string`

Defined in: [transforms/presets/binning-1d.ts:40](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-1d.ts#L40)

Bin label — category string or formatted numeric range such as `"1k-2k"`.

***

### order

> **order**: `number`

Defined in: [transforms/presets/binning-1d.ts:42](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-1d.ts#L42)

Numeric sort key for this bin (bin index for quantitative, insertion order for categorical).

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-1d.ts:44](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-plot/src/transforms/presets/binning-1d.ts#L44)

The reduced numeric result (count, sum, avg, min, or max) for this bin.
