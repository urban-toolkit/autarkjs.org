[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadOsmParams

# Type Alias: LoadOsmParams

> **LoadOsmParams** = `object`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:121](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L121)

## Properties

### autoLoadLayers

> **autoLoadLayers**: `object`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:123](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L123)

#### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

CRS of the OSM input data (source). Defaults to EPSG:4326.

#### layers

> **layers**: `LayerType`[]

Public layers to retain; may be empty for tag-only loads. Surface is always constructed as a workspace mask, hidden unless requested.

***

### forceRefresh?

> `optional` **forceRefresh?**: `boolean`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:137](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L137)

When true, bypasses the cached Overpass response and fetches fresh data.

***

### onProgress?

> `optional` **onProgress?**: [`OnLoadingProgress`](OnLoadingProgress.md)

Defined in: [use-cases/load-osm-overpass/interfaces.ts:139](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L139)

***

### outputTableName?

> `optional` **outputTableName?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:122](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L122)

***

### pbfFileUrl?

> `optional` **pbfFileUrl?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:135](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L135)

If provided, OSM data is loaded from this `.osm.pbf` file instead of the Overpass API.

***

### queryArea

> **queryArea**: [`OsmQueryArea`](OsmQueryArea.md)

Defined in: [use-cases/load-osm-overpass/interfaces.ts:131](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L131)

Named boundaries or a WGS84 bbox. Surface excludes sea when coastline reconstruction succeeds;
otherwise the full query area is used with a warning. Buildings retain complete original parts.

***

### tagSets?

> `optional` **tagSets?**: [`OsmTagSet`](OsmTagSet.md)[]

Defined in: [use-cases/load-osm-overpass/interfaces.ts:133](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L133)

Overpass-only tag-selected layers, clipped to the mandatory surface. Each set requires one geometry type.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:138](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L138)
