[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadJsonParams

# Interface: LoadJsonParams

Defined in: [use-cases/load-json/interfaces.ts:71](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L71)

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

Defined in: [use-cases/load-json/interfaces.ts:79](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L79)

Optional geometry strategy used to create a spatial column while loading.

***

### jsonFileUrl?

> `optional` **jsonFileUrl?**: `string`

Defined in: [use-cases/load-json/interfaces.ts:73](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L73)

URL of the JSON file to fetch and load into DuckDB.

***

### jsonObject?

> `optional` **jsonObject?**: `unknown`[]

Defined in: [use-cases/load-json/interfaces.ts:75](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L75)

In-memory JSON array to serialize and load.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/load-json/interfaces.ts:77](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L77)

Name of the output table created inside the target workspace.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-json/interfaces.ts:81](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L81)

Optional workspace override used by higher-level callers when qualifying the table name.
