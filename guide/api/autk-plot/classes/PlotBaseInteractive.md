[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotBaseInteractive

# Abstract Class: PlotBaseInteractive

Defined in: [plot-base-interactive.ts:29](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L29)

Interactive plot base class.

Extends `PlotBaseData` with selection state, click/brush wiring, and mark
highlighting behavior shared by interactive plots.

## Extends

- [`PlotBaseData`](PlotBaseData.md)

## Constructors

### Constructor

> **new PlotBaseInteractive**(`config`): `PlotBaseInteractive`

Defined in: [plot-base-interactive.ts:66](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L66)

Initializes interactive plot state on top of the shared data lifecycle.

#### Parameters

##### config

[`PlotConfig`](../type-aliases/PlotConfig.md)

Plot configuration including optional interaction events.

#### Returns

`PlotBaseInteractive`

#### Throws

If configured bindings are missing or invalid (delegated to `PlotBaseData`).

#### Overrides

[`PlotBaseData`](PlotBaseData.md).[`constructor`](PlotBaseData.md#constructor)

## Properties

### \_axisLabels

> `protected` **\_axisLabels**: `string`[]

Defined in: [plot-base-data.ts:61](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L61)

User-facing axis labels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_axisLabels`](PlotBaseData.md#_axislabels)

***

### \_categoricalColorMapInterpolator

> `protected` **\_categoricalColorMapInterpolator**: `ColorMapInterpolator` = `ColorMapInterpolator.CAT_OBSERVABLE10`

Defined in: [plot-base-data.ts:91](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L91)

Color interpolator used when the color attribute contains categorical (string) values.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_categoricalColorMapInterpolator`](PlotBaseData.md#_categoricalcolormapinterpolator)

***

### \_colorMapInterpolator

> `protected` **\_colorMapInterpolator**: `ColorMapInterpolator` = `ColorMapInterpolator.SEQ_REDS`

Defined in: [plot-base-data.ts:89](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L89)

Color interpolator used for continuous (numeric) color encoding.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_colorMapInterpolator`](PlotBaseData.md#_colormapinterpolator)

***

### \_colorProperty

> `protected` **\_colorProperty**: `"fill"` \| `"stroke"` = `'fill'`

Defined in: [plot-base-interactive.ts:33](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L33)

CSS property used when applying colors to marks.

***

### \_data

> `protected` **\_data**: `object` & `object`[]

Defined in: [plot-base-data.ts:54](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L54)

Normalized render rows bound to marks.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_data`](PlotBaseData.md#_data)

***

### \_div

> `protected` **\_div**: `HTMLElement`

Defined in: [plot-base-data.ts:49](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L49)

Host element where the plot is rendered.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_div`](PlotBaseData.md#_div)

***

### \_domainSpec

> `protected` **\_domainSpec**: `ColorMapDomainSpec` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:87](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L87)

Domain specification for color encoding (from config).

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_domainSpec`](PlotBaseData.md#_domainspec)

***

### \_enabledEvents

> `protected` **\_enabledEvents**: [`PlotEvent`](../enumerations/PlotEvent.md)[] = `[]`

Defined in: [plot-base-interactive.ts:31](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L31)

Interaction events explicitly enabled for the plot instance.

***

### \_height

> `protected` **\_height**: `number` = `500`

Defined in: [plot-base-data.ts:76](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L76)

Outer plot height in pixels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_height`](PlotBaseData.md#_height)

***

### \_margins

> `protected` **\_margins**: [`PlotMargins`](../type-aliases/PlotMargins.md)

Defined in: [plot-base-data.ts:78](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L78)

Plot margins in pixels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_margins`](PlotBaseData.md#_margins)

***

### \_MODE

> `protected` **\_MODE**: `"and"` \| `"or"` = `'and'`

Defined in: [plot-base-interactive.ts:58](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L58)

Brush combine mode for multi-brush interactions.

`and` requires all active brushes to contain a mark; `or` allows any
brush to include it.

***

### \_resolvedDomain

> `protected` **\_resolvedDomain**: `ResolvedDomain` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:81](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L81)

Resolved color domain, computed from data after each transform.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_resolvedDomain`](PlotBaseData.md#_resolveddomain)

***

### \_sourceFeatures

> `protected` **\_sourceFeatures**: `Feature`\<`Geometry`, `GeoJsonProperties`\>[]

Defined in: [plot-base-data.ts:52](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L52)

Original source features from the input collection, indexed by source feature id.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_sourceFeatures`](PlotBaseData.md#_sourcefeatures)

***

### \_tickFormats

> `protected` **\_tickFormats**: `string`[]

Defined in: [plot-base-data.ts:71](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L71)

D3 tick-format specifiers used by axis renderers.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_tickFormats`](PlotBaseData.md#_tickformats)

***

### \_title

> `protected` **\_title**: `string`

Defined in: [plot-base-data.ts:69](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L69)

Plot title text.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_title`](PlotBaseData.md#_title)

***

### \_transformAttributes

> `protected` **\_transformAttributes**: `string`[] \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:59](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L59)

