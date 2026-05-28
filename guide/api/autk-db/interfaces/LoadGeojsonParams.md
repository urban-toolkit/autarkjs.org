[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / LoadGeojsonParams

# Interface: LoadGeojsonParams

Defined in: [use-cases/load-geojson/interfaces.ts:7](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L7)

Parameters for loading a GeoJSON FeatureCollection into DuckDB as a spatial layer.

## Properties

### boundingBox?

> `optional` **boundingBox?**: `BoundingBox`

Defined in: [use-cases/load-geojson/interfaces.ts:17](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L17)

Optional bounding box to clip or intersect geometries during import.

***

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [use-cases/load-geojson/interfaces.ts:15](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L15)

CRS of the input GeoJSON data (source). Defaults to EPSG:4326.

***

### geojsonFileUrl?

> `optional` **geojsonFileUrl?**: `string`

Defined in: [use-cases/load-geojson/interfaces.ts:9](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L9)

URL pointing to a GeoJSON FeatureCollection file.

***

### geojsonObject?

> `optional` **geojsonObject?**: `FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

Defined in: [use-cases/load-geojson/interfaces.ts:11](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L11)

In-memory GeoJSON FeatureCollection object.

***

### layerType?

> `optional` **layerType?**: `LayerType`

Defined in: [use-cases/load-geojson/interfaces.ts:23](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L23)

Explicitly set the layer type. If omitted, the type is auto-detected from the first feature's geometry.

***

### outputTableName

> **outputTableName**: `string`

Defined in: [use-cases/load-geojson/interfaces.ts:13](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L13)

Desired output table name to create in DuckDB.

***

### workspace?

> `optional` **workspace?**: `string`

Defined in: [use-cases/load-geojson/interfaces.ts:19](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-db/src/use-cases/load-geojson/interfaces.ts#L19)

Optional workspace (schema) name. Defaults to `autk` when omitted.
