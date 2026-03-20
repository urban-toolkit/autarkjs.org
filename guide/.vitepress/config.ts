import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Autark',
  description: 'A modular urban toolkit for data visualization on the web',
  base: '/',

  themeConfig: {
    logo: {
      light: '/imgs/logo_small.svg',
      dark: '/imgs/logo_small_dark.svg',
    },

    nav: [
      { text: 'Guide', link: '/introduction' },
      { text: 'API Reference', items: [
        { text: 'autk-map', link: '/docs/autark-map.html', target: '_blank' },
        { text: 'autk-db', link: '/docs/autark-db.html', target: '_blank' },
        { text: 'autk-compute', link: '/docs/autark-compute.html', target: '_blank' },
        { text: 'autk-plot', link: '/docs/autark-plot.html', target: '_blank' },
      ]},
      {
        text: 'Case Studies',
        items: [
          { text: 'All Case Studies', link: '/casestudies/' },
          { text: 'Urbane - 3D NYC Neighborhood Explorer', link: '/casestudies/case1' },
          { text: 'Boston - Streets and EV Charging Stations', link: '/casestudies/case2' },
        ],
      },
      {
        text: 'Gallery',
        items: [
          { text: 'All Examples', link: '/examples/' },
          { text: 'Manhattan Neighborhood GeoJSON Viewer', link: '/examples/ex1' },
          { text: 'USpatial Join in the Browser', link: '/examples/ex2' },
          { text: '3D Manhattan from OpenStreetMap', link: '/examples/ex3' },
          { text: 'Under Construction', link: '/examples/ex4' },
          { text: 'Linked Views: Map + Chart', link: '/examples/ex5' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/urban-toolkit/autark/' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
        ],
      },
      {
        text: 'autk-db',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/autk-db/' },
          { text: 'Loading Data', link: '/autk-db/loading-data' },
          { text: 'Querying & Analyzing', link: '/autk-db/querying' },
          { text: 'Retrieving Data', link: '/autk-db/retrieving-data' },
          { text: 'Updating Tables', link: '/autk-db/updating-tables' },
          { text: 'Workspaces', link: '/autk-db/workspaces' },
        ],
      },
      {
        text: 'autk-map',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/autk-map/' },
          { text: 'Layer Types', link: '/autk-map/layer-types' },
          { text: 'Loading Layers', link: '/autk-map/loading-layers' },
          { text: 'Styling', link: '/autk-map/styling' },
          { text: 'Thematic Mapping', link: '/autk-map/thematic-mapping' },
          { text: 'Interactions', link: '/autk-map/interactions' },
        ],
      },
      {
        text: 'autk-compute',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/autk-compute/' },
          { text: 'Computing into Properties', link: '/autk-compute/computing-properties' },
          { text: 'Patterns', link: '/autk-compute/patterns' },
        ],
      },
      {
        text: 'autk-plot',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/autk-plot/' },
          { text: 'Chart Types', link: '/autk-plot/chart-types' },
          { text: 'Interactivity', link: '/autk-plot/interactivity' },
          { text: 'Linked Views', link: '/autk-plot/linked-views' },
        ],
      },
      {
        text: 'Case Studies',
        collapsed: false,
        items: [
          { text: 'All Case Studies', link: '/casestudies/' },
          { text: 'Urbane - 3D NYC Neighborhood Explorer', link: '/casestudies/case1' },
          { text: 'Boston - Streets and EV Charging Stations', link: '/casestudies/case2' },
        ]
      },
      {
        text: 'Examples',
        collapsed: false,
        items: [
          { text: 'All Examples', link: '/examples/' },
          { text: 'Manhattan Neighborhood GeoJSON Viewer', link: '/examples/ex1' },
          { text: 'Spatial Join in the Browser', link: '/examples/ex2' },
          { text: '3D Manhattan from OpenStreetMap', link: '/examples/ex3' },
          { text: 'Under Construction', link: '/examples/ex4' },
          { text: 'Linked Views: Map + Chart', link: '/examples/ex5' },
        ]
      },
      {
        text: 'Recipes',
        items: [
          { text: 'Coming Soon', link: '/recipes/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/urban-toolkit/autark/' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: '© 2025 Autark',
    },

    search: {
      provider: 'local',
    },
  },
})