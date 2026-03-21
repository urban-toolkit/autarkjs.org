[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / RasterLayer

# Class: RasterLayer

Defined in: [layer-raster.ts:19](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L19)

Base class for map layers.
This class provides the basic structure and functionality for all map layers.

It includes methods for loading data, geometry, components, and thematic data,
as well as rendering and picking operations.

## Extends

- [`Layer`](Layer.md)

## Constructors

### Constructor

> **new RasterLayer**(`layerInfo`, `layerRenderInfo`, `layerData`): `RasterLayer`

Defined in: [layer-raster.ts:80](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L80)

Constructor for Raster

#### Parameters

##### layerInfo

[`ILayerInfo`](../interfaces/ILayerInfo.md)

The layer information.

##### layerRenderInfo

[`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

The layer render information.

##### layerData

[`ILayerData`](../interfaces/ILayerData.md)

The layer data.

#### Returns

`RasterLayer`

#### Overrides

[`Layer`](Layer.md).[`constructor`](Layer.md#constructor)

## Properties

### \_components

> `protected` **\_components**: [`ILayerComponent`](../interfaces/ILayerComponent.md)[] = `[]`

Defined in: [layer-raster.ts:42](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L42)

Components of the layer.

***

### \_dataIsDirty

> `protected` **\_dataIsDirty**: `boolean` = `false`

Defined in: [layer.ts:38](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L38)

Indicates if the layer's data is dirty.
This is used to determine if VOBs need to be reconstructed.

#### Inherited from

[`Layer`](Layer.md).[`_dataIsDirty`](Layer.md#_dataisdirty)

***

### \_indices

> `protected` **\_indices**: `number`[]

Defined in: [layer-raster.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L30)

Indices of the triangles.

***

### \_layerInfo

> `protected` **\_layerInfo**: [`ILayerInfo`](../interfaces/ILayerInfo.md)

Defined in: [layer.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L18)

Layer information.

#### Inherited from

[`Layer`](Layer.md).[`_layerInfo`](Layer.md#_layerinfo)

***

### \_layerRenderInfo

> `protected` **\_layerRenderInfo**: [`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

Defined in: [layer.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L24)

Layer rendering information.

#### Inherited from

[`Layer`](Layer.md).[`_layerRenderInfo`](Layer.md#_layerrenderinfo)

***

### \_pipeline

> `protected` **\_pipeline**: [`Pipeline`](Pipeline.md)

Defined in: [layer-raster.ts:70](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L70)

Pipeline for rendering borders.

***

### \_position

> `protected` **\_position**: `number`[]

Defined in: [layer-raster.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L24)

Positions of the triangles.

***

### \_rasterData

> `protected` **\_rasterData**: `number`[]

Defined in: [layer-raster.ts:62](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L62)

The raster data for the layer.

***

### \_rasterResX

> `protected` **\_rasterResX**: `number`

Defined in: [layer-raster.ts:50](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L50)

The raster resolution in X direction.

***

### \_rasterResY

> `protected` **\_rasterResY**: `number`

Defined in: [layer-raster.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L56)

The raster resolution in Y direction.

***

### \_renderInfoIsDirty

> `protected` **\_renderInfoIsDirty**: `boolean` = `false`

Defined in: [layer.ts:31](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L31)

Indicates if the layer's rendering information is dirty.
This is used to determine if uniforms need to be reloaded.

#### Inherited from

[`Layer`](Layer.md).[`_renderInfoIsDirty`](Layer.md#_renderinfoisdirty)

***

### \_texCoord

> `protected` **\_texCoord**: `number`[]

Defined in: [layer-raster.ts:36](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L36)

The texture coordinates for the layer.

## Accessors

### components

#### Get Signature

> **get** **components**(): [`ILayerComponent`](../interfaces/ILayerComponent.md)[]

Defined in: [layer-raster.ts:116](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L116)

Get the components of the layer.

##### Returns

[`ILayerComponent`](../interfaces/ILayerComponent.md)[]

- The components of the layer.

***

### indices

#### Get Signature

> **get** **indices**(): `number`[]

Defined in: [layer-raster.ts:100](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L100)

Get the indices of the triangles.

##### Returns

`number`[]

- The indices of the triangles.

***

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

#### Inherited from

[`Layer`](Layer.md).[`layerInfo`](Layer.md#layerinfo)

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

#### Inherited from

[`Layer`](Layer.md).[`layerRenderInfo`](Layer.md#layerrenderinfo)

***

### position

#### Get Signature

> **get** **position**(): `number`[]

Defined in: [layer-raster.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L92)

Get the positions of the triangles.

##### Returns

`number`[]

- The positions of the triangles.

***

### rasterData

#### Get Signature

> **get** **rasterData**(): `number`[]

Defined in: [layer-raster.ts:142](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L142)

Get the raster data.

##### Returns

`number`[]

- The raster data.

***

### rasterResX

#### Get Signature

> **get** **rasterResX**(): `number`

Defined in: [layer-raster.ts:126](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L126)

Get the raster resolution in X direction.

##### Returns

`number`

- The raster resolution in X direction.

***

### rasterResY

#### Get Signature

> **get** **rasterResY**(): `number`

Defined in: [layer-raster.ts:134](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L134)

Get the raster resolution in Y direction.

##### Returns

`number`

- The raster resolution in Y direction.

***

### texCoord

#### Get Signature

> **get** **texCoord**(): `number`[]

Defined in: [layer-raster.ts:108](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L108)

Get the texture coordinates.

##### Returns

`number`[]

- The texture coordinates.

## Methods

### createPipeline()

> **createPipeline**(`renderer`): `void`

Defined in: [layer-raster.ts:273](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L273)

Create the rendering pipeline for the layer.

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer instance.

#### Returns

`void`

***

### loadComponent()

> **loadComponent**(`layerComponents`): `void`

Defined in: [layer-raster.ts:202](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L202)

Load the components of the layer.

#### Parameters

##### layerComponents

[`ILayerComponent`](../interfaces/ILayerComponent.md)[]

The components to load.

#### Returns

`void`

***

### loadGeometry()

> **loadGeometry**(`layerGeometry`): `void`

Defined in: [layer-raster.ts:165](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L165)

Load the texture coordinates from the layer data.

#### Parameters

##### layerGeometry

[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[]

The layer data.

#### Returns

`void`

***

### loadLayerData()

> **loadLayerData**(`layerData`): `void`

Defined in: [layer-raster.ts:152](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L152)

Load the layer data.

#### Parameters

##### layerData

[`ILayerData`](../interfaces/ILayerData.md)

The layer data.

#### Returns

`void`

***

### loadRaster()

> **loadRaster**(`layerRaster`): `void`

Defined in: [layer-raster.ts:223](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L223)

Load the raster data from the layer data.

#### Parameters

##### layerRaster

[`IRasterData`](../interfaces/IRasterData.md)[]

The layer data.

#### Returns

`void`

***

### makeLayerDataDirty()

> **makeLayerDataDirty**(): `void`

Defined in: [layer.ts:85](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L85)

Marks the layer's data as dirty, indicating that VOBs need to be reconstructed.

#### Returns

`void`

#### Inherited from

[`Layer`](Layer.md).[`makeLayerDataDirty`](Layer.md#makelayerdatadirty)

***

### makeLayerRenderInfoDirty()

> **makeLayerRenderInfoDirty**(): `void`

Defined in: [layer.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L92)

Marks the layer's rendering information as dirty, indicating uniforms need to be reloaded.

#### Returns

`void`

#### Inherited from

[`Layer`](Layer.md).[`makeLayerRenderInfoDirty`](Layer.md#makelayerrenderinfodirty)

***

### renderPass()

> **renderPass**(`camera`): `void`

Defined in: [layer-raster.ts:282](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-raster.ts#L282)

Render the layer for the current pass.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance.

#### Returns

`void`
