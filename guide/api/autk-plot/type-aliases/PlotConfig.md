# Type Alias: PlotConfig

> **PlotConfig** = `object`

Defined in: [api.ts:51](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L51)

Base configuration accepted by every plot.

## Properties

### attributes?

> `optional` **attributes?**: `object`

Defined in: [api.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L83)

Feature property names to map to visual channels. With a transform that
computes a value, `'@transform'` marks where that value goes: after the
input columns in `axis`, or in `color` when the plot draws it as a color.
The mark is optional and changes nothing in the drawing.

#### axis?

> `optional` **axis?**: `string`[]

Property names mapped to axes.

#### color?

> `optional` **color?**: `string`

Property name mapped to the color channel.

***

### collection

> **collection**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

Defined in: [api.ts:55](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L55)

GeoJSON feature collection used as the plot data source.

***

### div

> **div**: `HTMLElement`

Defined in: [api.ts:53](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L53)

Host HTML element where the plot renders.

***

### events?

> `optional` **events?**: [`PlotEvent`](../enumerations/PlotEvent.md)[]

Defined in: [api.ts:57](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L57)

Interaction events the plot should emit (click, brush, etc).

***

### filter?

> `optional` **filter?**: [`FilterCondition`](FilterCondition.md) \| [`FilterCondition`](FilterCondition.md)[]

Defined in: [api.ts:120](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L120)

Keeps only source features matching every condition, before the
transform runs. Excluded features have no image in the provenance graph.

***

### height?

> `optional` **height?**: `number`

Defined in: [api.ts:67](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L67)

Plot height in pixels. Defaults to `500`.

***

### labels?

> `optional` **labels?**: `object`

Defined in: [api.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L69)

Display labels for axes, title, and color legend.

#### axis?

> `optional` **axis?**: `string`[]

Labels for each axis.

#### color?

> `optional` **color?**: `string`

Color legend label.

#### title?

> `optional` **title?**: `string`

Plot title.

***

### margins?

> `optional` **margins?**: [`PlotMargins`](PlotMargins.md)

Defined in: [api.ts:59](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L59)

Pixel margins around the plot drawing area.

***

### plot?

> `optional` **plot?**: `string`

Defined in: [api.ts:90](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L90)

Name of a plot registered with `registerPlot`, used with `type: 'registered'`.

***

### provenance?

> `optional` **provenance?**: [`PlotProvenanceConfig`](PlotProvenanceConfig.md)

Defined in: [api.ts:115](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L115)

Provenance options.

***

### style?

> `optional` **style?**: `object`

Defined in: [api.ts:104](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L104)

Appearance overrides for this plot.

#### barPadding?

> `optional` **barPadding?**: `number`

Bar chart band padding from 0 to 1; defaults to 0.25.

#### colorMap?

> `optional` **colorMap?**: `ColorMapOptions`

Colormap and optional domain, using the same configuration as `AutkMap.updateColorMap`.

#### columnFormats?

> `optional` **columnFormats?**: `Record`\<`string`, `string`\>

D3 number formats keyed by table column field.

#### radius?

> `optional` **radius?**: `number`

Fixed scatterplot point radius in pixels; defaults to 5.

***

### ticks?

> `optional` **ticks?**: `object`

Defined in: [api.ts:94](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L94)

Tick options for Cartesian axes and parallel-coordinate dimensions.

#### dimensions?

> `optional` **dimensions?**: `Record`\<`string`, \{ `format?`: `string`; \}\>

D3 tick formats keyed by field name for parallel coordinates.

#### x?

> `optional` **x?**: `AxisTickOptions` & `object`

##### Type Declaration

###### label?

> `optional` **label?**: (`key`) => `string`

Custom label for a bar, line, or area chart's raw category or bucket key. Return an empty string to skip the label.

###### Parameters

###### key

`string`

###### Returns

`string`

#### y?

> `optional` **y?**: `AxisTickOptions`

***

### topK?

> `optional` **topK?**: [`TopKConfig`](TopKConfig.md)

Defined in: [api.ts:126](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L126)

Keeps only the `k` rendered rows with the highest value (`attributes.axis[1]`),
after the transform runs. Supported by the bar, pie, and donut charts and by user plots
whose rows have a label and a value (`attributes.axis[0]` and `[1]`).

***

### transform?

> `optional` **transform?**: [`PlotTransformConfig`](PlotTransformConfig.md)

Defined in: [api.ts:92](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L92)

Optional data transform applied before rendering.

***

### width?

> `optional` **width?**: `number` \| `"auto"`

Defined in: [api.ts:65](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L65)

Plot width in pixels, or `'auto'` to fill the content width of `div` and
redraw when it changes (the selection is kept). Defaults to `800`, which
is also the width of `'auto'` while `div` has no layout.
