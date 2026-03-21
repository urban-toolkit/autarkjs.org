[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / ColorMap

# Class: ColorMap

Defined in: [colormap.ts:15](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L15)

ColorMap class provides methods to handle color mapping and interpolation.
It allows retrieval of colors based on values and color map interpolators,
as well as conversion between RGB and HEX color formats.

## Example

```ts
const color = ColorMap.getColor(0.5, ColorMapInterpolator.SEQUENTIAL_REDS);
const colorMap = ColorMap.getColorMap(ColorMapInterpolator.SEQUENTIAL_REDS, 256);
```

## Constructors

### Constructor

> **new ColorMap**(): `ColorMap`

#### Returns

`ColorMap`

## Properties

### \_interpolator

> `protected` `static` **\_interpolator**: (`t`) => `string`

Defined in: [colormap.ts:20](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L20)

The color map interpolator function.
This is set when a color map is requested.

#### Parameters

##### t

`number`

#### Returns

`string`

## Methods

### getColor()

> `static` **getColor**(`value`, `color`): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [colormap.ts:31](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L31)

ColorMap class provides methods to handle color mapping and interpolation.

It allows retrieval of colors based on values and color map interpolators,
as well as conversion between RGB and HEX color formats.

#### Parameters

##### value

`number`

The value to get the color for

##### color

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

The color map interpolator to use

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)

The RGB color

***

### getColorArray()

> `static` **getColorArray**(`color`, `res?`): [`ColorRGB`](../type-aliases/ColorRGB.md)[]

Defined in: [colormap.ts:69](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L69)

Get color array used by interpolator

#### Parameters

##### color

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

The color map interpolator to use

##### res?

`number` = `256`

The resolution of the color map

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)[]

The array of colors

***

### getColorMap()

> `static` **getColorMap**(`color`, `res?`): [`ColorTEX`](../type-aliases/ColorTEX.md)

Defined in: [colormap.ts:51](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L51)

Get color map for a specific color map interpolator

#### Parameters

##### color

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

The color map interpolator to use

##### res?

`number` = `256`

The resolution of the color map

#### Returns

[`ColorTEX`](../type-aliases/ColorTEX.md)

The texture representation of the color map

***

### hexToRgb()

> `static` **hexToRgb**(`color`): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [colormap.ts:96](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L96)

Convert HEX color to RGB format

#### Parameters

##### color

`` `#${string}` ``

The HEX color to convert

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)

The RGB representation of the color

***

### rgbToHex()

> `static` **rgbToHex**(`color`): `` `#${string}` ``

Defined in: [colormap.ts:86](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/colormap.ts#L86)

Convert RGB color to HEX format

#### Parameters

##### color

[`ColorRGB`](../type-aliases/ColorRGB.md)

The RGB color to convert

#### Returns

`` `#${string}` ``

The HEX representation of the color
