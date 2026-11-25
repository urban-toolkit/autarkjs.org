[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotBaseData

# Abstract Class: PlotBaseData

Defined in: [plot-base-data.ts:64](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L64)

Base class of the plot data lifecycle.

Normalizes input rows, validates configured bindings, runs transforms, and resolves the rendered
schema that `RegisteredPlot` draws.

## Extended by

- [`PlotBaseInteractive`](PlotBaseInteractive.md)

## Constructors

### Constructor

> **new PlotBaseData**(`config`): `PlotBaseData`

Defined in: [plot-base-data.ts:130](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L130)

Initializes shared plot data state from a plot configuration.

#### Parameters

##### config

[`PlotConfig`](../type-aliases/PlotConfig.md)

Plot configuration containing source data, bindings, and transform/display options.

#### Returns

`PlotBaseData`

#### Throws

If `attributes.axis` is empty or configured bindings are missing/invalid.

#### Throws

If `@transform` placeholder is used without a transform config.

## Properties

### \_autoWidth

> `protected` **\_autoWidth**: `boolean` = `false`

Defined in: [plot-base-data.ts:91](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L91)

Whether the width follows the host element (`width: 'auto'`).

***

### \_axisLabels

> `protected` **\_axisLabels**: `string`[]

Defined in: [plot-base-data.ts:78](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L78)

User-facing axis labels.

***

### \_colorScale

> `protected` **\_colorScale**: `CustomColorPalette` \| `ColorMapInterpolator` = `ColorMapInterpolator.SEQ_REDS`

Defined in: [plot-base-data.ts:121](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L121)

Scale selected for the current rendered color domain.

***

### \_data

> `protected` **\_data**: (`object` & `object`)[]

Defined in: [plot-base-data.ts:71](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L71)

Normalized render rows bound to marks.

***

### \_defaultNumericInterpolator

> `protected` **\_defaultNumericInterpolator**: `ColorMapInterpolator` = `ColorMapInterpolator.SEQ_REDS`

Defined in: [plot-base-data.ts:117](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L117)

Default interpolator for numeric color encoding when the caller does not supply a scale.

***

### \_div

> `protected` **\_div**: `HTMLElement`

Defined in: [plot-base-data.ts:66](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L66)

Host element where the plot is rendered.

***

### \_filter

> `protected` **\_filter**: [`FilterCondition`](../type-aliases/FilterCondition.md)[] = `[]`

Defined in: [plot-base-data.ts:110](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L110)

Conditions every source feature must pass before the transform, if any.

***

### \_height

> `protected` **\_height**: `number` = `500`

Defined in: [plot-base-data.ts:93](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L93)

Outer plot height in pixels.

***

### \_margins

> `protected` **\_margins**: [`PlotMargins`](../type-aliases/PlotMargins.md)

Defined in: [plot-base-data.ts:95](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L95)

Plot margins in pixels.

***

### \_provenance

> `protected` **\_provenance**: [`ProvenanceModel`](ProvenanceModel.md)

Defined in: [plot-base-data.ts:104](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L104)

Provenance graph of the current draw cycle, from source features to rendered rows.

***

### \_resolvedDomain

> `protected` **\_resolvedDomain**: `ResolvedDomain` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:98](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L98)

Resolved color domain, computed from data after each transform.

***

### \_rowIds

> `protected` **\_rowIds**: `WeakMap`\<`object`, `string`\>

Defined in: [plot-base-data.ts:106](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L106)

Provenance id of each rendered row object in `_data`.

***

### \_sourceFeatures

> `protected` **\_sourceFeatures**: `Feature`\<`Geometry`, `GeoJsonProperties`\>[]

Defined in: [plot-base-data.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L69)

Original source features from the input collection, indexed by source feature id.

***

### \_style

> `protected` **\_style**: \{ `barPadding?`: `number`; `colorMap?`: `ColorMapOptions`; `columnFormats?`: `Record`\<`string`, `string`\>; `radius?`: `number`; \} \| `undefined`

Defined in: [plot-base-data.ts:119](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L119)

Appearance overrides from the plot configuration.

#### Union Members

##### Type Literal

\{ `barPadding?`: `number`; `colorMap?`: `ColorMapOptions`; `columnFormats?`: `Record`\<`string`, `string`\>; `radius?`: `number`; \}

##### barPadding?

> `optional` **barPadding?**: `number`

Bar chart band padding from 0 to 1; defaults to 0.25.

##### colorMap?

> `optional` **colorMap?**: `ColorMapOptions`

Colormap and optional domain, using the same configuration as `AutkMap.updateColorMap`.

##### columnFormats?

> `optional` **columnFormats?**: `Record`\<`string`, `string`\>

D3 number formats keyed by table column field.

##### radius?

> `optional` **radius?**: `number`

Fixed scatterplot point radius in pixels; defaults to 5.

***

`undefined`

***

### \_title

> `protected` **\_title**: `string`

Defined in: [plot-base-data.ts:86](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L86)

Plot title text.

***

### \_topK

> `protected` **\_topK**: [`TopKConfig`](../type-aliases/TopKConfig.md) \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:114](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L114)

