[**autk-compute**](../index.md)

***

[autk-compute](../globals.md) / RenderViewpointStrategy

# Type Alias: RenderViewpointStrategy

> **RenderViewpointStrategy** = \{ `type`: `"centroid"`; \} \| \{ `floors`: `number`; `type`: `"building-windows"`; \}

Defined in: [api.ts:49](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-compute/src/api.ts#L49)

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
