[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / OsmLoadTimings

# Interface: OsmLoadTimings

Defined in: [use-cases/load-osm-overpass/interfaces.ts:38](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L38)

## Properties

### boundariesProcessingMs

> **boundariesProcessingMs**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:46](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L46)

Time in ms to insert boundary elements into DuckDB (excludes HTTP download).

***

### boundaryElementCount

> **boundaryElementCount**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:42](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L42)

Number of elements in the boundary dataset.

***

### layers

> **layers**: [`LayerLoadTimings`](LayerLoadTimings.md)[]

Defined in: [use-cases/load-osm-overpass/interfaces.ts:48](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L48)

Per-layer timing and feature count details (populated when autoLoadLayers is used).

***

### osmDataProcessingMs

> **osmDataProcessingMs**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:44](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L44)

Time in ms to insert OSM elements into DuckDB (excludes HTTP download).

***

### osmElementCount

> **osmElementCount**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:40](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L40)

Number of OSM elements (nodes + ways + relations) in the main dataset.
