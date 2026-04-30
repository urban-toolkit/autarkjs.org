# Computing into Properties

`gpgpuPipeline` runs a WGSL shader function over every feature in a GeoJSON and writes the result to `feature.properties.compute[resultField]`.

## Minimal Example

Multiply two scalar properties for each feature:

```typescript
import { AutkComputeEngine } from 'autk-compute';

const compute = new AutkComputeEngine();
const result = await compute.gpgpuPipeline({
  collection: myFeatureCollection,
  variableMapping: {
    area: 'properties.area',       // WGSL variable ← GeoJSON property path
    floors: 'properties.floors',
  },
  resultField: 'volume',
  wgslBody: 'return area * floors;',
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

Declare array variables with a fixed length via `attributeArrays`. All features must have arrays of this length (shorter arrays are zero-padded):

```typescript
variableMapping: {
  score: 'properties.score',
  weights: 'properties.weights', // array property
},
attributeArrays: {
  weights: 5, // length = 5
},
wgslBody: `
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
attributeMatrices: {
  mat: { rows: 'auto', cols: 3 },
},
wgslBody: `
  // Sum the diagonal (trace)
  var trace = 0.0;
  for (var i = 0u; i < mat_rows; i++) {
    trace += mat[i * mat_cols + i];
  }
  return trace;
`,
```

## Multi-Value Output

Use `outputColumns` (plural) when the WGSL function returns an array or vector:

```typescript
const result = await compute.gpgpuPipeline({
  collection: geojson,
  variableMapping: { x: 'properties.x', y: 'properties.y' },
  outputColumns: ['sum', 'product'],
  wgslBody: `
    var result: array<f32, 2>;
    result[0] = x + y;
    result[1] = x * y;
    return result;
  `,
});
// result.features[i].properties.compute.sum
// result.features[i].properties.compute.product
```

## Uniforms

Pass global constants to all features via `uniforms` and `uniformArrays`:

```typescript
uniforms: { multiplier: 2.5 },
uniformArrays: { coeffs: [0.3, 0.5, 0.2] },
wgslBody: 'return (x * coeffs[0] + y * coeffs[1]) * multiplier;',
```

## The WGSL Function

The function body must return a single `f32` value (or an `array<f32, N>` when using `outputColumns`). It has access to all declared variables. No imports or additional boilerplate needed — just write the body:

```typescript
wgslBody: 'return x + y * 2.0;'
```

:::tip WGSL types
All scalar inputs are `f32`. Array inputs are `array<f32, N>`. Matrix inputs are `array<f32, rows*cols>`. Your return value is `f32` (single) or `array<f32, N>` (multi-value).
:::
