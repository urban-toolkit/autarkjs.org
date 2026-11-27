# Function: checkPlot()

> **checkPlot**(`definition`, `div`, `config`): [`ContractReport`](../type-aliases/ContractReport.md) & `object`

Defined in: [plots/registered.ts:1658](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L1658)

Draws a plot definition on sample data and checks it against the drawing
contract, reporting which invariant each violation breaks.

A host outside the document is attached off screen while the check runs:
a browser measures no geometry outside the document, and the highlight is
inferred from that geometry. It is detached again after.

## Parameters

### definition

[`PlotDefinition`](../type-aliases/PlotDefinition.md)

Plot to check.

### div

`HTMLElement`

Host element for the check drawing (it is left drawn).

### config

`Omit`\<[`PlotConfig`](../type-aliases/PlotConfig.md), `"div"`\>

Plot configuration (collection, attributes, transform, ...).

## Returns

[`ContractReport`](../type-aliases/ContractReport.md) & `object`

Violations by invariant (invariant `0` when `draw` throws or the plot refuses the
config), and the highlight resolved for each mark family.

## Example

```ts
const report = checkPlot(definition, document.createElement('div'), {
  collection: geojson,
  attributes: { axis: ['category', '@transform'] },
  transform: { preset: 'binning-1d' },
});
report.violations.forEach(v => console.warn(`invariant ${v.invariant}: ${v.message}`));
```
