# Function: formatSiOrDecimal()

> **formatSiOrDecimal**(`value`, `si`, `decimal`): `string`

Defined in: [number-format.ts:23](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/number-format.ts#L23)

Writes a value with an SI format, or with a decimal format where the SI format would give a
value under one a prefix: 1500 reads "1.5k", and 0.5 reads "0.5" where the SI format gives "500m".

## Parameters

### value

`number`

Value to write.

### si

(`value`) => `string`

SI format, such as `d3.format('.2s')`.

### decimal

(`value`) => `string`

Decimal format used in its place under one, such as `d3.format('.2r')`.

## Returns

`string`

The value's text.
