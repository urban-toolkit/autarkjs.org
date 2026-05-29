[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / Table

# Type Alias: Table

> **Table** = [`OsmTable`](../interfaces/OsmTable.md) \| [`OsmLayerTable`](../interfaces/OsmLayerTable.md) \| [`CsvTable`](../interfaces/CsvTable.md) \| [`JsonTable`](../interfaces/JsonTable.md) \| [`GeojsonTable`](../interfaces/GeojsonTable.md) \| [`GeotiffTable`](../interfaces/GeotiffTable.md) \| [`UserTable`](../interfaces/UserTable.md)

Defined in: [interfaces.ts:151](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/interfaces.ts#L151)

All table metadata variants that can be stored in an `AutkDb` workspace.

Serves as the main discriminated union for branching on table source and renderability.
