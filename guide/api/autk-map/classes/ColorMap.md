[**autk-map**](../index.md)

***

[autk-map](../globals.md) / ColorMap

# Class: ColorMap

Defined in: [autk-core/src/colormap.ts:74](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L74)

Color utility for resolving domains, sampling color scales, and building
legend and texture representations.

`ColorMap` decides whether a scheme should be treated as categorical,
sequential, or diverging; derives a compatible domain from data and
configuration; and exposes helpers for sampling colors or generating flat
RGBA textures for GPU upload.

## Constructors

### Constructor

> **new ColorMap**(): `ColorMap`

#### Returns

`ColorMap`

## Methods

### computeLabels()

> `static` **computeLabels**(`domain`): `string`[]

Defined in: [autk-core/src/colormap.ts:349](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L349)

Derives human-readable legend labels from a domain.

Categorical domains are returned as-is. Numeric domains are formatted
with a magnitude-aware d3 formatter so legend labels remain compact for
large values and readable for small decimals.

#### Parameters

##### domain

[`ResolvedDomain`](../type-aliases/ResolvedDomain.md)

Any supported color-scale domain.

#### Returns

`string`[]

Ordered label strings suitable for a legend.

#### Throws

Never throws.

#### Example

```ts
ColorMap.computeLabels([0, 500000, 1000000]); // ['0', '500,000', '1M']
ColorMap.computeLabels(['low', 'mid', 'high']); // ['low', 'mid', 'high']
```

***

### computeMinMaxRange()

> `static` **computeMinMaxRange**(`values`): \[`number`, `number`\]

Defined in: [autk-core/src/colormap.ts:194](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L194)

Computes the numeric minimum and maximum of a value array.

#### Parameters

##### values

`number`[] \| `TypedArray`

Numeric values to inspect.

#### Returns

\[`number`, `number`\]

Two-element tuple `[min, max]`, or `[0, 0]` when the input is empty.

#### Throws

Never throws. Empty input returns `[0, 0]`.

#### Example

```ts
ColorMap.computeMinMaxRange([3, 7, 2, 9, 4]); // [2, 9]
```

***

### getCategoricalSchemeSize()

> `static` **getCategoricalSchemeSize**(`interpolator`): `number` \| `null`

Defined in: [autk-core/src/colormap.ts:241](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L241)

Returns the number of colors in a categorical color scheme.

#### Parameters

##### interpolator

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Interpolator identifier to inspect.

#### Returns

`number` \| `null`

Scheme size for categorical interpolators, or `null` otherwise.

#### Throws

Never throws.

#### Example

```ts
ColorMap.getCategoricalSchemeSize(ColorMapInterpolator.CAT_SET1);  // 9
ColorMap.getCategoricalSchemeSize(ColorMapInterpolator.SEQ_VIRIDIS);  // null
```

***

### getColor()

> `static` **getColor**(`value`, `color`, `domain?`): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [autk-core/src/colormap.ts:87](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L87)

Samples a color interpolator at a normalized value, returning RGBA.

#### Parameters

##### value

`number`

Normalized sample position in `[0, 1]`.

##### color

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Interpolator identifier to sample.

##### domain?

`SequentialDomain` \| `DivergingDomain` \| `CategoricalDomain`

Optional explicit domain used to parameterize the scale.

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)

Sampled color in RGBA object form.

#### Throws

Never throws.

#### Example

```ts
const c = ColorMap.getColor(0.5, ColorMapInterpolator.SEQ_VIRIDIS);
// c → { r: 33, g: 144, b: 141, alpha: 1 }
```

***

### getColorArray()

> `static` **getColorArray**(`color`, `res?`, `domain?`): [`ColorRGB`](../type-aliases/ColorRGB.md)[]

Defined in: [autk-core/src/colormap.ts:137](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L137)

Builds an array of sampled RGBA color objects from a color scheme.

#### Parameters

##### color

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Interpolator identifier to sample.

##### res?

`number` = `DEFAULT_COLORMAP_RESOLUTION`

Number of samples to generate (default `256`).

##### domain?

`SequentialDomain` \| `DivergingDomain` \| `CategoricalDomain`

Optional explicit domain used to parameterize the scale.

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)[]

Array of sampled RGBA color objects.

#### Throws

Never throws. Non-positive `res` returns an empty array.

#### Example

