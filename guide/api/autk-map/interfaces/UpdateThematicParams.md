[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateThematicParams

# Interface: UpdateThematicParams

Defined in: [autk-map/src/api.ts:160](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L160)

Parameters for updating a layer's thematic (color-mapped) values.

The supplied collection is used to recompute thematic values for an existing
layer. Correct alignment depends on how the target layer matches source data,
so callers should preserve stable feature ordering or identifiers when
preparing update collections.

## Properties

### collection

> **collection**: `FeatureCollection`

Defined in: [autk-map/src/api.ts:168](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L168)

Source feature collection used to derive thematic values.

Prefer the original loaded feature collection, or one with stable
matching `feature.id` values, so thematic values align correctly to the
rendered components.

***

### property

> **property**: `string`

Defined in: [autk-map/src/api.ts:172](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/api.ts#L172)

Dot-path accessor resolved from each item in the collection.
