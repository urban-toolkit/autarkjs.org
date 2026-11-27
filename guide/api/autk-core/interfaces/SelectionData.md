# Interface: SelectionData

Defined in: [event-emitter.ts:20](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/event-emitter.ts#L20)

Base payload shared by selection-driven visualization events.

Packages such as `@urban-toolkit/autk-map` and `@urban-toolkit/autk-plot` extend or alias this shape so
selection interactions follow a consistent contract across the toolkit.

## Properties

### selection

> **selection**: `number`[]

Defined in: [event-emitter.ts:22](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-core/src/event-emitter.ts#L22)

Source feature indices included in the current selection.
