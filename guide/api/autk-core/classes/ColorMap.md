# Class: ColorMap

Defined in: [colormap.ts:77](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L77)

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

Defined in: [colormap.ts:420](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L420)

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

Defined in: [colormap.ts:230](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L230)

Computes the numeric minimum and maximum of a value array.

#### Parameters

##### values

`number`[] \| [`TypedArray`](../type-aliases/TypedArray.md)

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

> `static` **getCategoricalSchemeSize**(`scale`): `number` \| `null`

Defined in: [colormap.ts:277](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L277)

Returns the number of colors in a categorical color scheme.

#### Parameters

##### scale

`ColorScale`

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

Defined in: [colormap.ts:90](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L90)

Samples a color interpolator at a normalized value, returning RGBA.

#### Parameters

##### value

`number`

Normalized sample position in `[0, 1]`.

##### color

`ColorScale`

Interpolator identifier to sample.

##### domain?

`SamplingDomain`

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

Defined in: [colormap.ts:173](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L173)

Builds an array of sampled RGBA color objects from a color scheme.

#### Parameters

##### color

`ColorScale`

Interpolator identifier to sample.

##### res?

`number` = `DEFAULT_COLORMAP_RESOLUTION`

Number of samples to generate (default `256`).

##### domain?

`SamplingDomain`

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

### getColorFunction()

> `static` **getColorFunction**(`color`, `domain?`): (`value`) => [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [colormap.ts:111](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L111)

Builds the color function of one scheme and domain, for coloring many
values. Each call returns what `getColor(value, color, domain)` returns,
but the d3 scale is built once, not once per value, and each color
string the scale gives is parsed once: a scheme gives at most a few
thousand distinct colors.

#### Parameters

##### color

`ColorScale`

Interpolator identifier to sample.

##### domain?

`SamplingDomain`

Optional explicit domain used to parameterize the scale.

#### Returns

Function from a value to its color in RGBA object form.

(`value`) => [`ColorRGB`](../type-aliases/ColorRGB.md)

#### Throws

Never throws.

#### Example

```ts
const colorOf = ColorMap.getColorFunction(ColorMapInterpolator.SEQ_VIRIDIS);
colorOf(0.5); // → { r: 33, g: 145, b: 140, alpha: 1 }
```

***

### getColorMap()

> `static` **getColorMap**(`color`, `res?`, `domain?`): [`ColorTEX`](../type-aliases/ColorTEX.md)

Defined in: [colormap.ts:141](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L141)

Builds a flat RGBA texture array for GPU upload from a color scheme.

#### Parameters

##### color

`ColorScale`

Interpolator identifier to sample.

##### res?

`number` = `DEFAULT_COLORMAP_RESOLUTION`

Number of texels to generate (default `256`).

##### domain?

`SamplingDomain`

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

### getSamplingDomain()

> `static` **getSamplingDomain**(`scale`, `domain?`): `SamplingDomain` \| `undefined`

Defined in: [colormap.ts:283](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L283)

Normalizes the domain for sampling a texture or legend.

#### Parameters

##### scale

`ColorScale`

##### domain?

[`ResolvedDomain`](../type-aliases/ResolvedDomain.md)

#### Returns

`SamplingDomain` \| `undefined`

***

### hexToRgb()

> `static` **hexToRgb**(`color`): [`ColorRGB`](../type-aliases/ColorRGB.md)

Defined in: [colormap.ts:216](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L216)

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

> `static` **isCategorical**(`scale`): `boolean`

Defined in: [colormap.ts:252](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L252)

Returns `true` when an interpolator uses a discrete categorical scheme.

#### Parameters

##### scale

`ColorScale`

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

Defined in: [colormap.ts:457](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L457)

Resolves a color domain from data and configuration.

The method infers categorical handling when the selected interpolator is
categorical, when a USER domain contains string values, or when the input
array contains non-numeric strings. Numeric-looking strings in normal
arrays are still treated as numeric values. Unsupported domain shapes are
not coerced beyond this inference.

#### Parameters

##### values

`number`[] \| [`TypedArray`](../type-aliases/TypedArray.md) \| `string`[]

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

Defined in: [colormap.ts:202](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L202)

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

***

### validatePalette()

> `static` **validatePalette**(`palette`): `void`

Defined in: [colormap.ts:294](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/colormap.ts#L294)

Rejects malformed custom palettes before using them to style a layer.

#### Parameters

##### palette

[`CustomColorPalette`](../type-aliases/CustomColorPalette.md)

#### Returns

`void`
