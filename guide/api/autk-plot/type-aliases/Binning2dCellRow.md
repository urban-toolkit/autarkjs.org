# Type Alias: Binning2dCellRow

> **Binning2dCellRow** = `object`

Defined in: [transforms/presets/binning-2d.ts:33](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L33)

A single aggregated cell ready for plot rendering.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-2d.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L47)

Merged source feature ids from all rows in this cell, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-2d.ts:45](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L45)

How many rows fell into this cell.

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-2d.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L43)

The reduced numeric result (count, sum, avg, min, or max) for this cell.

***

### x

> **x**: `string`

Defined in: [transforms/presets/binning-2d.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L35)

Bin label for the x axis — category string or formatted numeric range such as `"1k-2k"`.

***

### xOrder

> **xOrder**: `number`

Defined in: [transforms/presets/binning-2d.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L39)

Numeric sort key for the x bin (bin index for quantitative, insertion order for categorical).

***

### y

> **y**: `string`

Defined in: [transforms/presets/binning-2d.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L37)

Bin label for the y axis — category string or formatted numeric range such as `"1k-2k"`.

***

### yOrder

> **yOrder**: `number`

Defined in: [transforms/presets/binning-2d.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-2d.ts#L41)

Numeric sort key for the y bin (bin index for quantitative, insertion order for categorical).
