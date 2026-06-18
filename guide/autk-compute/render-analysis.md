<script setup>
const skyExposureCode = `
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
    layers: ["surface", "parks", "water", "roads", "buildings"]
  }
});

const compute = new AutkComputeEngine();
const roads = await db.getLayer("table_osm_roads");
const buildings = await db.getLayer("table_osm_buildings");
const roadsWithSky = await compute.renderPipeline({
  layers: [{
    id: "table_osm_buildings",
    collection: buildings,
    type: "buildings"
  }],
  viewpoints: {
    collection: roads,
    sampling: { directions: 1 }
  },
  aggregation: {
    type: "classes",
    includeBackground: true,
    backgroundLayerType: "sky"
  },
  tileSize: 64
});

const enrichedRoads = {
  ...roadsWithSky,
  features: roadsWithSky.features.map((feature) => ({
    ...feature,
    properties: {
      ...feature.properties,
      compute: {
        ...(feature.properties?.compute ?? {}),
        skyViewFactor: Number(feature.properties?.compute?.render?.classes?.sky ?? 0)
      }
    }
  }))
};

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
    domainSpec: { type: ColorMapDomainStrategy.PERCENTILE, params: [5, 95] }
  }
});
map.updateThematic("table_osm_roads", {
  collection: enrichedRoads,
  property: "properties.compute.skyViewFactor"
});
map.updateRenderInfo("table_osm_roads", { isColorMap: true });
map.updateRenderInfo("table_osm_buildings", { opacity: 0.85 });
map.draw();
`;
</script>

# Render analysis

`renderPipeline()` computes visibility-style metrics by rendering one or more geometry layers from sampled viewpoints and aggregating what each viewpoint can see.

This is the part of `autk-compute` to use for metrics such as:

- sky exposure
- park and water visibility
- object-to-object visibility
- facade or window view quality
- semantic scene composition from many viewpoints

## Minimal example

```ts
import { AutkComputeEngine } from '@urban-toolkit/autk-compute';

const compute = new AutkComputeEngine();
const result = await compute.renderPipeline({
  layers: [{ id: 'buildings', collection: buildings, type: 'buildings' }],
  viewpoints: { collection: roads, sampling: { directions: 1 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
});
```

The returned collection is the viewpoints collection enriched with values under `properties.compute.render`.

## Sky exposure on roads

This example follows the existing gallery pattern. Roads act as viewpoints, buildings act as occluders, and the transparent background is counted as `sky`.

<ClientOnly>
  <CodePlayground :code="skyExposureCode" out="dom" :auto-run="true" />
</ClientOnly>

## Core inputs

| Input | Description |
|---|---|
| `layers` | The scene layers to render from each sampled viewpoint |
| `viewpoints` | The collection used to derive camera origins and receive results |
| `aggregation` | How rendered pixels are reduced back onto each viewpoint |
| `camera` | Optional field of view and clipping settings |
| `tileSize` | Render resolution per sample; must be a multiple of 8 |

## Aggregation modes

### Class aggregation

Use class aggregation when you want to know **how much of each semantic layer type** is visible from a viewpoint.

```ts
aggregation: {
  type: 'classes',
  includeBackground: true,
  backgroundLayerType: 'sky',
}
```

Typical outputs include:

- sky view factor
- visible share of parks
- visible share of water
- visible share of buildings or roads

The values are written under:

```ts
feature.properties.compute.render.classes
```

### Object aggregation

Use object aggregation when you need **which individual objects** are visible, not just which class they belong to.

```ts
aggregation: { type: 'objects' }
```

For this mode, it is usually helpful to define `objectIdProperty` on each render layer so visibility can be mapped back to stable feature identifiers.

The values are written under:

```ts
feature.properties.compute.render.objects
```

This is the right mode for building-to-building visibility or selected-object analysis.

## Viewpoints and sampling

`viewpoints` defines both the source features and the strategy used to generate camera samples.

### Centroid strategy

The default strategy uses the feature centroid as the view origin.

```ts
viewpoints: {
  collection: roads,
  strategy: { type: 'centroid' },
  sampling: { directions: 8 },
}
```

### Building-windows strategy

For facade- or apartment-style analysis, the pipeline can derive window viewpoints from building geometry.

```ts
viewpoints: {
  collection: buildings,
  strategy: { type: 'building-windows', floors: 10 },
}
```

This strategy is used by the gallery view-score example to evaluate visibility from many windows on a selected building.

### Sampling controls

| Option | Meaning |
|---|---|
| `directions` | Number of horizontal directions sampled per viewpoint |
| `azimuthOffsetDeg` | Starting azimuth for the first direction |
| `pitchDeg` | Shared vertical pitch applied to all directions |

## Camera controls

The render pipeline also supports optional camera controls:

```ts
camera: {
  fov: 90,
  clip: { near: 1, far: 5000 },
}
```

These settings are useful when tuning visibility scale, occlusion depth, or analysis resolution.

## Output shape

The render pipeline always returns the viewpoints collection. The computed metrics live inside `properties.compute.render`.

```ts
feature.properties.compute.render
```

Depending on the aggregation mode, you will typically read either:

```ts
feature.properties.compute.render.classes
```

or:

```ts
feature.properties.compute.render.objects
```

## Typical workflows

- roads → sample visible sky or buildings
- points → sample visible class composition around sensors
- buildings → sample visibility from centroids
- buildings with `building-windows` → evaluate facade or apartment views

For end-to-end examples that combine compute, database updates, and map rendering, continue to [Patterns](./patterns).
