[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderViewSampling

# Interface: RenderViewSampling

Defined in: [api.ts:35](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-compute/src/api.ts#L35)

Controls how camera viewpoints are sampled from each derived origin.

## Properties

### azimuthOffsetDeg?

> `optional` **azimuthOffsetDeg?**: `number`

Defined in: [api.ts:40](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-compute/src/api.ts#L40)

Starting azimuth in degrees for the first sample.

#### Default

```ts
0
```

***

### directions?

> `optional` **directions?**: `number`

Defined in: [api.ts:37](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-compute/src/api.ts#L37)

Number of horizontal render directions per feature; values below 1 are clamped to 1.

***

### pitchDeg?

> `optional` **pitchDeg?**: `number`

Defined in: [api.ts:43](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-compute/src/api.ts#L43)

Shared vertical pitch in degrees applied to every sample.

#### Default

```ts
0
```
