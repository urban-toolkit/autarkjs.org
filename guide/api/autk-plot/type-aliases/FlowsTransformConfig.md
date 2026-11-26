# Type Alias: FlowsTransformConfig

> **FlowsTransformConfig** = `object`

Defined in: [api.ts:437](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L437)

Flows preset config.

Reads an ordered list of categorical columns from `PlotConfig.attributes.axis`
(at least two). Every row follows a path through one category per column;
consecutive steps of equal paths are reduced into links, and categories into
nodes. Each row contributes one segment per step, so rows and links relate
`N:N` through the segments. Use `'@transform'` after the columns to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:439](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L439)

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each link and node. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for non-count reducers. Required when `reducer` is not `'count'`.

***

### preset

> **preset**: `"flows"`

Defined in: [api.ts:438](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/api.ts#L438)
