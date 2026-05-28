[**@urban-toolkit/autk-map**](../index.md)

***

[@urban-toolkit/autk-map](../globals.md) / MapEventData

# Interface: MapEventData

Defined in: [autk-map/src/types-events.ts:37](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/types-events.ts#L37)

Payload emitted for feature-picking events.

The payload extends the shared selection data shape with the identifier of
the layer that produced the hit results.

## Extends

- `SelectionData`

## Properties

### layerId

> **layerId**: `string`

Defined in: [autk-map/src/types-events.ts:39](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-map/src/types-events.ts#L39)

Identifier of the layer that emitted the event.

***

### selection

> **selection**: `number`[]

Defined in: autk-core/dist/src/event-emitter.d.ts:20

Source feature indices included in the current selection.

#### Inherited from

`SelectionData.selection`
