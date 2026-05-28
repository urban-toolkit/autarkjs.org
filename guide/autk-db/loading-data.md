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
    coordinateFormat: 'EPSG:4326',
    maxPixels: 500000,
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


## GeoJSON

`loadGeojson` loads a GeoJSON `FeatureCollection` from a URL or an in-memory object and stores it as a named layer table in DuckDB. The only required parameter is `outputTableName`. By default, the input coordinates are expected to be in latitude/longitude (`EPSG:4326`). If the GeoJSON uses a different CRS, provide it through `coordinateFormat`. Use `layerType` to override the automatic geometry-type inference when needed.

<ClientOnly>
  <CodePlayground :code="loadGeojsonCode" out="console" />
</ClientOnly>

:::info Layers Cropping
When OSM data is loaded in the same [workspace](./workspaces.md), its bounding box is automatically used to crop the GeoJSON.
:::

#### List of `loadGeojson` Parameters

| Option | Type | Description |
|---|---|---|
| `geojsonFileUrl` | `string` | URL of the GeoJSON file. Mutually exclusive with `geojsonObject`. |
| `geojsonObject` | `FeatureCollection` | In-memory GeoJSON FeatureCollection. Mutually exclusive with `geojsonFileUrl`. |
| `outputTableName` | `string` | Name for the resulting layer table. |
| `coordinateFormat` | `string` | Source CRS of the GeoJSON geometries. Defaults to `EPSG:4326`. |
| `layerType` | `LayerType` | Optional explicit layer type. If omitted, it is inferred from the first feature geometry. |
| `boundingBox` | `BoundingBox` | Optional bounding box used to clip or intersect geometries during import. |



## GeoTIFF

`loadGeoTiff` loads raster data from a URL or an `ArrayBuffer` and registers it as a raster table in DuckDB. For large rasters, reduce `maxPixels` to avoid loading too many pixels into browser memory.

<ClientOnly>
  <CodePlayground :code="loadGeoTiffCode" out="console" />
</ClientOnly>

#### `loadGeoTiff` Parameters

| Option | Type | Description |
|---|---|---|
| `geotiffFileUrl` | `string` | URL of the GeoTIFF file. Mutually exclusive with `geotiffArrayBuffer`. |
| `geotiffArrayBuffer` | `ArrayBuffer` | Already-fetched GeoTIFF data. Mutually exclusive with `geotiffFileUrl`. |
| `outputTableName` | `string` | Name for the resulting raster table. |
| `coordinateFormat` | `string` | Source CRS of the GeoTIFF file. Defaults to `'EPSG:4326'`. |
| `maxPixels` | `number` | Maximum decoded pixels before throwing an error. Defaults to `500000`. |


## CSV

`loadCsv` loads tabular data from a CSV file or in-memory array into a DuckDB table. If the CSV contains latitude and longitude columns, pass `geometryColumns` to automatically create point geometries and a spatial index.

When `geometryColumns` is provided, the table gains a geometry column and a spatial index, enabling efficient spatial operations.

<ClientOnly>
  <CodePlayground :code="loadCsvCode" out="console" />
</ClientOnly>

> **Note:** For tab-separated files, set `delimiter: '\t'`.

#### `loadCsv` Parameters

| Option | Type | Description |
|---|---|---|
| `csvFileUrl` | `string` | URL of the CSV file. Mutually exclusive with `csvObject`. |
| `csvObject` | `unknown[][]` | In-memory 2D array of rows. Mutually exclusive with `csvFileUrl`. |
| `outputTableName` | `string` | Name for the resulting table. |
| `delimiter` | `string` | Column delimiter. Defaults to `','` — use `'\t'` for TSV. |
| `geometryColumns` | `true \| object` | Use `true` for default `Latitude` / `Longitude` columns, or provide explicit lat/lon or WKT geometry columns. |


</div>
