# Type Alias: FilterCondition

> **FilterCondition** = `object`

Defined in: [api.ts:149](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L149)

A condition on a source feature property, used by `PlotConfig.filter`.

## Properties

### attribute

> **attribute**: `string`

Defined in: [api.ts:151](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L151)

Dot-path feature property to test.

***

### op

> **op**: `"=="` \| `"!="` \| `">"` \| `">="` \| `"<"` \| `"<="` \| `"in"` \| `"not-in"`

Defined in: [api.ts:153](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L153)

Comparison operator. Ordering operators compare numbers; equality and membership compare strings.

***

### value

> **value**: `number` \| `string` \| (`number` \| `string`)[]

Defined in: [api.ts:155](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L155)

Value to compare against; a list for `in` and `not-in`.
