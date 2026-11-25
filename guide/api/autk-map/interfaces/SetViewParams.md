[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / SetViewParams

# Interface: SetViewParams

Defined in: [autk-map/src/api.ts:48](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L48)

Geographic navigation independent of imagery, vectors, and elevation sources.

## Properties

### center

> **center**: `object`

Defined in: [autk-map/src/api.ts:50](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L50)

WGS84 center in named latitude/longitude degrees, regardless of workspace CRS.

#### latitude

> **latitude**: `number`

#### longitude

> **longitude**: `number`

***

### projection?

> `optional` **projection?**: `CameraProjection`

Defined in: [autk-map/src/api.ts:54](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L54)

Projection for the new view. Omit to keep the persistent projection.

***

### zoom?

> `optional` **zoom?**: `number`

Defined in: [autk-map/src/api.ts:52](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L52)

Web Mercator zoom using a 256-pixel reference tile; defaults to 12.
