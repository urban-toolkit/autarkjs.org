[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / AutkDatum

# Type Alias: AutkDatum

> **AutkDatum** = `GeoJsonProperties` & `object`

Defined in: [types-plot.ts:9](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/types-plot.ts#L9)

Datum contract bound to interactive marks.

`autkIds` must always reference source feature indices from the original
input collection (never DOM position indices).

## Type Declaration

### autkIds?

> `optional` **autkIds?**: `number`[]

Source feature indices from the original GeoJSON input collection.
