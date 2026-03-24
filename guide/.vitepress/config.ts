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
      {
        text: 'API Reference',
        items: [
          { text: 'autk-map', link: '/api/autk-map/globals' },
          { text: 'autk-db', link: '/api/autk-db/globals' },
          { text: 'autk-compute', link: '/api/autk-compute/globals' },
          { text: 'autk-plot', link: '/api/autk-plot/globals' },
        ],
      },
      {
        text: 'Gallery',
        items: [
          { text: 'All Examples', link: '/examples/' },
          { text: 'Standalone GeoJSON Viewer', link: '/examples/ex1' },
          { text: 'Map and Database Integration', link: '/examples/ex2' },
          { text: '3D Manhattan from OpenStreetMap', link: '/examples/ex3' },
          { text: 'Linked Views: Map + Bar Chart', link: '/examples/ex4' },
          { text: 'Compute Function on GeoJSON Properties', link: '/examples/ex5' },
          { text: 'Polygons and Points Viewer', link: '/examples/ex6' },
        ],
      },
      {
        text: 'Use Cases',
        items: [
          { text: 'All Use Cases', link: '/casestudies/' },
          { text: 'Urbane - 3D NYC Neighborhood Explorer', link: '/casestudies/case1' },
          { text: 'Boston - Streets and EV Charging Stations', link: '/casestudies/case2' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/urban-toolkit/autark/' },
    ],

    sidebar: {
      // remove sidebar apenas nos live case studies
      '/casestudies/live/': [],

      '/api/autk-db/': [{
        text: 'autk-db API Reference',
        items: [
          { text: 'All Exports', link: '/api/autk-db/globals' },
          { text: 'Classes', items: [
            { text: 'SpatialDb', link: '/api/autk-db/classes/SpatialDb' },
          ]},
          { text: 'Interfaces', collapsed: true, items: [
            { text: 'Layer', link: '/api/autk-db/interfaces/Layer' },
            { text: 'GetTableDataParams', link: '/api/autk-db/interfaces/GetTableDataParams' },
          ]},
          { text: 'Type Aliases', collapsed: true, items: [
            { text: 'GetTableDataOutput', link: '/api/autk-db/type-aliases/GetTableDataOutput' },
            { text: 'LoadingPhase', link: '/api/autk-db/type-aliases/LoadingPhase' },
            { text: 'OnLoadingProgress', link: '/api/autk-db/type-aliases/OnLoadingProgress' },
          ]},
        ],
      }],

      '/api/autk-map/': [{
        text: 'autk-map API Reference',
        items: [
          { text: 'All Exports', link: '/api/autk-map/globals' },
          { text: 'Classes', collapsed: false, items: [
            { text: 'AutkMap', link: '/api/autk-map/classes/AutkMap' },
            { text: 'AutkMapUi', link: '/api/autk-map/classes/AutkMapUi' },
            { text: 'Camera', link: '/api/autk-map/classes/Camera' },
            { text: 'ColorMap', link: '/api/autk-map/classes/ColorMap' },
            { text: 'KeyEvents', link: '/api/autk-map/classes/KeyEvents' },
            { text: 'Layer', link: '/api/autk-map/classes/Layer' },
            { text: 'LayerBbox', link: '/api/autk-map/classes/LayerBbox' },
            { text: 'LayerManager', link: '/api/autk-map/classes/LayerManager' },
            { text: 'MapEvents', link: '/api/autk-map/classes/MapEvents' },
            { text: 'MapStyle', link: '/api/autk-map/classes/MapStyle' },
            { text: 'MouseEvents', link: '/api/autk-map/classes/MouseEvents' },
            { text: 'Pipeline', link: '/api/autk-map/classes/Pipeline' },
            { text: 'PipelineBuildingSSAO', link: '/api/autk-map/classes/PipelineBuildingSSAO' },
            { text: 'PipelineTriangleBorder', link: '/api/autk-map/classes/PipelineTriangleBorder' },
            { text: 'PipelineTriangleFlat', link: '/api/autk-map/classes/PipelineTriangleFlat' },
            { text: 'PipelineTrianglePicking', link: '/api/autk-map/classes/PipelineTrianglePicking' },
            { text: 'PipelineTriangleRaster', link: '/api/autk-map/classes/PipelineTriangleRaster' },
            { text: 'RasterLayer', link: '/api/autk-map/classes/RasterLayer' },
            { text: 'Renderer', link: '/api/autk-map/classes/Renderer' },
            { text: 'Triangles2DLayer', link: '/api/autk-map/classes/Triangles2DLayer' },
            { text: 'Triangles3DLayer', link: '/api/autk-map/classes/Triangles3DLayer' },
            { text: 'TriangulatorBuildings', link: '/api/autk-map/classes/TriangulatorBuildings' },
            { text: 'TriangulatorPoints', link: '/api/autk-map/classes/TriangulatorPoints' },
            { text: 'TriangulatorPolygons', link: '/api/autk-map/classes/TriangulatorPolygons' },
            { text: 'TriangulatorPolylines', link: '/api/autk-map/classes/TriangulatorPolylines' },
            { text: 'TriangulatorRaster', link: '/api/autk-map/classes/TriangulatorRaster' },
            { text: 'VectorLayer', link: '/api/autk-map/classes/VectorLayer' },
          ]},
          { text: 'Enumerations', collapsed: true, items: [
            { text: 'ColorMapInterpolator', link: '/api/autk-map/enumerations/ColorMapInterpolator' },
            { text: 'LayerType', link: '/api/autk-map/enumerations/LayerType' },
            { text: 'MapEvent', link: '/api/autk-map/enumerations/MapEvent' },
            { text: 'MouseStatus', link: '/api/autk-map/enumerations/MouseStatus' },
            { text: 'ThematicAggregationLevel', link: '/api/autk-map/enumerations/ThematicAggregationLevel' },
          ]},
          { text: 'Interfaces', collapsed: true, items: [
            { text: 'ICameraData', link: '/api/autk-map/interfaces/ICameraData' },
            { text: 'ILayerBorder', link: '/api/autk-map/interfaces/ILayerBorder' },
            { text: 'ILayerBorderComponent', link: '/api/autk-map/interfaces/ILayerBorderComponent' },
            { text: 'ILayerComponent', link: '/api/autk-map/interfaces/ILayerComponent' },
            { text: 'ILayerData', link: '/api/autk-map/interfaces/ILayerData' },
            { text: 'ILayerGeometry', link: '/api/autk-map/interfaces/ILayerGeometry' },
            { text: 'ILayerInfo', link: '/api/autk-map/interfaces/ILayerInfo' },
            { text: 'ILayerRenderInfo', link: '/api/autk-map/interfaces/ILayerRenderInfo' },
            { text: 'ILayerThematic', link: '/api/autk-map/interfaces/ILayerThematic' },
            { text: 'IMapStyle', link: '/api/autk-map/interfaces/IMapStyle' },
            { text: 'IRasterData', link: '/api/autk-map/interfaces/IRasterData' },
          ]},
          { text: 'Type Aliases', collapsed: true, items: [
            { text: 'ColorHEX', link: '/api/autk-map/type-aliases/ColorHEX' },
            { text: 'ColorRGB', link: '/api/autk-map/type-aliases/ColorRGB' },
            { text: 'ColorTEX', link: '/api/autk-map/type-aliases/ColorTEX' },
            { text: 'MapEventListener', link: '/api/autk-map/type-aliases/MapEventListener' },
          ]},
        ],
      }],

      '/api/autk-plot/': [{
        text: 'autk-plot API Reference',
        items: [
          { text: 'All Exports', link: '/api/autk-plot/globals' },
          { text: 'Classes', items: [
            { text: 'AutkPlot', link: '/api/autk-plot/classes/AutkPlot' },
          ]},
        ],
      }],

      '/api/autk-compute/': [{
        text: 'autk-compute API Reference',
        items: [
          { text: 'All Exports', link: '/api/autk-compute/globals' },
          { text: 'Classes', items: [
            { text: 'GeojsonCompute', link: '/api/autk-compute/classes/GeojsonCompute' },
          ]},
        ],
      }],

      // resto continua normal
      '/': [
        {
          text: 'Getting Started',
          items: [{ text: 'Introduction', link: '/introduction' }],
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
          text: 'Examples',
          collapsed: false,
          items: [
            { text: 'All Examples', link: '/examples/' },
            { text: 'Standalone GeoJSON Viewer', link: '/examples/ex1' },
            { text: 'Map and Database Integration', link: '/examples/ex2' },
            { text: '3D Manhattan from OpenStreetMap', link: '/examples/ex3' },
            { text: 'Linked Views: Map + Bar Chart', link: '/examples/ex4' },
            { text: 'Compute Function on GeoJSON Properties', link: '/examples/ex5' },
            { text: 'Polygons and Points Viewer', link: '/examples/ex6' },
          ],
        },
        {
          text: 'Use Cases',
          collapsed: false,
          items: [
            { text: 'All Use Cases', link: '/casestudies/' },
            { text: 'Urbane - 3D NYC Neighborhood Explorer', link: '/casestudies/case1' },
            { text: 'Boston - Streets and EV Charging Stations', link: '/casestudies/case2' },
          ],
        },
        {
          text: 'Recipes',
          items: [{ text: 'Coming Soon', link: '/recipes/' }],
        },
      ],
    },

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