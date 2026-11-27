# Type Alias: ProvenanceContribution

> **ProvenanceContribution** = `object`

Defined in: [types-provenance.ts:67](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L67)

Unit-level contribution of a source feature to a rendered row.

A unit is what the reducer actually counts: the feature itself for binning,
one event for `binning-events`, one series point for `reduce-series`.

## Properties

### group?

> `optional` **group?**: `string`

Defined in: [types-provenance.ts:79](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L79)

Share group of the unit. Feature shares are computed per stage and
group: a Sankey node unit belongs to its column, so a feature lying
entirely in a selected node is covered fully (1/1), not once per column.

***

### source

> **source**: [`ProvenanceId`](ProvenanceId.md)

Defined in: [types-provenance.ts:69](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L69)

Source feature id (`feature:i`).

***

### target

> **target**: [`ProvenanceId`](ProvenanceId.md)

Defined in: [types-provenance.ts:71](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L71)

Rendered row id the unit was reduced into.

***

### value

> **value**: `number`

Defined in: [types-provenance.ts:73](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L73)

Numeric value the unit contributed to the reducer (`1` for count).

***

### weight?

> `optional` **weight?**: `number`

Defined in: [types-provenance.ts:86](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/types-provenance.ts#L86)

Part of its feature this unit carries, for inverse shares. Defaults to `1`:
every unit counts once. Fractional-coverage presets (density) set the
kernel weight, so a feature's share is the part of its kernel mass that
falls in the selected rows.
