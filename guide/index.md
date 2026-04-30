---
layout: home

hero:
  name: Autark
  text: A Serverless Toolkit for Prototyping Urban Visual Analytics Systems
  tagline: Load, analyze, and render geospatial data entirely in the browser.
  image:
    src: /imgs/nit.png
    alt: Autark urban data visualization
  actions:
    - theme: brand
      text: Get Started
      link: /introduction
    - theme: alt
      text: View on GitHub
      link: https://github.com/urban-toolkit/autark/

features:
  - title: autk-db
    details: Run geospatial queries in the browser. Compatible with OpenStreetMap, GeoJSON, GeoTIFF, and CSV.
    link: /autk-db/
  - title: autk-map
    details: Render 2D and 3D maps using WebGPU. Handle map layers directly on the canvas without a tile server.
    link: /autk-map/
  - title: autk-compute
    details: Run custom analytical tasks on GeoJSON datasets. Efficiently process feature sets without a backend.
    link: /autk-compute/
  - title: autk-plot
    details: Render interactive D3.js charts for urban datasets. Directly link charts to map for coordinated views. 
    link: /autk-plot/
---

<HomeGallery />

<HomeCaseStudies />