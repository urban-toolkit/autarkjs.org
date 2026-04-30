import { defineConfig } from 'vitepress'

export default defineConfig({
    head: [
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-P6EVSF42L8' }],
        ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-P6EVSF42L8');`],
    ],

    vite: {
        optimizeDeps: {
            exclude: ['autk-db', '@duckdb/duckdb-wasm'],
        },
    },

    title: 'Autark',
    description: 'A Serverless Toolkit for Prototyping Urban Visual Analytics Systems',
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
                    { text: 'All Examples', link: '/gallery/' },
                    { text: 'Standalone GeoJSON', link: '/gallery/ex1' },
                    { text: 'Map + Database', link: '/gallery/ex2' },
                    { text: '3D OSM Map', link: '/gallery/ex3' },
                    { text: 'Linked Views', link: '/gallery/ex4' },
                    { text: 'Compute Engine', link: '/gallery/ex5' },
                    { text: 'Polygons and Points', link: '/gallery/ex6' },
                ],
            },
            {
                text: 'Use Cases',
                items: [
                    { text: 'All Use Cases', link: '/usecases/' },
                    { text: 'Urbane Remake', link: '/usecases/urbane' },
                    { text: 'Land Surface Heat', link: '/usecases/heat' },
                    { text: 'Urban Shadow Analysis', link: '/usecases/shadows' },
                ],
            },
            { text: 'GitHub', link: 'https://github.com/urban-toolkit/autark/' },
        ],

        sidebar: {
            // remove sidebar apenas nos live case studies
            '/usecases/live/': [],

            '/api/autk-db/': [{
                text: 'autk-db API Reference',
                items: [
                    { text: 'All Exports', link: '/api/autk-db/globals' },
                    {
                        text: 'Classes', items: [
                            { text: 'AutkSpatialDb', link: '/api/autk-db/classes/AutkSpatialDb' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'BoundingBox', link: '/api/autk-db/interfaces/BoundingBox' },
                            { text: 'BuildHeatmapParams', link: '/api/autk-db/interfaces/BuildHeatmapParams' },
                            { text: 'Column', link: '/api/autk-db/interfaces/Column' },
                            { text: 'CommonTable', link: '/api/autk-db/interfaces/CommonTable' },
                            { text: 'GetTableDataParams', link: '/api/autk-db/interfaces/GetTableDataParams' },
                            { text: 'Layer', link: '/api/autk-db/interfaces/Layer' },
                            { text: 'LayerLoadTimings', link: '/api/autk-db/interfaces/LayerLoadTimings' },
                            { text: 'LoadCsvParams', link: '/api/autk-db/interfaces/LoadCsvParams' },
                            { text: 'LoadCustomLayerParams', link: '/api/autk-db/interfaces/LoadCustomLayerParams' },
                            { text: 'LoadGeoTiffParams', link: '/api/autk-db/interfaces/LoadGeoTiffParams' },
                            { text: 'LoadGridLayerParams', link: '/api/autk-db/interfaces/LoadGridLayerParams' },
                            { text: 'LoadJsonParams', link: '/api/autk-db/interfaces/LoadJsonParams' },
                            { text: 'LoadLayerParams', link: '/api/autk-db/interfaces/LoadLayerParams' },
                            { text: 'OsmLoadTimings', link: '/api/autk-db/interfaces/OsmLoadTimings' },
                            { text: 'RawQueryParams', link: '/api/autk-db/interfaces/RawQueryParams' },
                            { text: 'SpatialQueryParams', link: '/api/autk-db/interfaces/SpatialQueryParams' },
                            { text: 'UpdateTableParams', link: '/api/autk-db/interfaces/UpdateTableParams' },
                        ]
                    },
                    {
                        text: 'Type Aliases', collapsed: true, items: [
                            { text: 'AggregateFunction', link: '/api/autk-db/type-aliases/AggregateFunction' },
                            { text: 'AnyTable', link: '/api/autk-db/type-aliases/AnyTable' },
                            { text: 'CsvTable', link: '/api/autk-db/type-aliases/CsvTable' },
                            { text: 'CustomLayerTable', link: '/api/autk-db/type-aliases/CustomLayerTable' },
                            { text: 'GeoTiffTable', link: '/api/autk-db/type-aliases/GeoTiffTable' },
                            { text: 'GetTableDataOutput', link: '/api/autk-db/type-aliases/GetTableDataOutput' },
                            { text: 'GridLayerTable', link: '/api/autk-db/type-aliases/GridLayerTable' },
                            { text: 'HeatmapAggregateFunction', link: '/api/autk-db/type-aliases/HeatmapAggregateFunction' },
                            { text: 'JsonTable', link: '/api/autk-db/type-aliases/JsonTable' },
                            { text: 'LayerTable', link: '/api/autk-db/type-aliases/LayerTable' },
                            { text: 'LayerType', link: '/api/autk-db/type-aliases/LayerType' },
                            { text: 'LoadOsmParams', link: '/api/autk-db/type-aliases/LoadOsmParams' },
                            { text: 'LoadingPhase', link: '/api/autk-db/type-aliases/LoadingPhase' },
                            { text: 'OnLoadingProgress', link: '/api/autk-db/type-aliases/OnLoadingProgress' },
                            { text: 'OsmTable', link: '/api/autk-db/type-aliases/OsmTable' },
                            { text: 'RawQueryOutput', link: '/api/autk-db/type-aliases/RawQueryOutput' },
                            { text: 'Table', link: '/api/autk-db/type-aliases/Table' },
                            { text: 'UpdateStrategy', link: '/api/autk-db/type-aliases/UpdateStrategy' },
                        ]
                    },
                    {
                        text: 'Variables', collapsed: true, items: [
                            { text: 'EXCLUDED_BUILDING_VALUES', link: '/api/autk-db/variables/EXCLUDED_BUILDING_VALUES' },
                            { text: 'EXCLUDED_ROAD_HIGHWAY_VALUES', link: '/api/autk-db/variables/EXCLUDED_ROAD_HIGHWAY_VALUES' },
                            { text: 'PARKS_LANDUSE_VALUES', link: '/api/autk-db/variables/PARKS_LANDUSE_VALUES' },
                            { text: 'PARKS_LEISURE_VALUES', link: '/api/autk-db/variables/PARKS_LEISURE_VALUES' },
                            { text: 'PARKS_NATURAL_VALUES', link: '/api/autk-db/variables/PARKS_NATURAL_VALUES' },
                            { text: 'WATER_FEATURE_VALUES', link: '/api/autk-db/variables/WATER_FEATURE_VALUES' },
                            { text: 'WATER_NATURAL_VALUES', link: '/api/autk-db/variables/WATER_NATURAL_VALUES' },
                        ]
                    },
                ],
            }],

            '/api/autk-map/': [{
                text: 'autk-map API Reference',
                items: [
                    { text: 'All Exports', link: '/api/autk-map/globals' },
                    {
                        text: 'Classes', collapsed: false, items: [
                            { text: 'AutkMap', link: '/api/autk-map/classes/AutkMap' },
                            { text: 'AutkMapUi', link: '/api/autk-map/classes/AutkMapUi' },
                            { text: 'Camera', link: '/api/autk-map/classes/Camera' },
                            { text: 'ColorMap', link: '/api/autk-map/classes/ColorMap' },
                            { text: 'Layer', link: '/api/autk-map/classes/Layer' },
                            { text: 'LayerManager', link: '/api/autk-map/classes/LayerManager' },
                            { text: 'MapStyle', link: '/api/autk-map/classes/MapStyle' },
                            { text: 'Renderer', link: '/api/autk-map/classes/Renderer' },
                            { text: 'TriangulatorBuildings', link: '/api/autk-map/classes/TriangulatorBuildings' },
                            { text: 'TriangulatorPoints', link: '/api/autk-map/classes/TriangulatorPoints' },
                            { text: 'TriangulatorPolygons', link: '/api/autk-map/classes/TriangulatorPolygons' },
                            { text: 'TriangulatorPolylines', link: '/api/autk-map/classes/TriangulatorPolylines' },
                            { text: 'TriangulatorRaster', link: '/api/autk-map/classes/TriangulatorRaster' },
                        ]
                    },
                    {
                        text: 'Enumerations', collapsed: true, items: [
                            { text: 'ColorMapDomainStrategy', link: '/api/autk-map/enumerations/ColorMapDomainStrategy' },
                            { text: 'ColorMapInterpolator', link: '/api/autk-map/enumerations/ColorMapInterpolator' },
                            { text: 'MapEvent', link: '/api/autk-map/enumerations/MapEvent' },
                            { text: 'MouseStatus', link: '/api/autk-map/enumerations/MouseStatus' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'BoundingBox', link: '/api/autk-map/interfaces/BoundingBox' },
                            { text: 'CameraData', link: '/api/autk-map/interfaces/CameraData' },
                            { text: 'LayerBorder', link: '/api/autk-map/interfaces/LayerBorder' },
                            { text: 'LayerBorderComponent', link: '/api/autk-map/interfaces/LayerBorderComponent' },
                            { text: 'LayerColormap', link: '/api/autk-map/interfaces/LayerColormap' },
                            { text: 'LayerComponent', link: '/api/autk-map/interfaces/LayerComponent' },
                            { text: 'LayerData', link: '/api/autk-map/interfaces/LayerData' },
                            { text: 'LayerGeometry', link: '/api/autk-map/interfaces/LayerGeometry' },
                            { text: 'LayerInfo', link: '/api/autk-map/interfaces/LayerInfo' },
                            { text: 'LayerRenderInfo', link: '/api/autk-map/interfaces/LayerRenderInfo' },
                            { text: 'LayerThematic', link: '/api/autk-map/interfaces/LayerThematic' },
                            { text: 'LoadCollectionParams', link: '/api/autk-map/interfaces/LoadCollectionParams' },
                            { text: 'LoadMeshParams', link: '/api/autk-map/interfaces/LoadMeshParams' },
                            { text: 'MapEventData', link: '/api/autk-map/interfaces/MapEventData' },
                            { text: 'MapStyleShape', link: '/api/autk-map/interfaces/MapStyleShape' },
                            { text: 'UpdateColorMapParams', link: '/api/autk-map/interfaces/UpdateColorMapParams' },
                            { text: 'UpdateRasterParams', link: '/api/autk-map/interfaces/UpdateRasterParams' },
                            { text: 'UpdateRenderInfoParams', link: '/api/autk-map/interfaces/UpdateRenderInfoParams' },
                            { text: 'UpdateThematicParams', link: '/api/autk-map/interfaces/UpdateThematicParams' },
                        ]
                    },
                    {
                        text: 'Type Aliases', collapsed: true, items: [
                            { text: 'ColorHEX', link: '/api/autk-map/type-aliases/ColorHEX' },
                            { text: 'ColorMapConfig', link: '/api/autk-map/type-aliases/ColorMapConfig' },
                            { text: 'ColorMapDomainSpec', link: '/api/autk-map/type-aliases/ColorMapDomainSpec' },
                            { text: 'ColorRGB', link: '/api/autk-map/type-aliases/ColorRGB' },
                            { text: 'ColorTEX', link: '/api/autk-map/type-aliases/ColorTEX' },
                            { text: 'LayerType', link: '/api/autk-map/type-aliases/LayerType' },
                            { text: 'MapEventRecord', link: '/api/autk-map/type-aliases/MapEventRecord' },
                            { text: 'MapStylePresetId', link: '/api/autk-map/type-aliases/MapStylePresetId' },
                            { text: 'ResolvedDomain', link: '/api/autk-map/type-aliases/ResolvedDomain' },
                        ]
                    },
                ],
            }],

            '/api/autk-plot/': [{
                text: 'autk-plot API Reference',
                items: [
                    { text: 'All Exports', link: '/api/autk-plot/globals' },
                    {
                        text: 'Classes', items: [
                            { text: 'AutkChart', link: '/api/autk-plot/classes/AutkChart' },
                            { text: 'ChartBaseData', link: '/api/autk-plot/classes/ChartBaseData' },
                            { text: 'ChartBaseInteractive', link: '/api/autk-plot/classes/ChartBaseInteractive' },
                            { text: 'ChartStyle', link: '/api/autk-plot/classes/ChartStyle' },
                            { text: 'ColorMap', link: '/api/autk-plot/classes/ColorMap' },
                            { text: 'EventEmitter', link: '/api/autk-plot/classes/EventEmitter' },
                        ]
                    },
                    {
                        text: 'Enumerations', collapsed: true, items: [
                            { text: 'ChartEvent', link: '/api/autk-plot/enumerations/ChartEvent' },
                            { text: 'ColorMapDomainStrategy', link: '/api/autk-plot/enumerations/ColorMapDomainStrategy' },
                            { text: 'ColorMapInterpolator', link: '/api/autk-plot/enumerations/ColorMapInterpolator' },
                        ]
                    },
                    {
                        text: 'Functions', collapsed: true, items: [
                            { text: 'reduceBuckets', link: '/api/autk-plot/functions/reduceBuckets' },
                            { text: 'run', link: '/api/autk-plot/functions/run' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'SelectionData', link: '/api/autk-plot/interfaces/SelectionData' },
                        ]
                    },
                    {
                        text: 'Type Aliases', collapsed: true, items: [
                            { text: 'AutkDatum', link: '/api/autk-plot/type-aliases/AutkDatum' },
                            { text: 'Binning1dBinRow', link: '/api/autk-plot/type-aliases/Binning1dBinRow' },
                            { text: 'Binning1dTransformConfig', link: '/api/autk-plot/type-aliases/Binning1dTransformConfig' },
                            { text: 'Binning2dCellRow', link: '/api/autk-plot/type-aliases/Binning2dCellRow' },
                            { text: 'Binning2dTransformConfig', link: '/api/autk-plot/type-aliases/Binning2dTransformConfig' },
                            { text: 'BinningEventsBucketRow', link: '/api/autk-plot/type-aliases/BinningEventsBucketRow' },
                            { text: 'BinningEventsTransformConfig', link: '/api/autk-plot/type-aliases/BinningEventsTransformConfig' },
                            { text: 'ChartConfig', link: '/api/autk-plot/type-aliases/ChartConfig' },
                            { text: 'ChartEventData', link: '/api/autk-plot/type-aliases/ChartEventData' },
                            { text: 'ChartEventRecord', link: '/api/autk-plot/type-aliases/ChartEventRecord' },
                            { text: 'ChartMargins', link: '/api/autk-plot/type-aliases/ChartMargins' },
                            { text: 'ChartTransformConfig', link: '/api/autk-plot/type-aliases/ChartTransformConfig' },
                            { text: 'ChartType', link: '/api/autk-plot/type-aliases/ChartType' },
                            { text: 'ColorHEX', link: '/api/autk-plot/type-aliases/ColorHEX' },
                            { text: 'ColorMapConfig', link: '/api/autk-plot/type-aliases/ColorMapConfig' },
                            { text: 'ColorMapDomainSpec', link: '/api/autk-plot/type-aliases/ColorMapDomainSpec' },
                            { text: 'ColorRGB', link: '/api/autk-plot/type-aliases/ColorRGB' },
                            { text: 'ColorTEX', link: '/api/autk-plot/type-aliases/ColorTEX' },
                            { text: 'EventListener', link: '/api/autk-plot/type-aliases/EventListener' },
                            { text: 'ExecutedBinning1dTransform', link: '/api/autk-plot/type-aliases/ExecutedBinning1dTransform' },
                            { text: 'ExecutedBinning2dTransform', link: '/api/autk-plot/type-aliases/ExecutedBinning2dTransform' },
                            { text: 'ExecutedBinningEventsTransform', link: '/api/autk-plot/type-aliases/ExecutedBinningEventsTransform' },
                            { text: 'ExecutedChartTransform', link: '/api/autk-plot/type-aliases/ExecutedChartTransform' },
                            { text: 'ExecutedReduceSeriesTransform', link: '/api/autk-plot/type-aliases/ExecutedReduceSeriesTransform' },
                            { text: 'ExecutedSortTransform', link: '/api/autk-plot/type-aliases/ExecutedSortTransform' },
                            { text: 'ReduceSeriesBucketRow', link: '/api/autk-plot/type-aliases/ReduceSeriesBucketRow' },
                            { text: 'ReduceSeriesTransformConfig', link: '/api/autk-plot/type-aliases/ReduceSeriesTransformConfig' },
                            { text: 'ReducedBucket', link: '/api/autk-plot/type-aliases/ReducedBucket' },
                            { text: 'ResolvedChartTransform', link: '/api/autk-plot/type-aliases/ResolvedChartTransform' },
                            { text: 'Row', link: '/api/autk-plot/type-aliases/Row' },
                            { text: 'SortTransformConfig', link: '/api/autk-plot/type-aliases/SortTransformConfig' },
                            { text: 'TransformReducer', link: '/api/autk-plot/type-aliases/TransformReducer' },
                            { text: 'TransformResolution', link: '/api/autk-plot/type-aliases/TransformResolution' },
                            { text: 'UnifiedChartConfig', link: '/api/autk-plot/type-aliases/UnifiedChartConfig' },
                        ]
                    },
                ],
            }],

            '/api/autk-compute/': [{
                text: 'autk-compute API Reference',
                items: [
                    { text: 'All Exports', link: '/api/autk-compute/globals' },
                    {
                        text: 'Classes', items: [
                            { text: 'AutkComputeEngine', link: '/api/autk-compute/classes/AutkComputeEngine' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'GpgpuPipelineParams', link: '/api/autk-compute/interfaces/GpgpuPipelineParams' },
                            { text: 'RenderCameraOptions', link: '/api/autk-compute/interfaces/RenderCameraOptions' },
                            { text: 'RenderLayer', link: '/api/autk-compute/interfaces/RenderLayer' },
                            { text: 'RenderPipelineParams', link: '/api/autk-compute/interfaces/RenderPipelineParams' },
                            { text: 'RenderViewSampling', link: '/api/autk-compute/interfaces/RenderViewSampling' },
                            { text: 'RenderViewpoints', link: '/api/autk-compute/interfaces/RenderViewpoints' },
                        ]
                    },
                    {
                        text: 'Type Aliases', collapsed: true, items: [
                            { text: 'RenderAggregation', link: '/api/autk-compute/type-aliases/RenderAggregation' },
                            { text: 'RenderViewpointStrategy', link: '/api/autk-compute/type-aliases/RenderViewpointStrategy' },
                        ]
                    },
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
                        { text: 'All Examples', link: '/gallery/' },
                        { text: 'Standalone GeoJSON', link: '/gallery/ex1' },
                        { text: 'Map + Database', link: '/gallery/ex2' },
                        { text: '3D OSM Map', link: '/gallery/ex3' },
                        { text: 'Linked Views', link: '/gallery/ex4' },
                        { text: 'Compute Engine', link: '/gallery/ex5' },
                        { text: 'Polygons and Points', link: '/gallery/ex6' },
                    ],
                },
                {
                    text: 'Use Cases',
                    collapsed: false,
                    items: [
                        { text: 'All Use Cases', link: '/usecases/' },
                        { text: 'Urbane Remake', link: '/usecases/urbane' },
                        { text: 'Land Surface Heat', link: '/usecases/heat' },
                        { text: 'Urban Shadow Analysis', link: '/usecases/shadows' },
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