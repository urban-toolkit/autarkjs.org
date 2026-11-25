[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotDrawContext

# Type Alias: PlotDrawContext

> **PlotDrawContext** = `object`

Defined in: [plots/registered.ts:40](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L40)

What a registered plot's `draw` receives.

## Properties

### axisLabels

> **axisLabels**: `string`[]

Defined in: [plots/registered.ts:111](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L111)

Axis labels of the configuration (`labels.axis`), one per field.

***

### axisX

> **axisX**: \<`Domain`\>(`axis`, `label?`) => `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:79](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L79)

Draws a bottom axis under the drawing area. Configure the D3 axis as usual; ticks drawn
across the plot (a negative `tickSizeInner`) take the grid color. The returned group can
be styled further.

#### Type Parameters

##### Domain

`Domain` *extends* `d3.AxisDomain`

#### Parameters

##### axis

`d3.Axis`\<`Domain`\>

##### label?

`number` \| `string`

The field the axis shows, by its index in the fields (its label from
`labels.axis`, or its name), or the text itself. Defaults to the first field, as in a
vertical chart; a horizontal bar chart passes 1, the field of its values.

#### Returns

`d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

***

### axisY

> **axisY**: \<`Domain`\>(`axis`, `label?`) => `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:81](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L81)

Draws a left axis beside the drawing area; `label` as in `axisX`, defaulting to the second field.

#### Type Parameters

##### Domain

`Domain` *extends* `d3.AxisDomain`

#### Parameters

##### axis

`d3.Axis`\<`Domain`\>

##### label?

`number` \| `string`

#### Returns

`d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

***

### color

> **color**: (`row`) => `string`

Defined in: [plots/registered.ts:66](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L66)

Current color of a row's mark.

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

#### Returns

`string`

***

### colorAttribute

> **colorAttribute**: `string` \| `undefined`

Defined in: [plots/registered.ts:115](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L115)

Row field the marks are colored by, or `undefined`.

***

### colorBy

> **colorBy**: (`attribute`) => `void`

Defined in: [plots/registered.ts:117](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L117)

Colors the marks by a row field (`undefined` for none), keeping the drawing (e.g. a clicked axis name).

#### Parameters

##### attribute

`string` \| `undefined`

#### Returns

`void`

***

### fields

> **fields**: `string`[]

Defined in: [plots/registered.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L50)

Row fields of the axes: the transform's (e.g. `label`, `value`) or `attributes.axis`.

***

### format

> **format**: (`index`, `fallback?`) => (`value`) => `string`

Defined in: [plots/registered.ts:87](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L87)

Number format of axis `index`: the D3 format from `ticks`,
or, when neither sets it, SI prefixes from one up ("1.5k") and decimals under one
("0.5", not "500m"). `fallback` stands in for an empty format (`''`) the configuration gives.

#### Parameters

##### index

`number`

##### fallback?

`string`

#### Returns

(`value`) => `string`

***

### group

> **group**: `d3.Selection`\<`SVGGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:44](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L44)

Marks group, translated by the margins and empty when `draw` starts; draw every mark inside it.

***

### hasFormat

> **hasFormat**: (`index`) => `boolean`

Defined in: [plots/registered.ts:89](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L89)

Whether axis `index` has an explicit format, which can also format numeric categories and buckets.

#### Parameters

##### index

`number`

#### Returns

`boolean`

***

### height

> **height**: `number`

Defined in: [plots/registered.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L69)

***

### html

> **html**: `d3.Selection`\<`HTMLDivElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:46](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L46)

Container under the SVG for marks drawn as HTML (click selection only).

***

### interactive

> **interactive**: `boolean`

Defined in: [plots/registered.ts:56](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L56)

Whether the configuration asks for any interaction (`events`). A plot without one is
static: its drawing adds no interaction of its own either, such as sorting a table by a
clicked column. Marks get the pointer cursor from the plot, only when clicks select.

***

### legend

> **legend**: (`keys`, `color`, `direction`) => `void`

Defined in: [plots/registered.ts:93](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L93)

Draws a legend of colored swatches: a row above the drawing area, or a column at its top left.

