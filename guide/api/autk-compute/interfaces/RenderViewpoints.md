[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderViewpoints

# Interface: RenderViewpoints

Defined in: [api.ts:60](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-compute/src/api.ts#L60)

Configures the collection and strategy used to derive render viewpoints.

## Properties

### collection

> **collection**: `FeatureCollection`

Defined in: [api.ts:62](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-compute/src/api.ts#L62)

GeoJSON collection used to derive camera origins and receive results.

***

### sampling?

> `optional` **sampling?**: [`RenderViewSampling`](RenderViewSampling.md)

Defined in: [api.ts:68](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-compute/src/api.ts#L68)

Camera sampling controls applied to each derived origin.

***

### strategy?

> `optional` **strategy?**: [`RenderViewpointStrategy`](../type-aliases/RenderViewpointStrategy.md)

Defined in: [api.ts:65](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-compute/src/api.ts#L65)

Strategy used to derive origins.

#### Default

```ts
{ type: 'centroid' }
```
