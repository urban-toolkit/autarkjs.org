---
title: Tutorial
outline: deep
---

# Urban analytics with Autark

A short course, not a reference. You start with the data a city publishes and finish with a GPU analysis of a street network — loading, mapping, charting, and computing along the way, entirely in the browser.

Each chapter is a notebook: edit a cell, run it, and see the result. Cells share state, so a chapter builds on what came before it. Expect to spend 20–30 minutes per chapter.

## What you need

A recent **Chrome**, **Edge**, or **Safari** with WebGPU. No install, no account, no server. Camera-heavy chapters need a GPU adapter; the rest run anywhere.

## Chapters

| Chapter | What you build |
| --- | --- |
| [Urban data formats and sources](./chapter01) | Read GeoJSON, WKT, CSV, GeoTIFF, and OpenStreetMap, and see how each one is shaped. |
| [Urban data management](./chapter02) | Load, query, join, and update tables with `autk-db`. |
| [Geographical data visualization](./chapter03) | Build a 3D map with layers, thematic color, and picking in `autk-map`. |
| [Abstract data visualization](./chapter04) | Link charts to the map with transforms and shared selections in `autk-plot`. |
| [GPU computing](./chapter05) | Write WGSL over features and analyze a scene with `autk-compute`. |

When you finish, continue in the [Gallery](/gallery/): its Urbane case runs a full multi-resolution analysis on the same ideas.

## Credits

Tutorial authors: João Rulff, Lucas Alexandre, Talisson Souza, Gustavo Moreira, Daniel Oliveira, Harish Doraiswamy, Fabio Miranda, Claudio Silva, and Marcos Lage. Original notebooks: [Urban computing with Autark](https://observablehq.com/@autarkjs/-/collection/urban-computing-with-autark).

OpenStreetMap data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), [ODbL 1.0](https://opendatacommons.org/licenses/odbl/).
