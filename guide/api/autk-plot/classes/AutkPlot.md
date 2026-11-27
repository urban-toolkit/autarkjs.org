# Class: AutkPlot

Defined in: [plot.ts:45](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L45)

Unified public entrypoint for autk-plot plot creation and interaction.

`AutkPlot` draws any registered plot (the built-in `scatterplot`, `barchart`,
`parallel-coordinates`, `table`, `linechart`, `heatmatrix`, `boxplot`, `sankey`, `pie`,
`donut`, `areachart`, `bubble`, `hexbin`, `calendar`, `waffle`, `stackedbar`, `treemap`,
`sunburst`, `radar`, `ecdf`, `pareto`, `chord`, `density`, `violin`, or a user plot through
`{ type: 'registered', plot }`) behind a single constructor and a stable API for selection and
event handling.

Every plot is a definition drawn by `RegisteredPlot`; the wrapper delegates all behavior to it
while exposing a plot-agnostic interface.

## Example

```ts
const plot = new AutkPlot(plotDiv, {
  type: 'scatterplot',
  collection,
  attributes: { axis: ['x', 'y'] },
  labels: { axis: ['x', 'y'], title: 'Example' },
  events: [PlotEvent.CLICK],
});

plot.events.on(PlotEvent.CLICK, ({ selection }) => {
  console.log(selection);
});
```

## Constructors

### Constructor

> **new AutkPlot**(`div`, `config`): `AutkPlot`

Defined in: [plot.ts:60](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L60)

Creates a plot wrapper for the requested plot type.

#### Parameters

##### div

`HTMLElement`

Host HTML element where the plot should render.

##### config

[`UnifiedPlotConfig`](../type-aliases/UnifiedPlotConfig.md)

Discriminated plot configuration with a `type` field.

#### Returns

`AutkPlot`

#### Throws

If `config.type` is not supported.

#### Example

```ts
const plot = new AutkPlot(plotDiv, { type: 'scatterplot', collection, attributes: { axis: ['x', 'y'] } });
```

## Accessors

### events

#### Get Signature

> **get** **events**(): `EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Defined in: [plot.ts:109](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L109)

Gets the plot event dispatcher.

##### Returns

`EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Typed event dispatcher of the plot.

***

### instance

#### Get Signature

> **get** **instance**(): [`PlotBaseInteractive`](PlotBaseInteractive.md)

Defined in: [plot.ts:81](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L81)

Gets the underlying plot instance.

This is mainly useful for advanced scenarios that require direct access to the drawing
(its data, scales, and selection state).

##### Returns

[`PlotBaseInteractive`](PlotBaseInteractive.md)

The plot instance that draws the plot.

***

### provenance

#### Get Signature

> **get** **provenance**(): [`ProvenanceModel`](ProvenanceModel.md)

Defined in: [plot.ts:101](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L101)

Gets the provenance graph of the current draw, from source features to marks.

##### Example

```ts
plot.provenance.direct([0]);              // feature:0 → … → mark
plot.provenance.inverse(['mark:aggregate:4']); // mark → … → features
```

##### Returns

[`ProvenanceModel`](ProvenanceModel.md)

Provenance graph answering direct and inverse queries.

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [plot.ts:89](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L89)

Gets the active selection as source feature ids.

##### Returns

`number`[]

Selected source feature ids.

***

### type

#### Get Signature

> **get** **type**(): [`PlotType`](../type-aliases/PlotType.md)

Defined in: [plot.ts:69](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L69)

Gets the active plot type handled by this wrapper.

##### Returns

[`PlotType`](../type-aliases/PlotType.md)

Active plot type discriminator.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [plot.ts:180](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L180)

Stops following the host size (`width: 'auto'`) and removes the plot
from its host element.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
plot.destroy();
```

***

### draw()

> **draw**(): `void`

Defined in: [plot.ts:168](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L168)

Triggers a synchronous redraw of the plot.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
plot.draw();
```

***

### setAnnotations()

> **setAnnotations**(`list`): `void`

Defined in: [plot.ts:145](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L145)

Replaces reference marks without changing the data, domains, or selection.
Pass an empty list to clear the overlay.

#### Parameters

##### list

readonly [`PlotAnnotation`](../type-aliases/PlotAnnotation.md)[]

#### Returns

`void`

#### Throws

If any annotation is invalid or unsupported by the plot.

***

### setHover()

> **setHover**(`selection`): `void`

Defined in: [plot.ts:135](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L135)

Temporarily highlights marks for these source features without changing the selection.

#### Parameters

##### selection

`number`[]

Source feature ids to hover; an empty list clears the hover.

#### Returns

`void`

#### Example

```ts
map.events.on(MapEvent.HOVER, ({ selection }) => plot.setHover(selection));
```

***

### setSelection()

> **setSelection**(`selection`, `shares?`): `void`

Defined in: [plot.ts:124](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L124)

Applies a new selection to the plot as source feature ids.

#### Parameters

##### selection

`number`[]

Source feature ids to highlight/select.

##### shares?

[`FeatureShare`](../type-aliases/FeatureShare.md)[]

Optional share of each feature covered by the selection in
the emitting view, as sent in `PlotEventData.shares`.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
plot.setSelection([0, 3, 7]);
other.events.on('click', ({ selection, shares }) => plot.setSelection(selection, shares));
```

***

### updateCollection()

> **updateCollection**(`collection`): `void`

Defined in: [plot.ts:157](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/plot.ts#L157)

Replaces the plot's data collection and redraws in place.

#### Parameters

##### collection

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

New GeoJSON feature collection to render.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
plot.updateCollection(newCollection);
```
