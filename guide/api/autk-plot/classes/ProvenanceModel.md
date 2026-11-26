# Class: ProvenanceModel

Defined in: [provenance/model.ts:45](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L45)

Provenance graph built by `PlotBaseData` on every draw.

## Constructors

### Constructor

> **new ProvenanceModel**(`stages`, `relations`, `contributions?`, `reducer?`): `ProvenanceModel`

Defined in: [provenance/model.ts:79](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L79)

Creates a provenance graph from `D0` and the transform output.

#### Parameters

##### stages

[`ProvenanceStage`](../type-aliases/ProvenanceStage.md)[]

Stages from `D0` to the rendered rows.

##### relations

[`ProvenanceRelation`](../type-aliases/ProvenanceRelation.md)[]

Relations between consecutive stages.

##### contributions?

[`ProvenanceContribution`](../type-aliases/ProvenanceContribution.md)[] = `[]`

Unit-level contributions to rendered rows.

##### reducer?

[`TransformReducer`](../type-aliases/TransformReducer.md)

Reducer of the rendered rows, or `undefined` for one-to-one rows.

#### Returns

`ProvenanceModel`

## Accessors

### cardinalities

#### Get Signature

> **get** **cardinalities**(): `object`[]

Defined in: [provenance/model.ts:135](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L135)

Cardinality of every relation, plus the composed source-to-mark relation.

Computed once and cached; the graph only changes when marks are registered.

##### Returns

`object`[]

One entry per relation and a final `D0 → M` entry when marks exist.

***

### contributions

#### Get Signature

> **get** **contributions**(): [`ProvenanceContribution`](../type-aliases/ProvenanceContribution.md)[]

Defined in: [provenance/model.ts:119](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L119)

Unit-level contributions to rendered rows.

##### Returns

[`ProvenanceContribution`](../type-aliases/ProvenanceContribution.md)[]

***

### reducer

#### Get Signature

> **get** **reducer**(): [`TransformReducer`](../type-aliases/TransformReducer.md) \| `undefined`

Defined in: [provenance/model.ts:124](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L124)

Reducer of the rendered rows, or `undefined` when rows map one-to-one to features.

##### Returns

[`TransformReducer`](../type-aliases/TransformReducer.md) \| `undefined`

***

### relations

#### Get Signature

> **get** **relations**(): [`ProvenanceRelation`](../type-aliases/ProvenanceRelation.md)[]

Defined in: [provenance/model.ts:114](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L114)

Relations between consecutive stages.

##### Returns

[`ProvenanceRelation`](../type-aliases/ProvenanceRelation.md)[]

***

### stages

#### Get Signature

> **get** **stages**(): [`ProvenanceStage`](../type-aliases/ProvenanceStage.md)[]

Defined in: [provenance/model.ts:109](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L109)

Stages in pipeline order.

##### Returns

[`ProvenanceStage`](../type-aliases/ProvenanceStage.md)[]

## Methods

### composed()

> **composed**(): [`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

Defined in: [provenance/model.ts:197](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L197)

Composes all relations into a single relation from `D0` to the last stage.

When marks render rows of several stages, the relation to `M` is composed
with the path to each of those stages and the results are merged.

#### Returns

[`ProvenancePair`](../type-aliases/ProvenancePair.md)[]

`R_{0,last} = R_{n-1,n} ∘ … ∘ R_{01}`.

***

### contribution()

> **contribution**(`rowId`, `selected`): [`MarkContribution`](../type-aliases/MarkContribution.md)

Defined in: [provenance/model.ts:286](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L286)

Computes the share of a rendered row produced by the selected features.

The row reducer is applied to the selected units only. For count and sum
the result is a part of the row value; for avg, min, and max it is the
statistic of the selected subset.

#### Parameters

##### rowId

`string`

Rendered row id.

##### selected

`ReadonlySet`\<`number`\>

Selected source feature indices.

#### Returns

[`MarkContribution`](../type-aliases/MarkContribution.md)

Selected and total units and values of the row.

***

### direct()

> **direct**(`features`): [`ProvenancePath`](../type-aliases/ProvenancePath.md)

Defined in: [provenance/model.ts:220](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L220)

Direct query: follows source features through every stage.

#### Parameters

##### features

`number`[]

Source feature indices.

#### Returns

[`ProvenancePath`](../type-aliases/ProvenancePath.md)

Entities reached in each stage, from `D0` to the last stage.

***

### featureShares()

> **featureShares**(`rowIds`): [`FeatureShare`](../type-aliases/FeatureShare.md)[]

Defined in: [provenance/model.ts:343](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L343)

Computes, for each source feature, the share of its units covered by the
selected rendered rows (inverse direction of `contribution`).

Shares are computed within each stage and unit group: when rendered rows
span several stages (e.g. Sankey links and nodes), or a stage holds one
unit per column (Sankey nodes), each stage and group counts the feature's
units on its own. A feature is fully covered when any selected group
covers all its units there; the highest share is reported.

#### Parameters

##### rowIds

`Iterable`\<`string`\>

Selected rendered row ids.

#### Returns

[`FeatureShare`](../type-aliases/FeatureShare.md)[]

Shares of the features with at least one unit in the selected rows.

***

### inverse()

> **inverse**(`ids`): [`ProvenancePath`](../type-aliases/ProvenancePath.md)

Defined in: [provenance/model.ts:250](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L250)

Inverse query: follows entities of the last stage back to `D0`.

#### Parameters

##### ids

`string`[]

Entity ids of the last stage (marks once registered).

#### Returns

[`ProvenancePath`](../type-aliases/ProvenancePath.md)

Entities reached in each stage, from the last stage to `D0`.

***

### registerMarks()

> **registerMarks**(`rowIds`): `void`

Defined in: [provenance/model.ts:160](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/model.ts#L160)

Registers the rendered marks as stage `M` and the relation from the
rendered rows to them.

Replaces any previous registration, since every draw rebuilds the marks.

#### Parameters

##### rowIds

`string`[]

Row id bound to each rendered mark.

#### Returns

`void`
