[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / TableSource

# Type Alias: TableSource

> **TableSource** = `"osm"` \| `"geojson"` \| `"csv"` \| `"json"` \| `"geotiff"` \| `"user"`

Defined in: [interfaces.ts:18](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-db/src/interfaces.ts#L18)

Supported origins for tables registered in the database workspace.

Distinguishes built-in loaders from user-provided tables so callers can branch on import behavior.
