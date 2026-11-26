# Type Alias: HierarchyTransformConfig

> **HierarchyTransformConfig** = `object`

Defined in: [api.ts:349](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L349)

Hierarchy preset config.

Groups rows by the categorical columns in `PlotConfig.attributes.axis`, from
the top level (`axis[0]`) down: e.g. group → category. Every level is a
partition of the level below, so features, leaves, and parents relate `N:1`
along the whole chain. Use `'@transform'` after the levels to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:351](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L351)

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each node. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for non-count reducers. Required when `reducer` is not `'count'`.

***

### preset

> **preset**: `"hierarchy"`

Defined in: [api.ts:350](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L350)
