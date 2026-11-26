# Class: PlotStyle

Defined in: [plot-style.ts:14](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L14)

Global style helpers shared by every plot.

`PlotStyle` centralizes the base and highlighted colors applied to marks
during selection updates.

Values are static and process-wide for the package runtime. Updating them
affects all plots that read style values after the update.

## Constructors

### Constructor

> **new PlotStyle**(): `PlotStyle`

#### Returns

`PlotStyle`

## Properties

### \_default

> `protected` `static` **\_default**: `` `#${string}` `` = `'#bfbfbf'`

Defined in: [plot-style.ts:18](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L18)

Default fill/stroke color used for non-selected marks.

***

### \_highlight

> `protected` `static` **\_highlight**: `` `#${string}` `` = `'#5dade2'`

Defined in: [plot-style.ts:20](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L20)

Highlight color used for selected marks.

***

### \_provenance

> `protected` `static` **\_provenance**: `` `#${string}` `` = `PlotStyle._highlight`

Defined in: [plot-style.ts:22](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L22)

Highlight color used by provenance marks; defaults to the map selection color.

***

### \_provenanceStroke

> `protected` `static` **\_provenanceStroke**: `` `#${string}` `` = `'#4887b0'`

Defined in: [plot-style.ts:24](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L24)

Darker shade of the provenance color, used for outlines of provenance marks.

***

### \_provenanceText

> `protected` `static` **\_provenanceText**: `` `#${string}` `` = `'#203b4e'`

Defined in: [plot-style.ts:26](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L26)

Text color drawn over the provenance highlight color.

***

### hover

> `readonly` `static` **hover**: `` `#${string}` `` = `'#f4a261'`

Defined in: [plot-style.ts:16](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L16)

Default hover color, matching the map.

## Accessors

### default

#### Get Signature

> **get** `static` **default**(): `` `#${string}` ``

Defined in: [plot-style.ts:32](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L32)

Gets the default mark color.

##### Returns

`` `#${string}` ``

Hex color used for non-selected marks.

***

### grid

#### Get Signature

> **get** `static` **grid**(): `` `#${string}` ``

Defined in: [plot-style.ts:165](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L165)

Gets the color of grid lines (axis ticks drawn across the plot).

##### Returns

`` `#${string}` ``

Hex color of grid lines.

***

### highlight

#### Get Signature

> **get** `static` **highlight**(): `` `#${string}` ``

Defined in: [plot-style.ts:40](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L40)

Gets the highlight mark color.

##### Returns

`` `#${string}` ``

Hex color used for selected marks.

***

### provenance

#### Get Signature

> **get** `static` **provenance**(): `` `#${string}` ``

Defined in: [plot-style.ts:52](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L52)

Gets the highlight color of plots with the segregated provenance view.

It replaces `highlight` for both partial and whole-mark highlights;
`setHighlightColor` sets both.

##### Returns

`` `#${string}` ``

Hex color used for selected marks and mark parts.

***

### provenanceStroke

#### Get Signature

> **get** `static` **provenanceStroke**(): `` `#${string}` ``

Defined in: [plot-style.ts:60](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L60)

Gets the darker shade of the provenance color used for outlines.

##### Returns

`` `#${string}` ``

Hex color for outlines of provenance marks.

***

### provenanceText

#### Get Signature

> **get** `static` **provenanceText**(): `` `#${string}` ``

Defined in: [plot-style.ts:68](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L68)

Gets the text color drawn over the provenance highlight color.

##### Returns

`` `#${string}` ``

Hex color with readable contrast on `provenance`.

## Methods

### setDefaultColor()

> `static` **setDefaultColor**(`color`): `void`

Defined in: [plot-style.ts:115](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L115)

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
PlotStyle.setDefaultColor('#cccccc');
```

***

### setHighlightColor()

> `static` **setHighlightColor**(`color`): `void`

Defined in: [plot-style.ts:102](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L102)

Updates the global highlight color used by selection styling.

Selected marks and their parts are drawn in the provenance color, so it
is updated too: an application that sets its highlight color keeps it.

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
PlotStyle.setHighlightColor('#ff6600');
```

***

### setProvenanceColor()

> `static` **setProvenanceColor**(`color`): `void`

Defined in: [plot-style.ts:80](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L80)

Updates the highlight color of plots with the segregated provenance view.

#### Parameters

##### color

`` `#${string}` ``

Hex color string to apply as the provenance highlight color.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
PlotStyle.setProvenanceColor('#63d8c0');
```

***

### shade()

> `static` **shade**(`index`, `count`): `string`

Defined in: [plot-style.ts:146](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L146)

Gray shade of the `index`-th of `count` categories, from light to medium.

Plots that must tell categories apart (stacked bars, radar polygons)
use grays, so the provenance color drawn over them keeps contrast.

#### Parameters

##### index

`number`

Category position.

##### count

`number`

Number of categories.

#### Returns

`string`

CSS color string.

***

### shades()

> `static` **shades**(`keys`): (`key`) => `string`

Defined in: [plot-style.ts:157](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L157)

Gray shades of a list of categories, in list order (see `shade`).

#### Parameters

##### keys

`string`[]

Categories, in the order of their shades.

#### Returns

The shade of each category; an unknown one takes the first shade.

(`key`) => `string`

***

### softSequentialDomain()

> `static` **softSequentialDomain**(`domain`): \[`number`, `number`\]

Defined in: [plot-style.ts:131](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/plot-style.ts#L131)

Widens a data-driven numeric color domain so a white-to-black sequential
scheme stays between light and medium tones.

Used by aggregated plots colored by value (hexbin, calendar) with the
gray scheme: the smallest value is not white, so it shows on a white
background, and the largest is not black, so the provenance color drawn
over it keeps contrast.

#### Parameters

##### domain

\[`number`, `number`\]

Observed `[min, max]` of the values.

#### Returns

\[`number`, `number`\]

Domain whose `min` falls at about 16% and `max` at about 70% of the scheme.
