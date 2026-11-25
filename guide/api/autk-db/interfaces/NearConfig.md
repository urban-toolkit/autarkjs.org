[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / NearConfig

# Interface: NearConfig

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:20](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/spatial-join/interfaces.ts#L20)

Configuration for the NEAR spatial predicate.

When provided, the spatial join finds features within the specified distance
rather than using geometric intersection.

## Example

```ts
const near: NearConfig = { distance: 1000, useCentroid: true };
```

## Properties

### distance

> **distance**: `number`

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:22](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/spatial-join/interfaces.ts#L22)

Maximum search distance in workspace CRS units (metres in the default EPSG:3395).

***

### useCentroid?

> `optional` **useCentroid?**: `boolean`

Defined in: [autk-db/src/use-cases/spatial-join/interfaces.ts:24](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-db/src/use-cases/spatial-join/interfaces.ts#L24)

When `true`, uses centroid-to-centroid distance. Defaults to `true`.
