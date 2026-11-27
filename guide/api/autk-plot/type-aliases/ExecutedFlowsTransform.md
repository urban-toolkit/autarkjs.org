# Type Alias: ExecutedFlowsTransform

> **ExecutedFlowsTransform** = `object`

Defined in: [transforms/presets/flows.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L23)

Result produced by `runFlows`.

## Properties

### preset

> **preset**: `"flows"`

Defined in: [transforms/presets/flows.ts:25](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L25)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/flows.ts:29](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L29)

Provenance `D0 features → D1 segments → D2 links → D3 nodes`, aligned with `rows`.

***

### rows

> **rows**: [`FlowRow`](FlowRow.md)[]

Defined in: [transforms/presets/flows.ts:27](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L27)

Nodes of every column, then links between consecutive columns.
