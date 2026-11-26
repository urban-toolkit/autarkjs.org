# Type Alias: FoldCellRow

> **FoldCellRow** = `object`

Defined in: [transforms/presets/fold.ts:40](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L40)

One category and one measure.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/fold.ts:54](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L54)

Merged source feature ids of the cell, used for selection linking.

***

### category

> **category**: `string`

Defined in: [transforms/presets/fold.ts:42](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L42)

Category label.

***

### count

> **count**: `number`

Defined in: [transforms/presets/fold.ts:52](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L52)

How many rows of the category have a finite value for the measure.

***

### label

> **label**: `string`

Defined in: [transforms/presets/fold.ts:48](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L48)

Readable label, `"<category> · <measure>"`.

***

### measure

> **measure**: `string`

Defined in: [transforms/presets/fold.ts:44](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L44)

Measure name.

***

### measureIndex

> **measureIndex**: `number`

Defined in: [transforms/presets/fold.ts:46](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L46)

Measure position, `0` for `axis[1]`.

***

### value

> **value**: `number`

Defined in: [transforms/presets/fold.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/fold.ts#L50)

Reduced value of the measure over the category's rows (rescaled when normalized).
