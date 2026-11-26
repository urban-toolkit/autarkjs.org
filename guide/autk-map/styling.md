---
package: autk-map
title: Styling
---

<script setup>
const mapStyleCode = `
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

map.style.setPredefinedStyle("google");

for (const layer of db.getLayersMetadata()) {
  const collection = await db.getLayer(layer.name);
  map.loadCollection(layer.name, { collection, type: layer.type });
  if (layer.type === 'roads') {
    map.updateRenderInfo(layer.name, { renderInfo: { polylinesWidth: 18 } });
  }
}
map.draw();
output('<label>Style: <select><option value="google">Google</option><option value="apple">Apple</option><option value="light">Light</option><option value="dark">Dark</option><option value="osm">OSM</option><option value="default">Default</option></select></label>');
mount.querySelector('select').addEventListener('change', event => {
  map.style.setPredefinedStyle(event.target.value);
});
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
  map.loadCollection(layer.name, { collection, type: layer.type });
  if (layer.type === 'roads') {
    map.updateRenderInfo(layer.name, { renderInfo: { polylinesWidth: 18 } });
  }
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
.package-page :is(p, li, .custom-block p, .custom-block li, h1, h2, h3, h4, h5, h6) {
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

Polygon borders can be toggled without rebuilding the layer geometry:

```ts
map.updateRenderInfo('neighborhoods', { showBorders: false });
```

In practice, that means you usually:

1. choose or customize a base map style;
2. load one or more layers;
3. override the render state of individual layers when needed;
4. optionally configure a color map for thematic rendering.

| Part | Description |
|---|---|
| `MapStyle` | Per-map semantic color system (accessed via `map.style`) for `surface`, `parks`, `water`, `roads`, `buildings`, and generic vector types. |
| `updateRenderInfo()` | Per-layer render state such as `opacity`, `isSkip`, `isClick`, `isHover`, `pointSize`, `polylinesWidth`, and `isColorMap`. |
| `updateColorMap()` | Palette and domain configuration used when thematic rendering is enabled. |

## Base map styles

`MapStyle` controls the default semantic colors used by the renderer. Each [`AutkMap`](/api/autk-map/classes/AutkMap) owns its own `MapStyle` instance, exposed through `map.style`, so multiple maps can use different visual treatments. Built-in presets provide quick visual baselines for the same data. The example below loads a basic lower-Manhattan OSM scene and starts with the `google` preset. Use its selector to try the other presets; the map redraws automatically.

<ClientOnly>
  <CodePlayground :code="mapStyleCode" out="dom" :auto-run="true" />
</ClientOnly>

Built-in presets are `apple`, `default`, `light`, `google`, `osm`, and `dark`. The retired `poster` name falls back to `apple`. General-purpose presets derive muted generic polygon/line/point colors from their surface color, approximately 10%/20%/30% darker, which improves contrast without changing the data.

Every map has a bottom-left credit strip, even with `showUi: false`: a **Made with Autark** link plus the attribution of any visible tile imagery. It is branding, not OpenStreetMap attribution; published maps using OSM still need appropriate data credits.

For full control, use `map.style.setCustomStyle()` with a complete semantic color object. See [`MapStyle`](/api/autk-map/classes/MapStyle).

## Opacity and layer render state

Per-layer styling is controlled with `updateRenderInfo()`. This is the main entry point when you want to emphasize one layer, mute another one, temporarily hide a layer, or toggle thematic display.

The example below uses the same OSM scene and lowers only the building opacity so the rest of the base map stays unchanged.

<ClientOnly>
  <CodePlayground :code="opacityCode" out="dom" :auto-run="true" />
</ClientOnly>

| Render flag | Description |
|---|---|
| `opacity` | Layer opacity from `0` to `1`. |
| `isSkip` | Hides the full layer without removing it. |
| `isClick` | Enables or disables click selection for that layer. |
| `isHover` | Enables or disables pointer hover for that layer. |
| `isColorMap` | Turns thematic coloring on or off for the layer. |
| `showBorders` | Shows or hides polygon outlines without rebuilding geometry. |
| `pointSize` | Per-layer point radius in projected units (default `64`). |
| `polylinesWidth` | Full line/road width in projected units (generic default `12`); overrides road category widths. |

## Color-map configuration

Thematic rendering separates the data values from the palette. `updateThematic()` defines which property path supplies the values, while `updateColorMap()` defines how those values are mapped to color.

The example below follows the same neighborhood-based thematic setup used elsewhere in the docs, but focuses on the palette configuration itself.

<ClientOnly>
  <CodePlayground :code="colorMapCode" out="dom" :auto-run="true" />
</ClientOnly>

Sequential palettes are typically used for one-directional numeric values such as counts, density, or intensity. Diverging palettes are better when the values should be read around a midpoint or contrasted across two directions.

For the full thematic workflow, continue to [Thematic data](./thematic).

:::tip Layer controls in the hamburger menu
With the default `showUi`, the hamburger menu cycles the interaction layer through **Interaction only**, **Hover**, **Click**, and **Hover + Click**, and activates thematic display. Legends stay at the bottom right and move above the credits when space is tight.
:::

</div>
