# Class: Camera

Defined in: [camera.ts:86](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L86)

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

Defined in: [camera.ts:135](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L135)

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

Defined in: [camera.ts:181](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L181)

#### Returns

\[`number`, `number`, `number`\]

***

### getFar()

> **getFar**(): `number`

Defined in: [camera.ts:216](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L216)

Returns the active far distance for navigation, or the configured minimum in fixed-bounds mode.

#### Returns

`number`

***

### getFovyRadians()

> **getFovyRadians**(): `number`

Defined in: [camera.ts:207](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L207)

#### Returns

`number`

***

### getGroundFootprint()

> **getGroundFootprint**(`reach`): \[`number`, `number`\][]

Defined in: [camera.ts:320](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L320)

The ground the camera can see within a distance, as a convex polygon.

Each side of the view pyramid is a plane through the eye; on the ground it
is a half-plane. The visible ground is the square of half-side `reach`
around the point below the eye, cut by those four half-planes. Unlike the
ground hits of the four corner rays, this also covers what the interior
of the screen sees near the horizon, where a corner ray points above the
ground. An orthographic view sees a parallelogram of ground, between the
ground points of its corners.

#### Parameters

##### reach

`number`

Farthest ground distance from the point below the eye, in world units.

#### Returns

\[`number`, `number`\][]

Polygon vertices `[x, y]`, or an empty array when no ground is visible.

#### Throws

Never throws.

#### Example

```ts
const polygon = camera.getGroundFootprint(50000);
```

***

### getGroundPoint()

> **getGroundPoint**(`x`, `y`, `maxDistance`): \[`number`, `number`\]

Defined in: [camera.ts:284](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L284)

Finds where the ray through a screen position meets the ground plane (`z = 0`).

A ray that points away from the ground, or is parallel to it, has no hit;
a hit farther than `maxDistance` is too far to be useful. In both cases the
point `maxDistance` along the ray is returned instead. An orthographic
ray starts on the plane of the eye, and its hit may lie behind that plane;
a hit more than `maxDistance` behind it gives the point `maxDistance` behind it.

#### Parameters

##### x

`number`

Normalized screen X (0–1, left to right).

##### y

`number`

Normalized screen Y (0–1, bottom to top).

##### maxDistance

`number`

Farthest distance along the ray, in world units.

#### Returns

\[`number`, `number`\]

The ground point `[x, y]`.

#### Throws

Never throws.

#### Example

```ts
const [gx, gy] = camera.getGroundPoint(0.5, 0.5, 50000); // what the view centre looks at
```

***

### getLookAt()

> **getLookAt**(): \[`number`, `number`, `number`\]

Defined in: [camera.ts:194](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L194)

Returns the point the camera looks at.

