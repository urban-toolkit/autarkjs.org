<script setup>
const fetchOsmCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

const res = await db.loadOsm({
    queryArea: {
        geocodeArea: 'New York',
        areas: ['Battery Park City'],
    },
    autoLoadLayers: {
        layers: ['surface', 'parks', 'water'],
    },
    onProgress: (phase) => console.log(phase)
});

console.log(res)
`

const loadPbfCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

const res = await db.loadOsm({
    pbfFileUrl: '/data/lower_mnt.osm.pbf',
    queryArea: {
        geocodeArea: 'New York',
        areas: ['Financial District'],
    },
    autoLoadLayers: {
        layers: ['surface', 'parks', 'water', 'roads', 'buildings'],
    }
});

console.log(res)
`

const loadGeojsonCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

const res = await db.loadGeojson({
    geojsonFileUrl: '/data/mnt_neighs.geojson',
    outputTableName: 'neighborhoods'
});

console.log(res);
`

const loadCsvCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

const res = await db.loadCsv({
    csvFileUrl: '/data/mnt_noise.csv',
    outputTableName: 'noise',
    geometryColumns: true,
});

console.log(res);
`

const loadGeoTiffCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

const res = await db.loadGeoTiff({
    geotiffFileUrl: '/data/temperature.tif',
    outputTableName: 'temperature',
    coordinateFormat: 'EPSG:4326'
});