Top-k cut applied to rendered rows after the transform, if any.

***

### \_transformAttributes

> `protected` **\_transformAttributes**: `string`[] \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:76](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L76)

Dot-path attributes used to read values from transformed rows, when applicable.

***

### \_transformColorAttribute

> `protected` **\_transformColorAttribute**: `string` \| `null` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L83)

Dot-path attribute used for color encoding on transformed rows, when applicable.

***

### \_transformConfig?

> `protected` `optional` **\_transformConfig?**: [`PlotTransformConfig`](../type-aliases/PlotTransformConfig.md)

Defined in: [plot-base-data.ts:101](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L101)

Transform configuration, if any.

***

### \_width

> `protected` **\_width**: `number` = `DEFAULT_WIDTH`

Defined in: [plot-base-data.ts:89](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L89)

Outer plot width in pixels.

## Accessors

### provenance

#### Get Signature

> **get** **provenance**(): [`ProvenanceModel`](ProvenanceModel.md)

Defined in: [plot-base-data.ts:256](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L256)

Provenance graph of the current draw cycle.

Stages run from `D0` (source features) through the transform stages to
`M` (rendered marks) once the plot has drawn.

##### Returns

[`ProvenanceModel`](ProvenanceModel.md)

***

### renderAxisAttributes

#### Get Signature

> **get** `protected` **renderAxisAttributes**(): `string`[]

Defined in: [plot-base-data.ts:491](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L491)

Returns the active axis bindings for rendered rows.

##### Returns

`string`[]

***

### renderColorAttribute

#### Get Signature

> **get** `protected` **renderColorAttribute**(): `string` \| `undefined`

Defined in: [plot-base-data.ts:498](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L498)

Returns the active color binding for rendered rows.

##### Returns

`string` \| `undefined`

## Methods

### afterDataRefresh()

> `protected` **afterDataRefresh**(): `void`

Defined in: [plot-base-data.ts:465](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L465)

Lifecycle hook invoked after `_data` has been refreshed but before render-time
validation and color-domain computation.

#### Returns

`void`

***

### afterRender()

> `protected` **afterRender**(): `void`

Defined in: [plot-base-data.ts:363](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L363)

Lifecycle hook invoked after `render()` completes a draw cycle.

#### Returns

`void`

***

### computeColorDomain()

> `protected` **computeColorDomain**(): `void`

Defined in: [plot-base-data.ts:522](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L522)

Computes and caches the active color domain from rendered rows.

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [plot-base-data.ts:210](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L210)

Rebuilds source rows, applies transforms, validates bindings, and delegates rendering.

#### Returns

`void`

#### Throws

If active render bindings do not resolve on the rendered data.

***

### hostWidth()

> `protected` **hostWidth**(): `number`

Defined in: [plot-base-data.ts:243](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L243)

Content width of the host element (without its padding), or the default
width while it has no layout.

#### Returns

`number`

Width in pixels, at least `MIN_AUTO_WIDTH`.

***

### render()

> `abstract` **render**(): `void`

Defined in: [plot-base-data.ts:470](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L470)

Renders plot DOM, SVG, or HTML nodes for the current internal state.

#### Returns

`void`

***

### resolveSize()

> `protected` **resolveSize**(): `void`

Defined in: [plot-base-data.ts:233](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L233)

Resolves the plot size before a draw. With `width: 'auto'` the width is
the content width of the host element.

#### Returns

`void`

***

### resolveTransformResult()

> `protected` **resolveTransformResult**(`result`): [`ResolvedPlotTransform`](../type-aliases/ResolvedPlotTransform.md)

Defined in: [plot-base-data.ts:478](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L478)

Maps an executed transform into the rendered row schema that the plot draws.

#### Parameters

##### result

[`ExecutedPlotTransform`](../type-aliases/ExecutedPlotTransform.md)

Executed transform.

#### Returns

[`ResolvedPlotTransform`](../type-aliases/ResolvedPlotTransform.md)

Normalized rendered rows plus any transformed binding metadata.

***

### rowIdOf()

> `protected` **rowIdOf**(`d`): `string` \| `undefined`

Defined in: [plot-base-data.ts:356](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L356)

Returns the provenance id of a rendered row.

#### Parameters

##### d

`unknown`

Bound datum of a mark.

#### Returns

`string` \| `undefined`

Row id, or `undefined` when the datum is not a rendered row.

***

### setRenderColorAttribute()

> `protected` **setRenderColorAttribute**(`attribute`): `void`

Defined in: [plot-base-data.ts:510](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L510)

Updates the active render-time color binding.

#### Parameters

##### attribute

`string` \| `undefined`

Dot-path attribute to use for color, or `undefined` to clear it.

#### Returns

`void`

***

### supportsTopK()

> `protected` **supportsTopK**(): `boolean`

Defined in: [plot-base-data.ts:201](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L201)

Whether the plot can render a top-k cut of its rows. An extension hook for
subclasses; `RegisteredPlot` overrides it.

#### Returns

`boolean`

`true` when rows have a label (`axis[0]`) and a rankable value (`axis[1]`).
