[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / CameraState

# Interface: CameraState

Defined in: [camera.ts:58](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L58)

Serializable camera snapshot. Viewport dimensions and the map origin are not part of the snapshot.

## Extends

- [`CameraData`](CameraData.md)

## Properties

### direction

> **direction**: \[`number`, `number`, `number`\]

Defined in: [camera.ts:62](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L62)

World-space forward vector, retained separately from the rounded look-at point.

***

### eye

> **eye**: `number`[]

Defined in: [camera.ts:25](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L25)

Initial eye (camera) position in world space.

#### Inherited from

[`CameraData`](CameraData.md).[`eye`](CameraData.md#eye)

***

### far

> **far**: `number`

Defined in: [camera.ts:67](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L67)

***

### fovyRadians

> **fovyRadians**: `number`

Defined in: [camera.ts:65](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L65)

***

### framingDistance

> **framingDistance**: `number`

Defined in: [camera.ts:64](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L64)

View scale as the framing distance, independent of the stored look-at point.

***

### lookAt

> **lookAt**: `number`[]

Defined in: [camera.ts:27](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L27)

Point the camera looks at in world space.

#### Inherited from

[`CameraData`](CameraData.md).[`lookAt`](CameraData.md#lookat)

***

### near

> **near**: `number`

Defined in: [camera.ts:66](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L66)

***

### orthographicBounds

> **orthographicBounds**: \{ `bottom`: `number`; `left`: `number`; `right`: `number`; `top`: `number`; \} \| `null`

Defined in: [camera.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L69)

Optional override for a fixed top-down orthographic view.

***

### projection

> **projection**: [`CameraProjection`](../type-aliases/CameraProjection.md)

Defined in: [camera.ts:60](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L60)

Persistent projection; fixed bounds override it until the next reset.

***

### up

> **up**: `number`[]

Defined in: [camera.ts:23](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-core/src/camera.ts#L23)

World-space up vector.

#### Inherited from

[`CameraData`](CameraData.md).[`up`](CameraData.md#up)
