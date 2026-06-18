[**@urban-toolkit/autk-db**](index.md)

***

# @urban-toolkit/autk-db

Public entry point for the `@urban-toolkit/autk-db` package.

Re-exports the database class, shared table metadata types, loading parameter types, and OSM-related constants from a single module.

## Example

```ts
import { AutkDb, isVectorTable, DEFAULT_WORKSPACE_NAME } from '@urban-toolkit/autk-db';

const db = new AutkDb();
console.log(DEFAULT_WORKSPACE_NAME); // 'autk'
console.log(isVectorTable({ source: 'geojson', name: 'roads', columns: [], type: 'line' })); // true
```

## Classes

- [AutkDb](classes/AutkDb.md)

## Interfaces

- [BaseTable](interfaces/BaseTable.md)
- [BuildHeatmapParams](interfaces/BuildHeatmapParams.md)
- [Column](interfaces/Column.md)
- [CsvLatLngGeometryColumns](interfaces/CsvLatLngGeometryColumns.md)
- [CsvTable](interfaces/CsvTable.md)
- [CsvWktGeometryColumns](interfaces/CsvWktGeometryColumns.md)
- [GeojsonTable](interfaces/GeojsonTable.md)
- [GeotiffTable](interfaces/GeotiffTable.md)
- [HeatmapGroupBy](interfaces/HeatmapGroupBy.md)
- [JsonLatLngGeometryColumns](interfaces/JsonLatLngGeometryColumns.md)
- [JsonTable](interfaces/JsonTable.md)
- [JsonWktGeometryColumns](interfaces/JsonWktGeometryColumns.md)
- [LayerLoadTimings](interfaces/LayerLoadTimings.md)
- [LoadCsvParams](interfaces/LoadCsvParams.md)
- [LoadGeojsonParams](interfaces/LoadGeojsonParams.md)
- [LoadGeoTiffParams](interfaces/LoadGeoTiffParams.md)
- [LoadJsonParams](interfaces/LoadJsonParams.md)
- [NearConfig](interfaces/NearConfig.md)
- [OsmLayerTable](interfaces/OsmLayerTable.md)
- [OsmLoadTimings](interfaces/OsmLoadTimings.md)
- [OsmTable](interfaces/OsmTable.md)
- [RasterBandMetadata](interfaces/RasterBandMetadata.md)
- [RawQueryParams](interfaces/RawQueryParams.md)
- [SpatialQueryParams](interfaces/SpatialQueryParams.md)
- [UpdateTableParams](interfaces/UpdateTableParams.md)
- [UserTable](interfaces/UserTable.md)

## Type Aliases

- [AggregateFunction](type-aliases/AggregateFunction.md)
- [CsvDefaultLatLngGeometryColumns](type-aliases/CsvDefaultLatLngGeometryColumns.md)
- [CsvGeometryColumns](type-aliases/CsvGeometryColumns.md)
- [CsvGeometryLayerType](type-aliases/CsvGeometryLayerType.md)
- [GetTableOutput](type-aliases/GetTableOutput.md)
- [HeatmapAggregateFunction](type-aliases/HeatmapAggregateFunction.md)
- [JsonDefaultLatLngGeometryColumns](type-aliases/JsonDefaultLatLngGeometryColumns.md)
- [JsonGeometryColumns](type-aliases/JsonGeometryColumns.md)
- [JsonGeometryLayerType](type-aliases/JsonGeometryLayerType.md)
- [LoadingPhase](type-aliases/LoadingPhase.md)
- [LoadOsmParams](type-aliases/LoadOsmParams.md)
- [OnLoadingProgress](type-aliases/OnLoadingProgress.md)
- [RawQueryOutput](type-aliases/RawQueryOutput.md)
- [Table](type-aliases/Table.md)
- [TableSource](type-aliases/TableSource.md)
- [UpdateStrategy](type-aliases/UpdateStrategy.md)

## Variables

- [DEFAULT\_INPUT\_COORDINATE\_FORMAT](variables/DEFAULT_INPUT_COORDINATE_FORMAT.md)
- [DEFAULT\_WORKSPACE\_COORDINATE\_FORMAT](variables/DEFAULT_WORKSPACE_COORDINATE_FORMAT.md)
- [DEFAULT\_WORKSPACE\_NAME](variables/DEFAULT_WORKSPACE_NAME.md)
- [EXCLUDED\_BUILDING\_VALUES](variables/EXCLUDED_BUILDING_VALUES.md)
- [EXCLUDED\_ROADS\_VALUES](variables/EXCLUDED_ROADS_VALUES.md)
- [PARKS\_LANDUSE\_VALUES](variables/PARKS_LANDUSE_VALUES.md)
- [PARKS\_LEISURE\_VALUES](variables/PARKS_LEISURE_VALUES.md)
- [PARKS\_NATURAL\_VALUES](variables/PARKS_NATURAL_VALUES.md)
- [WATER\_FEATURE\_VALUES](variables/WATER_FEATURE_VALUES.md)
- [WATER\_NATURAL\_VALUES](variables/WATER_NATURAL_VALUES.md)

## Functions

- [isRasterTable](functions/isRasterTable.md)
- [isRenderableTable](functions/isRenderableTable.md)
- [isVectorTable](functions/isVectorTable.md)
