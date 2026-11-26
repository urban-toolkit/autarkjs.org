# Type Alias: PlotProvenanceConfig

> **PlotProvenanceConfig** = `object`

Defined in: [api.ts:157](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L157)

Provenance options accepted by every plot.

## Properties

### highlight?

> `optional` **highlight?**: `"boolean"`

Defined in: [api.ts:171](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L171)

How the marks show a selection from another view. By default each plot
shows the part of each mark that the selection produces (a subset render
through its own encoding, or a custom highlight); `'boolean'` highlights
the whole marks instead. Any other value is refused: a plot chooses its
other highlight modes in its definition (`PlotDefinition.highlight`).

***

### path?

> `optional` **path?**: `boolean` \| `"open"`

Defined in: [api.ts:163](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L163)

Shows a compact provenance path widget under the plot, with the stages
`D0 … M` reached by the current selection. `'open'` starts with the path
expanded. Defaults to `false`, so the plot keeps the height its host gives it.
