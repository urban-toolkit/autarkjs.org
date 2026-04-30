[**autk-db**](../index.md)

***

[autk-db](../globals.md) / LoadOsmParams

# Type Alias: LoadOsmParams

> **LoadOsmParams** = `object`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:49](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L49)

## Properties

### autoLoadLayers?

> `optional` **autoLoadLayers?**: `object`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:51](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L51)

#### coordinateFormat

> **coordinateFormat**: `string`

#### dropOsmTable

> **dropOsmTable**: `boolean`

#### layers

> **layers**: [`LayerType`](LayerType.md)[]

***

### forceRefresh?

> `optional` **forceRefresh?**: `boolean`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:63](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L63)

When true, bypasses the cached Overpass response and fetches fresh data.

***

### onProgress?

> `optional` **onProgress?**: [`OnLoadingProgress`](OnLoadingProgress.md)

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:65](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L65)

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:50](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L50)

***

### pbfFileUrl?

> `optional` **pbfFileUrl?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:61](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L61)

If provided, OSM data is loaded from this `.osm.pbf` file instead of the Overpass API.

***

### queryArea

> **queryArea**: `object`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:56](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L56)

#### areas

> **areas**: `string`[]

#### geocodeArea

> **geocodeArea**: `string`

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:64](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L64)
