# Type Alias: OsmTagSet

> **OsmTagSet** = `object`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:80](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L80)

One geometry family; no centroid conversion or automatic multi-layer splitting.

## Properties

### name

> **name**: `string`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L81)

***

### tags

> **tags**: [`OsmTagFilter`](OsmTagFilter.md)[]

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:83](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L83)

***

### type

> **type**: `"points"` \| `"polylines"` \| `"polygons"`

Defined in: [autk-db/src/use-cases/load-osm-overpass/interfaces.ts:82](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-osm-overpass/interfaces.ts#L82)