```ts
const colors = ColorMap.getColorArray(ColorMapInterpolator.CAT_SET1, 3);
// colors → [{ r: 228, g: 26, b: 28, alpha: 1 }, ...]
```

***

### getColorMap()

> `static` **getColorMap**(`color`, `res?`, `domain?`): [`ColorTEX`](../type-aliases/ColorTEX.md)

Defined in: [autk-core/src/colormap.ts:105](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L105)

Builds a flat RGBA texture array for GPU upload from a color scheme.

#### Parameters

##### color

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Interpolator identifier to sample.

##### res?

`number` = `DEFAULT_COLORMAP_RESOLUTION`

Number of texels to generate (default `256`).

##### domain?

`SequentialDomain` \| `DivergingDomain` \| `CategoricalDomain`

Optional explicit domain used to parameterize the scale.

#### Returns

[`ColorTEX`](../type-aliases/ColorTEX.md)

Flat RGBA texture values `[r, g, b, a, ...]`.

#### Throws

Never throws. Non-positive `res` returns an empty array.

#### Example

```ts
const tex = ColorMap.getColorMap(ColorMapInterpolator.SEQ_VIRIDIS, 4);
// tex → [68, 1, 84, 1, 59, 82, 139, 1, 33, 144, 141, 1, 253, 231, 37, 1]
```

***

### hexToRgb()

> `static` **hexToRgb**(`color`): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [autk-core/src/colormap.ts:180](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L180)

Converts a hex color string into an RGBA color object.

#### Parameters

##### color

`` `#${string}` ``

Hexadecimal color string to convert.

#### Returns

[`ColorRGB`](../type-aliases/ColorRGB.md)

RGBA color object with alpha fixed to `1`.

#### Throws

Never throws.

#### Example

```ts
ColorMap.hexToRgb('#ff8000'); // { r: 255, g: 128, b: 0, alpha: 1 }
```

***

### isCategorical()

> `static` **isCategorical**(`interpolator`): `boolean`

Defined in: [autk-core/src/colormap.ts:216](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L216)

Returns `true` when an interpolator uses a discrete categorical scheme.

#### Parameters

##### interpolator

[`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Interpolator identifier to classify.

#### Returns

`boolean`

`true` for categorical schemes, otherwise `false`.

#### Throws

Never throws.

#### Example

```ts
ColorMap.isCategorical(ColorMapInterpolator.CAT_SET1);  // true
ColorMap.isCategorical(ColorMapInterpolator.SEQ_VIRIDIS);  // false
```

***

### resolveDomainFromData()

> `static` **resolveDomainFromData**(`values`, `config`): [`ResolvedDomain`](../type-aliases/ResolvedDomain.md)

Defined in: [autk-core/src/colormap.ts:386](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L386)

Resolves a color domain from data and configuration.

The method infers categorical handling when the selected interpolator is
categorical, when a USER domain contains string values, or when the input
array contains non-numeric strings. Numeric-looking strings in normal
arrays are still treated as numeric values. Unsupported domain shapes are
not coerced beyond this inference.

#### Parameters

##### values

`number`[] \| `string`[] \| `TypedArray`

Source values used to derive the domain.

##### config

[`ColorMapConfig`](../type-aliases/ColorMapConfig.md)

Color-map configuration controlling the resolution mode.

#### Returns

[`ResolvedDomain`](../type-aliases/ResolvedDomain.md)

Resolved categorical or numeric domain.

#### Throws

When USER domain has invalid shape for the selected
interpolator (e.g. non-numeric values for a sequential interpolator).

#### Example

```ts
const domain = ColorMap.resolveDomainFromData(
  [10, 50, 30, 80, 20],
  { interpolator: ColorMapInterpolator.SEQ_VIRIDIS, domainSpec: { type: ColorMapDomainStrategy.MIN_MAX } }
);
// domain → [10, 80]
```

***

### rgbToHex()

> `static` **rgbToHex**(`color`): `` `#${string}` ``

Defined in: [autk-core/src/colormap.ts:166](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/colormap.ts#L166)

Converts an RGBA color object into a hex color string.

#### Parameters

##### color

[`ColorRGB`](../type-aliases/ColorRGB.md)

RGB color to convert.

#### Returns

`` `#${string}` ``

Hexadecimal color string.

#### Throws

Never throws.

#### Example

```ts
ColorMap.rgbToHex({ r: 255, g: 128, b: 0, alpha: 1 }); // '#ff8000'
```
