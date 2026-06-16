<script setup>
const categoricalCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";
import {
  ColorMapDomainStrategy,
  ColorMapInterpolator
} from "@urban-toolkit/autk-core";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
  geojsonFileUrl: "/data/mnt_roads_categorized.geojson",
  outputTableName: "roads"
});

const map = new AutkMap(canvas);
await map.init();

const roads = await db.getLayer("roads");
map.loadCollection("roads", { collection: roads, type: "roads" });

// The road file already pre-groups the raw OSM highway
// tags into "primary", "secondary", and "other" under
// properties.compute.highwayGroup so the palette has a
// stable, ordered domain.
map.updateColorMap("roads", {
  colorMap: {
    interpolator: ColorMapInterpolator.CAT_OBSERVABLE10,
    domainSpec: {
      type: ColorMapDomainStrategy.USER,
      params: ["primary", "secondary", "other"]
    }
  }
});
map.updateThematic("roads", {
  collection: roads,
  property: "properties.compute.highwayGroup"
});
map.updateRenderInfo("roads", { isColorMap: true });

map.draw();
`

const divergingCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";
import {
  ColorMapDomainStrategy,
  ColorMapInterpolator
} from "@urban-toolkit/autk-core";

const db = new AutkDb();
await db.init();

await db.loadGeojson({
  geojsonFileUrl: "/data/mnt_neighs.geojson",
  outputTableName: "neighborhoods"
});

const map = new AutkMap(canvas);
await map.init();

const neighborhoods = await db.getLayer("neighborhoods");
map.loadCollection("neighborhoods", {
  collection: neighborhoods,
  type: "polygons"
});

// Diverging palettes suit signed or centered quantities.
// The PERCENTILE domain trims outliers so most of the
// distribution maps to a clear range of colors.
map.updateColorMap("neighborhoods", {
  colorMap: {
    interpolator: ColorMapInterpolator.DIV_SPECTRAL,
    domainSpec: { type: ColorMapDomainStrategy.PERCENTILE }
  }
});
map.updateThematic("neighborhoods", {
  collection: neighborhoods,
  property: "properties.shape_area"
});
map.updateRenderInfo("neighborhoods", { isColorMap: true });

map.draw();
`

const spatialJoinBuildingsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";
import {
  ColorMapDomainStrategy,
  ColorMapInterpolator
} from "@urban-toolkit/autk-core";

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

await db.loadCsv({
  csvFileUrl: "/data/mnt_noise.csv",
  outputTableName: "noise",
  geometryColumns: true
});

const layer = "table_osm_buildings";

// Count noise events within 1000 m of each building.
await db.spatialQuery({
  tableRootName: layer,
  tableJoinName: "noise",
  near: { distance: 1000 },
  groupBy: [{ column: "key", aggregateFn: "count" }]
});

const map = new AutkMap(canvas);
await map.init();

for (const layerData of db.getLayersMetadata()) {
  const collection = await db.getLayer(layerData.name);
  map.loadCollection(layerData.name, {
    collection,
    type: layerData.type
  });
  // Hide the source CSV layer; only the joined result is shown.
  map.updateRenderInfo(layerData.name, {
    isSkip: layerData.source === "csv"
  });
}

const buildings = await db.getLayer(layer);
map.updateColorMap(layer, {
  colorMap: {
    interpolator: ColorMapInterpolator.SEQ_INFERNO,
    domainSpec: { type: ColorMapDomainStrategy.PERCENTILE }
  }
});
map.updateThematic(layer, {
  collection: buildings,
  property: "properties.sjoin.count.noise"
});
map.updateRenderInfo(layer, { isColorMap: true });

map.draw();
`

const spatialJoinRoadsCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";
import {
  ColorMapDomainStrategy,
  ColorMapInterpolator
} from "@urban-toolkit/autk-core";

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

await db.loadCsv({
  csvFileUrl: "/data/mnt_noise.csv",
  outputTableName: "noise",
  geometryColumns: true
});

const layer = "table_osm_roads";

// Same spatial join, applied to roads this time.
await db.spatialQuery({
  tableRootName: layer,
  tableJoinName: "noise",
  near: { distance: 1000 },
  groupBy: [{ column: "key", aggregateFn: "count" }]
});

const map = new AutkMap(canvas);
await map.init();

for (const layerData of db.getLayersMetadata()) {
  const collection = await db.getLayer(layerData.name);
  map.loadCollection(layerData.name, {
    collection,
    type: layerData.type
  });
  map.updateRenderInfo(layerData.name, {
    isSkip: layerData.source === "csv"
  });
}

const roads = await db.getLayer(layer);
map.updateColorMap(layer, {
  colorMap: {
    interpolator: ColorMapInterpolator.SEQ_VIRIDIS,
    domainSpec: { type: ColorMapDomainStrategy.PERCENTILE }
  }
});
map.updateThematic(layer, {
  collection: roads,
  property: "properties.sjoin.count.noise"
});
map.updateRenderInfo(layer, { isColorMap: true });

map.draw();
`
</script>

