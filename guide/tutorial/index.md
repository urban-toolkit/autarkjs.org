---
title: Tutorial
outline: deep
package: tutorial
eyebrow: Overview
---

# Urban analytics with Autark

A short course, not a reference. You start with the data a city publishes and finish with a GPU analysis of a street network — loading, mapping, charting, and computing along the way, entirely in the browser.

The notebooks run on the site’s pinned Autark 5.0.0 candidate. Edit a cell and press **Run** to see the result. Cells share state within a chapter; use **Run all above** when an example needs earlier cells. Expect to spend 20–30 minutes per chapter.

## What you need

A recent **Chrome**, **Edge**, or **Safari**. The Map and Compute chapters need WebGPU and a supported GPU adapter. There’s nothing to install, but DuckDB may fetch its spatial extension on first use. Add `?overpass=offline` to a chapter URL to use the bundled OpenStreetMap recordings instead of the live service.

## Chapters

| Chapter | What you build |
| --- | --- |
| [Urban data formats and sources](./chapter01) | Read GeoJSON, WKT, CSV, GeoTIFF, and OpenStreetMap, and see how each one is shaped. |
| [Urban data management](./chapter02) | Configure a spatial workspace, query data, and compare raw and smoothed heatmaps with `autk-db`. |
| [Geographical data visualization](./chapter03) | Project and frame layers, then explore thematic color, hover, and selection in `autk-map`. |
| [Abstract data visualization](./chapter04) | Link a scatter plot and histogram with brush ranges, selections, and hover in `autk-plot`. |
| [GPU computing](./chapter05) | Measure multipart road geometry with WGSL and estimate sky exposure with `autk-compute`. |

When you finish, try [Urbane in Demo Apps](/demo-apps/): it applies the same ideas to a multi-resolution analysis of Manhattan.

## Credits

Tutorial authors: João Rulff, Lucas Alexandre, Talisson Souza, Gustavo Moreira, Daniel Oliveira, Harish Doraiswamy, Fabio Miranda, Claudio Silva, and Marcos Lage. Original notebooks: [Urban computing with Autark](https://observablehq.com/@autarkjs/-/collection/urban-computing-with-autark).

OpenStreetMap data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), [ODbL 1.0](https://opendatacommons.org/licenses/odbl/).
