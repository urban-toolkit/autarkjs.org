[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / JsonLatLngGeometryColumns

# Interface: JsonLatLngGeometryColumns

Defined in: [use-cases/load-json/interfaces.ts:19](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/load-json/interfaces.ts#L19)

Describes how to build point geometry from explicit latitude and longitude JSON fields.

## Example

```ts
const columns: JsonLatLngGeometryColumns = { latColumnName: 'lat', longColumnName: 'lng' };
```

## Properties

### coordinateFormat?

> `optional` **coordinateFormat?**: `string`

Defined in: [use-cases/load-json/interfaces.ts:25](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/load-json/interfaces.ts#L25)

CRS of the source coordinate fields before they are transformed into the workspace CRS.

***

### latColumnName

> **latColumnName**: `string`

Defined in: [use-cases/load-json/interfaces.ts:21](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/load-json/interfaces.ts#L21)

Name of the field that stores latitude values used to create point geometries.

***

### longColumnName

> **longColumnName**: `string`

Defined in: [use-cases/load-json/interfaces.ts:23](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/use-cases/load-json/interfaces.ts#L23)

Name of the field that stores longitude values used to create point geometries.
