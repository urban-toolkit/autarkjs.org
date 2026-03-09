# Computing into Properties

`computeFunctionIntoProperties` runs a WGSL shader function over every feature in a GeoJSON and writes the result to `feature.properties.compute[outputColumnName]`.

## Minimal Example

Multiply two scalar properties for each feature:

```typescript
import { geojsonCompute } from 'autk-compute';

const result = await geojsonCompute.computeFunctionIntoProperties({
  geojson: myFeatureCollection,
  variableMapping: {
    area: 'properties.area',       // WGSL variable ← GeoJSON property path
    floors: 'properties.floors',
  },
  outputColumnName: 'volume',
  wglsFunction: 'return area * floors;',
});

// result is a new FeatureCollection
// result.features[i].properties.compute.volume === area * floors
```

## Variable Mapping

`variableMapping` maps WGSL variable names to property paths in each feature. Paths use dot notation:

```typescript
variableMapping: {
  x: 'properties.longitude',
  y: 'properties.latitude',
  pop: 'properties.population',
}
```

All mapped variables are passed as `f32` to the WGSL function.

## Array Variables

Declare array variables with a fixed length. All features must have arrays of this length (shorter arrays are zero-padded):

```typescript
variableMapping: {
  score: 'properties.score',
  weights: 'properties.weights', // array property
},
arrayVariables: {
  weights: 5, // length = 5
},
wglsFunction: `
  var total = 0.0;
  for (var i = 0u; i < weights_length; i++) {
    total += weights[i];
  }
  return score * total;
`,
```

Inside WGSL, an array named `weights` is available as `array<f32, 5>`, and `weights_length` is a `u32`.

## Matrix Variables

Declare matrix variables with explicit row/column dimensions. Matrices are passed as a flattened row-major array:

```typescript
variableMapping: {
  mat: 'properties.transform_matrix',
},
matrixVariables: {
  mat: { rows: 3, cols: 3 },
},
wglsFunction: `
  // Sum the diagonal (trace)
  var trace = 0.0;
  for (var i = 0u; i < mat_rows; i++) {
    trace += mat[i * mat_cols + i];
  }
  return trace;
`,
```

## The WGSL Function

The function body must return a single `f32` value. It has access to all declared variables as parameters. No imports or additional boilerplate needed — just write the body:

```typescript
wglsFunction: 'return x + y * 2.0;'
```

:::tip WGSL types
All scalar inputs are `f32`. Array inputs are `array<f32, N>`. Matrix inputs are `array<f32, rows*cols>`. Your return value is always `f32`.
:::
