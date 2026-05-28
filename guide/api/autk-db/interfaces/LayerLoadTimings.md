[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LayerLoadTimings

# Interface: LayerLoadTimings

Defined in: [use-cases/load-osm-overpass/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L27)

## Properties

### featureCount

> **featureCount**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:33](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L33)

Number of GeoJSON features in the loaded layer.

***

### layerName

> **layerName**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:28](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L28)

***

### layerType

> **layerType**: `string`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L29)

***

### loadMs

> **loadMs**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L31)

Time in ms to run the SQL query that extracts this layer from the OSM table (excludes HTTP).
