# Interface: JsonLatLngGeometryColumns

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:19](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L19)

Describes how to build point geometry from explicit latitude and longitude JSON fields.

## Example

```ts
const columns: JsonLatLngGeometryColumns = { latColumnName: 'lat', longColumnName: 'lng' };
```

## Properties

### latColumnName

> **latColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:21](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L21)

Name of the field that stores latitude values used to create point geometries.

***

### longColumnName

> **longColumnName**: `string`

Defined in: [autk-db/src/use-cases/load-json/interfaces.ts:23](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/use-cases/load-json/interfaces.ts#L23)

Name of the field that stores longitude values used to create point geometries.
