# Type Alias: PlotProvenanceConfig

> **PlotProvenanceConfig** = `object`

Defined in: [api.ts:174](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L174)

Provenance options accepted by every plot.

## Properties

### highlight?

> `optional` **highlight?**: `"boolean"`

Defined in: [api.ts:188](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L188)

How the marks show a selection from another view. By default each plot
shows the part of each mark that the selection produces (a subset render
through its own encoding, or a custom highlight); `'boolean'` highlights
the whole marks instead. Any other value is refused: a plot chooses its
other highlight modes in its definition (`PlotDefinition.highlight`).

***

### path?

> `optional` **path?**: `boolean` \| `"open"`

Defined in: [api.ts:180](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L180)

Shows a compact provenance path widget under the plot, with the stages
`D0 … M` reached by the current selection. `'open'` starts with the path
expanded. Defaults to `false`, so the plot keeps the height its host gives it.