<style scoped>
.package-page :is(p, li, td, th, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
  text-align: justify;
}

.package-page > p:first-of-type {
  font-size: 1.05em;
}

.package-page table th:first-child,
.package-page table td:first-child {
  width: 35%;
}
</style>

<div class="package-page">

# Thematic data

Thematic data rendering maps a feature attribute to color. The attribute does not have to live on the feature itself: `autk-map` treats any value reachable through a property path on the `FeatureCollection` as thematic input. That value can be an intrinsic attribute of the geometry, but it can also be urban data that has been projected onto the feature, for example:

- sensor readings, survey responses, or point-of-interest categories joined to the nearest building, road, or neighborhood;
- aggregates from a second table, such as the count of noise events within a buffer of each polygon, computed in `autk-db` with `spatialQuery`;
- pre-computed fields added to the source GeoJSON, such as a grouped highway class, so the renderer can read a stable categorical value directly.

In `autk-map`, the usual workflow is:

1. Load the layer with `loadCollection()`.
2. Configure the color map with `updateColorMap()`.
3. Point to the source property with `updateThematic()`.
4. Enable thematic display with `isColorMap` in `updateRenderInfo()`.

`autk-core` provides the `ColorMapInterpolator` and `ColorMapDomainStrategy` enums used to pick a palette and a value-to-color domain.

| Part | Description |
|---|---|
| `interpolator` | A color scheme from `ColorMapInterpolator` (categorical, sequential, or diverging). |
| `domainSpec` | How the renderer maps raw values to colors (`AUTO`, `MIN_MAX`, `PERCENTILE`, or `USER`). |
| `property` | Dot-path to the feature property that supplies the value or class. It can reach an intrinsic attribute or any urban data joined into the feature. |

## Categorical attributes

Categorical palettes assign one color per class. Use them for class labels such as road types. In practice, it helps to first fold the raw values into a small, ordered set of groups so the palette domain stays stable.

<ClientOnly>
  <CodePlayground :code="categoricalCode" out="dom" />
</ClientOnly>

The `USER` domain lists the exact classes to encode, in the order they should appear in the legend. Anything outside the list falls back to the last color.

## Diverging attributes

Diverging palettes suit signed or centered quantities, or any attribute where a meaningful midpoint separates two regimes. The `PERCENTILE` domain trims outliers so most of the distribution maps to a clear range of colors.

<ClientOnly>
  <CodePlayground :code="divergingCode" out="dom" />
</ClientOnly>

## Spatial joins

Spatial joins attach an aggregate from a second table to each feature of a base layer. A common use is counting point events (for example, noise complaints) inside a buffer around each polygon or line.

The example below joins the Manhattan noise event table to OSM buildings in the Battery Park City / Financial District area, counting events within 1000 m of each building. The result is stored as a new property path `properties.sjoin.count.noise` that `autk-map` can read directly.

<ClientOnly>
  <CodePlayground :code="spatialJoinBuildingsCode" out="dom" />
</ClientOnly>

The same pattern works for linear features. The next example joins the same noise table to OSM roads in the same area, again using a 1000 m buffer.

<ClientOnly>
  <CodePlayground :code="spatialJoinRoadsCode" out="dom" />
</ClientOnly>

## Alignment rules

Thematic values are matched back to rendered components using feature ids when available, with a fallback to feature order. For reliable updates, keep stable `feature.id` values or preserve collection ordering across calls to `updateThematic()`.

See [`AutkMap.updateThematic()`](/api/autk-map/classes/AutkMap#updatethematic) and [`AutkMap.updateColorMap()`](/api/autk-map/classes/AutkMap#updatecolormap).

</div>
