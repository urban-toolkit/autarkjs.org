# Recipes

Recipes are step-by-step guides for common real-world workflows that combine multiple Autark packages. They show how the packages fit together to solve concrete problems.

**Coming soon.** The following recipes are planned:

---

### City Map from Scratch
**Packages:** `autk-db` → `autk-map`

Load OpenStreetMap data for any city and render it as a multi-layer 3D map in minutes.

---

### Thematic Map by Attribute
**Packages:** `autk-db` (spatial join) → `autk-map` (thematic coloring)

Join a CSV dataset to a geographic layer and color the map by a numeric or categorical column.

---

### Heatmap Visualization
**Packages:** `autk-db` (`buildHeatmap`) → `autk-map` (raster layer)

Aggregate point data (events, sensors, counts) into a grid and render it as a heatmap overlay.

---

### GPU-Accelerated Feature Analysis
**Packages:** `autk-db` → `autk-compute` → `autk-db` (`updateTable`) → `autk-map`

Compute a custom score per feature using a WGSL shader, write it back to the database, and visualize the result thematically.

---

### Linked Map and Chart
**Packages:** `autk-map` ↔ `autk-plot`

Build a coordinated view where picking a feature in the map highlights it in a chart, and brushing in the chart filters the map.

---

### Loading Your Own Data
**Packages:** `autk-db` (GeoJSON + CSV) → `autk-map`

Load a custom GeoJSON file and a CSV, join them using a spatial join or a raw SQL query, and render the result.
