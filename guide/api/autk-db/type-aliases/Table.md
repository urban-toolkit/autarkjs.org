[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / Table

# Type Alias: Table

> **Table** = [`OsmTable`](../interfaces/OsmTable.md) \| [`OsmLayerTable`](../interfaces/OsmLayerTable.md) \| [`CsvTable`](../interfaces/CsvTable.md) \| [`JsonTable`](../interfaces/JsonTable.md) \| [`GeojsonTable`](../interfaces/GeojsonTable.md) \| [`GeotiffTable`](../interfaces/GeotiffTable.md) \| [`UserTable`](../interfaces/UserTable.md)

Defined in: [interfaces.ts:151](https://github.com/urban-toolkit/autark/blob/ca69bb08b43e4b2da0a43855d7da420f72c78546/autk-db/src/interfaces.ts#L151)

All table metadata variants that can be stored in an `AutkDb` workspace.

Serves as the main discriminated union for branching on table source and renderability.
