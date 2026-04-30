[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ExecutedSortTransform

# Type Alias: ExecutedSortTransform

> **ExecutedSortTransform** = `object`

Defined in: [autk-plot/src/transforms/presets/sort.ts:22](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/sort.ts#L22)

Result produced by `runSort`.

Contains the `sort` preset tag plus rows carrying their original `autkIds`
for downstream selection linking.

## Properties

### preset

> **preset**: `"sort"`

Defined in: [autk-plot/src/transforms/presets/sort.ts:24](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/sort.ts#L24)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [autk-plot/src/transforms/presets/sort.ts:26](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/transforms/presets/sort.ts#L26)

Sorted rows preserving their original `autkIds` provenance.
