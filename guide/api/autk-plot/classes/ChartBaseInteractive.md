[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ChartBaseInteractive

# Abstract Class: ChartBaseInteractive

Defined in: [autk-plot/src/chart-base-interactive.ts:29](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L29)

Interactive chart base class.

Extends `ChartBaseData` with selection state, click/brush wiring, and mark
highlighting behavior shared by interactive charts.

## Extends

- [`ChartBaseData`](ChartBaseData.md)

## Constructors

### Constructor

> **new ChartBaseInteractive**(`config`): `ChartBaseInteractive`

Defined in: [autk-plot/src/chart-base-interactive.ts:66](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L66)

Initializes interactive chart state on top of the shared data lifecycle.

#### Parameters

##### config

[`ChartConfig`](../type-aliases/ChartConfig.md)

Plot configuration including optional interaction events.

#### Returns

`ChartBaseInteractive`

#### Throws

If configured bindings are missing or invalid (delegated to `ChartBaseData`).

#### Overrides

[`ChartBaseData`](ChartBaseData.md).[`constructor`](ChartBaseData.md#constructor)

## Properties

### \_axisLabels

> `protected` **\_axisLabels**: `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:61](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L61)

User-facing axis labels.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_axisLabels`](ChartBaseData.md#_axislabels)

***

### \_categoricalColorMapInterpolator

> `protected` **\_categoricalColorMapInterpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md) = `ColorMapInterpolator.CAT_OBSERVABLE10`

Defined in: [autk-plot/src/chart-base-data.ts:91](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L91)

Color interpolator used when the color attribute contains categorical (string) values.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_categoricalColorMapInterpolator`](ChartBaseData.md#_categoricalcolormapinterpolator)

***

### \_colorMapInterpolator

> `protected` **\_colorMapInterpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md) = `ColorMapInterpolator.SEQ_REDS`

Defined in: [autk-plot/src/chart-base-data.ts:89](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L89)

Color interpolator used for continuous (numeric) color encoding.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_colorMapInterpolator`](ChartBaseData.md#_colormapinterpolator)

***

### \_colorProperty

> `protected` **\_colorProperty**: `"fill"` \| `"stroke"` = `'fill'`

Defined in: [autk-plot/src/chart-base-interactive.ts:33](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L33)

CSS property used when applying colors to marks.

***

### \_data

> `protected` **\_data**: `object` & `object`[]

Defined in: [autk-plot/src/chart-base-data.ts:54](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L54)

Normalized render rows bound to marks.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_data`](ChartBaseData.md#_data)

***

### \_div

> `protected` **\_div**: `HTMLElement`

Defined in: [autk-plot/src/chart-base-data.ts:49](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L49)

Host element where the chart is rendered.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_div`](ChartBaseData.md#_div)

***

### \_domainSpec

> `protected` **\_domainSpec**: [`ColorMapDomainSpec`](../type-aliases/ColorMapDomainSpec.md) \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:87](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L87)

Domain specification for color encoding (from config).

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_domainSpec`](ChartBaseData.md#_domainspec)

***

### \_enabledEvents

> `protected` **\_enabledEvents**: [`ChartEvent`](../enumerations/ChartEvent.md)[] = `[]`

Defined in: [autk-plot/src/chart-base-interactive.ts:31](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L31)

Interaction events explicitly enabled for the chart instance.

***

### \_height

> `protected` **\_height**: `number` = `500`

Defined in: [autk-plot/src/chart-base-data.ts:76](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L76)

Outer chart height in pixels.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_height`](ChartBaseData.md#_height)

***

### \_margins

> `protected` **\_margins**: [`ChartMargins`](../type-aliases/ChartMargins.md)

Defined in: [autk-plot/src/chart-base-data.ts:78](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L78)

Plot margins in pixels.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_margins`](ChartBaseData.md#_margins)

***

### \_MODE

> `protected` **\_MODE**: `"and"` \| `"or"` = `'and'`

Defined in: [autk-plot/src/chart-base-interactive.ts:58](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L58)

Brush combine mode for multi-brush interactions.

`and` requires all active brushes to contain a mark; `or` allows any
brush to include it.

***

### \_resolvedDomain

> `protected` **\_resolvedDomain**: `ResolvedDomain` \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:81](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L81)

Resolved color domain, computed from data after each transform.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_resolvedDomain`](ChartBaseData.md#_resolveddomain)

***

### \_sourceFeatures

> `protected` **\_sourceFeatures**: `Feature`\<`Geometry`, `GeoJsonProperties`\>[]

Defined in: [autk-plot/src/chart-base-data.ts:52](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L52)

Original source features from the input collection, indexed by source feature id.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_sourceFeatures`](ChartBaseData.md#_sourcefeatures)

***

### \_tickFormats

> `protected` **\_tickFormats**: `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:71](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L71)

