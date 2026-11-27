# Interface: RenderLayer

Defined in: [api.ts:18](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-compute/src/api.ts#L18)

Describes one geometry layer rendered for each sampled viewpoint.

## Properties

### collection

> **collection**: `FeatureCollection`

Defined in: [api.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-compute/src/api.ts#L23)

GeoJSON collection triangulated for this layer.

***

### id

> **id**: `string`

Defined in: [api.ts:20](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-compute/src/api.ts#L20)

Unique layer identifier used to scope aggregation results.

***

### objectIdProperty?

> `optional` **objectIdProperty?**: `string`

Defined in: [api.ts:29](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-compute/src/api.ts#L29)

Optional feature property used as a stable object identifier.

***

### type

> **type**: `LayerType`

Defined in: [api.ts:26](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-compute/src/api.ts#L26)

Layer type used for triangulation and aggregation buckets.
