# Type Alias: OsmTagSet

> **OsmTagSet** = `object`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:80](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L80)

One geometry family; no centroid conversion or automatic multi-layer splitting.

## Properties

### name

> **name**: `string`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L81)

***

### tags

> **tags**: [`OsmTagFilter`](OsmTagFilter.md)[]

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:83](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L83)

***

### type

> **type**: `"points"` \| `"polylines"` \| `"polygons"`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:82](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L82)
