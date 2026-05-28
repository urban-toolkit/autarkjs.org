[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / AutkPlot

# Class: AutkPlot

Defined in: [autk-plot/src/plot.ts:41](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L41)

Unified public entrypoint for autk-plot plot creation and interaction.

`AutkPlot` wraps plot-specific implementations (`scatterplot`, `barchart`,
`parallel-coordinates`, `table`, `linechart`, `heatmatrix`) behind a single constructor
and a stable API for selection and event handling.

The wrapper delegates all behavior to the concrete plot instance selected by
`config.type` while exposing a plot-agnostic interface to consumers.

## Example

```ts
const plot = new AutkPlot(plotDiv, {
  type: 'scatterplot',
  collection,
  attributes: { axis: ['x', 'y'] },
  labels: { axis: ['x', 'y'], title: 'Example' }
});

plot.events.on('click', ({ selection }) => {
  console.log(selection);
});
```

## Constructors

### Constructor

> **new AutkPlot**(`div`, `config`): `AutkPlot`

Defined in: [autk-plot/src/plot.ts:56](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L56)

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

> **get** **events**(): [`EventEmitter`](EventEmitter.md)\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Defined in: [autk-plot/src/plot.ts:93](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L93)

Gets the plot event dispatcher.

##### Returns

[`EventEmitter`](EventEmitter.md)\<[`PlotEventRecord`](../type-aliases/PlotEventRecord.md)\>

Typed event dispatcher exposed by the concrete plot.

***

### instance

#### Get Signature

> **get** **instance**(): [`PlotBaseInteractive`](PlotBaseInteractive.md)

Defined in: [autk-plot/src/plot.ts:77](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L77)

Gets the underlying concrete plot instance.

This is mainly useful for advanced scenarios that require direct access
to implementation-specific behavior.

##### Returns

[`PlotBaseInteractive`](PlotBaseInteractive.md)

Internal plot implementation instance.

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [autk-plot/src/plot.ts:85](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L85)

Gets the active selection as source feature ids.

##### Returns

`number`[]

Selected source feature ids.

***

### type

#### Get Signature

> **get** **type**(): [`PlotType`](../type-aliases/PlotType.md)

Defined in: [autk-plot/src/plot.ts:65](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L65)

Gets the active plot type handled by this wrapper.

##### Returns

[`PlotType`](../type-aliases/PlotType.md)

Active plot type discriminator.

## Methods

### draw()

> **draw**(): `void`

Defined in: [autk-plot/src/plot.ts:128](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L128)

Triggers a synchronous redraw of the underlying plot implementation.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
plot.draw();
```

***

### setSelection()

> **setSelection**(`selection`): `void`

Defined in: [autk-plot/src/plot.ts:105](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L105)

Applies a new selection to the plot as source feature ids.

#### Parameters

##### selection

`number`[]

Source feature ids to highlight/select.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
plot.setSelection([0, 3, 7]);
```

***

### updateCollection()

> **updateCollection**(`collection`): `void`

Defined in: [autk-plot/src/plot.ts:117](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/plot.ts#L117)

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
