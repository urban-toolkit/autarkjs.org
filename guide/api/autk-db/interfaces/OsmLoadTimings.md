[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / OsmLoadTimings

# Interface: OsmLoadTimings

Defined in: [use-cases/load-osm-overpass/interfaces.ts:36](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L36)

## Properties

### boundariesProcessingMs

> **boundariesProcessingMs**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:44](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L44)

Time in ms to insert boundary elements into DuckDB (excludes HTTP download).

***

### boundaryElementCount

> **boundaryElementCount**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:40](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L40)

Number of elements in the boundary dataset.

***

### layers

> **layers**: [`LayerLoadTimings`](LayerLoadTimings.md)[]

Defined in: [use-cases/load-osm-overpass/interfaces.ts:46](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L46)

Per-layer timing and feature count details (populated when autoLoadLayers is used).

***

### osmDataProcessingMs

> **osmDataProcessingMs**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:42](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L42)

Time in ms to insert OSM elements into DuckDB (excludes HTTP download).

***

### osmElementCount

> **osmElementCount**: `number`

Defined in: [use-cases/load-osm-overpass/interfaces.ts:38](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L38)

Number of OSM elements (nodes + ways + relations) in the main dataset.
