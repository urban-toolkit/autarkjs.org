[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / TableSource

# Type Alias: TableSource

> **TableSource** = `"osm"` \| `"geojson"` \| `"csv"` \| `"json"` \| `"geotiff"` \| `"user"`

Defined in: [interfaces.ts:18](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/interfaces.ts#L18)

Supported origins for tables registered in the database workspace.

Distinguishes built-in loaders from user-provided tables so callers can branch on import behavior.
