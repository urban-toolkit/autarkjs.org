# Type Alias: PlotDefinition

> **PlotDefinition** = `object`

Defined in: [plots/registered.ts:230](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L230)

A plot: D3 drawing code plus what the plot accepts and knows.

Built-in plots and user plots are both definitions, registered with
`registerPlot`. Only `name` and `draw` are required; every other field is
optional and refines the generic behavior.

## Properties

### annotations?

> `optional` **annotations?**: `"reference"`

Defined in: [plots/registered.ts:232](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L232)

Opts in to page-supplied reference annotations on positional axes.

***

### arrange?

> `optional` **arrange?**: (`context`) => `void`

Defined in: [plots/registered.ts:289](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L289)

Rearranges the drawing after every selection change (e.g. a table that
keeps the selected rows on top). Called after each draw too.

#### Parameters

##### context

[`PlotArrangeContext`](PlotArrangeContext.md)

#### Returns

`void`

***

### baseColor?

> `optional` **baseColor?**: (`rows`) => (`row`) => `string`

Defined in: [plots/registered.ts:294](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L294)

Color of a mark that is neither highlighted nor colored by an attribute
(gray by default), from the rendered rows: e.g. a shade per subgroup.

#### Parameters

##### rows

[`AutkDatum`](AutkDatum.md)[]

#### Returns

(`row`) => `string`

***

### color?

> `optional` **color?**: `"fill"` \| `"stroke"`

Defined in: [plots/registered.ts:254](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L254)

Mark property the plot colors. Defaults to `fill`.

***

### colorAttribute?

> `optional` **colorAttribute?**: `string`

Defined in: [plots/registered.ts:278](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L278)

Row field the marks are colored by when `attributes.color` is unset (e.g. `value`).

***

### colorDomain?

> `optional` **colorDomain?**: (`domain`) => \[`number`, `number`\]

Defined in: [plots/registered.ts:276](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L276)

Adjusts a numeric color domain computed from the data; a configured `domainSpec` is kept.

#### Parameters

##### domain

\[`number`, `number`\]

#### Returns

\[`number`, `number`\]

***

### defaultNumericInterpolator?

> `optional` **defaultNumericInterpolator?**: `ColorMapInterpolator`

Defined in: [plots/registered.ts:300](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L300)

Numeric colormap used when none is configured.

***

### defaults?

> `optional` **defaults?**: `Partial`\<[`PlotConfig`](PlotConfig.md)\> \| ((`config`) => `Partial`\<[`PlotConfig`](PlotConfig.md)\>)

Defined in: [plots/registered.ts:298](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L298)

Defaults for options the configuration leaves unset (labels are merged field by field).

***

### draw

> **draw**: (`context`) => `void` \| \{ `highlight?`: `Partial`\<`Record`\<[`MarkKind`](MarkKind.md), [`HighlightRule`](HighlightRule.md)\>\>; `series?`: [`PlotSeries`](PlotSeries.md)[]; \}

Defined in: [plots/registered.ts:245](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L245)

Draws the marks for the rendered rows. Called on every draw. It may return
highlight parameters known only while drawing (e.g. the scale of `members`),
which complete `highlight` per mark family (a word or a function is refused here: it
belongs to `highlight`), and the series drawn through the marks.

#### Parameters

##### context

[`PlotDrawContext`](PlotDrawContext.md)

#### Returns

`void` \| \{ `highlight?`: `Partial`\<`Record`\<[`MarkKind`](MarkKind.md), [`HighlightRule`](HighlightRule.md)\>\>; `series?`: [`PlotSeries`](PlotSeries.md)[]; \}

***

### highlight?

> `optional` **highlight?**: [`PlotHighlight`](PlotHighlight.md)

Defined in: [plots/registered.ts:252](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L252)

How a mark shows the part of it that a selection from another view produces: `'boolean'`,
`'subset'` (the default, inferred from the geometry), a custom preset, a highlight per mark
family (families left out are inferred), or a function that draws the parts (give each
element the class `autkPartial` and `data-autk-provenance`). See `PlotHighlight`.

***

### label?

> `optional` **label?**: `string`

Defined in: [plots/registered.ts:238](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L238)

Name shown in error messages. Defaults to `name`.

***

### markStyle?

> `optional` **markStyle?**: (`row`, `highlighted`) => `Record`\<`string`, `string` \| `number`\>

Defined in: [plots/registered.ts:284](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L284)

Style of a mark besides its color, by whether it is highlighted (e.g.
translucent links that become opaque). The part of a mark takes the
highlighted style, since it is the highlighted share of the mark.

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

##### highlighted

`boolean`

#### Returns

`Record`\<`string`, `string` \| `number`\>

***

### name

> **name**: `string`

Defined in: [plots/registered.ts:236](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L236)

Name used in `{ type: 'registered', plot: name }` (the `type` itself for a built-in plot).

***

### reducers?

> `optional` **reducers?**: readonly [`TransformReducer`](TransformReducer.md)[]

Defined in: [plots/registered.ts:268](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L268)

Reducers whose rows the plot can draw (e.g. `['count', 'sum']` when marks
must add up to a whole). Any reducer when absent.

***

### requiresTransform?

> `optional` **requiresTransform?**: `boolean`

Defined in: [plots/registered.ts:263](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L263)

Whether the plot draws only transformed rows, refusing a configuration without one of `transforms`.

***

### series?

> `optional` **series?**: `true`

Defined in: [plots/registered.ts:234](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L234)

Opts in to grouped input on shared scales.

***

### topK?

> `optional` **topK?**: `boolean`

Defined in: [plots/registered.ts:296](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L296)

Whether rows can be cut to the top k (`PlotConfig.topK`). Defaults to `true`.

***

### transformOptions?

> `optional` **transformOptions?**: (`area`, `options`) => `Record`\<`string`, `unknown`\>

Defined in: [plots/registered.ts:274](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L274)

Options the plot gives its transform at every draw, from the drawing area
and the configured options (e.g. `binning-hex` bins in the plot's pixels;
a Pareto chart orders by value unless told otherwise).

#### Parameters

##### area

###### height

`number`

###### width

`number`

##### options

`Record`\<`string`, `unknown`\>

#### Returns

`Record`\<`string`, `unknown`\>

***

### transforms?

> `optional` **transforms?**: readonly `string`[]

Defined in: [plots/registered.ts:261](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L261)

Transforms the plot reads: transform names, or row shapes (`RowShape`)
that any transform, built-in or user, may yield. Any transform when absent.

***

### validate?

> `optional` **validate?**: (`config`) => `void`

Defined in: [plots/registered.ts:302](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L302)

Checks the configuration before drawing; throws to refuse it.

#### Parameters

##### config

[`PlotConfig`](PlotConfig.md)

#### Returns

`void`

***

### value?

> `optional` **value?**: `string`

Defined in: [plots/registered.ts:256](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plots/registered.ts#L256)

Row field the marks encode, for the highlight inference. Defaults to the second axis field, or `value`.
