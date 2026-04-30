[**autk-compute**](../index.md)

***

[autk-compute](../globals.md) / RenderAggregation

# Type Alias: RenderAggregation

> **RenderAggregation** = \{ `backgroundLayerType?`: `string`; `includeBackground?`: `boolean`; `type`: `"classes"`; \} \| \{ `type`: `"objects"`; \}

Defined in: [api.ts:91](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L91)

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
