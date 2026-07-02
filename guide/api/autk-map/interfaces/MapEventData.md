[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / MapEventData

# Interface: MapEventData

Defined in: [autk-map/src/types-events.ts:37](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-events.ts#L37)

Payload emitted for feature-picking events.

The payload extends the shared selection data shape with the identifier of
the layer that produced the hit results.

## Extends

- `SelectionData`

## Properties

### layerId

> **layerId**: `string`

Defined in: [autk-map/src/types-events.ts:39](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-map/src/types-events.ts#L39)

Identifier of the layer that emitted the event.

***

### selection

> **selection**: `number`[]

Defined in: autk-core/dist/event-emitter.d.ts:20

Source feature indices included in the current selection.

#### Inherited from

`SelectionData.selection`
