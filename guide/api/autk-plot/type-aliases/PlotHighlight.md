[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotHighlight

# Type Alias: PlotHighlight

> **PlotHighlight** = `"boolean"` \| `"subset"` \| `Exclude`\<[`CustomPreset`](CustomPreset.md), `"members"`\> \| `Partial`\<`Record`\<[`MarkKind`](MarkKind.md), [`HighlightRule`](HighlightRule.md)\>\> \| ((`context`) => `void`)

Defined in: [plots/registered.ts:188](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L188)

How a plot shows a selection from another view, in one of three modes:

- `'boolean'`: the whole mark;
- `'subset'` (the default): the mark drawn again with the subset's value through the plot's own
  encoding, on the channel inferred from the geometry; or, per mark family, a declared channel,
  e.g. `{ rect: { mode: 'subset', channel: 'length', axis: 'y', anchor: 'end' } }`;
- custom: a ready-made preset for every family (`'glyph'`, `'trace'`) or per family
  (`{ point: { mode: 'custom', preset: 'glyph' } }`), or a function that draws the parts.
  `trace` draws the leading fraction of a line, or of the outline of a filled mark; `members`
  is only per family, with the `scale` of its marks (declared, returned by `draw`, or inferred).
