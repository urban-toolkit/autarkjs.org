---
title: Gallery
aside: true
outline: false
---

# Gallery

Explore interactive examples built with **Autark**. Each example shows how **autk-db**, **autk-map**, **autk-plot**, and **autk-compute** combine to create browser-based spatial applications.

<GalleryPageGrid />

<GalleryPageGrid
  section-title="Use Cases"
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
      title: 'Urban Shadow Analysis',
      description: 'Building-shadow analysis across the Chicago Loop.',
      tags: ['autk-db', 'autk-map', 'autk-plot', 'autk-compute'],
    },
  ]"
/>
