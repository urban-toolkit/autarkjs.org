[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / SelectionData

# Interface: SelectionData

Defined in: [event-emitter.ts:20](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-core/src/event-emitter.ts#L20)

Base payload shared by selection-driven visualization events.

Packages such as `@urban-toolkit/autk-map` and `@urban-toolkit/autk-plot` extend or alias this shape so
selection interactions follow a consistent contract across the toolkit.

## Properties

### selection

> **selection**: `number`[]

Defined in: [event-emitter.ts:22](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-core/src/event-emitter.ts#L22)

Source feature indices included in the current selection.
