# Function: checkTransformReport()

> **checkTransformReport**(`definition`, `collection`, `options?`, `columns?`): [`ContractReport`](../type-aliases/ContractReport.md)

Defined in: [provenance/validate.ts:189](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/provenance/validate.ts#L189)

Runs a transform (built-in or user) on sample data and checks the shape of
its rows and its provenance, reporting which invariant each violation breaks.

Meant for development, tests, and interactive tools: plots only run the
cheap structural checks.

## Parameters

### definition

[`TransformDefinition`](../type-aliases/TransformDefinition.md)

Transform contract to check.

### collection

`FeatureCollection`\<`Geometry`, `GeoJsonProperties`\>

Sample features.

### options?

`Record`\<`string`, `unknown`\> = `{}`

`transform.options` to run with.

### columns?

`string`[] = `[]`

Source columns, as in `attributes.axis` without `'@transform'`.

## Returns

[`ContractReport`](../type-aliases/ContractReport.md)

Violations by invariant; invariant `0` when `run` fails or returns a malformed value.
