[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / ILayerData

# Interface: ILayerData

Defined in: [interfaces.ts:74](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L74)

Interface for layer border information.

## Properties

### border?

> `optional` **border?**: [`ILayerBorder`](ILayerBorder.md)[]

Defined in: [interfaces.ts:77](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L77)

Array of borders for the layer.

***

### borderComponents?

> `optional` **borderComponents?**: [`ILayerBorderComponent`](ILayerBorderComponent.md)[]

Defined in: [interfaces.ts:78](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L78)

Array of border components for the layer.

***

### components

> **components**: [`ILayerComponent`](ILayerComponent.md)[]

Defined in: [interfaces.ts:76](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L76)

Array of components for the layer.

***

### geometry

> **geometry**: [`ILayerGeometry`](ILayerGeometry.md)[]

Defined in: [interfaces.ts:75](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L75)

Array of geometries for the layer.

***

### highlighted?

> `optional` **highlighted?**: `number`[]

Defined in: [interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L81)

Indices of highlighted components in the layer.

***

### raster?

> `optional` **raster?**: [`IRasterData`](IRasterData.md)[]

Defined in: [interfaces.ts:79](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L79)

Raster data for the layer.

***

### thematic?

> `optional` **thematic?**: [`ILayerThematic`](ILayerThematic.md)[]

Defined in: [interfaces.ts:80](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L80)

Thematic data for the layer.
