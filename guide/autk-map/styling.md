<script setup>
const mapStyleCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap, MapStyle } from "@urban-toolkit/autk-map";

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

MapStyle.setPredefinedStyle("google");

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayersMetadata()) {
  const collection = await db.getLayer(layer.name);
  map.loadCollection(layer.name, {
    collection,
    type: layer.type
  });
}
map.draw();
`;

const opacityCode = `
import { AutkDb } from "@urban-toolkit/autk-db";
import { AutkMap } from "@urban-toolkit/autk-map";

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

const map = new AutkMap(canvas);
await map.init();

for (const layer of db.getLayersMetadata()) {
  const collection = await db.getLayer(layer.name);
  map.loadCollection(layer.name, {
    collection,
    type: layer.type
  });
}

map.updateRenderInfo("table_osm_buildings", { opacity: 0.45 });
map.draw();
`;

const colorMapCode = `
import { AutkMap } from "@urban-toolkit/autk-map";
import {
  ColorMapDomainStrategy,
  ColorMapInterpolator
} from "@urban-toolkit/autk-core";

const map = new AutkMap(canvas);
await map.init();

const collection = await fetch("/data/mnt_neighs_proj.geojson")
  .then((res) => res.json());

map.loadCollection("neighborhoods", {
  collection,
  type: "polygons"
});

// The palette and the data source are configured separately.
map.updateColorMap("neighborhoods", {
  colorMap: {
    interpolator: ColorMapInterpolator.DIV_RED_BLUE,
    domainSpec: { type: ColorMapDomainStrategy.PERCENTILE }
  }
});
map.updateThematic("neighborhoods", {
  collection,
  property: "properties.shape_area"
});
map.updateRenderInfo("neighborhoods", { isColorMap: true });

map.draw();
`;
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

# Styling

Styling in `autk-map` happens at two levels. First, `MapStyle` defines the semantic base colors used by the renderer for physical and generic layers. Second, per-layer render settings such as opacity, visibility, and thematic display are applied with `updateRenderInfo()` and `updateColorMap()`.

In practice, that means you usually:

1. choose or customize a base map style;
2. load one or more layers;
3. override the render state of individual layers when needed;
4. optionally configure a color map for thematic rendering.

| Part | Description |
|---|---|
| `MapStyle` | Global semantic color system for `surface`, `parks`, `water`, `roads`, `buildings`, and generic vector types. |
| `updateRenderInfo()` | Per-layer render state such as `opacity`, `isSkip`, `isPick`, and `isColorMap`. |
| `updateColorMap()` | Palette and domain configuration used when thematic rendering is enabled. |

## Base map styles

`MapStyle` controls the default semantic colors used by the renderer. Built-in presets provide quick visual baselines for the same data. The example below loads a basic lower-Manhattan OSM scene and applies the `google` preset before map initialization.

<ClientOnly>
  <CodePlayground :code="mapStyleCode" out="dom" />
</ClientOnly>

Built-in presets currently include:

- `default`
- `light`
- `google`
- `apple`
- `osm`

For full control, use `MapStyle.setCustomStyle()` with a complete semantic color object. See [`MapStyle`](/api/autk-map/classes/MapStyle).

## Opacity and layer render state

Per-layer styling is controlled with `updateRenderInfo()`. This is the main entry point when you want to emphasize one layer, mute another one, temporarily hide a layer, or toggle thematic display.

The example below uses the same OSM scene and lowers only the building opacity so the rest of the base map stays unchanged.

<ClientOnly>
  <CodePlayground :code="opacityCode" out="dom" />
</ClientOnly>

| Render flag | Description |
|---|---|
| `opacity` | Layer opacity from `0` to `1`. |
| `isSkip` | Hides the full layer without removing it. |
| `isPick` | Enables or disables picking for that layer. |
| `isColorMap` | Turns thematic coloring on or off for the layer. |

## Color-map configuration

Thematic rendering separates the data values from the palette. `updateThematic()` defines which property path supplies the values, while `updateColorMap()` defines how those values are mapped to color.

The example below follows the same neighborhood-based thematic setup used elsewhere in the docs, but focuses on the palette configuration itself.

<ClientOnly>
  <CodePlayground :code="colorMapCode" out="dom" />
</ClientOnly>

Sequential palettes are typically used for one-directional numeric values such as counts, density, or intensity. Diverging palettes are better when the values should be read around a midpoint or contrasted across two directions.

For the full thematic workflow, continue to [Thematic data](./thematic).

</div>
