[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / UpdateThematicParams

# Interface: UpdateThematicParams

Defined in: [autk-map/src/api.ts:145](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/api.ts#L145)

Parameters for updating a layer's thematic (color-mapped) values.

The supplied collection is used to recompute thematic values for an existing
layer. Correct alignment depends on how the target layer matches source data,
so callers should preserve stable feature ordering or identifiers when
preparing update collections.

## Properties

### collection

> **collection**: `FeatureCollection`

Defined in: [autk-map/src/api.ts:153](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/api.ts#L153)

Source feature collection used to derive thematic values.

Prefer the original loaded feature collection, or one with stable
matching `feature.id` values, so thematic values align correctly to the
rendered components.

***

### property

> **property**: `string`

Defined in: [autk-map/src/api.ts:157](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-map/src/api.ts#L157)

Dot-path accessor resolved from each item in the collection.
