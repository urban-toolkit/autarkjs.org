# Type Alias: ExecutedSortTransform

> **ExecutedSortTransform** = `object`

Defined in: [transforms/presets/sort.ts:20](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/sort.ts#L20)

Result produced by `runSort`.

## Properties

### preset

> **preset**: `"sort"`

Defined in: [transforms/presets/sort.ts:22](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/sort.ts#L22)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/sort.ts:26](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/sort.ts#L26)

Provenance `D0 features → D1 rows` (one-to-one), aligned with `rows`.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [transforms/presets/sort.ts:24](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/sort.ts#L24)

Sorted rows preserving their original `autkIds` provenance.
