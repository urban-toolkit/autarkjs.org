<script setup>
const playgroundCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

setStatus("Loading the Niterói map context...");
const db = new AutkDb();
await db.init();

// Use a bundled extract instead of requesting data from Overpass.
await db.loadOsm({
  pbfFileUrl: "/data/osm/niteroi_praias_baia.osm.pbf",
  queryArea: {
    geocodeArea: "Niterói",
    areas: ["Região Praias da Baía"]
  },
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads"]
  }
});

setStatus("Loading the elevation raster...");
await db.loadGeoTiff({
  geotiffFileUrl: "/data/niteroi-elevation.tif",
  sourceCrs: "EPSG:3395",
  outputTableName: "elevation"
});

const map = new AutkMap(canvas);
await map.init();

for (const { name, type } of db.getLayersMetadata()) {
  const collection = await db.getLayer(name);
  map.loadCollection(name, { collection, type });
}

const elevation = await db.getRaster("elevation");
await map.loadTerrain({ source: { collection: elevation, property: "band_1" } });
map.resetCamera();
// Start with an oblique view so the relief is easier to see.
const center = map.camera.getLookAt();
const distance = map.camera.getEye()[2];
map.camera.resetCamera([0, 0, 1], center, [center[0], center[1] - distance * 0.5, distance * 0.85]);
map.camera.update();
map.draw();
output('<button type="button">Switch to flat map</button>');
let terrainEnabled = true;
const button = mount.querySelector('button');
button.addEventListener('click', async () => {
  terrainEnabled = !terrainEnabled;
  if (terrainEnabled) {
    await map.loadTerrain({ source: { collection: elevation, property: "band_1" } });
  } else {
    map.removeTerrain();
  }
  map.resetCamera();
  if (terrainEnabled) {
    map.camera.resetCamera([0, 0, 1], center, [center[0], center[1] - distance * 0.5, distance * 0.85]);
    map.camera.update();
  }
  button.textContent = terrainEnabled ? 'Switch to flat map' : 'Switch to terrain';
});
clearStatus();
`

const streamedCode = `
import { AutkMap, TILE_SOURCES, TERRAIN_TILE_SOURCES } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas, { showUi: false });
await map.init();

