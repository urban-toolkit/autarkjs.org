# Type Alias: ExecutedHierarchyTransform

> **ExecutedHierarchyTransform** = `object`

Defined in: [transforms/presets/hierarchy.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/hierarchy.ts#L23)

Result produced by `runHierarchy`.

## Properties

### depth

> **depth**: `number`

Defined in: [transforms/presets/hierarchy.ts:29](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/hierarchy.ts#L29)

Number of levels.

***

### preset

> **preset**: `"hierarchy"`

Defined in: [transforms/presets/hierarchy.ts:25](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/hierarchy.ts#L25)

Preset discriminator identifying the executed transform.

***

### provenance

> **provenance**: [`TransformProvenance`](TransformProvenance.md)

Defined in: [transforms/presets/hierarchy.ts:31](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/hierarchy.ts#L31)

Provenance `D0 features → D1 leaves → … → Dn top level`, aligned with `rows`.

***

### rows

> **rows**: [`HierarchyNodeRow`](HierarchyNodeRow.md)[]

Defined in: [transforms/presets/hierarchy.ts:27](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/hierarchy.ts#L27)

Nodes of every level, top level first.
