[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / Camera

# Class: Camera

Defined in: [camera.ts:59](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L59)

Interactive 3-DOF camera for orbit-style navigation.

The camera tracks world-space eye, look-at, and up vectors together with the
current viewport size. Call the navigation methods to adjust state, then
call [Camera.update](#update) to rebuild the matrices. Projection uses
reversed-Z depth mapping for improved precision at distance.

## Example

```ts
const camera = new Camera();
camera.resize(width, height);
camera.zoom(-1, 0.5, 0.5);
camera.update();
```

## Constructors

### Constructor

> **new Camera**(`params?`): `Camera`

Defined in: [camera.ts:96](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L96)

Creates a camera with the provided initial state.

#### Parameters

##### params?

[`CameraData`](../interfaces/CameraData.md) = `Camera.defaultParams`

Initial camera position and orientation (defaults to `[0, 1, 0]` up, 10k units above origin).

#### Returns

`Camera`

#### Throws

Never throws.

#### Example

```ts
const camera = new Camera();
const custom = new Camera({ eye: [0, 0, 500], lookAt: [0, 0, 0], up: [0, 1, 0] });
```

## Methods

### getEye()

> **getEye**(): \[`number`, `number`, `number`\]

Defined in: [camera.ts:136](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L136)

#### Returns

\[`number`, `number`, `number`\]

***

### getFar()

> **getFar**(): `number`

Defined in: [camera.ts:156](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L156)

#### Returns

`number`

***

### getFovyRadians()

> **getFovyRadians**(): `number`

Defined in: [camera.ts:148](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L148)

#### Returns

`number`

***

### getLookAt()

> **getLookAt**(): \[`number`, `number`, `number`\]

Defined in: [camera.ts:140](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L140)

#### Returns

\[`number`, `number`, `number`\]

***

### getModelViewMatrix()

> **getModelViewMatrix**(): `mat4`

Defined in: [camera.ts:195](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L195)

Returns the current view (model-view) matrix.

#### Returns

`mat4`

The view matrix in column-major `mat4`.

#### Throws

Never throws.

#### Example

```ts
camera.update();
const view = camera.getModelViewMatrix();
```

***

### getNear()

> **getNear**(): `number`

Defined in: [camera.ts:152](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L152)

#### Returns

`number`

***

### getProjectionMatrix()

> **getProjectionMatrix**(): `mat4`

Defined in: [camera.ts:132](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L132)

Returns the current projection matrix.

#### Returns

`mat4`

The projection matrix in column-major `mat4`.

#### Throws

Never throws.

#### Example

```ts
camera.update();
const proj = camera.getProjectionMatrix();
```

***

### getUp()

> **getUp**(): \[`number`, `number`, `number`\]

Defined in: [camera.ts:144](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L144)

#### Returns

\[`number`, `number`, `number`\]

***

### getViewportHeight()

> **getViewportHeight**(): `number`

Defined in: [camera.ts:160](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L160)

#### Returns

`number`

***

### getViewportWidth()

> **getViewportWidth**(): `number`

Defined in: [camera.ts:164](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L164)

#### Returns

`number`

***

### getViewProjectionMatrix()

> **getViewProjectionMatrix**(): `Float32Array`

Defined in: [camera.ts:168](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L168)

#### Returns

`Float32Array`

***

### getWorldRayDirection()

> **getWorldRayDirection**(`x`, `y`): \[`number`, `number`, `number`\]

Defined in: [camera.ts:172](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L172)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

\[`number`, `number`, `number`\]

***

### getZoomScale()

> **getZoomScale**(): `number`

Defined in: [camera.ts:302](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L302)

Returns a scalar proportional to the current map zoom for marker sizing.

This uses the camera eye height, which is the quantity changed by the map
zoom interaction and therefore tracks zoom more reliably than the
normalized eye-direction vector.

#### Returns

`number`

***

### pitch()

> **pitch**(`delta`): `void`

Defined in: [camera.ts:282](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L282)

Tilts the camera up or down (elevation angle).

#### Parameters

##### delta

`number`

Tilt angle in radians. Positive values tilt upward.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.pitch(-0.3);  // tilt downward ~17°
camera.update();
```

***

### resetCamera()

> **resetCamera**(`wUp`, `wLookAt`, `wEye`): `void`

Defined in: [camera.ts:111](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L111)

Resets the camera to a new position, orientation, and default projection.

#### Parameters

##### wUp

`number`[]

World-space up vector.

##### wLookAt

`number`[]

Point to look at in world space.

##### wEye

`number`[]

Eye position in world space.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.resetCamera([0, 1, 0], [100, 200, 0], [100, 200, 500]);
camera.update();
```

***

### resize()

> **resize**(`width`, `height`): `void`

Defined in: [camera.ts:210](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L210)

Updates viewport size and recomputes matrices in one call.

Pass drawable canvas pixel size, not CSS size.

#### Parameters

##### width

`number`

Viewport width in pixels.

##### height

`number`

Viewport height in pixels.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.resize(1920, 1080);  // calls update() internally
```

***

### setOrthographicBounds()

> **setOrthographicBounds**(`left`, `right`, `bottom`, `top`): `void`

Defined in: [camera.ts:177](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L177)

#### Parameters

##### left

`number`

##### right

`number`

##### bottom

`number`

##### top

`number`

#### Returns

`void`

***

### translate()

> **translate**(`dx`, `dy`): `void`

Defined in: [camera.ts:245](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L245)

Pans the camera in screen space, scaled by the current view distance.

#### Parameters

##### dx

`number`

Normalized horizontal drag delta (0–1).

##### dy

`number`

Normalized vertical drag delta (0–1).

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.translate(0.1, 0);  // pan right
camera.update();
```

***

### update()

> **update**(): `void`

Defined in: [camera.ts:316](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L316)

Rebuilds view and projection matrices from the current camera state.

Uses reversed-Z depth for improved precision at long range.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.zoom(-1, 0.5, 0.5);
camera.update();  // rebuild matrices after navigation change
```

***

### yaw()

> **yaw**(`delta`): `void`

Defined in: [camera.ts:267](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L267)

Rotates the camera around the world Z-axis (compass bearing).

#### Parameters

##### delta

`number`

Rotation angle in radians.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.yaw(Math.PI / 4);  // rotate 45° clockwise
camera.update();
```

***

### zoom()

> **zoom**(`delta`, `x`, `y`): `void`

Defined in: [camera.ts:227](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L227)

Zooms the camera at the cursor position, preserving it in world space.

#### Parameters

##### delta

`number`

Normalized scroll delta (positive = zoom out, negative = zoom in).

##### x

`number`

Normalized cursor X position (0–1, left to right).

##### y

`number`

Normalized cursor Y position (0–1, bottom to top).

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.zoom(-1, 0.5, 0.5);  // zoom in at screen center
camera.update();
```

***

### buildViewProjection()

> `static` **buildViewProjection**(`p`): `Float32Array`

Defined in: [camera.ts:338](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/camera.ts#L338)

Builds a stateless view-projection matrix from explicit parameters.

#### Parameters

##### p

[`ViewProjectionParams`](../interfaces/ViewProjectionParams.md)

Camera and projection parameters.

#### Returns

`Float32Array`

Column-major `Float32Array` of length 16.

#### Throws

Never throws.

#### Example

```ts
const vp = Camera.buildViewProjection({
  eye: [0, 0, 500], lookAt: [0, 0, 0], up: [0, 1, 0],
  fovDeg: 45, aspect: 16/9, near: 0.1, far: 10000,
});
```
