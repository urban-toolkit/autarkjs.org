[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonGeometryLayerType

# Type Alias: JsonGeometryLayerType

> **JsonGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [use-cases/load-json/interfaces.ts:60](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/use-cases/load-json/interfaces.ts#L60)

Restricts JSON-derived geometry to vector layer families supported by the database.

Only `points`, `polylines`, and `polygons` are valid layer types for JSON data sources.
