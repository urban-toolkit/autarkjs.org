[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / BoxStatsRow

# Type Alias: BoxStatsRow

> **BoxStatsRow** = `object`

Defined in: [transforms/presets/box-stats.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L35)

A single box summary ready for plot rendering.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/box-stats.ts:57](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L57)

Merged source feature ids of the category, used for selection linking.

***

### category

> **category**: `string`

Defined in: [transforms/presets/box-stats.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L37)

Category of the box.

***

### count

> **count**: `number`

Defined in: [transforms/presets/box-stats.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L39)

Number of rows with a finite value in the category.

***

### median

> **median**: `number`

Defined in: [transforms/presets/box-stats.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L43)

Median.

***

### medianIds

> **medianIds**: `number`[]

Defined in: [transforms/presets/box-stats.ts:53](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L53)

Source feature ids whose value is the median (one or the two middle values).

***

### outlierIds

> **outlierIds**: `number`[]

Defined in: [transforms/presets/box-stats.ts:55](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L55)

Source feature ids of the outliers.

***

### outliers

> **outliers**: `number`[]

Defined in: [transforms/presets/box-stats.ts:51](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L51)

Values outside the whiskers.

***

### q1

> **q1**: `number`

Defined in: [transforms/presets/box-stats.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L41)

First quartile.

***

### q3

> **q3**: `number`

Defined in: [transforms/presets/box-stats.ts:45](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L45)

Third quartile.

***

### whiskerHigh

> **whiskerHigh**: `number`

Defined in: [transforms/presets/box-stats.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L49)

Highest value within `q3 + whisker × IQR`.

***

### whiskerLow

> **whiskerLow**: `number`

Defined in: [transforms/presets/box-stats.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/box-stats.ts#L47)

Lowest value within `q1 - whisker × IQR`.
