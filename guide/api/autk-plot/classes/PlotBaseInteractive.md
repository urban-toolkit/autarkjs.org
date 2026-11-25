[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotBaseInteractive

# Abstract Class: PlotBaseInteractive

Defined in: [plot-base-interactive.ts:59](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L59)

Interactive plot base class.

Extends `PlotBaseData` with selection state, click/brush wiring, and mark
highlighting behavior shared by interactive plots.

## Extends

- [`PlotBaseData`](PlotBaseData.md)

## Constructors

### Constructor

> **new PlotBaseInteractive**(`config`): `PlotBaseInteractive`

Defined in: [plot-base-interactive.ts:109](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L109)

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

### \_autoWidth

> `protected` **\_autoWidth**: `boolean` = `false`

Defined in: [plot-base-data.ts:91](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L91)

Whether the width follows the host element (`width: 'auto'`).

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_autoWidth`](PlotBaseData.md#_autowidth)

***

### \_axisLabels

> `protected` **\_axisLabels**: `string`[]

Defined in: [plot-base-data.ts:78](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L78)

User-facing axis labels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_axisLabels`](PlotBaseData.md#_axislabels)

***

### \_colorProperty

> `protected` **\_colorProperty**: `"fill"` \| `"stroke"` = `'fill'`

Defined in: [plot-base-interactive.ts:63](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L63)

CSS property used when applying colors to marks.

***

### \_colorScale

> `protected` **\_colorScale**: `CustomColorPalette` \| `ColorMapInterpolator` = `ColorMapInterpolator.SEQ_REDS`

Defined in: [plot-base-data.ts:121](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L121)

Scale selected for the current rendered color domain.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_colorScale`](PlotBaseData.md#_colorscale)

***

### \_data

> `protected` **\_data**: (`object` & `object`)[]

Defined in: [plot-base-data.ts:71](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L71)

Normalized render rows bound to marks.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_data`](PlotBaseData.md#_data)

***

### \_defaultNumericInterpolator

> `protected` **\_defaultNumericInterpolator**: `ColorMapInterpolator` = `ColorMapInterpolator.SEQ_REDS`

Defined in: [plot-base-data.ts:117](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L117)

Default interpolator for numeric color encoding when the caller does not supply a scale.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_defaultNumericInterpolator`](PlotBaseData.md#_defaultnumericinterpolator)

***

### \_div

> `protected` **\_div**: `HTMLElement`

Defined in: [plot-base-data.ts:66](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L66)

Host element where the plot is rendered.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_div`](PlotBaseData.md#_div)

***

### \_enabledEvents

> `protected` **\_enabledEvents**: [`PlotEvent`](../enumerations/PlotEvent.md)[] = `[]`

Defined in: [plot-base-interactive.ts:61](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L61)

Interaction events explicitly enabled for the plot instance.

***

### \_filter

> `protected` **\_filter**: [`FilterCondition`](../type-aliases/FilterCondition.md)[] = `[]`

Defined in: [plot-base-data.ts:110](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L110)

Conditions every source feature must pass before the transform, if any.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_filter`](PlotBaseData.md#_filter)

***

### \_height

> `protected` **\_height**: `number` = `500`

Defined in: [plot-base-data.ts:93](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L93)

Outer plot height in pixels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_height`](PlotBaseData.md#_height)

***

### \_hoverFeatureIds

> `protected` **\_hoverFeatureIds**: `Set`\<`number`\>

Defined in: [plot-base-interactive.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L83)

Source feature ids hovered from another view.

***

### \_margins

> `protected` **\_margins**: [`PlotMargins`](../type-aliases/PlotMargins.md)

Defined in: [plot-base-data.ts:95](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L95)

Plot margins in pixels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_margins`](PlotBaseData.md#_margins)

***

### \_MODE

> `protected` **\_MODE**: `"and"` \| `"or"` = `'and'`

Defined in: [plot-base-interactive.ts:101](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L101)

Brush combine mode for multi-brush interactions.

`and` requires all active brushes to contain a mark; `or` allows any
brush to include it.

***

### \_provenance

> `protected` **\_provenance**: [`ProvenanceModel`](ProvenanceModel.md)

Defined in: [plot-base-data.ts:104](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L104)

Provenance graph of the current draw cycle, from source features to rendered rows.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_provenance`](PlotBaseData.md#_provenance)

***

### \_resolvedDomain

> `protected` **\_resolvedDomain**: `ResolvedDomain` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:98](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L98)

