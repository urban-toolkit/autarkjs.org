[**autk-db**](../index.md)

***

[autk-db](../globals.md) / LoadCustomLayerParams

# Interface: LoadCustomLayerParams

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:5](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L5)

## Properties

### boundingBox?

> `optional` **boundingBox?**: [`BoundingBox`](BoundingBox.md)

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:10](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L10)

***

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L9)

***

### geojsonFileUrl?

> `optional` **geojsonFileUrl?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:6](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L6)

***

### geojsonObject?

> `optional` **geojsonObject?**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L7)

***

### layerType?

> `optional` **layerType?**: [`LayerType`](../type-aliases/LayerType.md)

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L13)

Explicitly set the layer type. If omitted, auto-detected from the first feature's geometry.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:8](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L8)

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-custom-layer/interfaces.ts#L11)
