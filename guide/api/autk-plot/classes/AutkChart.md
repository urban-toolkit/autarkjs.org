[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / AutkChart

# Class: AutkChart

Defined in: [autk-plot/src/chart.ts:41](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L41)

Unified public entrypoint for autk-plot chart creation and interaction.

`AutkChart` wraps chart-specific implementations (`scatterplot`, `barchart`,
`parallel-coordinates`, `table`, `linechart`, `heatmatrix`) behind a single constructor
and a stable API for selection and event handling.

The wrapper delegates all behavior to the concrete chart instance selected by
`config.type` while exposing a chart-agnostic interface to consumers.

## Example

```ts
const plot = new AutkChart(plotDiv, {
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

> **new AutkChart**(`div`, `config`): `AutkChart`

Defined in: [autk-plot/src/chart.ts:56](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L56)

Creates a chart wrapper for the requested chart type.

#### Parameters

##### div

`HTMLElement`

Host HTML element where the chart should render.

##### config

[`UnifiedChartConfig`](../type-aliases/UnifiedChartConfig.md)

Discriminated chart configuration with a `type` field.

#### Returns

`AutkChart`

#### Throws

If `config.type` is not supported.

#### Example

```ts
const plot = new AutkChart(plotDiv, { type: 'scatterplot', collection, attributes: { axis: ['x', 'y'] } });
```

## Accessors

### events

#### Get Signature

> **get** **events**(): [`EventEmitter`](EventEmitter.md)\<[`ChartEventRecord`](../type-aliases/ChartEventRecord.md)\>

Defined in: [autk-plot/src/chart.ts:93](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L93)

Gets the chart event dispatcher.

##### Returns

[`EventEmitter`](EventEmitter.md)\<[`ChartEventRecord`](../type-aliases/ChartEventRecord.md)\>

Typed event dispatcher exposed by the concrete chart.

***

### instance

#### Get Signature

> **get** **instance**(): [`ChartBaseInteractive`](ChartBaseInteractive.md)

Defined in: [autk-plot/src/chart.ts:77](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L77)

Gets the underlying concrete chart instance.

This is mainly useful for advanced scenarios that require direct access
to implementation-specific behavior.

##### Returns

[`ChartBaseInteractive`](ChartBaseInteractive.md)

Internal chart implementation instance.

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [autk-plot/src/chart.ts:85](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L85)

Gets the active selection as source feature ids.

##### Returns

`number`[]

Selected source feature ids.

***

### type

#### Get Signature

> **get** **type**(): [`ChartType`](../type-aliases/ChartType.md)

Defined in: [autk-plot/src/chart.ts:65](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L65)

Gets the active chart type handled by this wrapper.

##### Returns

[`ChartType`](../type-aliases/ChartType.md)

Active chart type discriminator.

## Methods

### draw()

> **draw**(): `void`

Defined in: [autk-plot/src/chart.ts:128](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L128)

Triggers a synchronous redraw of the underlying chart implementation.

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

Defined in: [autk-plot/src/chart.ts:105](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L105)

Applies a new selection to the chart as source feature ids.

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

Defined in: [autk-plot/src/chart.ts:117](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart.ts#L117)

Replaces the chart's data collection and redraws in place.

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
