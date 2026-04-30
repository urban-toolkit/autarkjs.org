[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / Binning2dCellRow

# Type Alias: Binning2dCellRow

> **Binning2dCellRow** = `object`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:42](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L42)

A single aggregated cell ready for chart rendering.

`x` and `y` are the bin labels for this cell — either a category string or a
formatted numeric range such as `"1k-2k"`.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:56](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L56)

Merged source feature ids from all rows in this cell, used for selection linking.

***

### count

> **count**: `number`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:54](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L54)

How many rows fell into this cell.

***

### value

> **value**: `number`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:52](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L52)

The reduced numeric result (count, sum, avg, min, or max) for this cell.

***

### x

> **x**: `string`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:44](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L44)

Bin label for the x axis — category string or formatted numeric range such as `"1k-2k"`.

***

### xOrder

> **xOrder**: `number`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:48](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L48)

Numeric sort key for the x bin (bin index for quantitative, insertion order for categorical).

***

### y

> **y**: `string`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:46](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L46)

Bin label for the y axis — category string or formatted numeric range such as `"1k-2k"`.

***

### yOrder

> **yOrder**: `number`

Defined in: [autk-plot/src/transforms/presets/binning-2d.ts:50](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/binning-2d.ts#L50)

Numeric sort key for the y bin (bin index for quantitative, insertion order for categorical).
