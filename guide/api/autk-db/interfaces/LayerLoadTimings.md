[**autk-db**](../index.md)

***

[autk-db](../globals.md) / LayerLoadTimings

# Interface: LayerLoadTimings

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:27](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L27)

## Properties

### featureCount

> **featureCount**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:33](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L33)

Number of GeoJSON features in the loaded layer.

***

### layerName

> **layerName**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:28](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L28)

***

### layerType

> **layerType**: `string`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:29](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L29)

***

### loadMs

> **loadMs**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:31](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L31)

Time in ms to run the SQL query that extracts this layer from the OSM table (excludes HTTP).
