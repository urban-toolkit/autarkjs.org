[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / TableSource

# Type Alias: TableSource

> **TableSource** = `"osm"` \| `"geojson"` \| `"csv"` \| `"json"` \| `"geotiff"` \| `"user"`

Defined in: [interfaces.ts:18](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/interfaces.ts#L18)

Supported origins for tables registered in the database workspace.

Distinguishes built-in loaders from user-provided tables so callers can branch on import behavior.
