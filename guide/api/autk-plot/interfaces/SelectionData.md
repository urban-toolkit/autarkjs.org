[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / SelectionData

# Interface: SelectionData

Defined in: autk-core/dist/src/event-emitter.d.ts:18

Base payload shared by selection-driven visualization events.

Packages such as `@urban-toolkit/autk-map` and `@urban-toolkit/autk-plot` extend or alias this shape so
selection interactions follow a consistent contract across the toolkit.

## Properties

### selection

> **selection**: `number`[]

Defined in: autk-core/dist/src/event-emitter.d.ts:20

Source feature indices included in the current selection.
