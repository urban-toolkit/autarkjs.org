# Type Alias: ExecutedBinning1dTransform

> **ExecutedBinning1dTransform** = `object`

Defined in: [transforms/presets/binning-1d.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-1d.ts#L23)

Result produced by `runBinning1d`.

## Properties

### preset

> **preset**: `"binning-1d"`

Defined in: [transforms/presets/binning-1d.ts:25](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-1d.ts#L25)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/binning-1d.ts:29](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-1d.ts#L29)

Provenance `D0 features → D1 bins → D2 aggregates`, aligned with `rows`.

***

### rows

> **rows**: [`Binning1dBinRow`](Binning1dBinRow.md)[]

Defined in: [transforms/presets/binning-1d.ts:27](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/binning-1d.ts#L27)

Binned rows ready for downstream plot rendering.
