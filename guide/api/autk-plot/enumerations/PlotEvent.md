[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotEvent

# Enumeration: PlotEvent

Defined in: [types-events.ts:9](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/types-events.ts#L9)

Interaction events emitted by plot instances.

Each event carries a payload with `selection`, where values are source
feature ids represented by currently selected marks.

## Enumeration Members

### BRUSH

> **BRUSH**: `"brush"`

Defined in: [types-events.ts:17](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/types-events.ts#L17)

Emitted after 2D rectangular brush interactions.

***

### BRUSH\_X

> **BRUSH\_X**: `"brushX"`

Defined in: [types-events.ts:25](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/types-events.ts#L25)

Emitted after horizontal brush interactions.

***

### BRUSH\_Y

> **BRUSH\_Y**: `"brushY"`

Defined in: [types-events.ts:21](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/types-events.ts#L21)

Emitted after vertical brush interactions.

***

### CLICK

> **CLICK**: `"click"`

Defined in: [types-events.ts:13](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-plot/src/types-events.ts#L13)

Emitted after click-based selection updates.
