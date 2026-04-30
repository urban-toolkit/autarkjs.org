[**autk-db**](../index.md)

***

[autk-db](../globals.md) / OsmLoadTimings

# Interface: OsmLoadTimings

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:36](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L36)

## Properties

### boundariesProcessingMs

> **boundariesProcessingMs**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:44](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L44)

Time in ms to insert boundary elements into DuckDB (excludes HTTP download).

***

### boundaryElementCount

> **boundaryElementCount**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:40](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L40)

Number of elements in the boundary dataset.

***

### layers

> **layers**: [`LayerLoadTimings`](LayerLoadTimings.md)[]

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:46](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L46)

Per-layer timing and feature count details (populated when autoLoadLayers is used).

***

### osmDataProcessingMs

> **osmDataProcessingMs**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:42](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L42)

Time in ms to insert OSM elements into DuckDB (excludes HTTP download).

***

### osmElementCount

> **osmElementCount**: `number`

Defined in: [autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts:38](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-db/src/spatial/use-cases/load-osm-from-overpass-api/interfaces.ts#L38)

Number of OSM elements (nodes + ways + relations) in the main dataset.
