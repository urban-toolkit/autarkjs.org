[**autk-plot**](../index.md)

***

[autk-plot](../globals.md) / SelectionData

# Interface: SelectionData

Defined in: [autk-core/src/event-emitter.ts:20](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/event-emitter.ts#L20)

Base payload shared by selection-driven visualization events.

Packages such as `autk-map` and `autk-plot` extend or alias this shape so
selection interactions follow a consistent contract across the toolkit.

## Properties

### selection

> **selection**: `number`[]

Defined in: [autk-core/src/event-emitter.ts:22](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/event-emitter.ts#L22)

Source feature indices included in the current selection.
