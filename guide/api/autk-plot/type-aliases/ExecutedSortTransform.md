[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ExecutedSortTransform

# Type Alias: ExecutedSortTransform

> **ExecutedSortTransform** = `object`

Defined in: [transforms/presets/sort.ts:22](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/sort.ts#L22)

Result produced by `runSort`.

Contains the `sort` preset tag plus rows carrying their original `autkIds`
for downstream selection linking.

## Properties

### preset

> **preset**: `"sort"`

Defined in: [transforms/presets/sort.ts:24](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/sort.ts#L24)

Preset discriminator identifying the executed transform.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [transforms/presets/sort.ts:26](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-plot/src/transforms/presets/sort.ts#L26)

Sorted rows preserving their original `autkIds` provenance.
