---
title: Gallery
aside: true
outline: false
---

# Gallery

Explore working examples built with **Autark**. Each example runs entirely in your browser: load data, move the camera, select features, brush a chart, or run a GPU analysis. The code is part of the page, so you can read exactly what produced the result.

<GalleryCatalog />

## Use cases

<GalleryPageGrid
  section-title="Full applications"
  :show-filters="false"
  :examples="[
    {
      href: '/usecases/live/urbane.html',
      img: '/imgs/urbane.png',
      title: 'Urbane Remake',
      description: 'Multi-resolution exploration of Manhattan.',
      tags: ['autk-db', 'autk-map', 'autk-plot', 'autk-compute'],
    },
    {
      href: '/usecases/live/heat.html',
      img: '/imgs/heat.png',
      title: 'Land Surface Heat Analysis',
      description: 'Land surface temperature trends across Niterói road segments.',
      tags: ['autk-db', 'autk-map', 'autk-plot', 'autk-compute'],
    },
    {
      href: '/usecases/live/shadows.html',
      img: '/imgs/shadows.png',
      title: 'Shadow minutes across the Chicago Loop',
      description: 'Building-shadow analysis across the Chicago Loop.',
      tags: ['autk-db', 'autk-map', 'autk-plot', 'autk-compute'],
    },
  ]"
/>

::: tip These examples need WebGPU
The gallery uses `autk-map` and, in the analytics section, `autk-compute`. Open it in a recent **Chrome**, **Edge**, or **Safari** with WebGPU enabled. Examples that use imagery or elevation stream tiles from third-party providers, which can be slow or unavailable; the data-loading and plot examples run from files bundled with this site.
:::
