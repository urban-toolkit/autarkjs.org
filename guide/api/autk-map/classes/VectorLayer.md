[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / VectorLayer

# Abstract Class: VectorLayer

Defined in: [layer-vector.ts:25](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L25)

Vector layer class extends Layer to handle vector data.
It manages the positions, thematic data, indices, and components of the layer, as well as the rendering pipelines.

## Extends

- [`Layer`](Layer.md)

## Extended by

- [`Triangles2DLayer`](Triangles2DLayer.md)
- [`Triangles3DLayer`](Triangles3DLayer.md)

## Constructors

### Constructor

> **new VectorLayer**(`layerInfo`, `layerRenderInfo`, `layerData`, `dimension?`): `VectorLayer`

Defined in: [layer-vector.ts:110](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L110)

Constructor for Triangles2DLayer

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

`VectorLayer`

#### Overrides

[`Layer`](Layer.md).[`constructor`](Layer.md#constructor)

## Properties

### \_components

> `protected` **\_components**: [`ILayerComponent`](../interfaces/ILayerComponent.md)[] = `[]`

Defined in: [layer-vector.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L56)

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

### \_dimension

> `protected` **\_dimension**: `number`

Defined in: [layer-vector.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L30)

Dimension of the layer.

***

### \_highlightedIds

> `protected` **\_highlightedIds**: `Set`\<`number`\>

Defined in: [layer-vector.ts:65](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L65)

Highlighted IDs of the layer.
This is a set to ensure uniqueness of highlighted IDs.

***

### \_highlightedVertices

> `protected` **\_highlightedVertices**: `number`[]

Defined in: [layer-vector.ts:71](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L71)

Highlighted vertices of the layer.

***

### \_indices

> `protected` **\_indices**: `number`[]

Defined in: [layer-vector.ts:50](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L50)

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

Defined in: [layer-vector.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L92)

Rendering pipeline for the layer.

***

### \_pipelinePicking

> `protected` **\_pipelinePicking**: [`PipelineTrianglePicking`](PipelineTrianglePicking.md)

Defined in: [layer-vector.ts:98](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L98)

Pipeline for picking triangles.

***

### \_position

> `protected` **\_position**: `number`[]

Defined in: [layer-vector.ts:38](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L38)

Positions of the triangles.

***

### \_renderInfoIsDirty

> `protected` **\_renderInfoIsDirty**: `boolean` = `false`

Defined in: [layer.ts:31](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer.ts#L31)

Indicates if the layer's rendering information is dirty.
This is used to determine if uniforms need to be reloaded.

#### Inherited from

[`Layer`](Layer.md).[`_renderInfoIsDirty`](Layer.md#_renderinfoisdirty)

***

### \_skippedIds

> `protected` **\_skippedIds**: `Set`\<`number`\>

Defined in: [layer-vector.ts:78](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L78)

Skipped IDs of the layer.
This is a set to ensure uniqueness of skipped IDs.

***

### \_skippedVertices

> `protected` **\_skippedVertices**: `number`[]

Defined in: [layer-vector.ts:84](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L84)

Skipped vertices of the layer.

***

### \_thematic

> `protected` **\_thematic**: `number`[]

Defined in: [layer-vector.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L44)

Thematic data for the layer.

## Accessors

### components

#### Get Signature

> **get** **components**(): [`ILayerComponent`](../interfaces/ILayerComponent.md)[]

Defined in: [layer-vector.ts:148](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L148)

Get the components of the layer.

##### Returns

[`ILayerComponent`](../interfaces/ILayerComponent.md)[]

- The components of the layer.

***

### highlightedIds

#### Get Signature

> **get** **highlightedIds**(): `number`[]

Defined in: [layer-vector.ts:156](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L156)

Gets the IDs of the highlighted components in the layer.

##### Returns

`number`[]

The highlighted IDs.

***

### highlightedVertices

#### Get Signature

> **get** **highlightedVertices**(): `number`[]

Defined in: [layer-vector.ts:164](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L164)

Gets the highlighted vertices of the layer.

##### Returns

`number`[]

The highlighted vertices.

***

### indices

#### Get Signature

> **get** **indices**(): `number`[]

Defined in: [layer-vector.ts:140](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L140)

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

Defined in: [layer-vector.ts:124](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L124)

Get the positions of the triangles.

##### Returns

`number`[]

- The positions of the triangles.

***

### skippedIds

#### Get Signature

> **get** **skippedIds**(): `number`[]

Defined in: [layer-vector.ts:172](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L172)

Gets the IDs of the skipped components in the layer.

##### Returns

`number`[]

The skipped IDs.

***

### skippedVertices

#### Get Signature

> **get** **skippedVertices**(): `number`[]

Defined in: [layer-vector.ts:180](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L180)

Gets the skipped vertices of the layer.

##### Returns

`number`[]

The skipped vertices.

***

### thematic

#### Get Signature

> **get** **thematic**(): `number`[]

Defined in: [layer-vector.ts:132](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L132)

Get the thematic data of the layer.

##### Returns

`number`[]

- The thematic data.

## Methods

### clearHighlightedIds()

> **clearHighlightedIds**(): `void`

Defined in: [layer-vector.ts:458](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L458)

Clears the highlighted components of the layer.

#### Returns

`void`

***

### clearSkippedIds()

> **clearSkippedIds**(): `void`

Defined in: [layer-vector.ts:469](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L469)

Clears the skipped components of the layer.

#### Returns

`void`

***

### createPipeline()

> **createPipeline**(`renderer`): `void`

Defined in: [layer-vector.ts:308](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L308)

Create the rendering pipeline for the layer.

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer instance.

#### Returns

`void`

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

***

### loadLayerData()

> **loadLayerData**(`layerData`): `void`

Defined in: [layer-vector.ts:191](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L191)

Load the layer data, including geometry and components.

#### Parameters

##### layerData

[`ILayerData`](../interfaces/ILayerData.md)

The data associated with the layer.

#### Returns

`void`

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

Defined in: [layer-vector.ts:320](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/layer-vector.ts#L320)

Render the layer for the current pass.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance.

#### Returns

`void`

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