D3 tick-format specifiers used by axis renderers.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_tickFormats`](ChartBaseData.md#_tickformats)

***

### \_title

> `protected` **\_title**: `string`

Defined in: [autk-plot/src/chart-base-data.ts:69](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L69)

Plot title text.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_title`](ChartBaseData.md#_title)

***

### \_transformAttributes

> `protected` **\_transformAttributes**: `string`[] \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:59](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L59)

Dot-path attributes used to read values from transformed rows, when applicable.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_transformAttributes`](ChartBaseData.md#_transformattributes)

***

### \_transformColorAttribute

> `protected` **\_transformColorAttribute**: `string` \| `null` \| `undefined` = `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:66](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L66)

Dot-path attribute used for color encoding on transformed rows, when applicable.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_transformColorAttribute`](ChartBaseData.md#_transformcolorattribute)

***

### \_transformConfig?

> `protected` `optional` **\_transformConfig?**: [`ChartTransformConfig`](../type-aliases/ChartTransformConfig.md)

Defined in: [autk-plot/src/chart-base-data.ts:84](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L84)

Optional transform config shared by chart implementations that support transformed views.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_transformConfig`](ChartBaseData.md#_transformconfig)

***

### \_width

> `protected` **\_width**: `number` = `800`

Defined in: [autk-plot/src/chart-base-data.ts:74](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L74)

Outer chart width in pixels.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`_width`](ChartBaseData.md#_width)

## Accessors

### events

#### Get Signature

> **get** **events**(): [`EventEmitter`](EventEmitter.md)\<[`ChartEventRecord`](../type-aliases/ChartEventRecord.md)\>

Defined in: [autk-plot/src/chart-base-interactive.ts:83](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L83)

Returns the typed event emitter used by this chart instance.

##### Returns

[`EventEmitter`](EventEmitter.md)\<[`ChartEventRecord`](../type-aliases/ChartEventRecord.md)\>

***

### renderAxisAttributes

#### Get Signature

> **get** `protected` **renderAxisAttributes**(): `string`[]

Defined in: [autk-plot/src/chart-base-data.ts:293](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L293)

Returns the active axis bindings for rendered rows.

##### Returns

`string`[]

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`renderAxisAttributes`](ChartBaseData.md#renderaxisattributes)

***

### renderColorAttribute

#### Get Signature

> **get** `protected` **renderColorAttribute**(): `string` \| `undefined`

Defined in: [autk-plot/src/chart-base-data.ts:300](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L300)

Returns the active color binding for rendered rows.

##### Returns

`string` \| `undefined`

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`renderColorAttribute`](ChartBaseData.md#rendercolorattribute)

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [autk-plot/src/chart-base-interactive.ts:76](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L76)

Returns the active selection as source feature ids.

##### Returns

`number`[]

## Methods

### afterDataRefresh()

> `protected` **afterDataRefresh**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:124](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L124)

Rehydrates local aggregated mark selection after `_data` is rebuilt.

#### Returns

`void`

#### Overrides

[`ChartBaseData`](ChartBaseData.md).[`afterDataRefresh`](ChartBaseData.md#afterdatarefresh)

***

### applyMarkStyles()

> `protected` **applyMarkStyles**(`svgs`): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:406](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L406)

Applies interaction-aware styling to rendered marks.

#### Parameters

##### svgs

`Selection`\<`BaseType`, `unknown`, `HTMLElement`, `unknown`\>

Selection containing rendered mark nodes.

#### Returns

`void`

***

### brushEvent()

> `protected` **brushEvent**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:263](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L263)

Enables 2D rectangular brushing interactions.

#### Returns

`void`

***

### brushXEvent()

> `protected` **brushXEvent**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:297](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L297)

Enables horizontal brushing interactions.

#### Returns

`void`

***

### brushYEvent()

> `protected` **brushYEvent**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:339](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L339)

Enables vertical brushing interactions.

#### Returns

`void`

***

### clickEvent()

> `protected` **clickEvent**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:231](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L231)

Enables click-based selection for `.autkMark` nodes and clear overlays.

#### Returns

`void`

***

### computeColorDomain()

> `protected` **computeColorDomain**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:324](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L324)

Computes and caches the active color domain from rendered rows.

#### Returns

