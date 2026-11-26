# Type Alias: RenderViewpointStrategy

> **RenderViewpointStrategy** = \{ `type`: `"centroid"`; \} \| \{ `floors`: `number`; `type`: `"building-windows"`; \}

Defined in: [api.ts:49](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-compute/src/api.ts#L49)

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