#### Parameters

##### keys

`string`[]

##### color

(`key`) => `string`

##### direction

`"row"` \| `"column"`

#### Returns

`void`

***

### margins

> **margins**: `object`

Defined in: [plots/registered.ts:113](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L113)

Margins around the drawing area, for what is drawn in the SVG outside `group` (e.g. brush areas).

#### bottom

> **bottom**: `number`

#### left

> **left**: `number`

#### right

> **right**: `number`

#### top

> **top**: `number`

***

### options

> **options**: `Record`\<`string`, `unknown`\>

Defined in: [plots/registered.ts:109](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L109)

Options of the configured transform, as run (e.g. whether `fold` normalizes); empty without one.

***

### partRange

> **partRange**: \{ `additive`: `true`; \} \| \{ `additive`: `false`; `extent`: \[`number`, `number`\]; \} \| `undefined`

Defined in: [plots/registered.ts:102](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L102)

Values the selected parts can take, when the rows reduce features
(`undefined` otherwise). With count and sum
(`additive`), a part lies between 0 and its row's value. With avg, min,
and max, it is a statistic of the subset, anywhere in `extent` (the range
of the reduced values), possibly beyond every row. A value scale that covers
these keeps the parts inside the plot.

***

### rows

> **rows**: [`AutkDatum`](AutkDatum.md)[]

Defined in: [plots/registered.ts:48](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L48)

Rendered rows; bind these objects (not copies) to the marks.

***

### setBrushScale?

> `optional` **setBrushScale?**: \<`Domain`\>(`side`, `scale`, `dimension?`) => `void`

Defined in: [plots/registered.ts:62](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L62)

Supplies a brush scale for an axis drawn manually or positioned by bucket rank.

#### Type Parameters

##### Domain

`Domain` *extends* `d3.AxisDomain`

#### Parameters

##### side

`"x"` \| `"y"`

##### scale

`d3.AxisScale`\<`Domain`\>

##### dimension?

`string`

#### Returns

`void`

***

### setOptions

> **setOptions**: (`options`) => `void`

Defined in: [plots/registered.ts:119](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L119)

Runs the transform again with these options and draws the plot again (e.g. a table sorted by a clicked column).

#### Parameters

##### options

`Record`\<`string`, `unknown`\>

#### Returns

`void`

***

### style?

> `optional` **style?**: [`PlotConfig`](PlotConfig.md)\[`"style"`\]

Defined in: [plots/registered.ts:58](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L58)

Appearance overrides for this plot.

***

### svg

> **svg**: `d3.Selection`\<`SVGSVGElement`, `unknown`, `null`, `undefined`\>

Defined in: [plots/registered.ts:42](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L42)

Root SVG of the plot, already sized; the title is drawn by the plot.

***

### tickCount

> **tickCount**: (`top`, `values`, `count`) => `number`

Defined in: [plots/registered.ts:91](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L91)

Tick count of a value axis up to `top`: `count`, or one tick per unit when the values are whole (counts) and `top` is smaller.

#### Parameters

##### top

`number`

##### values

`number`[]

##### count

`number`

#### Returns

`number`

***

### transform

> **transform**: [`ExecutedPlotTransform`](ExecutedPlotTransform.md) \| `undefined`

Defined in: [plots/registered.ts:107](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L107)

Result of the configured transform, for what it computes besides rows
(e.g. the data extent and hexagon radius of `binning-hex`), or `undefined`.

***

### value

> **value**: (`row`, `index?`) => `unknown`

Defined in: [plots/registered.ts:64](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L64)

Value of a row on axis `index` (default 0).

#### Parameters

##### row

[`AutkDatum`](AutkDatum.md)

##### index?

`number`

#### Returns

`unknown`

***

### width

> **width**: `number`

Defined in: [plots/registered.ts:68](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L68)

Inner width and height, without margins.

***

### xTickLabel?

> `optional` **xTickLabel?**: (`key`) => `string`

Defined in: [plots/registered.ts:60](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plots/registered.ts#L60)

Optional custom label for a category or bucket on the X axis.

#### Parameters

##### key

`string`

#### Returns

`string`
