[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadOsmParams

# Type Alias: LoadOsmParams

> **LoadOsmParams** = `object`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:49](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L49)

## Properties

### autoLoadLayers

> **autoLoadLayers**: `object`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:51](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L51)

#### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

CRS of the OSM input data (source). Defaults to EPSG:4326.

#### layers

> **layers**: `LayerType`[]

***

### forceRefresh?

> `optional` **forceRefresh?**: `boolean`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:63](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L63)

When true, bypasses the cached Overpass response and fetches fresh data.

***

### onProgress?

> `optional` **onProgress?**: [`OnLoadingProgress`](OnLoadingProgress.md)

Defined in: [use-cases/load-osm-overpass/interfaces.ts:65](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L65)

***

### outputTableName?

> `optional` **outputTableName?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:50](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L50)

***

### pbfFileUrl?

> `optional` **pbfFileUrl?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:61](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L61)

If provided, OSM data is loaded from this `.osm.pbf` file instead of the Overpass API.

***

### queryArea

> **queryArea**: `object`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:56](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L56)

#### areas

> **areas**: `string`[]

#### geocodeArea

> **geocodeArea**: `string`

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:64](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L64)
