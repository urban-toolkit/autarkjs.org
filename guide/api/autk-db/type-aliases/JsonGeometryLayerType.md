[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonGeometryLayerType

# Type Alias: JsonGeometryLayerType

> **JsonGeometryLayerType** = `Extract`\<[`LayerType`](LayerType.md), `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:60](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-json/interfaces.ts#L60)

Restricts JSON-derived geometry to vector layer families supported by the database.

Only `points`, `polylines`, and `polygons` are valid layer types for JSON data sources.
