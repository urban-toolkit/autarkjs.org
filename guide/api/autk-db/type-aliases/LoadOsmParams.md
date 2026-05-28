[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadOsmParams

# Type Alias: LoadOsmParams

> **LoadOsmParams** = `object`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:49](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L49)

## Properties

### autoLoadLayers?

> `optional` **autoLoadLayers?**: `object`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:51](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L51)

#### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

CRS of the OSM input data (source). Defaults to EPSG:4326.

#### dropOsmTable

> **dropOsmTable**: `boolean`

#### layers

> **layers**: [`LayerType`](LayerType.md)[]

***

### forceRefresh?

> `optional` **forceRefresh?**: `boolean`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:64](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L64)

When true, bypasses the cached Overpass response and fetches fresh data.

***

### onProgress?

> `optional` **onProgress?**: [`OnLoadingProgress`](OnLoadingProgress.md)

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:66](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L66)

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:50](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L50)

***

### pbfFileUrl?

> `optional` **pbfFileUrl?**: `string`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:62](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L62)

If provided, OSM data is loaded from this `.osm.pbf` file instead of the Overpass API.

***

### queryArea

> **queryArea**: `object`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:57](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L57)

#### areas

> **areas**: `string`[]

#### geocodeArea

> **geocodeArea**: `string`

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:65](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L65)
