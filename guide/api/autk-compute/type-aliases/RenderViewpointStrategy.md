[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderViewpointStrategy

# Type Alias: RenderViewpointStrategy

> **RenderViewpointStrategy** = \{ `type`: `"centroid"`; \} \| \{ `floors`: `number`; `type`: `"building-windows"`; \}

Defined in: [api.ts:49](https://github.com/urban-toolkit/autark/blob/2086406f6ed56aea8faab9b6b840f71fa86be019/autk-compute/src/api.ts#L49)

Selects how view origins are derived from the viewpoints collection.

## Union Members

### Type Literal

\{ `type`: `"centroid"`; \}

***

### Type Literal

\{ `floors`: `number`; `type`: `"building-windows"`; \}

#### floors

> **floors**: `number`

Number of floors used to build the window layout.

#### type

> **type**: `"building-windows"`
