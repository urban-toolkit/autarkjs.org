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
      ]},
      { text: 'Gallery', link: '/#gallery' },
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
