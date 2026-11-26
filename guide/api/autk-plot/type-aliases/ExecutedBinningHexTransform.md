# Type Alias: ExecutedBinningHexTransform

> **ExecutedBinningHexTransform** = `object`

Defined in: [transforms/presets/binning-hex.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L25)

Result produced by `runBinningHex`.

## Properties

### extent

> **extent**: `object`

Defined in: [transforms/presets/binning-hex.ts:31](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L31)

Data extent mapped to the pixel area inset by `radius`, `[min, max]` per axis.

#### x

> **x**: \[`number`, `number`\]

#### y

> **y**: \[`number`, `number`\]

***

### preset

> **preset**: `"binning-hex"`

Defined in: [transforms/presets/binning-hex.ts:27](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L27)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/binning-hex.ts:35](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L35)

Provenance `D0 features → D1 hexagons → D2 aggregates`, aligned with `rows`.

***

### radius

> **radius**: `number`

Defined in: [transforms/presets/binning-hex.ts:33](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L33)

Hexagon radius in pixels.

***

### rows

> **rows**: [`BinningHexRow`](BinningHexRow.md)[]

Defined in: [transforms/presets/binning-hex.ts:29](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/presets/binning-hex.ts#L29)

Aggregated hexagon rows ready for hexbin rendering.
