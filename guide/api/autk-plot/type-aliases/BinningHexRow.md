[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / BinningHexRow

# Type Alias: BinningHexRow

> **BinningHexRow** = `object`

Defined in: [transforms/presets/binning-hex.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L39)

A single aggregated hexagon ready for plot rendering.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/binning-hex.ts:51](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L51)

Merged source feature ids from all rows in this hexagon, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/binning-hex.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L49)

How many rows fell into this hexagon.

***

### cx

> **cx**: `number`

Defined in: [transforms/presets/binning-hex.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L43)

Center x in pixels of the binned area.

***

### cy

> **cy**: `number`

Defined in: [transforms/presets/binning-hex.ts:45](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L45)

Center y in pixels of the binned area, growing downward.

***

### label

> **label**: `string`

Defined in: [transforms/presets/binning-hex.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L41)

Readable hexagon label: its center in data units, e.g. `"12M · 20k"`.

***

### value

> **value**: `number`

Defined in: [transforms/presets/binning-hex.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L47)

The reduced numeric result (count, sum, avg, min, or max) for this hexagon.
