# Type Alias: Binning1dBinRow

> **Binning1dBinRow** = `object`

Defined in: [transforms/presets/binning-1d.ts:33](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-1d.ts#L33)

A single bin row ready for plot rendering.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-1d.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-1d.ts#L43)

Merged source feature ids from all rows in this bin, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-1d.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-1d.ts#L41)

How many rows fell into this bin.

***

### label

> **label**: `string`

Defined in: [transforms/presets/binning-1d.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-1d.ts#L35)

Bin label — category string or formatted numeric range such as `"1000-2000"`.

***

### order

> **order**: `number`

Defined in: [transforms/presets/binning-1d.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-1d.ts#L37)

Numeric sort key for this bin (bin index for quantitative, insertion order for categorical).

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-1d.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-1d.ts#L39)

The reduced numeric result (count, sum, avg, min, or max) for this bin.