Resolved color domain, computed from data after each transform.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_resolvedDomain`](PlotBaseData.md#_resolveddomain)

***

### \_rowIds

> `protected` **\_rowIds**: `WeakMap`\<`object`, `string`\>

Defined in: [plot-base-data.ts:106](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L106)

Provenance id of each rendered row object in `_data`.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_rowIds`](PlotBaseData.md#_rowids)

***

### \_selectionOrigin

> `protected` **\_selectionOrigin**: `"local"` \| `"external"` \| `null` = `null`

Defined in: [plot-base-interactive.ts:70](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L70)

Tracks whether the current selection came from local or external input.

***

### \_sourceFeatures

> `protected` **\_sourceFeatures**: `Feature`\<`Geometry`, `GeoJsonProperties`\>[]

Defined in: [plot-base-data.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L69)

Original source features from the input collection, indexed by source feature id.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_sourceFeatures`](PlotBaseData.md#_sourcefeatures)

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

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_style`](PlotBaseData.md#_style)

***

### \_title

> `protected` **\_title**: `string`

Defined in: [plot-base-data.ts:86](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L86)

Plot title text.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_title`](PlotBaseData.md#_title)

***

### \_topK

> `protected` **\_topK**: [`TopKConfig`](../type-aliases/TopKConfig.md) \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:114](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L114)

Top-k cut applied to rendered rows after the transform, if any.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_topK`](PlotBaseData.md#_topk)

***

### \_transformAttributes

> `protected` **\_transformAttributes**: `string`[] \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:76](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L76)

