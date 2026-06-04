<script setup>
const loadCollectionCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: { name: "Downtown" },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.0125, 40.7055],
        [-74.0025, 40.7055],
        [-74.0025, 40.7125],
        [-74.0125, 40.7125],
        [-74.0125, 40.7055]
      ]]
    }
  }]
};

const buildings = {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: { height: 60 },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [-74.0095, 40.7075],
        [-74.0082, 40.7075],
        [-74.0082, 40.7088],
        [-74.0095, 40.7088],
        [-74.0095, 40.7075]
      ]]
    }
  }]
};

map.loadCollection("neighborhoods", { collection: neighborhoods });
map.loadCollection("buildings", { collection: buildings, type: "buildings" });
map.draw();
`

const dbLayersCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

const db = new AutkDb();
await db.init();

await db.loadOsm({
  pbfFileUrl: "/data/lower_mnt.osm.pbf",
  queryArea: {
    geocodeArea: "New York",
    areas: ["Battery Park City"]
  },
  autoLoadLayers: {
    layers: ["surface", "parks", "water", "roads", "buildings"]
  }
});

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayersMetadata()) {
  const geojson = await db.getLayer(layer.name);
  map.loadCollection(layer.name, { collection: geojson, type: layer.type });
}

map.draw();
console.log(db.getLayersMetadata());
`

const rasterCode = `
import { AutkMap } from "@urban-toolkit/autk-map";

const map = new AutkMap(canvas);
await map.init();

const heatmap = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { band_1: 0.2 },
      geometry: { type: "Polygon", coordinates: [[[-74.012, 40.706], [-74.008, 40.706], [-74.008, 40.709], [-74.012, 40.709], [-74.012, 40.706]]] }
    },
    {
      type: "Feature",
      properties: { band_1: 0.8 },
      geometry: { type: "Polygon", coordinates: [[[-74.008, 40.706], [-74.004, 40.706], [-74.004, 40.709], [-74.008, 40.709], [-74.008, 40.706]]] }
    },
    {
      type: "Feature",
      properties: { band_1: 0.5 },
      geometry: { type: "Polygon", coordinates: [[[-74.012, 40.709], [-74.008, 40.709], [-74.008, 40.712], [-74.012, 40.712], [-74.012, 40.709]]] }
    },
    {
      type: "Feature",
      properties: { band_1: 1.0 },
      geometry: { type: "Polygon", coordinates: [[[-74.008, 40.709], [-74.004, 40.709], [-74.004, 40.712], [-74.008, 40.712], [-74.008, 40.709]]] }
    }
  ]
};

map.loadCollection("heatmap", {
  collection: heatmap,
  type: "raster",
  property: "properties.band_1"
});

map.draw();

setTimeout(() => {
  const updated = structuredClone(heatmap);
  updated.features.forEach((feature, index) => {
    feature.properties.band_2 = [1.0, 0.4, 0.6, 0.1][index];
  });

  map.updateRaster("heatmap", {
    collection: updated,
    property: "properties.band_2"
  });
}, 1000);
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

# Loading Layers

## `loadCollection()`

`loadCollection()` is the main entry point for loading GeoJSON into the map. It accepts a unique layer id and a params object containing the collection and optional rendering metadata.

<ClientOnly>
  <CodePlayground :code="loadCollectionCode" out="dom" />
</ClientOnly>

Use automatic inference for plain point, line, or polygon collections. Pass `type` explicitly for semantic layers such as `buildings`, `roads`, `surface`, `parks`, and `water`.

## Bounding box and initial framing

The first loaded layer defines the map bounding box and the initial camera framing. If the collection includes `bbox`, `autk-map` reuses it. Otherwise, the bounding box is computed from the geometries.

You can also set the bounding box manually before loading any layer by assigning `map.boundingBox = [minLon, minLat, maxLon, maxLat]`.

## Loading layers from `autk-db`

A common workflow is to prepare layers in `autk-db` and then load each exported GeoJSON layer into `autk-map`:

<ClientOnly>
  <CodePlayground :code="dbLayersCode" out="both" />
</ClientOnly>

The `type` returned by `autk-db` can be passed directly to `loadCollection()`.

## Raster collections

Raster layers use GeoJSON polygons or cells plus a numeric property path:

<ClientOnly>
  <CodePlayground :code="rasterCode" out="dom" />
</ClientOnly>

Use `updateRaster()` when you want to keep the same layer id but swap the active raster values or property path.

## Prebuilt meshes

`autk-map` also supports `loadMesh()` for pre-triangulated geometry. This is useful when your application already has local mesh coordinates and aligned component metadata. At the moment, mesh loading is intended for `buildings`-style geometry. See [`AutkMap.loadMesh()`](/api/autk-map/classes/AutkMap#loadmesh).

</div>
