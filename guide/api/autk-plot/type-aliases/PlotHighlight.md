# Type Alias: PlotHighlight

> **PlotHighlight** = `"boolean"` \| `"subset"` \| `Exclude`\<[`CustomPreset`](CustomPreset.md), `"members"`\> \| `Partial`\<`Record`\<[`MarkKind`](MarkKind.md), [`HighlightRule`](HighlightRule.md)\>\> \| ((`context`) => `void`)

Defined in: [plots/registered.ts:216](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L216)

How a plot shows a selection from another view, in one of three modes:

- `'boolean'`: the whole mark;
- `'subset'` (the default): the mark drawn again with the subset's value through the plot's own
  encoding, on the channel inferred from the geometry; or, per mark family, a declared channel,
  e.g. `{ rect: { mode: 'subset', channel: 'length', axis: 'y', anchor: 'end' } }`;
- custom: a ready-made preset for every family (`'glyph'`, `'trace'`) or per family
  (`{ point: { mode: 'custom', preset: 'glyph' } }`), or a function that draws the parts.
  `trace` draws the leading fraction of a line, or of the outline of a filled mark; `members`
  is only per family, with the `scale` of its marks (declared, returned by `draw`, or inferred).
