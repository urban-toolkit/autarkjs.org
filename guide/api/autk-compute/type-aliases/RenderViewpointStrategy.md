[**@urban-toolkit/autk-compute**](../index.md)

***

[@urban-toolkit/autk-compute](../globals.md) / RenderViewpointStrategy

# Type Alias: RenderViewpointStrategy

> **RenderViewpointStrategy** = \{ `type`: `"centroid"`; \} \| \{ `floors`: `number`; `type`: `"building-windows"`; \}

Defined in: [api.ts:49](https://github.com/urban-toolkit/autark/blob/671ed3ea2a6b32fefc861d3849220f8c785a203d/autk-compute/src/api.ts#L49)

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
