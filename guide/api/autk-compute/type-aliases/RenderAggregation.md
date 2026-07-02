[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderAggregation

# Type Alias: RenderAggregation

> **RenderAggregation** = \{ `backgroundLayerType?`: `string`; `includeBackground?`: `boolean`; `type`: `"classes"`; \} \| \{ `type`: `"objects"`; \}

Defined in: [api.ts:91](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-compute/src/api.ts#L91)

Controls how sampled render results are reduced back onto the viewpoints collection.

## Union Members

### Type Literal

\{ `backgroundLayerType?`: `string`; `includeBackground?`: `boolean`; `type`: `"classes"`; \}

#### backgroundLayerType?

> `optional` **backgroundLayerType?**: `string`

Layer type used for the transparent render background.

##### Default

```ts
'background'
```

#### includeBackground?

> `optional` **includeBackground?**: `boolean`

Count the transparent render background as an extra bucket.

#### type

> **type**: `"classes"`

Aggregate pixels by layer type.

***

### Type Literal

\{ `type`: `"objects"`; \}

#### type

> **type**: `"objects"`

Aggregate per-object visibility metrics.
