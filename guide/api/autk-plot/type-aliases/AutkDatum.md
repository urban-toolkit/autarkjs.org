[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / AutkDatum

# Type Alias: AutkDatum

> **AutkDatum** = `GeoJsonProperties` & `object`

Defined in: [types-plot.ts:9](https://github.com/urban-toolkit/autark/blob/1faf032b4fe83189246b9966c0ef324f5821c731/autk-plot/src/types-plot.ts#L9)

Datum contract bound to interactive marks.

`autkIds` must always reference source feature indices from the original
input collection (never DOM position indices).

## Type Declaration

### autkIds?

> `optional` **autkIds?**: `number`[]

Source feature indices from the original GeoJSON input collection.
