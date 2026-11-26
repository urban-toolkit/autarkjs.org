# Type Alias: ExecutedDensityTransform

> **ExecutedDensityTransform** = `object`

Defined in: [transforms/presets/density.ts:33](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L33)

Result produced by `runDensity`.

## Properties

### bandwidth

> **bandwidth**: `number`

Defined in: [transforms/presets/density.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L41)

Bandwidth `h` of the kernel.

***

### groups

> **groups**: `string`[]

Defined in: [transforms/presets/density.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L39)

Groups, in curve order; `['']` without a group column.

***

### preset

> **preset**: `"density"`

Defined in: [transforms/presets/density.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L35)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/density.ts:43](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L43)

Provenance `D0 features → D1 density points`, with real weights, aligned with `rows`.

***

### rows

> **rows**: [`DensityPointRow`](DensityPointRow.md)[]

Defined in: [transforms/presets/density.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/density.ts#L37)

Grid points of every group's curve, by group, then position.
