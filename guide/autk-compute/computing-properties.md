<script setup>
const compactnessCode = `
import { AutkComputeEngine } from "@urban-toolkit/autk-compute";
import { ColorMapInterpolator } from "@urban-toolkit/autk-core";
import { AutkMap } from "@urban-toolkit/autk-map";

const compute = new AutkComputeEngine();
const map = new AutkMap(canvas);
await map.init();

const neighborhoods = await fetch("/data/mnt_neighs_proj.geojson").then((res) => res.json());
const enriched = await compute.gpgpuPipeline({
  collection: neighborhoods,
  variableMapping: {
    area: "shape_area",
    perimeter: "shape_leng"
  },
  resultField: "compactness",
  wgslBody: "return (4.0 * 3.1415927 * area) / (perimeter * perimeter);"
});

map.loadCollection("neighborhoods", {
  collection: enriched,
  type: "polygons"
});
map.updateColorMap("neighborhoods", {
  colorMap: {
    interpolator: ColorMapInterpolator.SEQUENTIAL_BLUES
  }
});
map.updateThematic("neighborhoods", {
  collection: enriched,
  property: "properties.compute.compactness"
});
map.updateRenderInfo("neighborhoods", { isColorMap: true });
map.draw();
`;

const roadsCode = `
import { AutkComputeEngine } from "@urban-toolkit/autk-compute";
import { AutkDb } from "@urban-toolkit/autk-db";
import { ColorMapDomainStrategy } from "@urban-toolkit/autk-core";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();
await db.loadOsm({
  pbfFileUrl: "/data/lower_mnt.osm.pbf",
  queryArea: {
    geocodeArea: "New York",
    areas: ["Battery Park City", "Financial District"]
  },
  outputTableName: "table_osm",
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads"]
  }
});

const compute = new AutkComputeEngine();
const roads = await db.getLayer("table_osm_roads");
const enrichedRoads = await compute.gpgpuPipeline({
  collection: roads,
  variableMapping: {
    lanes: "lanes"
  },
  resultField: "laneCountSafe",
  wgslBody: "if (lanes <= 0.0) { return 1.0; } return lanes;"
});

const map = new AutkMap(canvas);
await map.init();
for (const layer of db.getLayersMetadata()) {
  const collection = layer.name === "table_osm_roads"
    ? enrichedRoads
    : await db.getLayer(layer.name);
  map.loadCollection(layer.name, {
    collection,
    type: layer.type
  });
}

map.updateColorMap("table_osm_roads", {
  colorMap: {
    domainSpec: { type: ColorMapDomainStrategy.MIN_MAX }
  }
});
map.updateThematic("table_osm_roads", {
  collection: enrichedRoads,
  property: "properties.compute.laneCountSafe"
});
map.updateRenderInfo("table_osm_roads", { isColorMap: true });
map.draw();
`;
</script>

# Property computation

`gpgpuPipeline()` runs a WGSL function over every feature in a GeoJSON `FeatureCollection` and writes the result into `feature.properties.compute`.

This is the part of `autk-compute` to use when you want to derive new metrics directly from existing feature attributes, such as compactness, weighted scores, normalized values, or custom indicators.

## Minimal example

```ts
import { AutkComputeEngine } from '@urban-toolkit/autk-compute';

const compute = new AutkComputeEngine();
const result = await compute.gpgpuPipeline({
  collection: myFeatureCollection,
  variableMapping: {
    area: 'properties.area',
    floors: 'properties.floors',
  },
  resultField: 'volume',
  wgslBody: 'return area * floors;',
});
```

The returned collection is a copy of the input collection with computed values added under `properties.compute.volume`.

## Neighborhood compactness

This example computes a compactness-like score from neighborhood area and perimeter, then sends the result directly to the map as thematic data.

<ClientOnly>
  <CodePlayground :code="compactnessCode" out="dom" :auto-run="true" />
</ClientOnly>

## Variable mapping

`variableMapping` connects WGSL variable names to feature-property paths.

```ts
variableMapping: {
  x: 'properties.longitude',
  y: 'properties.latitude',
  pop: 'properties.population',
}
```

If the path does not start with `properties.`, `geometry.`, or `id`, `autk-compute` treats it as a feature property path automatically. So `'shape_area'` and `'properties.shape_area'` are both valid.

All mapped scalar values are passed to WGSL as `f32`.

## Result fields

For a single output value, use `resultField`:

```ts
resultField: 'score',
wgslBody: 'return x * 0.25 + y * 0.75;'
```

That value will be written to:

```ts
feature.properties.compute.score
```

For multiple output values, use `outputColumns` instead:

```ts
const result = await compute.gpgpuPipeline({
  collection,
  variableMapping: { x: 'x', y: 'y' },
  outputColumns: ['sum', 'product'],
  wgslBody: `
    var result: array<f32, 2>;
    result[0] = x + y;
    result[1] = x * y;
    return result;
  `,
});
```

## Arrays, matrices, and uniforms

The pipeline also supports richer inputs when a single scalar per feature is not enough.

| Input | Purpose |
|---|---|
| `attributeArrays` | Fixed-length per-feature arrays |
| `attributeMatrices` | Per-feature matrices |
| `uniforms` | Global scalar constants |
| `uniformArrays` | Global constant arrays |
| `uniformMatrices` | Global constant matrices |

### Arrays

```ts
variableMapping: {
  score: 'score',
  weights: 'weights',
},
attributeArrays: {
  weights: 5,
},
wgslBody: `
  var total = 0.0;
  for (var i = 0u; i < weights_length; i++) {
    total += weights[i];
  }
  return score * total;
`,
```

### Matrices

```ts
variableMapping: {
  mat: 'transform_matrix',
},
attributeMatrices: {
  mat: { rows: 'auto', cols: 3 },
},
wgslBody: `
  var trace = 0.0;
  for (var i = 0u; i < mat_rows; i++) {
    trace += mat[i * mat_cols + i];
  }
  return trace;
`,
```

### Uniforms

```ts
uniforms: { multiplier: 2.5 },
uniformArrays: { coeffs: [0.3, 0.5, 0.2] },
wgslBody: 'return (x * coeffs[0] + y * coeffs[1]) * multiplier;',
```

## OSM road example

This example follows the same pattern as the gallery OSM compute example. It loads roads, fixes missing or invalid lane counts, and colors the network by the computed value.

<ClientOnly>
  <CodePlayground :code="roadsCode" out="dom" :auto-run="true" />
</ClientOnly>

## Notes

- The input collection is not mutated; a new collection is returned.
- Missing numeric values fall back to `0` in the pipeline.
- GPU dispatch overhead can outweigh the gains for very small datasets.
- `AutkComputeEngine` is the main public API. `ComputeGpgpu` is the lower-level class used internally and in some gallery examples.

:::tip WGSL return types
Return a single `f32` when using `resultField`, or return `array<f32, N>` when using `outputColumns`.
:::