console.log(res)
`
</script>


<style scoped>
.introduction-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

<div class="introduction-page">

# Loading Data

`autk-db` can load data from multiple formats and sources. Load methods store data as named tables in DuckDB. Those table names **must be unique** since they are used to identify tables in queries, joins, updates, and retrieval methods. 

When a loading method is called, it ingests data into DuckDB and returns the created table metadata. To retrieve stored data, one of the [retrieving data](./retrieving-data.md) methods must be used.

## OpenStreetMap

`autk-db` can fetch OpenStreetMap (OSM) data from the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) or parse static `.pbf` extracts obtained from websites such as [Geofabrik](https://download.geofabrik.de/) and [SliceOSM](https://slice.openstreetmap.us/).

### Using the Overpass API

To directly fetch from the public [Overpass API](https://overpass-api.de/) and load OpenStreetMap data into DuckDB tables, `autk-db` provides the `loadOsm` method. The most important parameters are:

1. [`queryArea`](/api/autk-db/type-aliases/LoadOsmParams#queryarea) — Defines the geographic region of interest. The region definition is broken into two parts: the `geocodeArea` and a list of administrative areas `areas`. `geocodeArea` is used to define the data search scope and avoid naming ambiguities when querying the Overpass API. `areas` must identify OpenStreetMap boundary relations whose member ways can be reconstructed into a closed polygon. For best results, use exact OSM boundary relation names rather than informal place names.

2. [`autoLoadLayers`](/api/autk-db/type-aliases/LoadOsmParams#autoloadlayers) — List of data layers to automatically extract from raw OSM data (valid values are `buildings`, `roads`, `surface`, `parks`, and `water`). The optional `coordinateFormat` specifies the source CRS of the OSM coordinates before they are transformed into the workspace CRS.

3. [`outputTableName`](/api/autk-db/type-aliases/LoadOsmParams#outputtablename) — Optional parameter used to define the base name for the produced DuckDB tables. Each automatically loaded layer is stored as `{outputTableName}_{layer}`. It defaults to `table_osm`. For example, if `layers: ['surface', 'roads', 'buildings']`, the resulting tables are `table_osm_surface`, `table_osm_roads`, and `table_osm_buildings`.


<ClientOnly>
  <CodePlayground :code="fetchOsmCode" out="console" />
</ClientOnly>

:::warning Overpass API Limits
* Fetching large areas is slow and may fail — be aware that the public Overpass API servers can reject queries when they're busy or out of slots. Keep areas small and use specific `geocodeArea` + `areas` for the best results.

* `autk-db` provides the `onProgress` callback that may be used to track the loading status.
:::

### Using Static `.pbf` Files

Instead of querying the Overpass API, you can load OSM data from a local or remote `.osm.pbf` file. PBF extracts are available from [Geofabrik](https://download.geofabrik.de/) and [SliceOSM](https://slice.openstreetmap.us/).

To load from a PBF file, provide the `pbfFileUrl` parameter to the `loadOsm` function. All other parameters must be defined as in the Overpass API use case.

<ClientOnly>
  <CodePlayground :code="loadPbfCode" out="console" />
</ClientOnly>

:::tip PBF Loading Times
* The `.pbf` loader scans the file in three stages: first it identifies the regions informed in `queryArea`, then it computes the bounding box of these regions and, lastly, it collects the OSM features inside these areas. 

* Very large files may also take long to process, but the process runs etirely in the browser and no API limits apply. To reduce the loading time, crop the `.pbf` file first using [Osmium](https://osmcode.org/osmium-tool/) as a pre-processing step: `osmium extract --strategy=smart -b <minLon>,<minLat>,<maxLon>,<maxLat> <input.osm.pbf> -o <output.osm.pbf>`. 
:::

### List of `loadOsm` Parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#outputtablename"><code>outputTableName</code></a></td>
      <td><code>string</code></td>
      <td>Base table name.</td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/type-aliases/LoadOsmParams#queryarea"><code>queryArea</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">geocodeArea</code>
            <code style="display:inline-block; line-height:1;">areas</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">string[]</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Geocode scope.</span>
          <span>Boundary names.</span>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/type-aliases/LoadOsmParams#autoloadlayers"><code>autoLoadLayers</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">coordinateFormat</code>
            <code style="display:inline-block; line-height:1;">layers</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">LayerType[]</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Source CRS.</span>
          <span>Layer names.</span>
        </div>
      </td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#pbffileurl"><code>pbfFileUrl</code></a></td>
      <td><code>string</code></td>
      <td>Optional PBF URL.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#forcerefresh"><code>forceRefresh</code></a></td>
      <td><code>boolean</code></td>
      <td>Bypass cache.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#workspace"><code>workspace</code></a></td>
      <td><code>string</code></td>
      <td>Workspace name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#onprogress"><code>onProgress</code></a></td>
      <td><code>function</code></td>
      <td>Progress callback.</td>
    </tr>
  </tbody>
</table>

:::danger Load OSM first when combining layer sources
If you plan to load OSM and additional layers in the same workspace, load OSM first so its bounding box and `surface` geometry define the filtering and clipping context for the project.
:::

## GeoJSON

`loadGeojson` loads a GeoJSON `FeatureCollection` from a URL or an in-memory object and stores it as a named layer table in DuckDB. The only required parameter is `outputTableName`.

<ClientOnly>
  <CodePlayground :code="loadGeojsonCode" out="console" />
</ClientOnly>

 By default, the input coordinates are expected to be in latitude/longitude (`EPSG:4326`). If the GeoJSON uses a different coordinates system, provide it through `coordinateFormat`. Use `layerType` to override the automatic geometry-type inference performed bu autk-db.

#### List of `loadGeojson` Parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#geojsonfileurl"><code>geojsonFileUrl</code></a></td>
      <td><code>string</code></td>
      <td>GeoJSON file URL.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#geojsonobject"><code>geojsonObject</code></a></td>
      <td><code>FeatureCollection</code></td>
      <td>In-memory GeoJSON.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#outputtablename"><code>outputTableName</code></a></td>
      <td><code>string</code></td>
      <td>Output table name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#coordinateformat"><code>coordinateFormat</code></a></td>
      <td><code>string</code></td>
      <td>Source CRS.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#layertype"><code>layerType</code></a></td>
      <td><code>LayerType</code></td>
      <td>Override inferred layer type.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#boundingbox"><code>boundingBox</code></a></td>
      <td><code>BoundingBox</code></td>
      <td>Optional clipping bounds.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#workspace"><code>workspace</code></a></td>
      <td><code>string</code></td>
      <td>Workspace name.</td>
    </tr>
  </tbody>
</table>

:::info Layers Cropping
`autk-db` applies workspace-aware filtering and clipping when new layers are loaded.

1. If OSM data already exists in the current [workspace](./workspaces.md), its bounding box is first used to filter the features of newly loaded layers. The remaining features are then clipped using the OSM `surface` layer geometry.
2. If OSM data is not available, the first loaded GeoJSON layer provides the workspace bounding box used to filter the features of subsequent layers. If that first layer is a polygon layer, its geometry is also used to clip later layers.
:::

## GeoTIFF

`loadGeoTiff` loads raster data from a URL or an `ArrayBuffer` and stores it as a raster table in DuckDB. The only required parameter is `outputTableName`. By default, the input raster is expected to use latitude/longitude coordinates (`EPSG:4326`). If the GeoTIFF uses a different coordinate system, provide it through `coordinateFormat`. For large rasters, reduce `maxPixels` to avoid loading too many pixels into browser memory.

<ClientOnly>
  <CodePlayground :code="loadGeoTiffCode" out="console" />
</ClientOnly>

:::tip Try changing the previous example
Modify the previous code sample to explore more of `autk-db`. For example, try setting `maxPixels` or use a different `outputTableName`.
:::

#### List of `loadGeoTiff` Parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#geotifffileurl"><code>geotiffFileUrl</code></a></td>
      <td><code>string</code></td>
      <td>GeoTIFF file URL.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#geotiffarraybuffer"><code>geotiffArrayBuffer</code></a></td>
      <td><code>ArrayBuffer</code></td>
      <td>In-memory GeoTIFF data.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#outputtablename"><code>outputTableName</code></a></td>
      <td><code>string</code></td>
      <td>Output table name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#coordinateformat"><code>coordinateFormat</code></a></td>
      <td><code>string</code></td>
      <td>Source CRS.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#maxpixels"><code>maxPixels</code></a></td>
      <td><code>number</code></td>
      <td>Pixel limit.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#workspace"><code>workspace</code></a></td>
      <td><code>string</code></td>
      <td>Workspace name.</td>
    </tr>
  </tbody>
</table>


## CSV

`loadCsv` loads tabular data from a CSV file or an in-memory matrix and stores it as a table in DuckDB. The only required parameter is `outputTableName`. If the CSV contains spatial information, provide `geometryColumns` so `autk-db` can create geometries during import.

<ClientOnly>
  <CodePlayground :code="loadCsvCode" out="console" />
</ClientOnly>

By default, `geometryColumns: true` expects `Latitude` and `Longitude` columns in `EPSG:4326`. For custom latitude/longitude columns or [`WKT`](https://libgeos.org/specifications/wkt/) geometry, provide an explicit `geometryColumns` object. For tab-separated files, set `delimiter: '\t'`.

#### List of `loadCsv` Parameters

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadCsvParams#csvfileurl"><code>csvFileUrl</code></a></td>
      <td><code>string</code></td>
      <td>CSV file URL.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadCsvParams#csvobject"><code>csvObject</code></a></td>
      <td><code>unknown[][]</code></td>
      <td>In-memory CSV data.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadCsvParams#outputtablename"><code>outputTableName</code></a></td>
      <td><code>string</code></td>
      <td>Output table name.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadCsvParams#delimiter"><code>delimiter</code></a></td>
      <td><code>string</code></td>
      <td>Field separator.</td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/interfaces/LoadCsvParams#geometrycolumns"><code>geometryColumns</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">true</code>
            <code style="display:inline-block; line-height:1;">latColumnName</code>
            <code style="display:inline-block; line-height:1;">longColumnName</code>
            <code style="display:inline-block; line-height:1;">wktColumnName</code>
            <code style="display:inline-block; line-height:1;">coordinateFormat</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">true</code>
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">string</code>
          <code style="display:inline-block; line-height:1;">string</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
          <span>Default lat/lng mapping.</span>
          <span>Latitude column.</span>
          <span>Longitude column.</span>
          <span>WKT column.</span>
          <span>Source CRS.</span>
        </div>
      </td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadCsvParams#workspace"><code>workspace</code></a></td>
      <td><code>string</code></td>
      <td>Workspace name.</td>
    </tr>
  </tbody>
</table>


</div>
