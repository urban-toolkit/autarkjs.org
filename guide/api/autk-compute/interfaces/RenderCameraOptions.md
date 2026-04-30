[**autk-compute**](../index.md)

***

[autk-compute](../globals.md) / RenderCameraOptions

# Interface: RenderCameraOptions

Defined in: [api.ts:74](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L74)

Optional camera controls for the render pipeline.

## Properties

### clip?

> `optional` **clip?**: `object`

Defined in: [api.ts:79](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L79)

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

Defined in: [api.ts:76](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L76)

Horizontal field of view in degrees.

#### Default

```ts
90
```
