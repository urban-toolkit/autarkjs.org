[**autk-map**](../index.md)

***

[autk-map](../globals.md) / MapEventData

# Interface: MapEventData

Defined in: [autk-map/src/types-events.ts:37](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-events.ts#L37)

Payload emitted for feature-picking events.

The payload extends the shared selection data shape with the identifier of
the layer that produced the hit results.

## Extends

- `SelectionData`

## Properties

### layerId

> **layerId**: `string`

Defined in: [autk-map/src/types-events.ts:39](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-map/src/types-events.ts#L39)

Identifier of the layer that emitted the event.

***

### selection

> **selection**: `number`[]

Defined in: [autk-core/src/event-emitter.ts:22](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/event-emitter.ts#L22)

Source feature indices included in the current selection.

#### Inherited from

`SelectionData.selection`
