[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / checkTransform

# Function: checkTransform()

> **checkTransform**(`definition`, `collection`, `options?`, `columns?`): `string`[]

Defined in: [provenance/validate.ts:238](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/provenance/validate.ts#L238)

Runs a registered transform on sample data and checks its provenance.

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

`string`[]

Violations, empty when the transform honors the contract.

## Example

```ts
const violations = checkTransform(registeredTransform('by-initial'), geojson, {}, ['name']);
if (violations.length > 0) console.warn(violations.join('\n'));
```
