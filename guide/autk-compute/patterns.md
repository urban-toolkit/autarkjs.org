# Patterns

This page shows the most common ways to combine `autk-compute` with `autk-db`, `autk-map`, and interactive analysis workflows.

## Compute → thematic map

The simplest pattern is to compute a new per-feature value and send it directly to the map as thematic data.

```ts
const geojson = await db.getLayer('neighborhoods');

const compute = new AutkComputeEngine();
const enriched = await compute.gpgpuPipeline({
  collection: geojson,
  variableMapping: {
    area: 'shape_area',
    perimeter: 'shape_leng',
  },
  resultField: 'compactness',
  wgslBody: 'return (4.0 * 3.1415927 * area) / (perimeter * perimeter);',
});

map.loadCollection('neighborhoods', { collection: enriched, type: 'polygons' });
map.updateThematic('neighborhoods', {
  collection: enriched,
  property: 'properties.compute.compactness',
});
map.updateRenderInfo('neighborhoods', { isColorMap: true });
```

Use this pattern when the computed result is only needed for the current view.

## Compute → update table → reuse later

When the new metric should become part of the working dataset, write the enriched collection back to `autk-db`.

```ts
const geojson = await db.getLayer('buildings');

const compute = new AutkComputeEngine();
const enriched = await compute.gpgpuPipeline({
  collection: geojson,
  variableMapping: {
    area: 'area',
    floors: 'floors',
  },
  resultField: 'volumeProxy',
  wgslBody: 'return area * floors;',
});

await db.updateTable({
  tableName: 'buildings',
  data: enriched,
  strategy: 'replace',
});
```

Use this pattern when later queries, joins, or views should reuse the new property.

## Render analysis → thematic map

The render pipeline often ends in the same thematic rendering workflow as the GPGPU pipeline.

```ts
const roadsWithSky = await compute.renderPipeline({
  layers: [{ id: 'buildings', collection: buildings, type: 'buildings' }],
  viewpoints: { collection: roads, sampling: { directions: 1 } },
  aggregation: { type: 'classes', includeBackground: true, backgroundLayerType: 'sky' },
});

const enrichedRoads = {
  ...roadsWithSky,
  features: roadsWithSky.features.map((feature) => ({
    ...feature,
    properties: {
      ...feature.properties,
      compute: {
        ...(feature.properties?.compute ?? {}),
        skyViewFactor: Number(feature.properties?.compute?.render?.classes?.sky ?? 0),
      },
    },
  })),
};

map.updateThematic('roads', {
  collection: enrichedRoads,
  property: 'properties.compute.skyViewFactor',
});
map.updateRenderInfo('roads', { isColorMap: true });
```

Use this pattern for sky exposure, visible green share, water visibility, and similar metrics.

## Picking → focused render analysis

Interactive workflows often start with a picked feature and then launch a targeted render analysis.

A common pattern is:

1. enable picking on buildings;
2. listen for `MapEvent.PICKING`;
3. derive viewpoints from the selected building;
4. run `renderPipeline()` for that local scene;
5. update a thematic overlay, mesh, or linked panel.

This is the pattern used by the gallery examples for building visibility and window-based view scoring.

## Compute + plot or linked views

Because both pipelines write results back into GeoJSON properties, the enriched collection can also feed charts, tables, or linked selection views.

Typical flow:

1. compute a metric with `autk-compute`;
2. store or keep the enriched collection in memory;
3. send it to `autk-map` for spatial display;
4. send the same data to `autk-plot` for charts or summaries.

## Notes

- `autk-compute` is strongest when it is part of a larger `db → compute → map/plot` workflow.
- `gpgpuPipeline()` is usually best for attribute-derived metrics.
- `renderPipeline()` is usually best for visibility and scene-based metrics.
- For very small datasets, plain JavaScript may still be faster than GPU dispatch.
