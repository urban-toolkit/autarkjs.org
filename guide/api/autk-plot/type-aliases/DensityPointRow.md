[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / DensityPointRow

# Type Alias: DensityPointRow

> **DensityPointRow** = `object`

Defined in: [transforms/presets/density.ts:47](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L47)

One grid point of one group's density curve.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/density.ts:59](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L59)

Features whose kernel reaches the point, used for selection linking.

***

### group

> **group**: `string`

Defined in: [transforms/presets/density.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L49)

Group of the curve, `''` without a group column.

***

### index

> **index**: `number`

Defined in: [transforms/presets/density.ts:51](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L51)

Position of the point in its curve.

***

### label

> **label**: `string`

Defined in: [transforms/presets/density.ts:55](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L55)

Readable label: the group and the value.

***

### value

> **value**: `number`

Defined in: [transforms/presets/density.ts:57](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L57)

Estimated density at the point.

***

### x

> **x**: `number`

Defined in: [transforms/presets/density.ts:53](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L53)

Value of the numeric column at the point.
