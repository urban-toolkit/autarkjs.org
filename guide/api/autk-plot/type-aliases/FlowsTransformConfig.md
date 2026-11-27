# Type Alias: FlowsTransformConfig

> **FlowsTransformConfig** = `object`

Defined in: [api.ts:454](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L454)

Flows preset config.

Reads an ordered list of categorical columns from `PlotConfig.attributes.axis`
(at least two). Every row follows a path through one category per column;
consecutive steps of equal paths are reduced into links, and categories into
nodes. Each row contributes one segment per step, so rows and links relate
`N:N` through the segments. Use `'@transform'` after the columns to mark the output slot.

## Properties

### options?

> `optional` **options?**: `object`

Defined in: [api.ts:456](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L456)

#### reducer?

> `optional` **reducer?**: [`TransformReducer`](TransformReducer.md)

Reducer applied within each link and node. Defaults to `'count'`.

#### value?

> `optional` **value?**: `string`

Feature property to aggregate for non-count reducers. Required when `reducer` is not `'count'`.

***

### preset

> **preset**: `"flows"`

Defined in: [api.ts:455](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/api.ts#L455)
