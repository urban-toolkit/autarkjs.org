# Interface: MapEventData

Defined in: [autk-map/src/types-events.ts:39](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-events.ts#L39)

Payload emitted for feature picking and hover events.

The payload extends the shared selection data shape with the identifier of
the layer that produced the hit results.

## Extends

- `SelectionData`

## Properties

### layerId

> **layerId**: `string`

Defined in: [autk-map/src/types-events.ts:41](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-events.ts#L41)

Identifier of the layer that emitted the event.

***

### selection

> **selection**: `number`[]

Defined in: autk-core/dist/event-emitter.d.ts:20

Source feature indices included in the current selection.

#### Inherited from

`SelectionData.selection`

***

### source?

> `optional` **source?**: `"pointer"` \| `"api"`

Defined in: [autk-map/src/types-events.ts:46](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-map/src/types-events.ts#L46)

Where a HOVER event came from: pointer movement or `setHover`.
Consumers that mirror pointer hover should ignore `api` echoes.
