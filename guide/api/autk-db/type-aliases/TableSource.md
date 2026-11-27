# Type Alias: TableSource

> **TableSource** = `"osm"` \| `"geojson"` \| `"csv"` \| `"json"` \| `"geotiff"` \| `"user"`

Defined in: [autk-db/src/interfaces.ts:18](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L18)

Supported origins for tables registered in the database workspace.

Distinguishes built-in loaders from user-provided tables so callers can branch on import behavior.
