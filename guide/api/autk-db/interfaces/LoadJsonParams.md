# Interface: LoadJsonParams

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:67](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L67)

Describes the inputs required to load JSON data into DuckDB.

Provide either `jsonFileUrl` or `jsonObject` — not both. The `geometryColumns` field is optional and controls spatial column creation.

## Example

```ts
const params: LoadJsonParams = { jsonFileUrl: 'data.json', outputTableName: 'my_table' };
const paramsGeo: LoadJsonParams = { jsonObject: data, outputTableName: 'geo_table', geometryColumns: true };
```

## Properties

### geometryColumns?

> `optional` **geometryColumns?**: [`JsonGeometryColumns`](../type-aliases/JsonGeometryColumns.md)

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:75](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L75)

Optional geometry strategy used to create a spatial column while loading.

***

### jsonFileUrl?

> `optional` **jsonFileUrl?**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:69](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L69)

URL of the JSON file to fetch and load into DuckDB.

***

### jsonObject?

> `optional` **jsonObject?**: `unknown`[]

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:71](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L71)

In-memory JSON array to serialize and load.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:73](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L73)

Name of the output table created inside the target workspace.

***

### sourceCrs?

> `optional` **sourceCrs?**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:77](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L77)

CRS of the source coordinates or WKT. Defaults to `EPSG:4326`.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:79](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/load-json/interfaces.ts#L79)

Optional workspace override used by higher-level callers when qualifying the table name.
