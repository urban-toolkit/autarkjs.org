[**autk-plot**](../globals.md)

***

[autk-plot](../globals.md) / AutkPlot

# Abstract Class: AutkPlot

Defined in: [main.ts:6](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L6)

## Constructors

### Constructor

> **new AutkPlot**(`config`): `AutkPlot`

Defined in: [main.ts:26](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L26)

#### Parameters

##### config

`PlotConfig`

#### Returns

`AutkPlot`

## Properties

### \_attributes

> `protected` **\_attributes**: `string`[]

Defined in: [main.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L13)

***

### \_axis

> `protected` **\_axis**: `string`[]

Defined in: [main.ts:12](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L12)

***

### \_data

> `protected` **\_data**: `GeoJsonProperties`[]

Defined in: [main.ts:10](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L10)

***

### \_div

> `protected` **\_div**: `HTMLElement`

Defined in: [main.ts:8](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L8)

***

### \_height

> `protected` **\_height**: `number` = `500`

Defined in: [main.ts:17](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L17)

***

### \_margins

> `protected` **\_margins**: `PlotMargins`

Defined in: [main.ts:19](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L19)

***

### \_plotEvents

> `protected` **\_plotEvents**: `PlotEvents`

Defined in: [main.ts:23](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L23)

***

### \_selection

> `protected` **\_selection**: `number`[] = `[]`

Defined in: [main.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L21)

***

### \_title

> `protected` **\_title**: `string`

Defined in: [main.ts:14](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L14)

***

### \_width

> `protected` **\_width**: `number` = `800`

Defined in: [main.ts:16](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L16)

## Accessors

### data

#### Get Signature

> **get** **data**(): `GeoJsonProperties`[]

Defined in: [main.ts:43](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L43)

##### Returns

`GeoJsonProperties`[]

#### Set Signature

> **set** **data**(`data`): `void`

Defined in: [main.ts:47](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L47)

##### Parameters

###### data

`GeoJsonProperties`[]

##### Returns

`void`

***

### plotEvents

#### Get Signature

> **get** **plotEvents**(): `PlotEvents`

Defined in: [main.ts:60](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L60)

##### Returns

`PlotEvents`

***

### selection

#### Get Signature

> **get** **selection**(): `number`[]

Defined in: [main.ts:52](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L52)

##### Returns

`number`[]

#### Set Signature

> **set** **selection**(`selection`): `void`

Defined in: [main.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L56)

##### Parameters

###### selection

`number`[]

##### Returns

`void`

## Methods

### draw()

> `abstract` **draw**(): `void`

Defined in: [main.ts:70](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L70)

#### Returns

`void`

***

### setHighlightedIds()

> **setHighlightedIds**(`selection`): `void`

Defined in: [main.ts:64](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L64)

#### Parameters

##### selection

`number`[]

#### Returns

`void`

***

### updatePlotSelection()

> `abstract` **updatePlotSelection**(): `void`

Defined in: [main.ts:72](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-plot/src/main.ts#L72)

#### Returns

`void`
