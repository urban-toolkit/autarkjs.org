# Type Alias: RenderViewpointStrategy

> **RenderViewpointStrategy** = \{ `type`: `"centroid"`; \} \| \{ `floors`: `number`; `type`: `"building-windows"`; \}

Defined in: [api.ts:49](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-compute/src/api.ts#L49)

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