`void`

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`computeColorDomain`](ChartBaseData.md#computecolordomain)

***

### configureSignalListeners()

> **configureSignalListeners**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:133](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L133)

Attaches interaction handlers requested by the chart configuration.

#### Returns

`void`

#### Throws

Never throws.

***

### draw()

> **draw**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:152](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L152)

Rebuilds source rows, applies transforms, validates bindings, and delegates rendering.

#### Returns

`void`

#### Throws

If active render bindings do not resolve on the rendered data.

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`draw`](ChartBaseData.md#draw)

***

### getMarkColor()

> `protected` **getMarkColor**(`d`): `string`

Defined in: [autk-plot/src/chart-base-interactive.ts:155](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L155)

Resolves the color for a rendered mark datum.

Selection highlight takes precedence over data-driven color encoding.

#### Parameters

##### d

`unknown`

Bound datum for the mark.

#### Returns

`string`

CSS color string for the mark.

***

### isMarkHighlighted()

> `protected` **isMarkHighlighted**(`d`): `boolean`

Defined in: [autk-plot/src/chart-base-interactive.ts:204](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L204)

Returns whether a rendered mark should be highlighted.

#### Parameters

##### d

`unknown`

Bound datum for the mark.

#### Returns

`boolean`

`true` when the mark belongs to the active selection.

***

### markIntersectsRect()

> `protected` **markIntersectsRect**(`node`, `x0`, `y0`, `x1`, `y1`): `boolean`

Defined in: [autk-plot/src/chart-base-interactive.ts:456](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L456)

Tests whether a rendered mark intersects the supplied brush rectangle.

#### Parameters

##### node

`SVGGeometryElement`

SVG geometry node representing the mark.

##### x0

`number`

First rectangle x coordinate.

##### y0

`number`

First rectangle y coordinate.

##### x1

`number`

Second rectangle x coordinate.

##### y1

`number`

Second rectangle y coordinate.

#### Returns

`boolean`

`true` when the mark intersects the rectangle.

***

### nodeIntersectsRect()

> `protected` **nodeIntersectsRect**(`node`, `x0`, `y0`, `x1`, `y1`): `boolean`

Defined in: [autk-plot/src/chart-base-interactive.ts:474](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L474)

Tests a generic SVG geometry node against a brush rectangle.

#### Parameters

##### node

`SVGGeometryElement`

SVG geometry node representing the mark.

##### x0

`number`

First rectangle x coordinate.

##### y0

`number`

First rectangle y coordinate.

##### x1

`number`

Second rectangle x coordinate.

##### y1

`number`

Second rectangle y coordinate.

#### Returns

`boolean`

`true` when the node intersects the rectangle.

***

### onSelectionUpdated()

> `protected` **onSelectionUpdated**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:413](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L413)

Hook invoked after mark selection styles have been refreshed.

#### Returns

`void`

***

### render()

> `abstract` **render**(): `void`

Defined in: [autk-plot/src/chart-base-data.ts:267](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-data.ts#L267)

Renders chart DOM, SVG, or HTML nodes for the current internal state.

#### Returns

`void`

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`render`](ChartBaseData.md#render)

***

### renderSelection()

> `protected` **renderSelection**(): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:395](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L395)

Refreshes rendered marks to reflect the current selection state.

#### Returns

`void`

***

### resolveSelectionFromRects()

> `protected` **resolveSelectionFromRects**(`activeBrushes`): `number`[]

Defined in: [autk-plot/src/chart-base-interactive.ts:421](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L421)

Resolves selected source ids by testing rendered marks against brush rectangles.

#### Parameters

##### activeBrushes

`Map`\<`string`, \[`number`, `number`, `number`, `number`\]\>

Active brush rectangles keyed by brush host id.

#### Returns

`number`[]

Selected source feature ids.

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

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`resolveTransformResult`](ChartBaseData.md#resolvetransformresult)

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

#### Inherited from

[`ChartBaseData`](ChartBaseData.md).[`setRenderColorAttribute`](ChartBaseData.md#setrendercolorattribute)

***

### setSelection()

> **setSelection**(`selection`): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:110](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L110)

Applies an externally authored selection to the chart.

#### Parameters

##### selection

`number`[]

Source feature ids to highlight.

#### Returns

`void`

#### Throws

Never throws.

***

### updateCollection()

> **updateCollection**(`collection`): `void`

Defined in: [autk-plot/src/chart-base-interactive.ts:93](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-base-interactive.ts#L93)

Replaces the source collection, clears interaction state, and redraws.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

New GeoJSON collection to render.

#### Returns

`void`

#### Throws

Never throws.
