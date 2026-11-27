# Type Alias: Table

> **Table** = [`OsmTable`](../interfaces/OsmTable.md) \| [`OsmLayerTable`](../interfaces/OsmLayerTable.md) \| [`CsvTable`](../interfaces/CsvTable.md) \| [`JsonTable`](../interfaces/JsonTable.md) \| [`GeojsonTable`](../interfaces/GeojsonTable.md) \| [`GeotiffTable`](../interfaces/GeotiffTable.md) \| [`UserTable`](../interfaces/UserTable.md)

Defined in: [autk-db/src/interfaces.ts:153](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/interfaces.ts#L153)

All table metadata variants that can be stored in an `AutkDb` workspace.

Serves as the main discriminated union for branching on table source and renderability.
