[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / OsmLayerTable

# Interface: OsmLayerTable

Defined in: [interfaces.ts:79](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L79)

OSM-derived layer with an explicit geometry type for rendering and queries.

Used after OSM data has been classified into a concrete map layer.

## Extends

- [`BaseTable`](BaseTable.md)

## Properties

### bands?

> `optional` **bands?**: [`RasterBandMetadata`](RasterBandMetadata.md)[]

Defined in: [interfaces.ts:59](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L59)

Optional raster band metadata when the table stores raster data.

#### Inherited from

[`BaseTable`](BaseTable.md).[`bands`](BaseTable.md#bands)

***

### boundingBox?

> `optional` **boundingBox?**: `BoundingBox`

Defined in: [interfaces.ts:57](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L57)

Cached layer extent when the table contains geometry data.

#### Inherited from

[`BaseTable`](BaseTable.md).[`boundingBox`](BaseTable.md#boundingbox)

***

### columns

> **columns**: [`Column`](Column.md)[]

Defined in: [interfaces.ts:55](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L55)

Flat schema information returned by DuckDB.

#### Inherited from

[`BaseTable`](BaseTable.md).[`columns`](BaseTable.md#columns)

***

### name

> **name**: `string`

Defined in: [interfaces.ts:53](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L53)

Unique table name within the active workspace.

#### Inherited from

[`BaseTable`](BaseTable.md).[`name`](BaseTable.md#name)

***

### source

> **source**: `"osm"`

Defined in: [interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L81)

Marks the table as originating from the OSM loader.

#### Overrides

[`BaseTable`](BaseTable.md).[`source`](BaseTable.md#source)

***

### type

> **type**: `LayerType`

Defined in: [interfaces.ts:83](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L83)

Geometry category used for rendering, styling, and spatial operations.