Dot-path attributes used to read values from transformed rows, when applicable.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_transformAttributes`](PlotBaseData.md#_transformattributes)

***

### \_transformColorAttribute

> `protected` **\_transformColorAttribute**: `string` \| `null` \| `undefined` = `undefined`

Defined in: [plot-base-data.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L83)

Dot-path attribute used for color encoding on transformed rows, when applicable.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_transformColorAttribute`](PlotBaseData.md#_transformcolorattribute)

***

### \_transformConfig?

> `protected` `optional` **\_transformConfig?**: [`PlotTransformConfig`](../type-aliases/PlotTransformConfig.md)

Defined in: [plot-base-data.ts:101](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L101)

Transform configuration, if any.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_transformConfig`](PlotBaseData.md#_transformconfig)

***

### \_width

> `protected` **\_width**: `number` = `DEFAULT_WIDTH`

Defined in: [plot-base-data.ts:89](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L89)

Outer plot width in pixels.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`_width`](PlotBaseData.md#_width)

## Accessors

### aggregatesRows

#### Get Signature

> **get** `protected` **aggregatesRows**(): `boolean`

Defined in: [plot-base-interactive.ts:325](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L325)

Whether rendered rows aggregate features (`aggregated` projection) rather than being one per feature.

##### Returns

`boolean`

***

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Defined in: [plot-base-interactive.ts:179](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L179)

Returns the typed event emitter used by this plot instance.

##### Returns

`EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

***

### highlightColor

#### Get Signature

> **get** `protected` **highlightColor**(): `string`

Defined in: [plot-base-interactive.ts:341](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L341)

Highlight color of the plot: the provenance color for plots with the
segregated view, the plain highlight color for plots without it.

##### Returns

`string`

***

### provenance

#### Get Signature

> **get** **provenance**(): [`ProvenanceModel`](ProvenanceModel.md)

Defined in: [plot-base-data.ts:256](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L256)

Provenance graph of the current draw cycle.

Stages run from `D0` (source features) through the transform stages to
`M` (rendered marks) once the plot has drawn.

##### Returns

[`ProvenanceModel`](ProvenanceModel.md)

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`provenance`](PlotBaseData.md#provenance)

***

### renderAxisAttributes

#### Get Signature

> **get** `protected` **renderAxisAttributes**(): `string`[]

Defined in: [plot-base-data.ts:491](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L491)

Returns the active axis bindings for rendered rows.

##### Returns

`string`[]

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`renderAxisAttributes`](PlotBaseData.md#renderaxisattributes)

***

### renderColorAttribute

#### Get Signature

> **get** `protected` **renderColorAttribute**(): `string` \| `undefined`

Defined in: [plot-base-data.ts:498](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L498)

Returns the active color binding for rendered rows.

##### Returns

`string` \| `undefined`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`renderColorAttribute`](PlotBaseData.md#rendercolorattribute)

***

### segregatedActive

#### Get Signature

> **get** `protected` **segregatedActive**(): `boolean`

Defined in: [plot-base-interactive.ts:354](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L354)

Whether marks currently show only their selected part (segregated view).

Requires the view to be enabled and supported by the plot, and a
selection that came from another view: aggregated rows split by the
selected features (direct direction), or one-to-one rows split by the
feature shares sent along with the selection (inverse direction). A local
selection picks whole marks, so it keeps the whole-mark highlight.

##### Returns

`boolean`

***

### segregatedEnabled

#### Get Signature

> **get** `protected` **segregatedEnabled**(): `boolean`

Defined in: [plot-base-interactive.ts:333](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L333)

Whether the plot draws the segregated view, regardless of the current
selection. Plots may use it to lay out scales that fit partial marks.

##### Returns

`boolean`

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [plot-base-interactive.ts:172](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L172)

Returns the active selection as source feature ids.

##### Returns

`number`[]

***

### selectionPath

#### Get Signature

> **get** **selectionPath**(): \{ `direction`: `"direct"` \| `"inverse"`; `path`: [`ProvenancePath`](../type-aliases/ProvenancePath.md); \} \| `null`

Defined in: [plot-base-interactive.ts:258](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L258)

Provenance path of the current selection.

A local selection starts at the selected marks and goes back to the
source features (inverse query). A selection from another view starts at
the selected features and goes forward to the marks (direct query).

##### Returns

\{ `direction`: `"direct"` \| `"inverse"`; `path`: [`ProvenancePath`](../type-aliases/ProvenancePath.md); \} \| `null`

Query direction and reached stages, or `null` without a selection.

## Methods

### afterDataRefresh()

> `protected` **afterDataRefresh**(): `void`

Defined in: [plot-base-interactive.ts:223](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L223)

Rehydrates local aggregated mark selection after `_data` is rebuilt.

#### Returns

`void`

#### Overrides

[`PlotBaseData`](PlotBaseData.md).[`afterDataRefresh`](PlotBaseData.md#afterdatarefresh)

***

### afterRender()

> `protected` **afterRender**(): `void`

Defined in: [plot-base-interactive.ts:231](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L231)

Registers the rendered `.autkMark` nodes as provenance stage `M` and
redraws segregated marks for the new geometry.

#### Returns

`void`

#### Overrides

[`PlotBaseData`](PlotBaseData.md).[`afterRender`](PlotBaseData.md#afterrender)

***

### applyMarkStyles()

> `protected` **applyMarkStyles**(`svgs`): `void`

Defined in: [plot-base-interactive.ts:902](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L902)

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

Defined in: [plot-base-interactive.ts:748](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L748)

Enables 2D rectangular brushing interactions.

#### Returns

`void`

***

### brushExtent()

> `protected` **brushExtent**(`pixels`, `dimension?`): [`BrushExtent`](../type-aliases/BrushExtent.md)

Defined in: [plot-base-interactive.ts:741](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L741)

Adds axis data bounds to brush-local SVG bounds when the renderer knows the scales.

#### Parameters

##### pixels

`Partial`\<`Record`\<`"x"` \| `"y"`, \[`number`, `number`\]\>\>

##### dimension?

`string`

#### Returns

[`BrushExtent`](../type-aliases/BrushExtent.md)

***

### brushXEvent()

> `protected` **brushXEvent**(): `void`

Defined in: [plot-base-interactive.ts:783](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L783)

Enables horizontal brushing interactions.

#### Returns

`void`

***

### brushYEvent()

> `protected` **brushYEvent**(): `void`

Defined in: [plot-base-interactive.ts:826](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L826)

Enables vertical brushing interactions.

#### Returns

`void`

***

### clickEvent()

> `protected` **clickEvent**(): `void`

Defined in: [plot-base-interactive.ts:578](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L578)

Enables click-based selection for `.autkMark` nodes and clear overlays.

#### Returns

`void`

***

### computeColorDomain()

> `protected` **computeColorDomain**(): `void`

Defined in: [plot-base-data.ts:522](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L522)

Computes and caches the active color domain from rendered rows.

#### Returns

`void`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`computeColorDomain`](PlotBaseData.md#computecolordomain)

***

### configureSignalListeners()

> **configureSignalListeners**(): `void`

Defined in: [plot-base-interactive.ts:464](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L464)

Attaches interaction handlers requested by the plot configuration.

#### Returns

`void`

#### Throws

Never throws.

***

### configureTouchInteractionStyles()

> `protected` **configureTouchInteractionStyles**(): `void`

Defined in: [plot-base-interactive.ts:485](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L485)

Prevents browser touch gestures from stealing plot interactions.

#### Returns

`void`

***

### destroy()

> **destroy**(): `void`

Defined in: [plot-base-interactive.ts:124](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L124)

Stops following the host size and removes the plot from its host.

#### Returns

`void`

#### Throws

Never throws.

***

### draw()

> **draw**(): `void`

Defined in: [plot-base-interactive.ts:883](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L883)

Refreshes rendered marks to reflect the current selection state.

#### Returns

`void`

#### Overrides

[`PlotBaseData`](PlotBaseData.md).[`draw`](PlotBaseData.md#draw)

***

### getMarkColor()

> `protected` **getMarkColor**(`d`): `string`

Defined in: [plot-base-interactive.ts:500](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L500)

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

### hostWidth()

> `protected` **hostWidth**(): `number`

Defined in: [plot-base-data.ts:243](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L243)

Content width of the host element (without its padding), or the default
width while it has no layout.

#### Returns

`number`

Width in pixels, at least `MIN_AUTO_WIDTH`.

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`hostWidth`](PlotBaseData.md#hostwidth)

***

### hoverParts()

> `protected` **hoverParts**(): [`SegregatedPart`](../type-aliases/SegregatedPart.md)[]

Defined in: [plot-base-interactive.ts:411](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L411)

Parts of the marks produced by the hovered features, for an aggregated plot.

#### Returns

[`SegregatedPart`](../type-aliases/SegregatedPart.md)[]

***

### isMarkHighlighted()

> `protected` **isMarkHighlighted**(`d`): `boolean`

Defined in: [plot-base-interactive.ts:548](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L548)

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

Defined in: [plot-base-interactive.ts:952](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L952)

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

Defined in: [plot-base-interactive.ts:970](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L970)

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

Defined in: [plot-base-interactive.ts:909](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L909)

Hook invoked after mark selection styles have been refreshed.

#### Returns

`void`

***

### render()

> `abstract` **render**(): `void`

Defined in: [plot-base-data.ts:470](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L470)

Renders plot DOM, SVG, or HTML nodes for the current internal state.

#### Returns

`void`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`render`](PlotBaseData.md#render)

***

### renderHoverParts()

> `protected` **renderHoverParts**(): `void`

Defined in: [plot-base-interactive.ts:399](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L399)

Draws or clears the partial marks of a hover from another view.

#### Returns

`void`

***

### renderProvenancePath()

> `protected` **renderProvenancePath**(): `void`

Defined in: [plot-base-interactive.ts:275](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L275)

Draws, updates, or removes the provenance path widget under the plot.

#### Returns

`void`

***

### renderSegregatedMarks()

> `protected` **renderSegregatedMarks**(): `void`

Defined in: [plot-base-interactive.ts:396](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L396)

Draws, updates, or clears the partial marks of the segregated view from
`segregatedSelection` (`RegisteredPlot` overrides it).

#### Returns

`void`

***

### renderSelection()

> `protected` **renderSelection**(): `void`

Defined in: [plot-base-interactive.ts:888](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L888)

#### Returns

`void`

***

### resolveSelectionFromRects()

> `protected` **resolveSelectionFromRects**(`activeBrushes`): `number`[]

Defined in: [plot-base-interactive.ts:917](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L917)

Resolves selected source ids by testing rendered marks against brush rectangles.

#### Parameters

##### activeBrushes

`Map`\<`string`, \[`number`, `number`, `number`, `number`\]\>

Active brush rectangles keyed by brush host id.

#### Returns

`number`[]

Selected source feature ids.

***

### resolveSize()

> `protected` **resolveSize**(): `void`

Defined in: [plot-base-data.ts:233](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L233)

Resolves the plot size before a draw. With `width: 'auto'` the width is
the content width of the host element.

#### Returns

`void`

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`resolveSize`](PlotBaseData.md#resolvesize)

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

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`resolveTransformResult`](PlotBaseData.md#resolvetransformresult)

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

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`rowIdOf`](PlotBaseData.md#rowidof)

***

### segregatedParts()

> `protected` **segregatedParts**(): [`SegregatedPart`](../type-aliases/SegregatedPart.md)[]

Defined in: [plot-base-interactive.ts:427](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L427)

#### Returns

[`SegregatedPart`](../type-aliases/SegregatedPart.md)[]

***

### selectionEventData()

> `protected` **selectionEventData**(): [`PlotEventData`](../type-aliases/PlotEventData.md)

Defined in: [plot-base-interactive.ts:368](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L368)

Builds the event payload for the current selection.

Aggregating plots add the share of each selected feature covered by the
selected marks, so receiving one-to-one plots can split their marks.

#### Returns

[`PlotEventData`](../type-aliases/PlotEventData.md)

Selected source ids, plus shares when rows are aggregated.

***

### setHover()

> **setHover**(`selection`): `void`

Defined in: [plot-base-interactive.ts:705](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L705)

Highlights the marks of these source features with the hover color, without changing selection.

#### Parameters

##### selection

`number`[]

Source feature ids to hover; an empty list clears the external hover.

#### Returns

`void`

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

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`setRenderColorAttribute`](PlotBaseData.md#setrendercolorattribute)

***

### setSelection()

> **setSelection**(`selection`, `shares?`): `void`

Defined in: [plot-base-interactive.ts:209](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L209)

Applies an externally authored selection to the plot.

#### Parameters

##### selection

`number`[]

Source feature ids to highlight.

##### shares?

[`FeatureShare`](../type-aliases/FeatureShare.md)[]

Optional share of each feature covered by the selection in
the emitting view; one-to-one plots draw only that part of each mark.

#### Returns

`void`

#### Throws

Never throws.

***

### supportsSegregatedView()

> `protected` **supportsSegregatedView**(): `boolean`

Defined in: [plot-base-interactive.ts:388](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L388)

Whether the plot draws segregated marks. An extension hook for subclasses;
`RegisteredPlot` overrides it.

#### Returns

`boolean`

`true` when `renderSegregatedMarks()` is implemented for the current configuration.

***

### supportsTopK()

> `protected` **supportsTopK**(): `boolean`

Defined in: [plot-base-data.ts:201](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-data.ts#L201)

Whether the plot can render a top-k cut of its rows. An extension hook for
subclasses; `RegisteredPlot` overrides it.

#### Returns

`boolean`

`true` when rows have a label (`axis[0]`) and a rankable value (`axis[1]`).

#### Inherited from

[`PlotBaseData`](PlotBaseData.md).[`supportsTopK`](PlotBaseData.md#supportstopk)

***

### updateCollection()

> **updateCollection**(`collection`): `void`

Defined in: [plot-base-interactive.ts:189](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-base-interactive.ts#L189)

Replaces the source collection, clears interaction state, and redraws.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

New GeoJSON collection to render.

#### Returns

`void`

#### Throws

Never throws.
