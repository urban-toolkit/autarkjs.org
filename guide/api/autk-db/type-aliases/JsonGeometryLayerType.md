[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonGeometryLayerType

# Type Alias: JsonGeometryLayerType

> **JsonGeometryLayerType** = `Extract`\<`LayerType`, `"points"` \| `"polylines"` \| `"polygons"`\>

Defined in: [use-cases/load-json/interfaces.ts:60](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/use-cases/load-json/interfaces.ts#L60)

Restricts JSON-derived geometry to vector layer families supported by the database.

Only `points`, `polylines`, and `polygons` are valid layer types for JSON data sources.
