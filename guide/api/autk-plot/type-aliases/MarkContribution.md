# Type Alias: MarkContribution

> **MarkContribution** = `object`

Defined in: [types-provenance.ts:142](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L142)

Share of one rendered row produced by a set of selected source features.

`value` applies the row reducer to the selected units only, so it is directly
comparable with the row's own value on the same scale.

## Properties

### additive

> **additive**: `boolean`

Defined in: [types-provenance.ts:155](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L155)

Whether `value` is a part of `totalValue` (count, sum) or a statistic of
the selected subset that is not additive (avg, min, max).

***

### selectedUnits

> **selectedUnits**: `number`

Defined in: [types-provenance.ts:144](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L144)

Units of the row that come from selected features.

***

### totalUnits

> **totalUnits**: `number`

Defined in: [types-provenance.ts:146](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L146)

All units reduced into the row.

***

### totalValue

> **totalValue**: `number` \| `null`

Defined in: [types-provenance.ts:150](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L150)

Reducer applied to all units of the row.

***

### value

> **value**: `number` \| `null`

Defined in: [types-provenance.ts:148](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L148)

Reducer applied to the selected units, or `null` when none is selected.
