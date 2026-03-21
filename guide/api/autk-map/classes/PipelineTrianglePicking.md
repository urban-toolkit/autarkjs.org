[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / PipelineTrianglePicking

# Class: PipelineTrianglePicking

Defined in: [pipeline-triangle-picking.ts:15](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L15)

PipelineTrianglePicking is a rendering pipeline for picking triangles in 2D space.
It uses WebGPU to render triangles and allows for picking by encoding object IDs in vertex colors.

## Extends

- [`Pipeline`](Pipeline.md)

## Constructors

### Constructor

> **new PipelineTrianglePicking**(`renderer`): `PipelineTrianglePicking`

Defined in: [pipeline-triangle-picking.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L56)

Constructor for PipelineTrianglePicking

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer instance

#### Returns

`PipelineTrianglePicking`

#### Overrides

[`Pipeline`](Pipeline.md).[`constructor`](Pipeline.md#constructor)

## Properties

### \_cameraBindGroup

> `protected` **\_cameraBindGroup**: `GPUBindGroup`

Defined in: [pipeline.ts:39](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L39)

Camera bind group

#### Inherited from

[`Pipeline`](Pipeline.md).[`_cameraBindGroup`](Pipeline.md#_camerabindgroup)

***

### \_cameraBindGroupLayout

> `protected` **\_cameraBindGroupLayout**: `GPUBindGroupLayout`

Defined in: [pipeline.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L44)

Camera bind group layout

#### Inherited from

[`Pipeline`](Pipeline.md).[`_cameraBindGroupLayout`](Pipeline.md#_camerabindgrouplayout)

***

### \_cMapTexture

> `protected` **\_cMapTexture**: `GPUTexture`

Defined in: [pipeline.ts:61](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L61)

Color map texture

#### Inherited from

[`Pipeline`](Pipeline.md).[`_cMapTexture`](Pipeline.md#_cmaptexture)

***

### \_colorBuffer

> `protected` **\_colorBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:51](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L51)

Color uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_colorBuffer`](Pipeline.md#_colorbuffer)

***

### \_fragModule

> `protected` **\_fragModule**: `GPUShaderModule`

Defined in: [pipeline-triangle-picking.ts:50](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L50)

Fragment shader module.

***

### \_highlightColorBuffer

> `protected` **\_highlightColorBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L56)

Highlight color uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_highlightColorBuffer`](Pipeline.md#_highlightcolorbuffer)

***

### \_mviewBuffer

> `protected` **\_mviewBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:27](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L27)

ModelView matrix uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_mviewBuffer`](Pipeline.md#_mviewbuffer)

***

### \_opacity

> `protected` **\_opacity**: `GPUBuffer`

Defined in: [pipeline.ts:79](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L79)

Opacity uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_opacity`](Pipeline.md#_opacity)

***

### \_projcBuffer

> `protected` **\_projcBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:32](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L32)

Projection matrix uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_projcBuffer`](Pipeline.md#_projcbuffer)

***

### \_renderer

> `protected` **\_renderer**: [`Renderer`](Renderer.md)

Defined in: [pipeline.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L21)

Renderer reference

#### Inherited from

[`Pipeline`](Pipeline.md).[`_renderer`](Pipeline.md#_renderer)

***

### \_renderInfoBindGroup

> `protected` **\_renderInfoBindGroup**: `GPUBindGroup`

Defined in: [pipeline.ts:87](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L87)

Render information bind group

#### Inherited from

[`Pipeline`](Pipeline.md).[`_renderInfoBindGroup`](Pipeline.md#_renderinfobindgroup)

***

### \_renderInfoBindGroupLayout

> `protected` **\_renderInfoBindGroupLayout**: `GPUBindGroupLayout`

Defined in: [pipeline.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L92)

Render information bind group layout

#### Inherited from

[`Pipeline`](Pipeline.md).[`_renderInfoBindGroupLayout`](Pipeline.md#_renderinfobindgrouplayout)

***

### \_useColorMap

> `protected` **\_useColorMap**: `GPUBuffer`

Defined in: [pipeline.ts:69](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L69)

Use color map uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_useColorMap`](Pipeline.md#_usecolormap)

***

### \_useHighlight

> `protected` **\_useHighlight**: `GPUBuffer`

Defined in: [pipeline.ts:74](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L74)

Use highlight uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_useHighlight`](Pipeline.md#_usehighlight)

***

### \_vertModule

> `protected` **\_vertModule**: `GPUShaderModule`

Defined in: [pipeline-triangle-picking.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L44)

Vertex shader module.

## Methods

### build()

> **build**(`mesh`): `void`

Defined in: [pipeline-triangle-picking.ts:64](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L64)

Builds the pipeline with the provided mesh data.

#### Parameters

##### mesh

[`VectorLayer`](VectorLayer.md)

The mesh data containing positions, thematic, and indices

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`build`](Pipeline.md#build)

***

### createCameraUniformBindGroup()

> **createCameraUniformBindGroup**(): `void`

Defined in: [pipeline.ts:110](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L110)

Creates the camera uniform bind group.

#### Returns

`void`

#### Inherited from

[`Pipeline`](Pipeline.md).[`createCameraUniformBindGroup`](Pipeline.md#createcamerauniformbindgroup)

***

### createColorUniformBindGroup()

> **createColorUniformBindGroup**(): `void`

Defined in: [pipeline.ts:170](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L170)

Creates the color uniform bind group.

#### Returns

`void`

#### Inherited from

[`Pipeline`](Pipeline.md).[`createColorUniformBindGroup`](Pipeline.md#createcoloruniformbindgroup)

***

### createShaders()

> **createShaders**(): `void`

Defined in: [pipeline-triangle-picking.ts:77](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L77)

Creates the vertex and fragment shaders for the pipeline.

#### Returns

`void`

***

### createVertexBuffers()

> **createVertexBuffers**(`mesh`): `void`

Defined in: [pipeline-triangle-picking.ts:95](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L95)

Creates the vertex buffers for the pipeline.

#### Parameters

##### mesh

[`VectorLayer`](VectorLayer.md)

The mesh data containing positions, thematic, and indices

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`createVertexBuffers`](Pipeline.md#createvertexbuffers)

***

### readPickedId()

> **readPickedId**(`x`, `y`): `Promise`\<`number`\>

Defined in: [pipeline-triangle-picking.ts:152](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L152)

Reads the picked object ID from the picking texture.

#### Parameters

##### x

`number`

The x-coordinate of the pick location

##### y

`number`

The y-coordinate of the pick location

#### Returns

`Promise`\<`number`\>

The picked object ID

***

### renderPass()

> **renderPass**(`camera`): `void`

Defined in: [pipeline-triangle-picking.ts:291](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L291)

Renders the picking pass for the pipeline.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`renderPass`](Pipeline.md#renderpass)

***

### updateCameraUniforms()

> **updateCameraUniforms**(`camera`): `void`

Defined in: [pipeline.ts:157](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L157)

Updates the camera uniform buffers with the current camera state.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance

#### Returns

`void`

#### Inherited from

[`Pipeline`](Pipeline.md).[`updateCameraUniforms`](Pipeline.md#updatecamerauniforms)

***

### updateColorUniforms()

> **updateColorUniforms**(`layer`): `void`

Defined in: [pipeline.ts:295](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L295)

Updates the color uniform buffers with the current layer state.

#### Parameters

##### layer

[`Layer`](Layer.md)

The layer instance

#### Returns

`void`

#### Inherited from

[`Pipeline`](Pipeline.md).[`updateColorUniforms`](Pipeline.md#updatecoloruniforms)

***

### updateVertexBuffers()

> **updateVertexBuffers**(`layer`): `void`

Defined in: [pipeline-triangle-picking.ts:119](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-picking.ts#L119)

Updates the vertex buffers with the provided mesh data.

#### Parameters

##### layer

[`VectorLayer`](VectorLayer.md)

The mesh data containing positions, thematic, and indices

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`updateVertexBuffers`](Pipeline.md#updatevertexbuffers)
