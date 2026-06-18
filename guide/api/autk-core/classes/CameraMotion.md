[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / CameraMotion

# Class: CameraMotion

Defined in: [camera-motion.ts:61](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L61)

Fluent builder for sequential camera animations.

Each builder method appends a step to an internal queue. Call
[CameraMotion.play](#play) to execute the queued steps in order against a
camera instance. The queue is not cleared after playback, so repeated calls
replay the same sequence unless a new `CameraMotion` is created.

Pitch, yaw, and zoom are applied relative to the scene center, defined as
the intersection of the camera's forward ray with the ground plane at `z = 0`.
Roll keeps the eye position and look-at target fixed while rotating the up
vector around the forward axis. All steps use ease-in-out interpolation.

## Example

```ts
await new CameraMotion()
    .zoomOut(4, 2.5)        // 4× zoom out over 2.5 s
    .pitch(-45, 2.5, 2000)  // tilt 45° over 2.5 s, pan 2000 units forward
    .zoomIn(1.5, 2)         // 1.5× zoom in over 2 s
    .play(map.camera);
```

## Constructors

### Constructor

> **new CameraMotion**(): `CameraMotion`

#### Returns

`CameraMotion`

## Methods

### pitch()

> **pitch**(`degrees`, `durationSec`, `pan?`): `this`

Defined in: [camera-motion.ts:106](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L106)

Pitches the camera around its right axis, keeping the scene center anchored.

#### Parameters

##### degrees

`number`

Pitch angle in degrees.

##### durationSec

`number`

Animation duration in seconds.

##### pan?

`number` = `0`

Optional forward translation of the orbit center in world units.

#### Returns

`this`

The motion builder for fluent chaining.

#### Throws

Never throws.

#### Example

```ts
new CameraMotion().pitch(-45, 2.5, 2000).play(camera);
```

***

### play()

> **play**(`camera`): `Promise`\<`void`\>

Defined in: [camera-motion.ts:152](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L152)

Executes all queued motion steps sequentially against a camera.

The step queue is not cleared — calling `play()` again replays the same sequence.

#### Parameters

##### camera

[`Camera`](Camera.md)

Camera instance to animate.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the final step completes.

#### Throws

Never throws. Step execution errors are silently absorbed.

#### Example

```ts
await new CameraMotion().zoomOut(2, 3).yaw(90, 2).play(camera);
```

***

### roll()

> **roll**(`degrees`, `durationSec`): `this`

Defined in: [camera-motion.ts:136](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L136)

Rolls the camera around its forward axis, preserving eye and look-at.

#### Parameters

##### degrees

`number`

Roll angle in degrees.

##### durationSec

`number`

Animation duration in seconds.

#### Returns

`this`

The motion builder for fluent chaining.

#### Throws

Never throws.

#### Example

```ts
new CameraMotion().roll(15, 1).play(camera);
```

***

### yaw()

> **yaw**(`degrees`, `durationSec`): `this`

Defined in: [camera-motion.ts:121](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L121)

Yaws the camera around the world Z axis, keeping distance to center.

#### Parameters

##### degrees

`number`

Yaw angle in degrees.

##### durationSec

`number`

Animation duration in seconds.

#### Returns

`this`

The motion builder for fluent chaining.

#### Throws

Never throws.

#### Example

```ts
new CameraMotion().yaw(90, 3).play(camera);
```

***

### zoomIn()

> **zoomIn**(`factor`, `durationSec`): `this`

Defined in: [camera-motion.ts:90](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L90)

Zooms the camera in multiplicatively over a duration.

#### Parameters

##### factor

`number`

Multiplicative zoom-in factor (e.g. `2` halves distance).

##### durationSec

`number`

Animation duration in seconds.

#### Returns

`this`

The motion builder for fluent chaining.

#### Throws

Never throws.

#### Example

```ts
new CameraMotion().zoomIn(1.5, 2).play(camera);
```

***

### zoomOut()

> **zoomOut**(`factor`, `durationSec`): `this`

Defined in: [camera-motion.ts:75](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-core/src/camera-motion.ts#L75)

Zooms the camera out multiplicatively over a duration.

#### Parameters

##### factor

`number`

Multiplicative zoom-out factor (e.g. `2` doubles distance).

##### durationSec

`number`

Animation duration in seconds.

#### Returns

`this`

The motion builder for fluent chaining.

#### Throws

Never throws.

#### Example

```ts
new CameraMotion().zoomOut(4, 2.5).play(camera);
```
