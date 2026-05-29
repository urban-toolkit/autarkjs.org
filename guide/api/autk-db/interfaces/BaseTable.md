[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / BaseTable

# Interface: BaseTable

Defined in: [interfaces.ts:49](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L49)

Shared metadata stored for every table tracked by the workspace.

Provides the common contract used by all table variants regardless of source or geometry support.

## Extended by

- [`UserTable`](UserTable.md)
- [`OsmTable`](OsmTable.md)
- [`OsmLayerTable`](OsmLayerTable.md)
- [`GeojsonTable`](GeojsonTable.md)
- [`CsvTable`](CsvTable.md)
- [`JsonTable`](JsonTable.md)
- [`GeotiffTable`](GeotiffTable.md)

## Properties

### bands?

> `optional` **bands?**: [`RasterBandMetadata`](RasterBandMetadata.md)[]

Defined in: [interfaces.ts:59](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L59)

Optional raster band metadata when the table stores raster data.

***

### boundingBox?

> `optional` **boundingBox?**: `BoundingBox`

Defined in: [interfaces.ts:57](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L57)

Cached layer extent when the table contains geometry data.

***

### columns

> **columns**: [`Column`](Column.md)[]

Defined in: [interfaces.ts:55](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L55)

Flat schema information returned by DuckDB.

***

### name

> **name**: `string`

Defined in: [interfaces.ts:53](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L53)

Unique table name within the active workspace.

***

### source

> **source**: [`TableSource`](../type-aliases/TableSource.md)

Defined in: [interfaces.ts:51](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L51)

Declares how the table entered the database.