Dot-path attributes used to read values from transformed rows, when applicable.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_transformAttributes`](PlotBaseData.md#_transformattributes)

***

### \_transformColorAttribute

> `protected` **\_transformColorAttribute**: `string` \| `null` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:66](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L66)

Dot-path attribute used for color encoding on transformed rows, when applicable.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_transformColorAttribute`](PlotBaseData.md#_transformcolorattribute)

***

### \_transformConfig?

> `protected` `optional` **\_transformConfig?**: [`PlotTransformConfig`](../type-aliases/PlotTransformConfig.md)

Defined in: [plot-base-data.ts:84](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L84)

Optional transform config shared by plot implementations that support transformed views.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_transformConfig`](PlotBaseData.md#_transformconfig)

***

### \_width

> `protected` **\_width**: `number` = `800`

Defined in: [plot-base-data.ts:74](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L74)

Outer plot width in pixels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_width`](PlotBaseData.md#_width)

## Accessors

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Defined in: [plot-base-interactive.ts:83](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L83)

Returns the typed event emitter used by this plot instance.

##### Returns

`EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

***

### renderAxisAttributes

#### Get Signature

> **get** `protected` **renderAxisAttributes**(): `string`[]

Defined in: [plot-base-data.ts:293](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L293)

Returns the active axis bindings for rendered rows.

##### Returns

`string`[]

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`renderAxisAttributes`](PlotBaseData.md#renderaxisattributes)

***

### renderColorAttribute

#### Get Signature

> **get** `protected` **renderColorAttribute**(): `string` \| `undefined`

Defined in: [plot-base-data.ts:300](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L300)

Returns the active color binding for rendered rows.

##### Returns

`string` \| `undefined`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`renderColorAttribute`](PlotBaseData.md#rendercolorattribute)

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [plot-base-interactive.ts:76](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L76)

Returns the active selection as source feature ids.

##### Returns

`number`[]

## Methods

### afterDataRefresh()

> `protected` **afterDataRefresh**(): `void`

Defined in: [plot-base-interactive.ts:124](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L124)

Rehydrates local aggregated mark selection after `_data` is rebuilt.

#### Returns

`void`

#### Overrides

[`PlotBaseData`](PlotBaseData.md).[`afterDataRefresh`](PlotBaseData.md#afterdatarefresh)

***

### applyMarkStyles()

> `protected` **applyMarkStyles**(`svgs`): `void`

Defined in: [plot-base-interactive.ts:418](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L418)

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

Defined in: [plot-base-interactive.ts:275](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L275)

Enables 2D rectangular brushing interactions.

#### Returns

`void`

***

### brushXEvent()

> `protected` **brushXEvent**(): `void`

Defined in: [plot-base-interactive.ts:309](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L309)

Enables horizontal brushing interactions.

#### Returns

`void`

***

### brushYEvent()

> `protected` **brushYEvent**(): `void`

Defined in: [plot-base-interactive.ts:351](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L351)

Enables vertical brushing interactions.

#### Returns

`void`

***

### clickEvent()

> `protected` **clickEvent**(): `void`

Defined in: [plot-base-interactive.ts:243](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L243)

Enables click-based selection for `.autkMark` nodes and clear overlays.

#### Returns

`void`

***

### computeColorDomain()

> `protected` **computeColorDomain**(): `void`

Defined in: [plot-base-data.ts:324](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L324)

Computes and caches the active color domain from rendered rows.

#### Returns

`void`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`computeColorDomain`](PlotBaseData.md#computecolordomain)

***

### configureSignalListeners()

> **configureSignalListeners**(): `void`

Defined in: [plot-base-interactive.ts:133](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L133)

Attaches interaction handlers requested by the plot configuration.

#### Returns

`void`

#### Throws

Never throws.

***

### configureTouchInteractionStyles()

> `protected` **configureTouchInteractionStyles**(): `void`

Defined in: [plot-base-interactive.ts:152](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L152)

Prevents browser touch gestures from stealing plot interactions.

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [plot-base-data.ts:152](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L152)

Rebuilds source rows, applies transforms, validates bindings, and delegates rendering.

#### Returns

`void`

#### Throws

If active render bindings do not resolve on the rendered data.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`draw`](PlotBaseData.md#draw)

***

### getMarkColor()

> `protected` **getMarkColor**(`d`): `string`

Defined in: [plot-base-interactive.ts:167](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L167)

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

Defined in: [plot-base-interactive.ts:216](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L216)

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

Defined in: [plot-base-interactive.ts:468](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L468)

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

Defined in: [plot-base-interactive.ts:486](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L486)

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

Defined in: [plot-base-interactive.ts:425](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L425)

Hook invoked after mark selection styles have been refreshed.

#### Returns

`void`

***

### render()

> `abstract` **render**(): `void`

Defined in: [plot-base-data.ts:267](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L267)

Renders plot DOM, SVG, or HTML nodes for the current internal state.

#### Returns

`void`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`render`](PlotBaseData.md#render)

***

### renderSelection()

> `protected` **renderSelection**(): `void`

Defined in: [plot-base-interactive.ts:407](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L407)

Refreshes rendered marks to reflect the current selection state.

#### Returns

`void`

***

### resolveSelectionFromRects()

> `protected` **resolveSelectionFromRects**(`activeBrushes`): `number`[]

Defined in: [plot-base-interactive.ts:433](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L433)

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

> `protected` **resolveTransformResult**(`result`): [`ResolvedPlotTransform`](../type-aliases/ResolvedPlotTransform.md)

Defined in: [plot-base-data.ts:276](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L276)

Maps a preset-specific executed transform into the rendered row schema
expected by plot implementations.

#### Parameters

##### result

[`ExecutedPlotTransform`](../type-aliases/ExecutedPlotTransform.md)

Executed transform payload returned by the shared dispatcher.

#### Returns

[`ResolvedPlotTransform`](../type-aliases/ResolvedPlotTransform.md)

Normalized rendered rows plus any transformed binding metadata.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`resolveTransformResult`](PlotBaseData.md#resolvetransformresult)

***

### setRenderColorAttribute()

> `protected` **setRenderColorAttribute**(`attribute`): `void`

Defined in: [plot-base-data.ts:312](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-data.ts#L312)

Updates the active render-time color binding.

#### Parameters

##### attribute

`string` \| `undefined`

Dot-path attribute to use for color, or `undefined` to clear it.

#### Returns

`void`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`setRenderColorAttribute`](PlotBaseData.md#setrendercolorattribute)

***

### setSelection()

> **setSelection**(`selection`): `void`

Defined in: [plot-base-interactive.ts:110](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L110)

Applies an externally authored selection to the plot.

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

Defined in: [plot-base-interactive.ts:93](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/plot-base-interactive.ts#L93)

Replaces the source collection, clears interaction state, and redraws.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

New GeoJSON collection to render.

#### Returns

`void`

#### Throws

Never throws.
