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
            exclude: ['@urban-toolkit/autk-db', '@duckdb/duckdb-wasm'],
        },
        server: {
            headers: {
                '.wasm': { 'Content-Type': 'application/wasm' },
            },
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
                    { text: 'autk-core', link: '/api/autk-core/globals' },
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
                            { text: 'AutkDb', link: '/api/autk-db/classes/AutkDb' },
                        ]
                    },
                    {
                        text: 'Functions', collapsed: true, items: [
                            { text: 'isRasterTable', link: '/api/autk-db/functions/isRasterTable' },
                            { text: 'isRenderableTable', link: '/api/autk-db/functions/isRenderableTable' },
                            { text: 'isVectorTable', link: '/api/autk-db/functions/isVectorTable' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'BaseTable', link: '/api/autk-db/interfaces/BaseTable' },
                            { text: 'BuildHeatmapParams', link: '/api/autk-db/interfaces/BuildHeatmapParams' },
                            { text: 'Column', link: '/api/autk-db/interfaces/Column' },
                            { text: 'CsvLatLngGeometryColumns', link: '/api/autk-db/interfaces/CsvLatLngGeometryColumns' },
                            { text: 'CsvTable', link: '/api/autk-db/interfaces/CsvTable' },
                            { text: 'CsvWktGeometryColumns', link: '/api/autk-db/interfaces/CsvWktGeometryColumns' },
                            { text: 'GeojsonTable', link: '/api/autk-db/interfaces/GeojsonTable' },
                            { text: 'GeotiffTable', link: '/api/autk-db/interfaces/GeotiffTable' },
                            { text: 'GetTablesParams', link: '/api/autk-db/interfaces/GetTablesParams' },
                            { text: 'JsonLatLngGeometryColumns', link: '/api/autk-db/interfaces/JsonLatLngGeometryColumns' },
                            { text: 'JsonTable', link: '/api/autk-db/interfaces/JsonTable' },
                            { text: 'JsonWktGeometryColumns', link: '/api/autk-db/interfaces/JsonWktGeometryColumns' },
                            { text: 'LayerLoadTimings', link: '/api/autk-db/interfaces/LayerLoadTimings' },
                            { text: 'LoadCsvParams', link: '/api/autk-db/interfaces/LoadCsvParams' },
                            { text: 'LoadGeojsonParams', link: '/api/autk-db/interfaces/LoadGeojsonParams' },
                            { text: 'LoadGeoTiffParams', link: '/api/autk-db/interfaces/LoadGeoTiffParams' },
                            { text: 'LoadJsonParams', link: '/api/autk-db/interfaces/LoadJsonParams' },
                            { text: 'NearConfig', link: '/api/autk-db/interfaces/NearConfig' },
                            { text: 'OsmLayerTable', link: '/api/autk-db/interfaces/OsmLayerTable' },
                            { text: 'OsmLoadTimings', link: '/api/autk-db/interfaces/OsmLoadTimings' },
                            { text: 'OsmTable', link: '/api/autk-db/interfaces/OsmTable' },
                            { text: 'RasterBandMetadata', link: '/api/autk-db/interfaces/RasterBandMetadata' },
                            { text: 'RawQueryParams', link: '/api/autk-db/interfaces/RawQueryParams' },
                            { text: 'SpatialQueryParams', link: '/api/autk-db/interfaces/SpatialQueryParams' },
                            { text: 'UpdateTableParams', link: '/api/autk-db/interfaces/UpdateTableParams' },
                            { text: 'UserTable', link: '/api/autk-db/interfaces/UserTable' },
                        ]
                    },
                    {
                        text: 'Type Aliases', collapsed: true, items: [
                            { text: 'AggregateFunction', link: '/api/autk-db/type-aliases/AggregateFunction' },
                            { text: 'CsvDefaultLatLngGeometryColumns', link: '/api/autk-db/type-aliases/CsvDefaultLatLngGeometryColumns' },
                            { text: 'CsvGeometryColumns', link: '/api/autk-db/type-aliases/CsvGeometryColumns' },
                            { text: 'CsvGeometryLayerType', link: '/api/autk-db/type-aliases/CsvGeometryLayerType' },
                            { text: 'GetTablesOutput', link: '/api/autk-db/type-aliases/GetTablesOutput' },
                            { text: 'HeatmapAggregateFunction', link: '/api/autk-db/type-aliases/HeatmapAggregateFunction' },
                            { text: 'JsonDefaultLatLngGeometryColumns', link: '/api/autk-db/type-aliases/JsonDefaultLatLngGeometryColumns' },
                            { text: 'JsonGeometryColumns', link: '/api/autk-db/type-aliases/JsonGeometryColumns' },
                            { text: 'JsonGeometryLayerType', link: '/api/autk-db/type-aliases/JsonGeometryLayerType' },
                            { text: 'LoadOsmParams', link: '/api/autk-db/type-aliases/LoadOsmParams' },
                            { text: 'LoadingPhase', link: '/api/autk-db/type-aliases/LoadingPhase' },
                            { text: 'OnLoadingProgress', link: '/api/autk-db/type-aliases/OnLoadingProgress' },
                            { text: 'RawQueryOutput', link: '/api/autk-db/type-aliases/RawQueryOutput' },
                            { text: 'Table', link: '/api/autk-db/type-aliases/Table' },
                            { text: 'TableSource', link: '/api/autk-db/type-aliases/TableSource' },
                            { text: 'UpdateStrategy', link: '/api/autk-db/type-aliases/UpdateStrategy' },
                        ]
                    },
                    {
                        text: 'Variables', collapsed: true, items: [
                            { text: 'DEFAULT_INPUT_COORDINATE_FORMAT', link: '/api/autk-db/variables/DEFAULT_INPUT_COORDINATE_FORMAT' },
                            { text: 'DEFAULT_WORKSPACE_COORDINATE_FORMAT', link: '/api/autk-db/variables/DEFAULT_WORKSPACE_COORDINATE_FORMAT' },
                            { text: 'DEFAULT_WORKSPACE_NAME', link: '/api/autk-db/variables/DEFAULT_WORKSPACE_NAME' },
                            { text: 'EXCLUDED_BUILDING_VALUES', link: '/api/autk-db/variables/EXCLUDED_BUILDING_VALUES' },
                            { text: 'EXCLUDED_ROADS_VALUES', link: '/api/autk-db/variables/EXCLUDED_ROADS_VALUES' },
                            { text: 'PARKS_LANDUSE_VALUES', link: '/api/autk-db/variables/PARKS_LANDUSE_VALUES' },
                            { text: 'PARKS_LEISURE_VALUES', link: '/api/autk-db/variables/PARKS_LEISURE_VALUES' },
                            { text: 'PARKS_NATURAL_VALUES', link: '/api/autk-db/variables/PARKS_NATURAL_VALUES' },
                            { text: 'WATER_FEATURE_VALUES', link: '/api/autk-db/variables/WATER_FEATURE_VALUES' },
                            { text: 'WATER_NATURAL_VALUES', link: '/api/autk-db/variables/WATER_NATURAL_VALUES' },
                        ]
                    },
                ],
            }],

            '/api/autk-core/': [{
                text: 'autk-core API Reference',
                items: [
                    { text: 'All Exports', link: '/api/autk-core/globals' },
                    {
                        text: 'Classes', collapsed: false, items: [
                            { text: 'Camera', link: '/api/autk-core/classes/Camera' },
                            { text: 'CameraMotion', link: '/api/autk-core/classes/CameraMotion' },
                            { text: 'ColorMap', link: '/api/autk-core/classes/ColorMap' },
                            { text: 'EventEmitter', link: '/api/autk-core/classes/EventEmitter' },
                            { text: 'TriangulatorBuildingWithWindows', link: '/api/autk-core/classes/TriangulatorBuildingWithWindows' },
                            { text: 'TriangulatorBuildings', link: '/api/autk-core/classes/TriangulatorBuildings' },
                            { text: 'TriangulatorPoints', link: '/api/autk-core/classes/TriangulatorPoints' },
                            { text: 'TriangulatorPolygons', link: '/api/autk-core/classes/TriangulatorPolygons' },
                            { text: 'TriangulatorPolylines', link: '/api/autk-core/classes/TriangulatorPolylines' },
                            { text: 'TriangulatorRaster', link: '/api/autk-core/classes/TriangulatorRaster' },
                        ]
                    },
                    {
                        text: 'Enumerations', collapsed: true, items: [
                            { text: 'ColorMapDomainStrategy', link: '/api/autk-core/enumerations/ColorMapDomainStrategy' },
                            { text: 'ColorMapInterpolator', link: '/api/autk-core/enumerations/ColorMapInterpolator' },
                        ]
                    },
                    {
                        text: 'Functions', collapsed: true, items: [
                            { text: 'buildTransferContext', link: '/api/autk-core/functions/buildTransferContext' },
                            { text: 'computeAlphaByte', link: '/api/autk-core/functions/computeAlphaByte' },
                            { text: 'computeBoundingBox', link: '/api/autk-core/functions/computeBoundingBox' },
                            { text: 'computeGeometryCentroid', link: '/api/autk-core/functions/computeGeometryCentroid' },
                            { text: 'computeIntersectingClusterIds', link: '/api/autk-core/functions/computeIntersectingClusterIds' },
                            { text: 'computeOrigin', link: '/api/autk-core/functions/computeOrigin' },
                            { text: 'isFeatureCollection', link: '/api/autk-core/functions/isFeatureCollection' },
                            { text: 'isLayerType', link: '/api/autk-core/functions/isLayerType' },
                            { text: 'isNumericLike', link: '/api/autk-core/functions/isNumericLike' },
                            { text: 'mapGeometryTypeToLayerType', link: '/api/autk-core/functions/mapGeometryTypeToLayerType' },
                            { text: 'offsetPolyline', link: '/api/autk-core/functions/offsetPolyline' },
                            { text: 'valueAtPath', link: '/api/autk-core/functions/valueAtPath' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'BoundingBox', link: '/api/autk-core/interfaces/BoundingBox' },
                            { text: 'BuildingWindowLayoutEntry', link: '/api/autk-core/interfaces/BuildingWindowLayoutEntry' },
                            { text: 'BuildingWindowLayoutResult', link: '/api/autk-core/interfaces/BuildingWindowLayoutResult' },
                            { text: 'CameraData', link: '/api/autk-core/interfaces/CameraData' },
                            { text: 'LayerBorder', link: '/api/autk-core/interfaces/LayerBorder' },
                            { text: 'LayerBorderComponent', link: '/api/autk-core/interfaces/LayerBorderComponent' },
                            { text: 'LayerComponent', link: '/api/autk-core/interfaces/LayerComponent' },
                            { text: 'LayerGeometry', link: '/api/autk-core/interfaces/LayerGeometry' },
                            { text: 'PointInstancesData', link: '/api/autk-core/interfaces/PointInstancesData' },
                            { text: 'SelectionData', link: '/api/autk-core/interfaces/SelectionData' },
                            { text: 'TransferContext', link: '/api/autk-core/interfaces/TransferContext' },
                            { text: 'TransferFunction', link: '/api/autk-core/interfaces/TransferFunction' },
                            { text: 'ViewProjectionParams', link: '/api/autk-core/interfaces/ViewProjectionParams' },
                        ]
                    },
                    {
                        text: 'Type Aliases', collapsed: true, items: [
                            { text: 'ColorHEX', link: '/api/autk-core/type-aliases/ColorHEX' },
                            { text: 'ColorMapConfig', link: '/api/autk-core/type-aliases/ColorMapConfig' },
                            { text: 'ColorMapDomainSpec', link: '/api/autk-core/type-aliases/ColorMapDomainSpec' },
                            { text: 'ColorRGB', link: '/api/autk-core/type-aliases/ColorRGB' },
                            { text: 'ColorTEX', link: '/api/autk-core/type-aliases/ColorTEX' },
                            { text: 'EventListener', link: '/api/autk-core/type-aliases/EventListener' },
                            { text: 'LayerType', link: '/api/autk-core/type-aliases/LayerType' },
                            { text: 'RequiredTransferFunction', link: '/api/autk-core/type-aliases/RequiredTransferFunction' },
                            { text: 'ResolvedDomain', link: '/api/autk-core/type-aliases/ResolvedDomain' },
                            { text: 'TypedArray', link: '/api/autk-core/type-aliases/TypedArray' },
                            { text: 'TypedArrayConstructor', link: '/api/autk-core/type-aliases/TypedArrayConstructor' },
                        ]
                    },
                    {
                        text: 'Variables', collapsed: true, items: [
                            { text: 'DEFAULT_COLORMAP_RESOLUTION', link: '/api/autk-core/variables/DEFAULT_COLORMAP_RESOLUTION' },
                            { text: 'DEFAULT_TRANSFER_FUNCTION', link: '/api/autk-core/variables/DEFAULT_TRANSFER_FUNCTION' },
                            { text: 'LAYER_TYPE_VALUES', link: '/api/autk-core/variables/LAYER_TYPE_VALUES' },
                            { text: 'OSM_BASE_LAYER_ORDER', link: '/api/autk-core/variables/OSM_BASE_LAYER_ORDER' },
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
                            { text: 'Layer', link: '/api/autk-map/classes/Layer' },
                            { text: 'LayerManager', link: '/api/autk-map/classes/LayerManager' },
                            { text: 'MapStyle', link: '/api/autk-map/classes/MapStyle' },
                            { text: 'Renderer', link: '/api/autk-map/classes/Renderer' },
                        ]
                    },
                    {
                        text: 'Enumerations', collapsed: true, items: [
                            { text: 'MapEvent', link: '/api/autk-map/enumerations/MapEvent' },
                            { text: 'MouseStatus', link: '/api/autk-map/enumerations/MouseStatus' },
                        ]
                    },
                    {
                        text: 'Interfaces', collapsed: true, items: [
                            { text: 'LayerColormap', link: '/api/autk-map/interfaces/LayerColormap' },
                            { text: 'LayerData', link: '/api/autk-map/interfaces/LayerData' },
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
                            { text: 'MapEventRecord', link: '/api/autk-map/type-aliases/MapEventRecord' },
                            { text: 'MapStylePresetId', link: '/api/autk-map/type-aliases/MapStylePresetId' },
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
                            { text: 'AutkPlot', link: '/api/autk-plot/classes/AutkPlot' },
                            { text: 'PlotBaseData', link: '/api/autk-plot/classes/PlotBaseData' },
                            { text: 'PlotBaseInteractive', link: '/api/autk-plot/classes/PlotBaseInteractive' },
                            { text: 'PlotStyle', link: '/api/autk-plot/classes/PlotStyle' },
                        ]
                    },
                    {
                        text: 'Enumerations', collapsed: true, items: [
                            { text: 'PlotEvent', link: '/api/autk-plot/enumerations/PlotEvent' },
                        ]
                    },
                    {
                        text: 'Functions', collapsed: true, items: [
                            { text: 'reduceBuckets', link: '/api/autk-plot/functions/reduceBuckets' },
                            { text: 'run', link: '/api/autk-plot/functions/run' },
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
                            { text: 'ExecutedBinning1dTransform', link: '/api/autk-plot/type-aliases/ExecutedBinning1dTransform' },
                            { text: 'ExecutedBinning2dTransform', link: '/api/autk-plot/type-aliases/ExecutedBinning2dTransform' },
                            { text: 'ExecutedBinningEventsTransform', link: '/api/autk-plot/type-aliases/ExecutedBinningEventsTransform' },
                            { text: 'ExecutedPlotTransform', link: '/api/autk-plot/type-aliases/ExecutedPlotTransform' },
                            { text: 'ExecutedReduceSeriesTransform', link: '/api/autk-plot/type-aliases/ExecutedReduceSeriesTransform' },
                            { text: 'ExecutedSortTransform', link: '/api/autk-plot/type-aliases/ExecutedSortTransform' },
                            { text: 'PlotConfig', link: '/api/autk-plot/type-aliases/PlotConfig' },
                            { text: 'PlotEventData', link: '/api/autk-plot/type-aliases/PlotEventData' },
                            { text: 'PlotEventRecord', link: '/api/autk-plot/type-aliases/PlotEventRecord' },
                            { text: 'PlotMargins', link: '/api/autk-plot/type-aliases/PlotMargins' },
                            { text: 'PlotTransformConfig', link: '/api/autk-plot/type-aliases/PlotTransformConfig' },
                            { text: 'PlotType', link: '/api/autk-plot/type-aliases/PlotType' },
                            { text: 'ReduceSeriesBucketRow', link: '/api/autk-plot/type-aliases/ReduceSeriesBucketRow' },
                            { text: 'ReduceSeriesTransformConfig', link: '/api/autk-plot/type-aliases/ReduceSeriesTransformConfig' },
                            { text: 'ReducedBucket', link: '/api/autk-plot/type-aliases/ReducedBucket' },
                            { text: 'ResolvedPlotTransform', link: '/api/autk-plot/type-aliases/ResolvedPlotTransform' },
                            { text: 'Row', link: '/api/autk-plot/type-aliases/Row' },
                            { text: 'SortTransformConfig', link: '/api/autk-plot/type-aliases/SortTransformConfig' },
                            { text: 'TransformReducer', link: '/api/autk-plot/type-aliases/TransformReducer' },
                            { text: 'TransformResolution', link: '/api/autk-plot/type-aliases/TransformResolution' },
                            { text: 'UnifiedPlotConfig', link: '/api/autk-plot/type-aliases/UnifiedPlotConfig' },
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
                        { text: 'Analyzing Data', link: '/autk-db/analyzing-data' },
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
                        { text: 'Thematic Data', link: '/autk-map/thematic-mapping' },
                        { text: 'Interactions', link: '/autk-map/interactions' },
                        { text: 'Styling', link: '/autk-map/styling' },
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