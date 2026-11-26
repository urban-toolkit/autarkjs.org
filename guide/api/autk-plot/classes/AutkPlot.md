# Class: AutkPlot

Defined in: [plot.ts:44](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L44)

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

Defined in: [plot.ts:59](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L59)

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

Defined in: [plot.ts:108](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L108)

Gets the plot event dispatcher.

##### Returns

`EventEmitter`\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Typed event dispatcher of the plot.

***

### instance

#### Get Signature

> **get** **instance**(): [`PlotBaseInteractive`](PlotBaseInteractive.md)

Defined in: [plot.ts:80](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L80)

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

Defined in: [plot.ts:100](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L100)

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

Defined in: [plot.ts:88](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L88)

Gets the active selection as source feature ids.

##### Returns

`number`[]

Selected source feature ids.

***

### type

#### Get Signature

> **get** **type**(): [`PlotType`](../type-aliases/PlotType.md)

Defined in: [plot.ts:68](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L68)

Gets the active plot type handled by this wrapper.

##### Returns

[`PlotType`](../type-aliases/PlotType.md)

Active plot type discriminator.

## Methods

### destroy()

> **destroy**(): `void`

Defined in: [plot.ts:169](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L169)

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

Defined in: [plot.ts:157](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L157)

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

### setHover()

> **setHover**(`selection`): `void`

Defined in: [plot.ts:134](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L134)

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

Defined in: [plot.ts:123](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L123)

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

Defined in: [plot.ts:146](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot.ts#L146)

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
