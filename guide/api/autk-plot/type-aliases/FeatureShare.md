# Type Alias: FeatureShare

> **FeatureShare** = `object`

Defined in: [types-provenance.ts:127](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L127)

Share of one source feature covered by a set of selected rendered rows.

This is the inverse direction of `MarkContribution`: selecting the March
bucket of an event line covers 3 of the 12 events of a road, so the road's
share is `3/12`. Units are weighted by `ProvenanceContribution.weight`, so a
density interval covering 37% of a feature's kernel mass gives `0.37/1`.

## Properties

### feature

> **feature**: `number`

Defined in: [types-provenance.ts:129](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L129)

Source feature index.

***

### selectedUnits

> **selectedUnits**: `number`

Defined in: [types-provenance.ts:131](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L131)

Units of the feature reduced into the selected rows, weighted.

***

### totalUnits

> **totalUnits**: `number`

Defined in: [types-provenance.ts:133](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L133)

All units of the feature reduced into any rendered row, weighted.
