[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / EventEmitter

# Class: EventEmitter\<Events\>

Defined in: [event-emitter.ts:39](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/event-emitter.ts#L39)

Type-safe event emitter keyed by an event record.

Each event name maps to a specific payload type, and listeners are stored per
event key. Listener removal requires the original function reference.

## Example

```ts
type MapEvents = { pick: { selection: number[]; layerId: string } };
const emitter = new EventEmitter<MapEvents>();
emitter.on('pick', ({ selection, layerId }) => console.log(selection, layerId));
emitter.emit('pick', { selection: [1, 2], layerId: 'buildings' });
```

## Type Parameters

### Events

`Events` *extends* `Record`\<`string`, `unknown`\>

Record mapping event names to their payload types.

## Constructors

### Constructor

> **new EventEmitter**\<`Events`\>(): `EventEmitter`\<`Events`\>

#### Returns

`EventEmitter`\<`Events`\>

## Methods

### emit()

> **emit**\<`K`\>(`event`, `payload`): `void`

Defined in: [event-emitter.ts:87](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/event-emitter.ts#L87)

Dispatches an event payload to all registered listeners synchronously.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

Event name to dispatch.

##### payload

`Events`\[`K`\]

Payload passed to each listener.

#### Returns

`void`

#### Throws

Never throws. Listener errors propagate to the caller.

#### Example

```ts
emitter.emit('pick', { selection: [1, 2], layerId: 'buildings' });
```

***

### off()

> **off**\<`K`\>(`event`, `listener`): `void`

Defined in: [event-emitter.ts:71](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/event-emitter.ts#L71)

Removes a previously registered listener by reference.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

Event name to unsubscribe from.

##### listener

[`EventListener`](../type-aliases/EventListener.md)\<`Events`\[`K`\]\>

Exact listener reference to remove.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
const handler = (e) => console.log(e);
emitter.on('pick', handler);
emitter.off('pick', handler);
```

***

### on()

> **on**\<`K`\>(`event`, `listener`): `void`

Defined in: [event-emitter.ts:53](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-core/src/event-emitter.ts#L53)

Registers a listener for the given event.

Multiple registrations of the same callback are allowed and treated as separate entries.

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### event

`K`

Event name to subscribe to.

##### listener

[`EventListener`](../type-aliases/EventListener.md)\<`Events`\[`K`\]\>

Callback invoked when the event fires.

#### Returns

`void`

#### Throws

Never throws.

#### Example

```ts
emitter.on('pick', ({ selection, layerId }) => console.log(selection));
```