// Streamed elevation needs a starting view; there is no vector layer to set the origin.
map.setView({ center: { latitude: 46.6863, longitude: 7.8632 }, zoom: 12 });
await map.loadTerrain({
  source: TERRAIN_TILE_SOURCES.awsTerrarium,
  levels: 6,
  windowSize: 512,
});
map.loadTiles("imagery", { source: TILE_SOURCES.osmLight });
map.draw();
output('<button type="button">Remove terrain</button>');
const button = mount.querySelector('button');
button.addEventListener('click', () => {
  map.removeTerrain();
  map.draw();
  button.disabled = true;
});
`
</script>

<style scoped>
.package-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

# Terrain data

By default `autk-map` renders the map on a flat ground plane. **Terrain mode** replaces that plane with a heightfield, so buildings, roads, parks, and water drape over real topography instead of floating on a flat surface. This is useful whenever the relief itself carries information — hillside neighborhoods, visibility over ridges, or simply a more faithful urban context.

Terrain comes from one of two sources: a **fixed raster** band, already loaded through `autk-db`, or **streamed elevation tiles** from a provider. Both use `map.loadTerrain()` and are removed with `map.removeTerrain()`. All existing layers, thematic coloring, and interactions keep working; they are just sampled against the heightfield.

:::tip Coordinate system
Terrain needs projected, linear coordinates, so a geographic workspace (`EPSG:4326` or similar) cannot display it. Elevation in meters is converted to the workspace's linear units. The raster and the vector layers must share the map's workspace CRS; pass `sourceCrs` to `loadGeoTiff()` when the file uses another one. The map CRS itself is fixed in the constructor and cannot change later.
:::

## Fixed elevation raster

The typical sequence is:

1. **Load the physical context** with `autk-db.loadOsm()`, so the standard layers (`surface`, `parks`, `water`, `roads`, `buildings`) are available.
2. **Load elevation** with `autk-db.loadGeoTiff()`. The GeoTIFF is stored as a compact raster table whose bands are exported on demand.
3. **Initialize the map** and load the vector layers with `AutkMap.loadCollection()`, as in [Layers data](./layers).
4. **Export the raster** with `autk-db.getRaster()`, which returns a packed raster `FeatureCollection` with flat band arrays (`band_1`, `band_2`, …) and resolution metadata.
5. **Load terrain** with `map.loadTerrain({ source: { collection, property } })`, naming the band that holds the heights.

| Step | Call | Purpose |
|---|---|---|
| 1 | `db.loadOsm(...)` | Build the physical vector context. |
| 2 | `db.loadGeoTiff(...)` | Ingest an elevation GeoTIFF as a raster table. |
| 3 | `map.loadCollection(...)` | Push each vector layer onto the map. |
| 4 | `db.getRaster(tableName)` | Export the raster as a renderable feature collection. |
| 5 | `map.loadTerrain({ source: { collection, property: 'band_1' } })` | Build the heightfield. |

A normalized raster from `db.getLayer()` or `db.getRaster()` works the same way. The raster is already in the workspace CRS and can initialize an empty map from its bounds, so no vector layer is required first.

## Streamed elevation tiles

Instead of a local raster, `loadTerrain` can stream elevation from a provider. `TERRAIN_TILE_SOURCES.awsTerrarium` (Mapzen Terrarium on AWS) is bundled. A custom source is a tile URL plus `encoding: 'terrarium' | 'mapbox'`; Mapbox terrain-RGB needs your own access token in the URL, so it is not bundled. A streamed terrain map needs a starting view, because there is no vector layer to establish the origin:

```ts
map.setView({ center: { latitude: 46.6863, longitude: 7.8632 }, zoom: 12 })
await map.loadTerrain({ source: TERRAIN_TILE_SOURCES.awsTerrarium })
```

<ClientOnly>
  <CodePlayground :code="streamedCode" out="dom" :auto-run="false" :canvas-height="520" />
</ClientOnly>

| Option | Default | Purpose |
|---|---|---|
| `levels` | 6 | Clipmap levels to compose. |
| `windowSize` | 512 | Sample window per level. |
| `composeBudgetMs` | 4 | CPU budget checked between four-row batches. |
| `overlaySize` | 2048 | Drape target for imagery and 2D layers (64–4096). A 4× MSAA overlay at 2048 is roughly 185 MB, against roughly 740 MB at 4096. |

Terrain options are validated before any request starts. `idle` means no requests, retries, or composition remain; `complete` separately reports height coverage, and `failedTiles` reports current failures. A scene can be idle with partial coverage instead of loading forever, and missing elevation uses coarser data or zero.

Imagery is independent: load it before or after terrain, hide it with `updateRenderInfo`, and `removeTerrain()` keeps the imagery, data, and camera. See [Imagery](./imagery).

## Elevation validation

Validation is enabled by default for every region, with or without imagery. It uses physical sample spacing, local variation, coherent-feature checks, and validated coarser references before replacing isolated spikes or pits. Negative elevations are kept, and unconfirmed features are not flattened.

```ts
await map.loadTerrain({
  source: TERRAIN_TILE_SOURCES.awsTerrarium,
  validation: { minDeviation: 100, maxSlope: 8, madMultiplier: 8 },
})
map.getTerrainValidationStats() // checked, rejected, corrected, unresolved
```

Pass `validation: false` to keep raw source heights. Errors shared across scales cannot be detected reliably without an independent source.

## Returning to the flat map

Call `map.removeTerrain()` to release the terrain resources and restore the flat render path. Existing layers stay loaded, and a new frame is requested automatically:

```ts
map.removeTerrain()
map.resetCamera()
```

To enable terrain again, call `loadTerrain()` with a valid source and then `resetCamera()`; there is no need to reload the vector context. Calling `loadTerrain()` again replaces the elevation only after the new setup succeeds.

## Live example

Explore the hills of **Niterói's Praias da Baía region** below. The example loads a bundled OSM extract and a real elevation GeoTIFF, renders the vector context, then builds terrain from `band_1`. Both datasets are served by this site; no Overpass query or external elevation service is needed.

The elevation raster is a lightweight 439 × 512 crop in `EPSG:3395`, with heights in meters, derived from the [Autark gallery dataset](https://github.com/urban-toolkit/autark/tree/30159045d4c004f98140fe4bd941e84bee5088b8/gallery/public/data) sourced from [Mapzen Terrarium elevation tiles](https://registry.opendata.aws/terrain-tiles/). See [dataset metadata](/data/niteroi-elevation.json) for provenance and sampling details.

<ClientOnly>
  <CodePlayground :code="playgroundCode" out="dom" :auto-run="true" :canvas-height="520" />
</ClientOnly>

:::tip Explore and edit
Drag to navigate the map and use the mouse wheel to zoom. Use **Switch to flat map** to compare both modes, or edit the code and click **Run**. The example deliberately omits buildings so the terrain and draped roads/parks are easier to inspect.
:::

:::warning Browser support
The example requires WebGPU. If initialization fails, check the [browser support requirements](/introduction#serverless-by-design).
:::

:::tip See also
- [`AutkMap.loadTerrain()`](/api/autk-map/classes/AutkMap#loadterrain)
- [`AutkMap.removeTerrain()`](/api/autk-map/classes/AutkMap#removeterrain)
- [`AutkDb.loadGeoTiff()`](/api/autk-db/classes/AutkDb#loadgeotiff)
- [`AutkDb.getRaster()`](/api/autk-db/classes/AutkDb#getraster)
:::

</div>
