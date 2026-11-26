# Interface: MapOptions

Defined in: [autk-map/src/api.ts:37](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L37)

Construction options for a map instance.

## Properties

### crs?

> `optional` **crs?**: `string`

Defined in: [autk-map/src/api.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L39)

Workspace CRS understood by Proj4js; defaults to the same EPSG:3395 CRS as AutkDb.

***

### showUi?

> `optional` **showUi?**: `boolean`

Defined in: [autk-map/src/api.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/api.ts#L41)

Whether floating UI controls are drawn. Defaults to `true`; the credit strip always remains.
