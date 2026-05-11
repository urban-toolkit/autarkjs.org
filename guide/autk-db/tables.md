# Tables

The central data model in `autk-db` is the **named table**. Every load method creates one or more tables inside DuckDB, and most analysis methods read from existing tables and write their result to a table.

A layer is not a separate storage object in `autk-db`: it is a table that can be rendered because it contains geometry in a supported format.

## Named Tables

A table is identified by its name:

```typescript
await db.loadCustomLayer({
  geojsonFileUrl: '/data/neighborhoods.geojson',
  outputTableName: 'neighborhoods',
  coordinateFormat: 'EPSG:3395',
});
```

After this call, `neighborhoods` is available to other methods:

```typescript
const rows = await db.getTableData({ tableName: 'neighborhoods' });
const geojson = await db.getLayer('neighborhoods');
```

## Table Metadata

Use `db.tables` to inspect the tables in the current workspace:

```typescript
console.log(db.tables);
```

Each entry contains metadata, not the table rows themselves:

```typescript
{
  name: 'neighborhoods',
  source: 'geojson',
  type: 'polygons',
  columns: [
    { name: 'geometry', type: 'GEOMETRY' },
    { name: 'properties', type: 'JSON' }
  ]
}
```

Common metadata fields:

| Field | Meaning |
|---|---|
| `name` | Table name used by `autk-db` methods |
| `source` | Where the table came from, such as `'csv'`, `'json'`, `'osm'`, `'geojson'`, `'geotiff'`, or `'user'` |
| `type` | Table kind, such as `'pointset'`, `'buildings'`, `'roads'`, `'polygons'`, `'points'`, or `'raster'` |
| `columns` | DuckDB column names and types |

## Renderable Tables

Some tables can be exported as GeoJSON with `getLayer()` and rendered with `autk-map`.

```typescript
const geojson = await db.getLayer('neighborhoods');
map.loadCollection('neighborhoods', { collection: geojson, type: 'polygons' });
```

Use `getLayerTables()` to list the tables that are directly renderable:

```typescript
const renderableTables = db.getLayerTables();

for (const table of renderableTables) {
  const geojson = await db.getLayer(table.name);
  map.loadCollection(table.name, { collection: geojson, type: table.type });
}
```

Renderable table types include values such as `'surface'`, `'water'`, `'parks'`, `'roads'`, `'buildings'`, `'points'`, `'polygons'`, `'polylines'`, and `'raster'`.

## Tables with Geometry

CSV and JSON tables can be loaded with latitude/longitude columns to create a geometry column:

```typescript
await db.loadCsv({
  csvFileUrl: '/data/incidents.csv',
  outputTableName: 'incidents',
  geometryColumns: {
    latColumnName: 'lat',
    longColumnName: 'lon',
    coordinateFormat: 'EPSG:3395',
  },
});
```

A table with geometry can participate in spatial operations such as `spatialJoin` and `buildHeatmap`. To be exported through `getLayer()`, it must also have a supported renderable `type`.

## OSM Table Naming

When using `loadOsm` with `autoLoadLayers`, each extracted table is named with this pattern:

```text
{outputTableName}_{layer}
```

For example:

```typescript
await db.loadOsm({
  queryArea: { geocodeArea: 'New York', areas: ['Financial District'] },
  outputTableName: 'osm',
  autoLoadLayers: {
    coordinateFormat: 'EPSG:3395',
    layers: ['surface', 'roads', 'buildings'],
  },
});
```

Creates tables named:

```text
osm_surface
osm_roads
osm_buildings
```

## Workspaces and Table Scope

`db.tables` only shows tables in the current workspace. If you switch workspaces, you switch to a different table namespace:

```typescript
await db.setWorkspace('scenario-a');
console.log(db.tables); // tables in scenario-a only

await db.setWorkspace('scenario-b');
console.log(db.tables); // tables in scenario-b only
```

See [Workspaces](./workspaces) for details.
