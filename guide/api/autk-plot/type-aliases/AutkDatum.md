[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / AutkDatum

# Type Alias: AutkDatum

> **AutkDatum** = `GeoJsonProperties` & `object`

Defined in: [autk-plot/src/types-chart.ts:9](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/types-chart.ts#L9)

Datum contract bound to interactive marks.

`autkIds` must always reference source feature indices from the original
input collection (never DOM position indices).

## Type Declaration

### autkIds?

> `optional` **autkIds?**: `number`[]

Source feature indices from the original GeoJSON input collection.
