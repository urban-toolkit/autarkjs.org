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
  coordinateFormat: "EPSG:3395",
  outputTableName: "elevation"
});

const map = new AutkMap(canvas);
await map.init();

for (const { name, type } of db.getLayersMetadata()) {
  const collection = await db.getLayer(name);
  map.loadCollection(name, { collection, type });
}

const elevation = await db.getRaster("elevation");
map.enableTerrainMode(elevation, "band_1");
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
button.addEventListener('click', () => {
  terrainEnabled = !terrainEnabled;
  if (terrainEnabled) {
    map.enableTerrainMode(elevation, "band_1");
  } else {
    map.disableTerrainMode();
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

The [live example](#live-example) below loads `/data/niteroi-elevation.tif` with `coordinateFormat: "EPSG:3395"` and `outputTableName: "elevation"`. Its complete code can be edited and executed.

A GeoTIFF can carry several bands. The compact table keeps them as `band_1`, `band_2`, and so on, so a single load can feed different terrain views (for example, elevation vs. a derived surface).

## Enabling terrain

Once the raster table exists, `getRaster()` exports it as a packed raster `FeatureCollection` ready for rendering. `enableTerrainMode()` takes that collection and a property path pointing to the band that holds the heights:

The [live example](#live-example) exports `db.getRaster("elevation")` and passes it to `map.enableTerrainMode(elevation, "band_1")` after loading the vector context.

After this call the flat render path is replaced with the terrain render path. Subsequent `draw()` calls sample the heightfield, and any layers loaded afterwards are also draped over the terrain. The terrain resources are initialized immediately, so `enableTerrainMode()` is synchronous.

:::warning Order matters
Call `map.init()` before `enableTerrainMode()`. The heightfield is built relative to the map origin, which is only known once the map is initialized and at least one layer has been loaded to establish the spatial extent. Enabling terrain before any layer is loaded throws.
:::

## Returning to the flat map

Call [`disableTerrainMode()`](/api/autk-map/classes/AutkMap#disableterrainmode) to release terrain resources and restore the flat render path. Existing layers remain loaded:

Use **Switch to flat map** in the [live example](#live-example) below to execute `map.disableTerrainMode()` followed by `map.resetCamera()`. The same button can re-enable terrain without reloading the data.

If the render loop is already running, it continues with the flat view. To enable terrain again, call `enableTerrainMode(elevation, 'band_1')` with a valid raster collection, then `resetCamera()` to frame the terrain. There is no need to reload the vector context.

## Live example

Explore the hills of **Niterói's Praias da Baía region** below. The example loads a bundled OSM extract and a real elevation GeoTIFF, renders the vector context, then enables terrain from `band_1`. Both datasets are served by this site; no Overpass query or external elevation service is needed.

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
- [`AutkMap.enableTerrainMode()`](/api/autk-map/classes/AutkMap#enableterrainmode)
- [`AutkDb.loadGeoTiff()`](/api/autk-db/classes/AutkDb#loadgeotiff)
- [`AutkDb.getRaster()`](/api/autk-db/classes/AutkDb#getraster)
:::

</div>
