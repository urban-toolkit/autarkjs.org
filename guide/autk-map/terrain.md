<script setup>
const playgroundCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadOsm({
  pbfFileUrl: "/data/lower_mnt.osm.pbf",
  queryArea: {
    geocodeArea: "New York",
    areas: ["Financial District"]
  },
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads", "buildings"]
  }
});

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayersMetadata()) {
  const { name, type } = layer;
  const collection = await db.getLayer(name);
  map.loadCollection(name, { collection, type });
}

map.draw();
`


</script>

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

# Terrain data

By default `autk-map` renders the map on a flat ground plane. **Terrain mode** replaces that plane with a heightfield built from an elevation raster, so buildings, roads, parks, and water drape over real topography instead of floating on a flat surface. This is useful whenever the relief itself carries information — hillside neighborhoods, visibility over ridges, or simply a more faithful urban context.

Terrain is driven by a single raster band. The elevation values are converted to a local-space heightfield aligned with the map origin, and the standard layer render path is swapped for the terrain render path. All existing layers, thematic coloring, and interactions keep working; they are just sampled against the heightfield.

## Workflow

Terrain requires three ingredients: a vector context to render, an elevation raster to sample, and the map in an initialized state. The typical sequence is:

1. **Load the physical context** with `autk-db.loadOsm()` so the standard layers (`surface`, `parks`, `water`, `roads`, `buildings`) are available.
2. **Load elevation** with `autk-db.loadGeoTiff()`. The GeoTIFF is stored as a compact raster table whose bands can be exported on demand.
3. **Initialize the map** and load the vector layers with `AutkMap.loadCollection()`, the same as in [Layers data](./layers).
4. **Export the raster** with `autk-db.getRaster()`, which returns a packed raster `FeatureCollection` containing flat band arrays (`band_1`, `band_2`, ...) and resolution metadata.
5. **Enable terrain** with `AutkMap.enableTerrainMode()`, passing the raster collection and the dot-path of the band to use as height.

| Step | Call | Purpose |
|---|---|---|
| 1 | `db.loadOsm(...)` | Build the physical vector context. |
| 2 | `db.loadGeoTiff(...)` | Ingest an elevation GeoTIFF as a raster table. |
| 3 | `map.loadCollection(...)` | Push each vector layer onto the map. |
| 4 | `db.getRaster(tableName)` | Export the raster as a renderable feature collection. |
| 5 | `map.enableTerrainMode(fc, "band_1")` | Swap the flat plane for a heightfield. |

:::tip Coordinate system
The elevation raster and the vector layers must share the same projected CRS so the heightfield aligns with the map origin. The default `autk-db` workspace uses [`EPSG:3395`](/api/autk-db/variables/DEFAULT_WORKSPACE_COORDINATE_FORMAT) (World Mercator). Pass `coordinateFormat` to `loadGeoTiff()` when the source GeoTIFF is in a different CRS so it is reprojected on load.
:::

## Loading the elevation raster

`loadGeoTiff()` ingests a GeoTIFF and stores it as a compact raster table — flat in-memory band arrays plus resolution and bbox metadata. Large rasters are downsampled automatically so browser memory stays bounded. You only need to provide a URL (or `ArrayBuffer`), a table name, and, when the source is not in the workspace CRS, a `coordinateFormat`:

```ts
await db.loadGeoTiff({
  geotiffFileUrl: "/data/niteroi-elevation.tif",
  coordinateFormat: "EPSG:3395",
  outputTableName: "elevation"
});
```

A GeoTIFF can carry several bands. The compact table keeps them as `band_1`, `band_2`, and so on, so a single load can feed different terrain views (for example, elevation vs. a derived surface).

## Enabling terrain

Once the raster table exists, `getRaster()` exports it as a packed raster `FeatureCollection` ready for rendering. `enableTerrainMode()` takes that collection and a property path pointing to the band that holds the heights:

```ts
const elevation = await db.getRaster("elevation");
map.enableTerrainMode(elevation, "band_1");
```

After this call the flat render path is replaced with the terrain render path. Subsequent `draw()` calls sample the heightfield, and any layers loaded afterwards are also draped over the terrain. The terrain resources are initialized immediately, so `enableTerrainMode()` is synchronous.

:::warning Order matters
Call `map.init()` before `enableTerrainMode()`. The heightfield is built relative to the map origin, which is only known once the map is initialized and at least one layer has been loaded to establish the spatial extent. Enabling terrain before any layer is loaded throws.
:::

## Full example

The example below matches the [terrain layers gallery example](/gallery/) for Niterói. It loads the OSM context, ingests an elevation GeoTIFF, loads the vector layers, and finally enables terrain from `band_1`.

```ts
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const ELEVATION_TABLE = "elevation";

const db = new AutkDb();
await db.init();

// 1. Load the physical context (surface, water, roads, ...).
await db.loadOsm({
  queryArea: {
    geocodeArea: "Rio de Janeiro",
    areas: ["Niterói"]
  },
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads"]
  }
});

// 2. Load elevation as a compact raster table.
await db.loadGeoTiff({
  geotiffFileUrl: "/data/niteroi-elevation.tif",
  coordinateFormat: "EPSG:3395",
  outputTableName: ELEVATION_TABLE
});

// 3. Load vector layers from the OSM workspace into the map.
const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayersMetadata()) {
  const { name, type } = layer;
  const collection = await db.getLayer(name);
  map.loadCollection(name, {
    collection,
    type,
    loadConfig: { buildingsZeroHeight: true }
  });
}

// 4. Export the raster and enable terrain rendering from one band.
const elevation = await db.getRaster(ELEVATION_TABLE);
map.enableTerrainMode(elevation, "band_1");

map.draw();
```

<!-- ## Playground

The playground below loads the lower Manhattan OSM context used across the guide. A small elevation dataset for terrain mode will be wired in here shortly — for now it renders the flat context so you can experiment with the layer loading flow before enabling terrain.

<ClientOnly>
  <CodePlayground :code="playgroundCode" out="dom" :auto-run="true" />
</ClientOnly> -->

:::tip See also
- [`AutkMap.enableTerrainMode()`](/api/autk-map/classes/AutkMap#enableterrainmode)
- [`AutkDb.loadGeoTiff()`](/api/autk-db/classes/AutkDb#loadgeotiff)
- [`AutkDb.getRaster()`](/api/autk-db/classes/AutkDb#getraster)
:::

</div>
