[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ChartStyle

# Class: ChartStyle

Defined in: [autk-plot/src/chart-style.ts:12](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L12)

Global style helpers shared by all chart implementations.

`ChartStyle` centralizes the base and highlighted colors applied to marks
during selection updates.

Values are static and process-wide for the package runtime. Updating them
affects all charts that read style values after the update.

## Constructors

### Constructor

> **new ChartStyle**(): `ChartStyle`

#### Returns

`ChartStyle`

## Properties

### \_default

> `protected` `static` **\_default**: `` `#${string}` `` = `'#bfbfbf'`

Defined in: [autk-plot/src/chart-style.ts:14](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L14)

Default fill/stroke color used for non-selected marks.

***

### \_highlight

> `protected` `static` **\_highlight**: `` `#${string}` `` = `'#5dade2'`

Defined in: [autk-plot/src/chart-style.ts:16](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L16)

Highlight color used for selected marks.

## Accessors

### default

#### Get Signature

> **get** `static` **default**(): `` `#${string}` ``

Defined in: [autk-plot/src/chart-style.ts:22](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L22)

Gets the default mark color.

##### Returns

`` `#${string}` ``

Hex color used for non-selected marks.

***

### highlight

#### Get Signature

> **get** `static` **highlight**(): `` `#${string}` ``

Defined in: [autk-plot/src/chart-style.ts:30](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L30)

Gets the highlight mark color.

##### Returns

`` `#${string}` ``

Hex color used for selected marks.

## Methods

### setDefaultColor()

> `static` **setDefaultColor**(`color`): `void`

Defined in: [autk-plot/src/chart-style.ts:54](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L54)

Updates the global default color used for non-selected marks.

#### Parameters

##### color

`` `#${string}` ``

Hex color string to apply as the default mark color.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
ChartStyle.setDefaultColor('#cccccc');
```

***

### setHighlightColor()

> `static` **setHighlightColor**(`color`): `void`

Defined in: [autk-plot/src/chart-style.ts:42](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/chart-style.ts#L42)

Updates the global highlight color used by selection styling.

#### Parameters

##### color

`` `#${string}` ``

Hex color string to apply as the highlight color.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
ChartStyle.setHighlightColor('#ff6600');
```
