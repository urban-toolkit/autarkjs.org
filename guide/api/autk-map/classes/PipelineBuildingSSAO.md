[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / PipelineBuildingSSAO

# Class: PipelineBuildingSSAO

Defined in: [pipeline-triangle-ssao.ts:19](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L19)

PipelineBuildingSSAO is a rendering pipeline for drawing 3D buildings with SSAO (Screen Space Ambient Occlusion).
It uses WebGPU to render the buildings in two passes: one for normal and color maps, and another for SSAO computation.

## Extends

- [`Pipeline`](Pipeline.md)

## Constructors

### Constructor

> **new PipelineBuildingSSAO**(`renderer`): `PipelineBuildingSSAO`

Defined in: [pipeline-triangle-ssao.ts:126](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L126)

Constructor for PipelineBuildingSSAO

#### Parameters

##### renderer

[`Renderer`](Renderer.md)

The renderer instance

#### Returns

`PipelineBuildingSSAO`

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

### \_colorsSharedBuffer

> `protected` **\_colorsSharedBuffer**: `GPURenderPassColorAttachment`

Defined in: [pipeline-triangle-ssao.ts:96](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L96)

Shared color buffer for the first pass.

***

### \_depthBufferPass01

> `protected` **\_depthBufferPass01**: `GPURenderPassDepthStencilAttachment`

Defined in: [pipeline-triangle-ssao.ts:108](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L108)

Depth buffer for the first pass.

***

### \_fragModule01

> `protected` **\_fragModule01**: `GPUShaderModule`

Defined in: [pipeline-triangle-ssao.ts:66](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L66)

Fragment shader module for the first pass.

***

### \_fragModule02

> `protected` **\_fragModule02**: `GPUShaderModule`

Defined in: [pipeline-triangle-ssao.ts:78](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L78)

Fragment shader module for the second pass.

***

### \_highlightColorBuffer

> `protected` **\_highlightColorBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:56](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L56)

