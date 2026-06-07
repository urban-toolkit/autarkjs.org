<style scoped>
.package-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

# Workspaces

A workspace is an isolated DuckDB schema. Tables created in one workspace are not visible in another. This is useful when building multi-panel applications where each panel operates on a different dataset, or when you want to run several independent analyses without name conflicts.

The default workspace is `"autk"` and is created automatically on `init()`.

## Default workspace coordinate system

Autark stores workspace geometries in the default workspace coordinate reference system [`EPSG:3395`](/api/autk-db/variables/DEFAULT_WORKSPACE_COORDINATE_FORMAT), also known as **World Mercator**.

This means spatial tables inside a workspace are normalized to a projected CRS so filtering, clipping, joins, and distance-based operations can run against a consistent coordinate system.

When you load OSM data, you can override the source coordinate format through `autoLoadLayers.coordinateFormat`, but the workspace itself still uses its own projected working CRS for stored geometry.

## Switching workspaces

```typescript
await db.setWorkspace('scenario-a');
// All subsequent loads go into "scenario-a"

await db.loadGeojson({
  geojsonFileUrl: '/data/mnt_neighs.geojson',
  outputTableName: 'neighborhoods',
});

await db.setWorkspace('scenario-b');
// Now loads go into "scenario-b", independent of "scenario-a"
```

If the workspace does not exist, `setWorkspace` creates it.

## Listing workspaces

```typescript
db.getWorkspaces();       // ['autk', 'scenario-a', 'scenario-b']
db.getCurrentWorkspace(); // 'scenario-b'
```

## Table scope

Each workspace has its own table namespace. That means a table created in one workspace does not appear in another, even if the table names are the same.

[`getTablesMetadata()`](/api/autk-db/classes/AutkDb#gettablesmetadata) always returns tables from the **current workspace** only:

```typescript
await db.setWorkspace('scenario-a');
console.log(db.getTablesMetadata()); // only tables in "scenario-a"

await db.setWorkspace('scenario-b');
console.log(db.getTablesMetadata()); // only tables in "scenario-b"
```

## Workspace bounding box and clipping layer

In addition to storing tables, each workspace may also keep a spatial bounding box and an optional clipping layer. These two pieces of spatial metadata are used to constrain newly loaded geometry tables.

The workspace bounding box is initialized from the **first geometry-bearing table** loaded into the workspace. Once it is set, later tables do not replace it automatically. When a new geometry table is loaded, `autk-db` first filters it against this bounding box, removing features that fall completely outside the workspace extent.

The workspace clipping layer is initialized from the **first polygonal table** loaded into the workspace. In practice, this may be a table of type `surface`, `parks`, `water`, `buildings`, or `polygons`. When such a clipping layer exists, newly loaded geometry tables are also constrained against its geometry.

These two steps are applied in order:

1. **Bounding-box filtering** — features outside the workspace extent are removed.
2. **Clipping-layer filtering or cropping** — features are then constrained to the workspace clipping layer, when one exists.

The second step does not always behave the same way for every table type:

- for polygon and line-like layers, geometry may be cropped with a geometric intersection
- for `points`, `buildings`, and `raster` tables, geometries are not cut; rows are only filtered by intersection

This distinction is important because the workspace bounding box only filters by extent, while the clipping layer may also reshape geometries depending on the table type.

:::tip OSM workflows
When loading OSM data with a `surface` layer, `autk-db` uses that surface as the workspace clipping layer. Other OSM-derived layers are then constrained against it, which helps keep the workspace aligned to the same project footprint.
:::

:::tip When to use workspaces
If your application has a single dataset, you do not need extra workspaces. The default `"autk"` workspace is sufficient.
:::

:::info Layers Cropping
`autk-db` applies workspace-aware filtering and clipping when new layers are loaded.

1. If OSM data already exists in the current [workspace](./workspaces.md), its bounding box is first used to filter the features of newly loaded layers. The remaining features are then clipped using the OSM `surface` layer geometry.
2. If OSM data is not available, the first loaded GeoJSON layer provides the workspace bounding box used to filter the features of subsequent layers. If that first layer is a polygon layer, its geometry is also used to clip later layers.
:::

</div>
