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

const tagSetsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";

const db = new AutkDb();
await db.init();

// Tag sets work with a local extract as well as with Overpass.
const res = await db.loadOsm({
  pbfFileUrl: '/data/lower_mnt.osm.pbf',
  queryArea: { bbox: [-74.019, 40.700, -74.003, 40.714] },
  autoLoadLayers: { layers: [] },
  tagSets: [
    { name: 'cafes', type: 'points', tags: [{ key: 'amenity', value: 'cafe' }] },
    { name: 'schools', type: 'polygons', tags: [{ key: 'amenity', value: 'school' }] },
  ],
});
console.log(res);
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
    sourceCrs: 'EPSG:4326'
});

console.log(res)
`
const loadJsonCode = `
import { AutkDb } from '@urban-toolkit/autk-db';

const db = new AutkDb();
await db.init();

const sensors = await db.loadJson({
  jsonObject: [
    { id: 'sensor-a', temperature: 24, Latitude: -22.9, Longitude: -43.2 },
    { id: 'sensor-b', temperature: 26, Latitude: -22.91, Longitude: -43.21 },
  ],
  outputTableName: 'sensors',
  geometryColumns: true,
});
console.log(sensors);

// The same loader accepts a URL instead of an in-memory array.
const events = await db.loadJson({
  jsonFileUrl: '/data/events.json',
  outputTableName: 'events',
});
console.log(events);
`
</script>


<style scoped>
.introduction-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.introduction-page table th:first-child,
.introduction-page table td:first-child {
  width: 35%;
}
</style>

<div class="introduction-page">

# Loading data

`autk-db` can load data from multiple formats and sources. Load methods store data as named tables in DuckDB. Those table names **must be unique** since they are used to identify tables in queries, joins, updates, and retrieval methods. 

When a loading method is called, it ingests data into DuckDB and returns the created table metadata. To retrieve stored data, one of the [retrieving data](./retrieving-data.md) methods must be used.

## OpenStreetMap

`autk-db` can fetch OpenStreetMap (OSM) data from the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) or parse static `.pbf` extracts obtained from websites such as [Geofabrik](https://download.geofabrik.de/) and [SliceOSM](https://slice.openstreetmap.us/).

### Using the Overpass API

To directly fetch from the public [Overpass API](https://overpass-api.de/) and load OpenStreetMap data into DuckDB tables, `autk-db` provides the `loadOsm` method. The most important parameters are:

1. [`queryArea`](/api/autk-db/type-aliases/LoadOsmParams#queryarea) — Defines the geographic region of interest in one of two ways:
   - **Named area** — provide `geocodeArea` and a list of administrative boundary names in `areas`. `geocodeArea` defines the search scope and avoids naming ambiguities; use exact OSM boundary relation names rather than informal place names.
   - **Bounding box** — provide `bbox: [west, south, east, north]` in WGS84 (`EPSG:4326`). All four values must be finite geographic coordinates, with `west < east` and `south < north`; antimeridian-crossing boxes are not supported.

2. [`autoLoadLayers`](/api/autk-db/type-aliases/LoadOsmParams#autoloadlayers) — List of data layers to automatically extract from raw OSM data. The valid osm layer values in Autark are `buildings`, `roads`, `surface`, `parks`, and `water`. Pass `sourceCrs` at the top level of `loadOsm` when the extract is not in `EPSG:4326`. The `surface` layer is always built as the workspace clipping mask, even when it is omitted from `layers`; include it when you also want it returned as a public layer.

3. [`outputTableName`](/api/autk-db/type-aliases/LoadOsmParams#outputtablename) — Optional parameter used to define the base name for the produced tables. Each automatically loaded layer is stored as `{outputTableName}_{layer}`. It defaults to `table_osm`. For example, if `layers: ['surface', 'roads']`, the resulting tables are `table_osm_surface`, and `table_osm_roads`.


<ClientOnly>
  <CodePlayground :code="fetchOsmCode" out="console" :auto-run="false" />
</ClientOnly>

:::danger Overpass API limits
The public Overpass servers are heavily loaded and some reject third-party use. Fetching large areas is slow and may fail, and transient failures are retried with backoff. Keep areas small and prefer a local PBF for production. To use a self-hosted or commercial instance, pass [`overpassEndpoint`](/api/autk-db/type-aliases/LoadOsmParams#overpassendpoint), for example `overpassEndpoint: 'https://overpass.example.org/api/'`. Malformed queries are not retried.

`autk-db` provides the `onProgress` callback that may be used to track the loading status.
:::

:::warning Surface filtering
All roads, including bbox loads, are cropped to the mandatory surface. Bridge and over-water segments outside that surface may be removed. Building parts are never cut into new footprints: parts not fully covered by the surface are discarded, and retained geometry/property indices are updated together.
:::

For named areas, coastline classification uses the full `geocodeArea` bounding box, including neighboring coastlines. PBF extracts must include the complete geocode boundary and coastline coverage; the loader does not fetch missing data. When classification succeeds, requested water layers can include sea context within the selected areas' bounding box, marked with `properties.generated = 'coastline'`. Missing or invalid coastline data never implies sea.

### Using static `.pbf` files

Instead of querying the Overpass API, you can load OSM data from a local or remote `.osm.pbf` file. PBF extracts are available from [Geofabrik](https://download.geofabrik.de/) and [SliceOSM](https://slice.openstreetmap.us/).

To load from a PBF file, provide the [`pbfFileUrl`](/api/autk-db/type-aliases/LoadOsmParams#pbffileurl) parameter to the `loadOsm` function. All other parameters must be defined as in the Overpass API use case.

<ClientOnly>
  <CodePlayground :code="loadPbfCode" out="console" :auto-run="true" />
</ClientOnly>

:::tip PBF loading times
* The `.pbf` loader scans the file in three stages: first it identifies the regions informed in `queryArea`, then it computes the bounding box of these regions and, lastly, it collects the OSM features inside these areas. 

* Very large files may also take long to process, but the process runs etirely in the browser and no API limits apply. To reduce the loading time, crop the `.pbf` file first using [Osmium](https://osmcode.org/osmium-tool/) as a pre-processing step: `osmium extract --strategy=smart -b <minLon>,<minLat>,<maxLon>,<maxLat> <input.osm.pbf> -o <output.osm.pbf>`. 
:::

### Loading custom OSM tag sets

With either source, `tagSets` can load custom layers beside the standard OSM themes. Each [`OsmTagSet`](/api/autk-db/type-aliases/OsmTagSet) declares exactly one geometry family (`points`, `polylines`, or `polygons`) and produces `{outputTableName}_{name}_{type}`. Filters in one set are combined with OR.

<ClientOnly>
  <CodePlayground :code="tagSetsCode" out="console" :auto-run="true" />
</ClientOnly>

Tag sets work with either source. With `pbfFileUrl`, the streaming reader selects matching nodes, ways, and multipolygon relations locally, so the file must contain the required objects. Up to eight sets are allowed, each with a unique lowercase name and 1–64 filters. Tag layers are also clipped to the surface, so a set with no surviving features produces no table.

### List of `loadOsm` parameters

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
          <span>Named-area geocode scope.</span>
          <span>Boundary names, or use a WGS84 <code>bbox</code>.</span>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <div style="display:flex; align-items:stretch;">
          <div style="width:120px; display:flex; align-items:center;"><a href="/api/autk-db/type-aliases/LoadOsmParams#autoloadlayers"><code>autoLoadLayers</code></a></div>
          <div style="width:140px; border-left:1px solid var(--vp-c-divider); padding-left:12px; display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
            <code style="display:inline-block; line-height:1;">layers</code>
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">LayerType[]</code>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; gap:6px;">
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
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#sourcecrs"><code>sourceCrs</code></a></td>
      <td><code>string</code></td>
      <td>CRS of the OSM data. Defaults to <code>EPSG:4326</code>.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#overpassendpoint"><code>overpassEndpoint</code></a></td>
      <td><code>string</code></td>
      <td>Alternate Overpass API base URL.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/type-aliases/LoadOsmParams#tagsets"><code>tagSets</code></a></td>
      <td><code>OsmTagSet[]</code></td>
      <td>Custom tag-selected layers, up to eight.</td>
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
If you plan to load OSM and additional layers in the same workspace, you **must load OSM first**. By doing so, the osm data bounding box and the `surface` layer geometry will be used to filter and clip the additional layers to make sure all data span the same area (see [workspace](/autk-db/workspaces)).
:::

## JSON tables

[`loadJson()`](/api/autk-db/classes/AutkDb#loadjson) imports an array of records into DuckDB. Use it for API responses, event lists, or other tabular JSON that is **not** a GeoJSON `FeatureCollection`.

Provide either `jsonFileUrl` or `jsonObject`, not both. The example below imports spatial sensor records from memory and plain event rows from a bundled JSON file.

<ClientOnly>
  <CodePlayground :code="loadJsonCode" out="console" :auto-run="false" />
</ClientOnly>

Without `geometryColumns`, the result is a plain table: inspect it with `getTable()`. With geometry columns, it can also be exported with `getLayer()` for mapping.

| Option | Purpose |
|---|---|
| `jsonFileUrl` / `jsonObject` | JSON array URL or in-memory array of records. |
| `outputTableName` | Required output table name. |
| `geometryColumns` | Omit for a plain table; use `true` for `Latitude`/`Longitude` in `EPSG:4326`, or an object for custom fields. |
| `workspace` | Optional destination workspace. |

For custom coordinate fields, use `geometryColumns: { latColumnName: 'lat', longColumnName: 'lon' }`, and for WKT use `{ wktColumnName: 'shape' }`. Coordinates are transformed into the workspace CRS. `sourceCrs` is a top-level loader option, not part of `geometryColumns`: `loadJson({ …, geometryColumns: { wktColumnName: 'shape' }, sourceCrs: 'EPSG:4326' })`.

Use [`loadGeojson()`](#geojson) instead when the input already contains GeoJSON features and geometries. See [`LoadJsonParams`](/api/autk-db/interfaces/LoadJsonParams) for the full contract.

## GeoJSON

`loadGeojson` loads a GeoJSON `FeatureCollection` from a URL or an in-memory object and stores it as a named layer. The only required parameter is [`outputTableName`](/api/autk-db/interfaces/LoadGeojsonParams#outputtablename).

<ClientOnly>
  <CodePlayground :code="loadGeojsonCode" out="console" :auto-run="true" />
</ClientOnly>

By default, the input coordinates are expected to be longitude/latitude (`EPSG:4326`). If the loaded GeoJSON uses another coordinate system, provide it through the top-level [`sourceCrs`](/api/autk-db/interfaces/LoadGeojsonParams#sourcecrs) option.

Use [`layerType`](/api/autk-db/interfaces/LoadGeojsonParams#layertype) to declare the type of the loaded layer. If no type is provided, `autk-db` infers it.

#### List of `loadGeojson` parameters

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
      <td><a href="/api/autk-db/interfaces/LoadGeojsonParams#sourcecrs"><code>sourceCrs</code></a></td>
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


## GeoTIFF

`loadGeoTiff` loads raster data from a URL or an `ArrayBuffer` and stores it as a raster table in DuckDB. The only required parameter is [`outputTableName`](/api/autk-db/interfaces/LoadGeoTiffParams#outputtablename). 

<ClientOnly>
  <CodePlayground :code="loadGeoTiffCode" out="console" :auto-run="true" />
</ClientOnly>

By default, the input raster is expected to use `EPSG:4326`. If the GeoTIFF uses a different coordinate system, provide it through the top-level [`sourceCrs`](/api/autk-db/interfaces/LoadGeoTiffParams#sourcecrs). Rasters larger than [`maxRasterCells`](/api/autk-db/interfaces/LoadGeoTiffParams#maxrastercells) (one million by default) are downsampled with `resampleMethod`, `'bilinear'` by default. Lower the limit to save browser memory, or raise it to keep detail.

Color-coded RGB GeoTIFFs can be imported as classes instead of numbers: pass `categoricalRgb` with one distinct hex color per class name. The import matches exact RGB values, uses nearest-neighbor downsampling, and returns category names in the raster band metadata. Unmatched colors become NoData.

Valid zero values are preserved when no NoData value is declared. Negative grid-axis directions are supported; rotated or sheared grids are rejected.

:::tip Try changing the previous example
Modify the previous code sample to explore more of `autk-db`. For example, try setting [`maxRasterCells`](/api/autk-db/interfaces/LoadGeoTiffParams#maxrastercells) or use a different [`outputTableName`](/api/autk-db/interfaces/LoadGeoTiffParams#outputtablename).
:::

#### List of `loadGeoTiff` parameters

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
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#sourcecrs"><code>sourceCrs</code></a></td>
      <td><code>string</code></td>
      <td>Source CRS.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#maxrastercells"><code>maxRasterCells</code></a></td>
      <td><code>number</code></td>
      <td>Cell limit before downsampling.</td>
    </tr>
    <tr>
      <td><a href="/api/autk-db/interfaces/LoadGeoTiffParams#workspace"><code>workspace</code></a></td>
      <td><code>string</code></td>
      <td>Workspace name.</td>
    </tr>
  </tbody>
</table>


## CSV

`loadCsv` loads tabular data from a CSV file or an in-memory matrix and stores it as a table in DuckDB. The only required parameter is [`outputTableName`](/api/autk-db/interfaces/LoadCsvParams#outputtablename). If the CSV contains spatial information, provide [`geometryColumns`](/api/autk-db/interfaces/LoadCsvParams#geometrycolumns) so `autk-db` can create geometries during import.

<ClientOnly>
  <CodePlayground :code="loadCsvCode" out="console" :auto-run="true" />
</ClientOnly>

By default, [`geometryColumns`](/api/autk-db/interfaces/LoadCsvParams#geometrycolumns): `true` expects `Latitude` and `Longitude` columns. For columns with different names or with [`WKT`](https://libgeos.org/specifications/wkt/) geometry, provide them using the `geometryColumns` object. For tab-separated files, set [`delimiter`](/api/autk-db/interfaces/LoadCsvParams#delimiter): `'\t'`.

The coordinate system is a top-level loader option, not part of `geometryColumns`. It defaults to `EPSG:4326`, so pass `sourceCrs` for a projected CSV:

```ts
await db.loadCsv({
  csvFileUrl: '/data/parcels.csv',
  outputTableName: 'parcels',
  geometryColumns: { wktColumnName: 'shape' },
  sourceCrs: 'EPSG:3395',
});
```

#### List of `loadCsv` parameters

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
          </div>
        </div>
      </td>
      <td>
        <div style="display:flex; flex-direction:column; align-items:flex-start; gap:6px;">
          <code style="display:inline-block; line-height:1;">true</code>
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
