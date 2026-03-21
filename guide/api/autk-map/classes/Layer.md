[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / Layer

# Abstract Class: Layer

Defined in: [layer.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L13)

Base class for map layers.
This class provides the basic structure and functionality for all map layers.

It includes methods for loading data, geometry, components, and thematic data,
as well as rendering and picking operations.

## Extended by

- [`RasterLayer`](RasterLayer.md)
- [`VectorLayer`](VectorLayer.md)

## Constructors

### Constructor

> **new Layer**(`layerInfo`, `layerRenderInfo`): `Layer`

Defined in: [layer.ts:45](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L45)

Constructor for Layer

#### Parameters

##### layerInfo

[`ILayerInfo`](../interfaces/ILayerInfo.md)

The layer information.

##### layerRenderInfo

[`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The layer render information.

#### Returns

`Layer`

## Properties

### \_dataIsDirty

> `protected` **\_dataIsDirty**: `boolean` = `false`

Defined in: [layer.ts:38](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L38)

Indicates if the layer's data is dirty.
This is used to determine if VOBs need to be reconstructed.

***

### \_layerInfo

> `protected` **\_layerInfo**: [`ILayerInfo`](../interfaces/ILayerInfo.md)

Defined in: [layer.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L18)

Layer information.

***

### \_layerRenderInfo

> `protected` **\_layerRenderInfo**: [`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

Defined in: [layer.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L24)

Layer rendering information.

***

### \_renderInfoIsDirty

> `protected` **\_renderInfoIsDirty**: `boolean` = `false`

Defined in: [layer.ts:31](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L31)

Indicates if the layer's rendering information is dirty.
This is used to determine if uniforms need to be reloaded.

## Accessors

### layerInfo

#### Get Signature

> **get** **layerInfo**(): [`ILayerInfo`](../interfaces/ILayerInfo.md)

Defined in: [layer.ts:54](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L54)

Gets the information of the layer.

##### Returns

[`ILayerInfo`](../interfaces/ILayerInfo.md)

The information of the layer.

#### Set Signature

> **set** **layerInfo**(`layerInfo`): `void`

Defined in: [layer.ts:62](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L62)

Sets the information of the layer.

##### Parameters

###### layerInfo

[`ILayerInfo`](../interfaces/ILayerInfo.md)

The info to set for the layer.

##### Returns

`void`

***

### layerRenderInfo

#### Get Signature

> **get** **layerRenderInfo**(): [`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

Defined in: [layer.ts:70](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L70)

Gets the rendering information of the layer.

##### Returns

[`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The rendering information of the layer.

#### Set Signature

> **set** **layerRenderInfo**(`layerRenderInfo`): `void`

Defined in: [layer.ts:78](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L78)

Sets the rendering information of the layer.

##### Parameters

###### layerRenderInfo

[`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The rendering info to set for the layer.

##### Returns

`void`

## Methods

### makeLayerDataDirty()

> **makeLayerDataDirty**(): `void`

Defined in: [layer.ts:85](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L85)

Marks the layer's data as dirty, indicating that VOBs need to be reconstructed.

#### Returns

`void`

***

### makeLayerRenderInfoDirty()

> **makeLayerRenderInfoDirty**(): `void`

Defined in: [layer.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L92)

Marks the layer's rendering information as dirty, indicating uniforms need to be reloaded.

#### Returns

`void`
