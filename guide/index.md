---
layout: home

hero:
  name: Autark
  text: A modular urban toolkit for data visualization on the web
  tagline: Load, analyze, and render geospatial data entirely in the browser — no server required.
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/urban-toolkit/autark/

features:
  - title: autk-db
    details: Load and query geospatial data in the browser using DuckDB-WASM. Supports OpenStreetMap, GeoJSON, CSV, and more.
    link: /autk-db/
  - title: autk-map
    details: Render 2D and 3D maps on a canvas using WebGPU. Handles large datasets without a tile server.
    link: /autk-map/
  - title: autk-compute
    details: Run custom computations across GeoJSON features in parallel on the GPU using WGSL shaders.
    link: /autk-compute/
  - title: autk-plot
    details: Build interactive D3 charts that link directly to map selections for coordinated views.
    link: /autk-plot/
---

<HomeCaseStudies />

<HomeGallery />