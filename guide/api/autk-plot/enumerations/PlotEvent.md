[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / PlotEvent

# Enumeration: PlotEvent

Defined in: [autk-plot/src/types-events.ts:9](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/types-events.ts#L9)

Interaction events emitted by plot instances.

Each event carries a payload with `selection`, where values are source
feature ids represented by currently selected marks.

## Enumeration Members

### BRUSH

> **BRUSH**: `"brush"`

Defined in: [autk-plot/src/types-events.ts:17](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/types-events.ts#L17)

Emitted after 2D rectangular brush interactions.

***

### BRUSH\_X

> **BRUSH\_X**: `"brushX"`

Defined in: [autk-plot/src/types-events.ts:25](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/types-events.ts#L25)

Emitted after horizontal brush interactions.

***

### BRUSH\_Y

> **BRUSH\_Y**: `"brushY"`

Defined in: [autk-plot/src/types-events.ts:21](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/types-events.ts#L21)

Emitted after vertical brush interactions.

***

### CLICK

> **CLICK**: `"click"`

Defined in: [autk-plot/src/types-events.ts:13](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-plot/src/types-events.ts#L13)

Emitted after click-based selection updates.
