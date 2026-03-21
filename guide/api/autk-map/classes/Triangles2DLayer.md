[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / Triangles2DLayer

# Class: Triangles2DLayer

Defined in: [layer-triangles2D.ts:13](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L13)

Triangles2DBorder class extends Triangles2DLayer to handle rendering of borders in 2D triangles layers.
It manages the border positions and indices, and creates a specific rendering pipeline for borders.

## Extends

- [`VectorLayer`](VectorLayer.md)

## Constructors

### Constructor

> **new Triangles2DLayer**(`layerInfo`, `layerRenderInfo`, `layerData`, `dimension?`): `Triangles2DLayer`

Defined in: [layer-triangles2D.ts:47](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L47)

Constructor for Triangles2DBorder

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

##### dimension?

`number` = `2`

The dimension of the layer (2 or 3).

#### Returns

`Triangles2DLayer`

#### Overrides

[`VectorLayer`](VectorLayer.md).[`constructor`](VectorLayer.md#constructor)

## Properties

### \_borderComponents

> `protected` **\_borderComponents**: [`ILayerBorderComponent`](../interfaces/ILayerBorderComponent.md)[] = `[]`

Defined in: [layer-triangles2D.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L30)

Components of the layer.

***

### \_borderIds

> `protected` **\_borderIds**: `number`[]

Defined in: [layer-triangles2D.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L24)

IDs of the borders.

***

### \_borderPos

> `protected` **\_borderPos**: `number`[]

Defined in: [layer-triangles2D.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L18)

Positions of the borders.

***

### \_components

> `protected` **\_components**: [`ILayerComponent`](../interfaces/ILayerComponent.md)[] = `[]`

Defined in: [layer-vector.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L56)

Components of the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_components`](VectorLayer.md#_components)

***

### \_dataIsDirty

> `protected` **\_dataIsDirty**: `boolean` = `false`

Defined in: [layer.ts:38](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L38)

Indicates if the layer's data is dirty.
This is used to determine if VOBs need to be reconstructed.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_dataIsDirty`](VectorLayer.md#_dataisdirty)

***

### \_dimension

> `protected` **\_dimension**: `number`

Defined in: [layer-vector.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L30)

Dimension of the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_dimension`](VectorLayer.md#_dimension)

***

### \_highlightedIds

> `protected` **\_highlightedIds**: `Set`\<`number`\>

Defined in: [layer-vector.ts:65](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L65)

Highlighted IDs of the layer.
This is a set to ensure uniqueness of highlighted IDs.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_highlightedIds`](VectorLayer.md#_highlightedids)

***

### \_highlightedVertices

> `protected` **\_highlightedVertices**: `number`[]

Defined in: [layer-vector.ts:71](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L71)

Highlighted vertices of the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_highlightedVertices`](VectorLayer.md#_highlightedvertices)

***

### \_indices

> `protected` **\_indices**: `number`[]

Defined in: [layer-vector.ts:50](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L50)

Indices of the triangles.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_indices`](VectorLayer.md#_indices)

***

### \_layerInfo

> `protected` **\_layerInfo**: [`ILayerInfo`](../interfaces/ILayerInfo.md)

Defined in: [layer.ts:18](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L18)

Layer information.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_layerInfo`](VectorLayer.md#_layerinfo)

***

### \_layerRenderInfo

> `protected` **\_layerRenderInfo**: [`ILayerRenderInfo`](../interfaces/ILayerRenderInfo.md)

Defined in: [layer.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L24)

Layer rendering information.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_layerRenderInfo`](VectorLayer.md#_layerrenderinfo)

***

### \_pipeline

> `protected` **\_pipeline**: [`Pipeline`](Pipeline.md)

Defined in: [layer-vector.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L92)

Rendering pipeline for the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_pipeline`](VectorLayer.md#_pipeline)

***

### \_pipelineBorder

> `protected` **\_pipelineBorder**: [`PipelineTriangleBorder`](PipelineTriangleBorder.md)

Defined in: [layer-triangles2D.ts:36](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L36)

Pipeline for rendering borders.

***

### \_pipelinePicking

> `protected` **\_pipelinePicking**: [`PipelineTrianglePicking`](PipelineTrianglePicking.md)

Defined in: [layer-vector.ts:98](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L98)

Pipeline for picking triangles.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_pipelinePicking`](VectorLayer.md#_pipelinepicking)

***

### \_position

> `protected` **\_position**: `number`[]

Defined in: [layer-vector.ts:38](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L38)

Positions of the triangles.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_position`](VectorLayer.md#_position)

***

### \_renderInfoIsDirty

> `protected` **\_renderInfoIsDirty**: `boolean` = `false`

Defined in: [layer.ts:31](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L31)

Indicates if the layer's rendering information is dirty.
This is used to determine if uniforms need to be reloaded.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_renderInfoIsDirty`](VectorLayer.md#_renderinfoisdirty)

***

### \_skippedIds

> `protected` **\_skippedIds**: `Set`\<`number`\>

Defined in: [layer-vector.ts:78](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L78)

Skipped IDs of the layer.
This is a set to ensure uniqueness of skipped IDs.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_skippedIds`](VectorLayer.md#_skippedids)

***

### \_skippedVertices

> `protected` **\_skippedVertices**: `number`[]

Defined in: [layer-vector.ts:84](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L84)

Skipped vertices of the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_skippedVertices`](VectorLayer.md#_skippedvertices)

***

### \_thematic

> `protected` **\_thematic**: `number`[]

Defined in: [layer-vector.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L44)

Thematic data for the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`_thematic`](VectorLayer.md#_thematic)

## Accessors

### borderIds

#### Get Signature

> **get** **borderIds**(): `number`[]

Defined in: [layer-triangles2D.ts:68](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L68)

Get the border IDs.

##### Returns

`number`[]

- The IDs of the borders.

***

### borderPos

#### Get Signature

> **get** **borderPos**(): `number`[]

Defined in: [layer-triangles2D.ts:60](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L60)

Get the border positions.

##### Returns

`number`[]

- The positions of the borders.

***

### components

#### Get Signature

> **get** **components**(): [`ILayerComponent`](../interfaces/ILayerComponent.md)[]

Defined in: [layer-vector.ts:148](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L148)

Get the components of the layer.

##### Returns

[`ILayerComponent`](../interfaces/ILayerComponent.md)[]

- The components of the layer.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`components`](VectorLayer.md#components)

***

### highlightedIds

#### Get Signature

> **get** **highlightedIds**(): `number`[]

Defined in: [layer-vector.ts:156](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L156)

Gets the IDs of the highlighted components in the layer.

##### Returns

`number`[]

The highlighted IDs.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`highlightedIds`](VectorLayer.md#highlightedids)

***

### highlightedVertices

#### Get Signature

> **get** **highlightedVertices**(): `number`[]

Defined in: [layer-vector.ts:164](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L164)

Gets the highlighted vertices of the layer.

##### Returns

`number`[]

The highlighted vertices.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`highlightedVertices`](VectorLayer.md#highlightedvertices)

***

### indices

#### Get Signature

> **get** **indices**(): `number`[]

Defined in: [layer-vector.ts:140](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L140)

Get the indices of the triangles.

##### Returns

`number`[]

- The indices of the triangles.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`indices`](VectorLayer.md#indices)

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

[`VectorLayer`](VectorLayer.md).[`layerInfo`](VectorLayer.md#layerinfo)

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

[`VectorLayer`](VectorLayer.md).[`layerRenderInfo`](VectorLayer.md#layerrenderinfo)

***

### position

#### Get Signature

> **get** **position**(): `number`[]

Defined in: [layer-vector.ts:124](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L124)

Get the positions of the triangles.

##### Returns

`number`[]

- The positions of the triangles.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`position`](VectorLayer.md#position)

***

### skippedIds

#### Get Signature

> **get** **skippedIds**(): `number`[]

Defined in: [layer-vector.ts:172](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L172)

Gets the IDs of the skipped components in the layer.

##### Returns

`number`[]

The skipped IDs.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`skippedIds`](VectorLayer.md#skippedids)

***

### skippedVertices

#### Get Signature

> **get** **skippedVertices**(): `number`[]

Defined in: [layer-vector.ts:180](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L180)

Gets the skipped vertices of the layer.

##### Returns

`number`[]

The skipped vertices.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`skippedVertices`](VectorLayer.md#skippedvertices)

***

### thematic

#### Get Signature

> **get** **thematic**(): `number`[]

Defined in: [layer-vector.ts:132](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L132)

Get the thematic data of the layer.

##### Returns

`number`[]

- The thematic data.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`thematic`](VectorLayer.md#thematic)

## Methods

### clearHighlightedIds()

> **clearHighlightedIds**(): `void`

Defined in: [layer-vector.ts:458](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L458)

Clears the highlighted components of the layer.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`clearHighlightedIds`](VectorLayer.md#clearhighlightedids)

***

### clearSkippedIds()

> **clearSkippedIds**(): `void`

Defined in: [layer-vector.ts:469](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L469)

Clears the skipped components of the layer.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`clearSkippedIds`](VectorLayer.md#clearskippedids)

***

### createPipeline()

> **createPipeline**(`renderer`): `void`

Defined in: [layer-triangles2D.ts:78](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L78)

Create the rendering pipeline for the layer.

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer instance.

#### Returns

`void`

#### Overrides

[`VectorLayer`](VectorLayer.md).[`createPipeline`](VectorLayer.md#createpipeline)

***

### getPickedId()

> **getPickedId**(`x`, `y`): `Promise`\<`number`\>

Defined in: [layer-vector.ts:351](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L351)

Get the picked ID at the specified screen coordinates.

#### Parameters

##### x

`number`

The x-coordinate of the screen position.

##### y

`number`

The y-coordinate of the screen position.

#### Returns

`Promise`\<`number`\>

- A promise that resolves to the picked ID.

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`getPickedId`](VectorLayer.md#getpickedid)

***

### loadBorderComponent()

> **loadBorderComponent**(`borderComponent`): `void`

Defined in: [layer-triangles2D.ts:135](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L135)

Load the border components for the layer.

#### Parameters

##### borderComponent

[`ILayerBorderComponent`](../interfaces/ILayerBorderComponent.md)[]

The border components to load.

#### Returns

`void`

***

### loadBorderGeometry()

> **loadBorderGeometry**(`border`): `void`

Defined in: [layer-triangles2D.ts:102](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L102)

Load the border geometry data for the layer.

#### Parameters

##### border

[`ILayerBorder`](../interfaces/ILayerBorder.md)[]

The border geometry data to load.

#### Returns

`void`

***

### loadComponent()

> **loadComponent**(`layerComponents`): `void`

Defined in: [layer-vector.ts:250](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L250)

Load the components of the layer.

#### Parameters

##### layerComponents

[`ILayerComponent`](../interfaces/ILayerComponent.md)[]

The components to load.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`loadComponent`](VectorLayer.md#loadcomponent)

***

### loadGeometry()

> **loadGeometry**(`layerGeometry`): `void`

Defined in: [layer-vector.ts:210](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L210)

Load the geometry data for the layer.

#### Parameters

##### layerGeometry

[`ILayerGeometry`](../interfaces/ILayerGeometry.md)[]

The geometry data to load.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`loadGeometry`](VectorLayer.md#loadgeometry)

***

### loadLayerData()

> **loadLayerData**(`layerData`): `void`

Defined in: [layer-triangles2D.ts:89](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L89)

Load the layer data, specifically the border information.

#### Parameters

##### layerData

[`ILayerData`](../interfaces/ILayerData.md)

The data associated with the layer.

#### Returns

`void`

#### Overrides

[`VectorLayer`](VectorLayer.md).[`loadLayerData`](VectorLayer.md#loadlayerdata)

***

### loadThematic()

> **loadThematic**(`layerThematic`): `void`

Defined in: [layer-vector.ts:271](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L271)

Load the thematic data for the layer.

#### Parameters

##### layerThematic

[`ILayerThematic`](../interfaces/ILayerThematic.md)[]

The thematic data to load.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`loadThematic`](VectorLayer.md#loadthematic)

***

### makeLayerDataDirty()

> **makeLayerDataDirty**(): `void`

Defined in: [layer.ts:85](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L85)

Marks the layer's data as dirty, indicating that VOBs need to be reconstructed.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`makeLayerDataDirty`](VectorLayer.md#makelayerdatadirty)

***

### makeLayerRenderInfoDirty()

> **makeLayerRenderInfoDirty**(): `void`

Defined in: [layer.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L92)

Marks the layer's rendering information as dirty, indicating uniforms need to be reloaded.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`makeLayerRenderInfoDirty`](VectorLayer.md#makelayerrenderinfodirty)

***

### renderPass()

> **renderPass**(`camera`): `void`

Defined in: [layer-triangles2D.ts:158](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-triangles2D.ts#L158)

Render the layer for the current pass.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance.

#### Returns

`void`

#### Overrides

[`VectorLayer`](VectorLayer.md).[`renderPass`](VectorLayer.md#renderpass)

***

### renderPickingPass()

> **renderPickingPass**(`camera`): `void`

Defined in: [layer-vector.ts:338](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L338)

Render the picking pass for the layer.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`renderPickingPass`](VectorLayer.md#renderpickingpass)

***

### setHighlightedIds()

> **setHighlightedIds**(`ids`): `void`

Defined in: [layer-vector.ts:395](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L395)

Set highlighted IDs for the layer.

#### Parameters

##### ids

`number`[]

The IDs to highlight.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`setHighlightedIds`](VectorLayer.md#sethighlightedids)

***

### setSkippedIds()

> **setSkippedIds**(`ids`): `void`

Defined in: [layer-vector.ts:421](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L421)

Set skipped IDs for the layer.

#### Parameters

##### ids

`number`[]

The IDs to skip.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`setSkippedIds`](VectorLayer.md#setskippedids)

***

### toggleHighlightedIds()

> **toggleHighlightedIds**(`ids`): `void`

Defined in: [layer-vector.ts:359](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L359)

Toggle highlighted IDs for the layer.

#### Parameters

##### ids

`number`[]

The IDs to highlight.

#### Returns

`void`

#### Inherited from

[`VectorLayer`](VectorLayer.md).[`toggleHighlightedIds`](VectorLayer.md#togglehighlightedids)
