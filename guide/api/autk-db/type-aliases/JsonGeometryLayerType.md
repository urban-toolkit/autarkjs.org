# Type Alias: JsonGeometryLayerType

> **JsonGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:56](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L56)

Restricts JSON-derived geometry to vector layer families supported by the database.

Only `points`, `polylines`, and `polygons` are valid layer types for JSON data sources.
