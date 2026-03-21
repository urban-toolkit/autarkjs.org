[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / ILayerRenderInfo

# Interface: ILayerRenderInfo

Defined in: [interfaces.ts:54](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L54)

Interface for layer render information.

## Properties

### colorMapInterpolator

> **colorMapInterpolator**: [`ColorMapInterpolator`](../enumerations/ColorMapInterpolator.md)

Defined in: [interfaces.ts:57](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L57)

Interpolator for color mapping.

***

### colorMapLabels

> **colorMapLabels**: `string`[]

Defined in: [interfaces.ts:58](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L58)

***

### isColorMap?

> `optional` **isColorMap?**: `boolean`

Defined in: [interfaces.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L56)

Indicates if the layer is a color map.

***

### isPick?

> `optional` **isPick?**: `boolean`

Defined in: [interfaces.ts:61](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L61)

Indicates if the layer is for picking

***

### isSkip?

> `optional` **isSkip?**: `boolean`

Defined in: [interfaces.ts:60](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L60)

Indicates if the layer should be skipped in rendering.

***

### opacity

> **opacity**: `number`

Defined in: [interfaces.ts:55](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L55)

Opacity of the layer.

***

### pickedComps?

> `optional` **pickedComps?**: `number`[]

Defined in: [interfaces.ts:59](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/interfaces.ts#L59)

Components that are picked, if any.
