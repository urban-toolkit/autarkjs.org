[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / ChartConfig

# Type Alias: ChartConfig

> **ChartConfig** = `object`

Defined in: [autk-plot/src/api.ts:39](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L39)

Base configuration accepted by all chart implementations.

## Properties

### attributes?

> `optional` **attributes?**: `object`

Defined in: [autk-plot/src/api.ts:62](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L62)

Feature property names to map to visual channels.

#### axis?

> `optional` **axis?**: `string`[]

Property names mapped to axes.

#### color?

> `optional` **color?**: `string`

Property name mapped to the color channel.

***

### categoricalColorMapInterpolator?

> `optional` **categoricalColorMapInterpolator?**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Defined in: [autk-plot/src/api.ts:77](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L77)

Color interpolator used when the color attribute contains categorical (string) values. Defaults to `OBSERVABLE10`.

***

### collection

> **collection**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

Defined in: [autk-plot/src/api.ts:43](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L43)

GeoJSON feature collection used as the chart data source.

***

### colorMapInterpolator?

> `optional` **colorMapInterpolator?**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Defined in: [autk-plot/src/api.ts:75](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L75)

Color interpolator used for continuous (numeric) color encoding.

***

### div

> **div**: `HTMLElement`

Defined in: [autk-plot/src/api.ts:41](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L41)

Host HTML element where the chart renders.

***

### domainSpec?

> `optional` **domainSpec?**: [`ColorMapDomainSpec`](ColorMapDomainSpec.md)

Defined in: [autk-plot/src/api.ts:73](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L73)

Domain specification controlling how the colormap range is derived.

***

### events?

> `optional` **events?**: [`ChartEvent`](../enumerations/ChartEvent.md)[]

Defined in: [autk-plot/src/api.ts:45](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L45)

Interaction events the chart should emit (click, brush, etc).

***

### height?

> `optional` **height?**: `number`

Defined in: [autk-plot/src/api.ts:51](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L51)

Chart height in pixels. Defaults to `500`.

***

### labels?

> `optional` **labels?**: `object`

Defined in: [autk-plot/src/api.ts:53](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L53)

Display labels for axes, title, and color legend.

#### axis?

> `optional` **axis?**: `string`[]

Labels for each axis.

#### color?

> `optional` **color?**: `string`

Color legend label.

#### title?

> `optional` **title?**: `string`

Chart title.

***

### margins?

> `optional` **margins?**: [`ChartMargins`](ChartMargins.md)

Defined in: [autk-plot/src/api.ts:47](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L47)

Pixel margins around the plot drawing area.

***

### tickFormats?

> `optional` **tickFormats?**: `string`[]

Defined in: [autk-plot/src/api.ts:71](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L71)

D3 format strings for each axis tick.

***

### transform?

> `optional` **transform?**: [`ChartTransformConfig`](ChartTransformConfig.md)

Defined in: [autk-plot/src/api.ts:69](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L69)

Optional data transform applied before rendering.

***

### width?

> `optional` **width?**: `number`

Defined in: [autk-plot/src/api.ts:49](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-plot/src/api.ts#L49)

Chart width in pixels. Defaults to `800`.
