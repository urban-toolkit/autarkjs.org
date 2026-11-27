# Function: defaultTickFormat()

> **defaultTickFormat**(`value`): `string`

Defined in: [number-format.ts:38](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/number-format.ts#L38)

Writes a tick of an axis the configuration gives no format: with an SI prefix from one up
("1k", "2.5M"), as a decimal under one ("0.5", "0.25").

## Parameters

### value

`NumberValue`

Tick value.

## Returns

`string`

The tick's label.
