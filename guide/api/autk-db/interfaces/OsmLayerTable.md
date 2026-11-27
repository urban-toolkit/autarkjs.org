# Interface: OsmLayerTable

Defined in: [autk-db/src/interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L81)

OSM-derived layer with an explicit geometry type for rendering and queries.

Used after OSM data has been classified into a concrete map layer.

## Extends

- [`BaseTable`](BaseTable.md)

## Properties

### bands?

> `optional` **bands?**: [`RasterBandMetadata`](RasterBandMetadata.md)[]

Defined in: [autk-db/src/interfaces.ts:61](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L61)

Optional raster band metadata when the table stores raster data.

#### Inherited from

[`BaseTable`](BaseTable.md).[`bands`](BaseTable.md#bands)

***

### boundingBox?

> `optional` **boundingBox?**: `BoundingBox`

Defined in: [autk-db/src/interfaces.ts:59](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L59)

Cached layer extent when the table contains geometry data.

#### Inherited from

[`BaseTable`](BaseTable.md).[`boundingBox`](BaseTable.md#boundingbox)

***

### columns

> **columns**: [`Column`](Column.md)[]

Defined in: [autk-db/src/interfaces.ts:57](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L57)

Flat schema information returned by DuckDB.

#### Inherited from

[`BaseTable`](BaseTable.md).[`columns`](BaseTable.md#columns)

***

### name

> **name**: `string`

Defined in: [autk-db/src/interfaces.ts:55](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L55)

Unique table name within the active workspace.

#### Inherited from

[`BaseTable`](BaseTable.md).[`name`](BaseTable.md#name)

***

### source

> **source**: `"osm"`

Defined in: [autk-db/src/interfaces.ts:83](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L83)

Marks the table as originating from the OSM loader.

#### Overrides

[`BaseTable`](BaseTable.md).[`source`](BaseTable.md#source)

***

### type

> **type**: `LayerType`

Defined in: [autk-db/src/interfaces.ts:85](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L85)

Geometry category used for rendering, styling, and spatial operations.
