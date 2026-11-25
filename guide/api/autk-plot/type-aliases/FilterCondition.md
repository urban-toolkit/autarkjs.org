[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / FilterCondition

# Type Alias: FilterCondition

> **FilterCondition** = `object`

Defined in: [api.ts:132](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L132)

A condition on a source feature property, used by `PlotConfig.filter`.

## Properties

### attribute

> **attribute**: `string`

Defined in: [api.ts:134](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L134)

Dot-path feature property to test.

***

### op

> **op**: `"=="` \| `"!="` \| `">"` \| `">="` \| `"<"` \| `"<="` \| `"in"` \| `"not-in"`

Defined in: [api.ts:136](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L136)

Comparison operator. Ordering operators compare numbers; equality and membership compare strings.

***

### value

> **value**: `number` \| `string` \| (`number` \| `string`)[]

Defined in: [api.ts:138](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L138)

Value to compare against; a list for `in` and `not-in`.