`resetCamera(getUp(), getLookAt(), getEye())` keeps the view, in
perspective and in an orthographic view set with [setProjection](#setprojection).

#### Returns

\[`number`, `number`, `number`\]

The point `[x, y, z]` in world space.

#### Throws

Never throws.

***

### getModelViewMatrix()

> **getModelViewMatrix**(): `mat4`

Defined in: [camera.ts:477](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L477)

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

Defined in: [camera.ts:211](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L211)

#### Returns

`number`

***

### getProjection()

> **getProjection**(): [`CameraProjection`](../type-aliases/CameraProjection.md)

Defined in: [camera.ts:432](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L432)

Returns the current projection.

#### Returns

[`CameraProjection`](../type-aliases/CameraProjection.md)

`'orthographic'` once [setProjection](#setprojection) chose it, or while the
bounds of [setOrthographicBounds](#setorthographicbounds) hold; otherwise `'perspective'`.

#### Throws

Never throws.

***

### getProjectionMatrix()

> **getProjectionMatrix**(): `mat4`

Defined in: [camera.ts:177](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L177)

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

Defined in: [camera.ts:203](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L203)

#### Returns

\[`number`, `number`, `number`\]

***

### getViewportHeight()

> **getViewportHeight**(): `number`

Defined in: [camera.ts:235](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L235)

#### Returns

`number`

***

### getViewportWidth()

> **getViewportWidth**(): `number`

Defined in: [camera.ts:239](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L239)

#### Returns

`number`

***

### getViewProjectionMatrix()

> **getViewProjectionMatrix**(): `Float32Array`

Defined in: [camera.ts:243](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L243)

#### Returns

`Float32Array`

***

### getWorldRayDirection()

> **getWorldRayDirection**(`x`, `y`): \[`number`, `number`, `number`\]

Defined in: [camera.ts:262](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L262)

Returns the direction of the ray through a screen position, in world space.

In perspective, the ray starts at the eye ([getEye](#geteye)). In an
orthographic view, every ray has the view direction, and the ray through
a screen position starts at that position on the plane of the eye, not at
the eye: unproject the position with the inverse of
[getViewProjectionMatrix](#getviewprojectionmatrix) to find a point on it, or use
[getGroundPoint](#getgroundpoint) for where it meets the ground.

#### Parameters

##### x

`number`

Normalized screen X, from 0 at the left to 1 at the right.

##### y

`number`

Normalized screen Y, from 0 at the bottom to 1 at the top.

#### Returns

\[`number`, `number`, `number`\]

The unit direction `[x, y, z]`.

#### Throws

Never throws.

***

### getZoomScale()

> **getZoomScale**(): `number`

Defined in: [camera.ts:600](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L600)

Returns a scalar proportional to the current map zoom for marker sizing.

This uses the camera eye height, which is the quantity changed by the map
zoom interaction and therefore tracks zoom more reliably than the
normalized eye-direction vector.

#### Returns

`number`

***

### pitch()

> **pitch**(`delta`): `void`

Defined in: [camera.ts:580](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L580)

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

> **resetCamera**(`wUp`, `wLookAt`, `wEye`, `far?`, `near?`): `void`

Defined in: [camera.ts:155](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L155)

Resets the camera to a new position, orientation, and default projection.

The projection set by [setProjection](#setprojection) is kept; the bounds set by
[setOrthographicBounds](#setorthographicbounds) end.

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

##### far?

`number` = `5e5`

Minimum far clipping distance for navigable views; defaults to 500,000 world units.

##### near?

`number` = `1`

Near clipping distance; defaults to 1 world unit. Explicit small-unit views may use a smaller value.

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

Defined in: [camera.ts:492](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L492)

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

### restoreState()

> **restoreState**(`state`): `void`

Defined in: [camera.ts:453](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L453)

Restores a snapshot from [saveState](#savestate), using the receiving camera's viewport.

#### Parameters

##### state

[`CameraState`](../interfaces/CameraState.md)

#### Returns

`void`

***

### saveState()

> **saveState**(): [`CameraState`](../interfaces/CameraState.md)

Defined in: [camera.ts:437](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L437)

Captures the pose, projection, framing, and clipping range as JSON-serializable data.

#### Returns

[`CameraState`](../interfaces/CameraState.md)

***

### setOrthographicBounds()

> **setOrthographicBounds**(`left`, `right`, `bottom`, `top`): `void`

Defined in: [camera.ts:374](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L374)

Switches the camera to a top-down orthographic projection over a rectangle of ground.

The camera keeps these bounds until [resetCamera](#resetcamera) or
`setProjection('perspective')` is called: [resize](#resize) and [update](#update) keep the
projection, and the ground and ray helpers follow the bounds. World `z`
from -10 to 90 is inside the depth range. Ordinary 2D layers remain on the
common ground plane and use drawing order. For a view that follows the
eye, use [setProjection](#setprojection).

#### Parameters

##### left

`number`

World X at the left edge.

##### right

`number`

World X at the right edge.

##### bottom

`number`

World Y at the bottom edge.

##### top

`number`

World Y at the top edge.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.setOrthographicBounds(0, 1000, 0, 800);
```

***

### setProjection()

> **setProjection**(`projection`): `void`

Defined in: [camera.ts:416](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L416)

Sets the projection the camera keeps until it is set again.

An orthographic camera looks along the same line as the perspective one,
with parallel rays, and at the point it looks at it shows what the
perspective camera shows there. So switching keeps the scale there, and
zoom, pan, tilt and [resetCamera](#resetcamera) work as in perspective. It draws
everything within the far distance, in front of the eye or behind it.

Setting the projection [getProjection](#getprojection) already reports changes
nothing that is drawn. While the bounds of [setOrthographicBounds](#setorthographicbounds)
hold, the camera is orthographic: `setProjection('orthographic')` keeps
them, and the camera stays orthographic after [resetCamera](#resetcamera) ends
them; `setProjection('perspective')` ends them.

#### Parameters

##### projection

[`CameraProjection`](../type-aliases/CameraProjection.md)

`'perspective'`, the default, or `'orthographic'`.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
camera.setProjection('orthographic');
```

***

### translate()

> **translate**(`dx`, `dy`): `void`

Defined in: [camera.ts:543](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L543)

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

Defined in: [camera.ts:614](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L614)

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

Defined in: [camera.ts:565](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L565)

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

Defined in: [camera.ts:509](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L509)

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

Defined in: [camera.ts:647](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/camera.ts#L647)

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
