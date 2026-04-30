[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ChartBaseData

# Abstract Class: ChartBaseData

Defined in: [autk-plot/src/chart-base-data.ts:47](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L47)

Base class for shared chart data lifecycle.

Normalizes input rows, validates configured bindings, runs transforms, and
resolves the active rendered schema used by subclasses during drawing.

## Extended by

- [`ChartBaseInteractive`](ChartBaseInteractive.md)

## Constructors

### Constructor

> **new ChartBaseData**(`config`): `ChartBaseData`

Defined in: [autk-plot/src/chart-base-data.ts:100](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L100)

Initializes shared chart data state from a plot configuration.

#### Parameters

##### config

[`ChartConfig`](../type-aliases/ChartConfig.md)

Plot configuration containing source data, bindings, and transform/display options.

#### Returns

`ChartBaseData`

#### Throws

If `attributes.axis` is empty or configured bindings are missing/invalid.

#### Throws

If `@transform` placeholder is used without a transform config.

## Properties

### \_axisLabels

> `protected` **\_axisLabels**: `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:61](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L61)

User-facing axis labels.

***

### \_categoricalColorMapInterpolator

> `protected` **\_categoricalColorMapInterpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md) = `ColorMapInterpolator.CAT_OBSERVABLE10`

Defined in: [autk-plot/src/chart-base-data.ts:91](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L91)

Color interpolator used when the color attribute contains categorical (string) values.

***

### \_colorMapInterpolator

> `protected` **\_colorMapInterpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md) = `ColorMapInterpolator.SEQ_REDS`

Defined in: [autk-plot/src/chart-base-data.ts:89](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L89)

Color interpolator used for continuous (numeric) color encoding.

***

### \_data

> `protected` **\_data**: `object` & `object`[]

Defined in: [autk-plot/src/chart-base-data.ts:54](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L54)

Normalized render rows bound to marks.

***

### \_div

> `protected` **\_div**: `HTMLElement`

Defined in: [autk-plot/src/chart-base-data.ts:49](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L49)

Host element where the chart is rendered.

***

### \_domainSpec

> `protected` **\_domainSpec**: [`ColorMapDomainSpec`](../type-aliases/ColorMapDomainSpec.md) \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:87](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L87)

Domain specification for color encoding (from config).

***

### \_height

> `protected` **\_height**: `number` = `500`

Defined in: [autk-plot/src/chart-base-data.ts:76](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L76)

Outer chart height in pixels.

***

### \_margins

> `protected` **\_margins**: [`ChartMargins`](../type-aliases/ChartMargins.md)

Defined in: [autk-plot/src/chart-base-data.ts:78](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L78)

Plot margins in pixels.

***

### \_resolvedDomain

> `protected` **\_resolvedDomain**: `ResolvedDomain` \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:81](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L81)

Resolved color domain, computed from data after each transform.

***

### \_sourceFeatures

> `protected` **\_sourceFeatures**: `Feature`\<`Geometry`, `GeoJsonProperties`\>[]

Defined in: [autk-plot/src/chart-base-data.ts:52](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L52)

Original source features from the input collection, indexed by source feature id.

***

### \_tickFormats

> `protected` **\_tickFormats**: `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:71](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L71)

D3 tick-format specifiers used by axis renderers.

***

### \_title

> `protected` **\_title**: `string`

Defined in: [autk-plot/src/chart-base-data.ts:69](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L69)

Plot title text.

***

### \_transformAttributes

> `protected` **\_transformAttributes**: `string`[] \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:59](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L59)

Dot-path attributes used to read values from transformed rows, when applicable.

***

### \_transformColorAttribute

> `protected` **\_transformColorAttribute**: `string` \| `null` \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:66](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L66)

Dot-path attribute used for color encoding on transformed rows, when applicable.

***

### \_transformConfig?

> `protected` `optional` **\_transformConfig?**: [`ChartTransformConfig`](../type-aliases/ChartTransformConfig.md)

Defined in: [autk-plot/src/chart-base-data.ts:84](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L84)

Optional transform config shared by chart implementations that support transformed views.

***

### \_width

> `protected` **\_width**: `number` = `800`

Defined in: [autk-plot/src/chart-base-data.ts:74](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L74)

Outer chart width in pixels.

## Accessors

### renderAxisAttributes

#### Get Signature

> **get** `protected` **renderAxisAttributes**(): `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:293](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L293)

Returns the active axis bindings for rendered rows.

##### Returns

`string`[]

***

### renderColorAttribute

#### Get Signature

> **get** `protected` **renderColorAttribute**(): `string` \| `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:300](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L300)

Returns the active color binding for rendered rows.

##### Returns

`string` \| `undefined`

## Methods

### afterDataRefresh()

> `protected` **afterDataRefresh**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:262](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L262)

Lifecycle hook invoked after `_data` has been refreshed but before render-time
validation and color-domain computation.

#### Returns

`void`

***

### computeColorDomain()

> `protected` **computeColorDomain**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:324](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L324)

Computes and caches the active color domain from rendered rows.

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:152](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L152)

Rebuilds source rows, applies transforms, validates bindings, and delegates rendering.

#### Returns

`void`

#### Throws

If active render bindings do not resolve on the rendered data.

***

### render()

> `abstract` **render**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:267](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L267)

Renders chart DOM, SVG, or HTML nodes for the current internal state.

#### Returns

`void`

***

### resolveTransformResult()

> `protected` **resolveTransformResult**(`result`): [`ResolvedChartTransform`](../type-aliases/ResolvedChartTransform.md)

Defined in: [autk-plot/src/chart-base-data.ts:276](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L276)

Maps a preset-specific executed transform into the rendered row schema
expected by chart implementations.

#### Parameters

##### result

[`ExecutedChartTransform`](../type-aliases/ExecutedChartTransform.md)

Executed transform payload returned by the shared dispatcher.

#### Returns

[`ResolvedChartTransform`](../type-aliases/ResolvedChartTransform.md)

Normalized rendered rows plus any transformed binding metadata.

***

### setRenderColorAttribute()

> `protected` **setRenderColorAttribute**(`attribute`): `void`

Defined in: [autk-plot/src/chart-base-data.ts:312](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L312)

Updates the active render-time color binding.

#### Parameters

##### attribute

`string` \| `undefined`

Dot-path attribute to use for color, or `undefined` to clear it.

#### Returns

`void`
