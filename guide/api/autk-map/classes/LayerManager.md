[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / LayerManager

# Class: LayerManager

Defined in: [layer-manager.ts:23](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L23)

Manages the layers of the map.

This class provides methods to add, remove, and search for layers,
as well as to manage the bounding box of the map.

## Constructors

### Constructor

> **new LayerManager**(): `LayerManager`

Defined in: [layer-manager.ts:51](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L51)

Constructor for LayerManager

#### Returns

`LayerManager`

## Properties

### \_bbox

> `protected` **\_bbox**: `BBox`

Defined in: [layer-manager.ts:40](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L40)

Bounding box of the map.

***

### \_origin

> `protected` **\_origin**: `number`[]

Defined in: [layer-manager.ts:46](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L46)

Origin of the map.

***

### \_rasterLayers

> `protected` **\_rasterLayers**: [`RasterLayer`](RasterLayer.md)[] = `[]`

Defined in: [layer-manager.ts:34](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L34)

List of raster layers in the map.

***

### \_vectorLayers

> `protected` **\_vectorLayers**: [`VectorLayer`](VectorLayer.md)[] = `[]`

Defined in: [layer-manager.ts:28](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L28)

List of vector layers in the map.

## Accessors

### bboxAndOrigin

#### Get Signature

> **get** **bboxAndOrigin**(): `BBox`

Defined in: [layer-manager.ts:84](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L84)

Get the bounding box of the map.

##### Returns

`BBox`

- The bounding box as a GeoJSON polygon.

#### Set Signature

> **set** **bboxAndOrigin**(`bbox`): `void`

Defined in: [layer-manager.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L92)

Set the origin and the bounding box of the map.

##### Parameters

###### bbox

`BBox`

The bounding box to set.

##### Returns

`void`

***

### origin

#### Get Signature

> **get** **origin**(): `number`[]

Defined in: [layer-manager.ts:76](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L76)

Get the origin of the map.

##### Returns

`number`[]

- The origin coordinates in meters.

***

### rasterLayers

#### Get Signature

> **get** **rasterLayers**(): [`RasterLayer`](RasterLayer.md)[]

Defined in: [layer-manager.ts:68](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L68)

Get the raster layers of the map.

##### Returns

[`RasterLayer`](RasterLayer.md)[]

- The list of layers.

***

### vectorLayers

#### Get Signature

> **get** **vectorLayers**(): [`VectorLayer`](VectorLayer.md)[]

Defined in: [layer-manager.ts:60](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L60)

Get the vetor layers of the map.

##### Returns

[`VectorLayer`](VectorLayer.md)[]

- The list of layers.

## Methods

### addRasterLayer()

> **addRasterLayer**(`layerInfo`, `layerRender`, `layerData`): [`RasterLayer`](RasterLayer.md) \| `null`

Defined in: [layer-manager.ts:135](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L135)

Adds a raster layer to the map.

#### Parameters

##### layerInfo

[`ILayerInfo`](../interfaces/ILayerInfo.md)

The information about the layer.

##### layerRender

[`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The rendering information for the layer.

##### layerData

[`ILayerData`](../interfaces/ILayerData.md)

The data associated with the layer.

#### Returns

[`RasterLayer`](RasterLayer.md) \| `null`

- The created layer or null if the type is unknown.

***

### addVectorLayer()

> **addVectorLayer**(`layerInfo`, `layerRender`, `layerData`): [`VectorLayer`](VectorLayer.md) \| `null`

Defined in: [layer-manager.ts:107](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L107)

Adds a layer to the map.

#### Parameters

##### layerInfo

[`ILayerInfo`](../interfaces/ILayerInfo.md)

The information about the layer.

##### layerRender

[`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The rendering information for the layer.

##### layerData

[`ILayerData`](../interfaces/ILayerData.md)

The data associated with the layer.

#### Returns

[`VectorLayer`](VectorLayer.md) \| `null`

- The created layer or null if the type is unknown.

***

### computeZindex()

> **computeZindex**(`layerType`): `number`

Defined in: [layer-manager.ts:217](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L217)

Computes the Z-index for a given layer type.

#### Parameters

##### layerType

[`LayerType`](../enumerations/LayerType.md)

The type of the layer.

#### Returns

`number`

- The computed Z-index.

***

### delLayer()

> **delLayer**(`layerId`): `void`

Defined in: [layer-manager.ts:157](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L157)

Removes a layer from the map.

#### Parameters

##### layerId

`string`

The ID of the layer to remove.

#### Returns

`void`

***

### removeLayerById()

> **removeLayerById**(`layerId`): `void`

Defined in: [layer-manager.ts:181](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L181)

Removes a layer by its ID.

#### Parameters

##### layerId

`string`

The ID of the layer to remove.

#### Returns

`void`

***

### searchByLayerId()

> **searchByLayerId**(`layerId`): [`VectorLayer`](VectorLayer.md) \| [`RasterLayer`](RasterLayer.md) \| `null`

Defined in: [layer-manager.ts:191](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-manager.ts#L191)

Searches for a layer by its ID.

#### Parameters

##### layerId

`string`

The ID of the layer to search for.

#### Returns

[`VectorLayer`](VectorLayer.md) \| [`RasterLayer`](RasterLayer.md) \| `null`

- The found layer or null if not found.
