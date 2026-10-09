[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LayerLoadTimings

# Interface: LayerLoadTimings

Defined in: [use-cases/load-osm-overpass/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L27)

## Properties

### featureCount

> **featureCount**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:35](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L35)

Number of GeoJSON features in the loaded layer.

***

### layerName

> **layerName**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:28](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L28)

***

### layerType

> **layerType**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L29)

***

### loadMs

> **loadMs**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:33](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L33)

Time in ms to run the SQL query that extracts this layer from the OSM table (excludes HTTP).

***

### tagSet?

> `optional` **tagSet?**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L31)

Name of the custom tag set, when this timing describes a tag-selected layer.
