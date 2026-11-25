[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / CumulativeRow

# Type Alias: CumulativeRow

> **CumulativeRow** = `object`

Defined in: [transforms/presets/cumulative.ts:44](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L44)

A bar (one value, bin, or category) or a cumulative point after it.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/cumulative.ts:60](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L60)

Merged source feature ids, used for selection linking.

***

### count

> **count**: `number`

Defined in: [transforms/presets/cumulative.ts:58](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L58)

Rows counted by the bar, or up to this bar for points.

***

### index

> **index**: `number`

Defined in: [transforms/presets/cumulative.ts:48](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L48)

Position in bar order.

***

### kind

> **kind**: `"bar"` \| `"point"`

Defined in: [transforms/presets/cumulative.ts:46](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L46)

Row kind discriminator.

***

### label

> **label**: `string`

Defined in: [transforms/presets/cumulative.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L50)

Readable label: the category, value, or bin range of the bar.

***

### share

> **share**: `number`

Defined in: [transforms/presets/cumulative.ts:56](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L56)

`value` over the total of all bars, in `[0, 1]`.

***

### upper

> **upper**: `number` \| `null`

Defined in: [transforms/presets/cumulative.ts:52](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L52)

Upper edge of the bar for numeric columns, `null` otherwise.

***

### value

> **value**: `number`

Defined in: [transforms/presets/cumulative.ts:54](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/cumulative.ts#L54)

Bar value, or accumulated value up to this bar for points.