Highlight color uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_highlightColorBuffer`](Pipeline.md#_highlightcolorbuffer)

***

### \_highlightedBuffer

> `protected` **\_highlightedBuffer**: `GPUBuffer`

Defined in: [pipeline-triangle-ssao.ts:42](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L42)

Highlighted buffer for vertex data.

***

### \_indicesBuffer

> `protected` **\_indicesBuffer**: `GPUBuffer`

Defined in: [pipeline-triangle-ssao.ts:54](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L54)

Indices buffer for vertex data.

***

### \_mviewBuffer

> `protected` **\_mviewBuffer**: `GPUBuffer`

Defined in: [pipeline.ts:27](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L27)

ModelView matrix uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_mviewBuffer`](Pipeline.md#_mviewbuffer)

***

### \_normalBuffer

> `protected` **\_normalBuffer**: `GPUBuffer`

Defined in: [pipeline-triangle-ssao.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L30)

Normal buffer for vertex data.

***

### \_normalsSharedBuffer

> `protected` **\_normalsSharedBuffer**: `GPURenderPassColorAttachment`

Defined in: [pipeline-triangle-ssao.ts:102](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L102)

Shared normal buffer for the first pass.

***

### \_opacity

> `protected` **\_opacity**: `GPUBuffer`

Defined in: [pipeline.ts:79](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline.ts#L79)

Opacity uniform buffer

#### Inherited from

[`Pipeline`](Pipeline.md).[`_opacity`](Pipeline.md#_opacity)

***

### \_pipeline01

> `protected` **\_pipeline01**: `GPURenderPipeline`

Defined in: [pipeline-triangle-ssao.ts:84](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L84)

Render pipeline for the first pass.

***

### \_pipeline02

> `protected` **\_pipeline02**: `GPURenderPipeline`

Defined in: [pipeline-triangle-ssao.ts:90](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L90)

Render pipeline for the second pass.

***

### \_positionBuffer

> `protected` **\_positionBuffer**: `GPUBuffer`

Defined in: [pipeline-triangle-ssao.ts:24](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L24)

Position buffer for vertex data.

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

### \_skippedBuffer

> `protected` **\_skippedBuffer**: `GPUBuffer`

Defined in: [pipeline-triangle-ssao.ts:48](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L48)

Highlighted buffer for vertex data.

***

### \_texturesPass02BindGroup

> `protected` **\_texturesPass02BindGroup**: `GPUBindGroup`

Defined in: [pipeline-triangle-ssao.ts:114](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L114)

Bind group for colors.

***

### \_texturesPass02BindGroupLayout

> `protected` **\_texturesPass02BindGroupLayout**: `GPUBindGroupLayout`

Defined in: [pipeline-triangle-ssao.ts:120](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L120)

Bind group layout for textures in the second pass.

***

### \_thematicBuffer

> `protected` **\_thematicBuffer**: `GPUBuffer`

Defined in: [pipeline-triangle-ssao.ts:36](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L36)

Thematic buffer for vertex data.

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

### \_vertModule01

> `protected` **\_vertModule01**: `GPUShaderModule`

Defined in: [pipeline-triangle-ssao.ts:60](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L60)

Vertex shader module for the first pass.

***

### \_vertModule02

> `protected` **\_vertModule02**: `GPUShaderModule`

Defined in: [pipeline-triangle-ssao.ts:72](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L72)

Vertex shader module for the second pass.

## Methods

### build()

> **build**(`mesh`): `void`

Defined in: [pipeline-triangle-ssao.ts:134](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L134)

Builds the pipeline with the provided mesh data.

#### Parameters

##### mesh

[`Triangles3DLayer`](Triangles3DLayer.md)

The mesh data containing positions, normals, thematic, and indices

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

### createDepthBufferPass01()

> **createDepthBufferPass01**(): `void`

Defined in: [pipeline-triangle-ssao.ts:289](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L289)

Creates the depth buffer for the first pass.

#### Returns

`void`

***

### createPipeline01()

> **createPipeline01**(): `void`

Defined in: [pipeline-triangle-ssao.ts:359](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L359)

Creates the first render pipeline for the SSAO pass.

#### Returns

`void`

***

### createPipeline02()

> **createPipeline02**(): `void`

Defined in: [pipeline-triangle-ssao.ts:462](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L462)

Creates the second render pipeline for the SSAO pass.

#### Returns

`void`

***

### createShaders()

> **createShaders**(): `void`

Defined in: [pipeline-triangle-ssao.ts:155](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L155)

Creates the vertex and fragment shaders for the pipeline.

#### Returns

`void`

***

### createSharedTextures()

> **createSharedTextures**(): `void`

Defined in: [pipeline-triangle-ssao.ts:251](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L251)

Creates the shared textures for the pipeline.

#### Returns

`void`

***

### createTexturesBindGroupPass02()

> **createTexturesBindGroupPass02**(): `void`

Defined in: [pipeline-triangle-ssao.ts:308](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L308)

#### Returns

`void`

***

### createVertexBuffers()

> **createVertexBuffers**(`mesh`): `void`

Defined in: [pipeline-triangle-ssao.ts:189](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L189)

Creates the vertex buffers for the mesh data.

#### Parameters

##### mesh

[`Triangles3DLayer`](Triangles3DLayer.md)

The mesh data containing positions, normals, thematic, and indices

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`createVertexBuffers`](Pipeline.md#createvertexbuffers)

***

### pass01()

> **pass01**(`camera`): `void`

Defined in: [pipeline-triangle-ssao.ts:531](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L531)

Renders the first pass of the SSAO pipeline.

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera instance

#### Returns

`void`

***

### pass02()

> **pass02**(): `void`

Defined in: [pipeline-triangle-ssao.ts:572](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L572)

Renders the second pass of the SSAO pipeline.

#### Returns

`void`

***

### renderPass()

> **renderPass**(`camera`): `void`

Defined in: [pipeline-triangle-ssao.ts:600](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L600)

Creates the shaders for the pipeline.

#### Parameters

##### camera

[`Camera`](Camera.md)

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

> **updateVertexBuffers**(`mesh`): `void`

Defined in: [pipeline-triangle-ssao.ts:239](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/pipeline-triangle-ssao.ts#L239)

Updates the vertex buffers with the provided mesh data.

#### Parameters

##### mesh

[`Triangles3DLayer`](Triangles3DLayer.md)

The mesh data containing positions, normals, thematic, and indices

#### Returns

`void`

#### Overrides

[`Pipeline`](Pipeline.md).[`updateVertexBuffers`](Pipeline.md#updatevertexbuffers)
