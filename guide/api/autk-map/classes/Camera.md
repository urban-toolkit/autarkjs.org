[**autk-map**](../globals.md)

***

[autk-map](../globals.md) / Camera

# Class: Camera

Defined in: [camera.ts:8](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L8)

Camera class for managing the view parameters and transformations in a 3D space.
It provides methods to manipulate the camera position, orientation, and projection.

## Constructors

### Constructor

> **new Camera**(`params?`): `Camera`

Defined in: [camera.ts:81](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L81)

Constructs a Camera instance with the specified parameters.
If no parameters are provided, it uses the default camera parameters.

#### Parameters

##### params?

[`ICameraData`](../interfaces/ICameraData.md) = `Camera.defaultParams`

The initial camera parameters.

#### Returns

`Camera`

## Properties

### fovy

> `protected` **fovy**: `number`

Defined in: [camera.ts:39](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L39)

The field of view angle in the y direction.

***

### mModelMatrix

> `protected` **mModelMatrix**: `mat4`

Defined in: [camera.ts:54](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L54)

The model matrix for the camera.

***

### mProjectionMatrix

> `protected` **mProjectionMatrix**: `mat4`

Defined in: [camera.ts:44](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L44)

The projection matrix for the camera.

***

### mViewMatrix

> `protected` **mViewMatrix**: `mat4`

Defined in: [camera.ts:49](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L49)

The view matrix for the camera.

***

### wEye

> `protected` **wEye**: `vec3`

Defined in: [camera.ts:12](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L12)

The world eye position of the camera.

***

### wEyeDir

> `protected` **wEyeDir**: `vec3`

Defined in: [camera.ts:21](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L21)

The world eye direction vector of the camera.

***

### wFar

> `protected` **wFar**: `number` = `0`

Defined in: [camera.ts:34](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L34)

The far clipping plane distance.

***

### wLookAt

> `protected` **wLookAt**: `vec3`

Defined in: [camera.ts:16](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L16)

The world look-at position of the camera.

***

### wNear

> `protected` **wNear**: `number` = `0`

Defined in: [camera.ts:30](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L30)

The near clipping plane distance.

***

### wUp

> `protected` **wUp**: `vec3`

Defined in: [camera.ts:25](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L25)

The world up vector of the camera.

## Methods

### getModelViewMatrix()

> **getModelViewMatrix**(): `number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Defined in: [camera.ts:120](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L120)

Gets the model-view matrix for the camera.

#### Returns

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

The model-view matrix

***

### getProjectionMatrix()

> **getProjectionMatrix**(): `number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Defined in: [camera.ts:112](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L112)

Gets the projection matrix for the camera.

#### Returns

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

The projection matrix

***

### pitch()

> **pitch**(`delta`): `void`

Defined in: [camera.ts:189](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L189)

Pitches the camera around the x-axis.

#### Parameters

##### delta

`number`

The amount to pitch the camera (in radians).

#### Returns

`void`

***

### resetCamera()

> **resetCamera**(`wUp`, `wLookAt`, `wEye`): `void`

Defined in: [camera.ts:92](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L92)

Resets the camera to the initial position and orientation.

#### Parameters

##### wUp

`number`[]

The up vector of the camera in world coordinates.

##### wLookAt

`number`[]

The look-at point of the camera in world coordinates.

##### wEye

`number`[]

The eye position of the camera in world coordinates.

#### Returns

`void`

***

### resize()

> **resize**(`width`, `height`): `void`

Defined in: [camera.ts:130](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L130)

Resizes the viewport for the camera.

#### Parameters

##### width

`number`

The new width of the viewport.

##### height

`number`

The new height of the viewport.

#### Returns

`void`

***

### screenCoordToWorldDir()

> `protected` **screenCoordToWorldDir**(`x`, `y`): `vec3`

Defined in: [camera.ts:224](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L224)

Converts screen coordinates to world direction vector.

#### Parameters

##### x

`number`

The x-coordinate on the screen.

##### y

`number`

The y-coordinate on the screen.

#### Returns

`vec3`

The direction vector in world coordinates.

***

### translate()

> **translate**(`dx`, `dy`): `void`

Defined in: [camera.ts:159](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L159)

Translates the camera position by the specified delta values in the x and y directions.
The translation is scaled by the current eye distance to maintain consistent movement speed.

#### Parameters

##### dx

`number`

The translation distance in the x direction.

##### dy

`number`

The translation distance in the y direction.

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [camera.ts:207](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L207)

Updates the camera's view and projection matrices.

#### Returns

`void`

***

### updateEyeDirAndLen()

> `protected` **updateEyeDirAndLen**(): `void`

Defined in: [camera.ts:241](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L241)

Updates the eye direction and length based on the current eye and look-at positions.

#### Returns

`void`

***

### yaw()

> **yaw**(`delta`): `void`

Defined in: [camera.ts:178](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L178)

Yaws the camera around the z-axis.

#### Parameters

##### delta

`number`

The amount to yaw the camera (in radians).

#### Returns

`void`

***

### zoom()

> **zoom**(`delta`, `x`, `y`): `void`

Defined in: [camera.ts:143](https://github.com/urban-toolkit/autark/blob/9b743c4ad315b9f743bbe271a9624ee47c4fee9a/autk-map/src/camera.ts#L143)

Zooms the camera in or out based on the specified delta and screen coordinates.

#### Parameters

##### delta

`number`

The zoom factor (positive to zoom in, negative to zoom out).

##### x

`number`

The x-coordinate on the screen where the zoom is centered.

##### y

`number`

The y-coordinate on the screen where the zoom is centered.

#### Returns

`void`
