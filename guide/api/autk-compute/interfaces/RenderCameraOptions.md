[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderCameraOptions

# Interface: RenderCameraOptions

Defined in: [api.ts:74](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L74)

Optional camera controls for the render pipeline.

## Properties

### clip?

> `optional` **clip?**: `object`

Defined in: [api.ts:79](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L79)

Optional clipping-plane overrides.

#### far?

> `optional` **far?**: `number`

Far clipping plane distance.

##### Default

```ts
5000
```

#### near?

> `optional` **near?**: `number`

Near clipping plane distance.

##### Default

```ts
1
```

***

### fov?

> `optional` **fov?**: `number`

Defined in: [api.ts:76](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L76)

Horizontal field of view in degrees.

#### Default

```ts
90
```
