# Type Alias: FlowNodeRow

> **FlowNodeRow** = `object`

Defined in: [transforms/presets/flows.ts:33](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L33)

A category of one column.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/flows.ts:47](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L47)

Merged source feature ids of the category, used for selection linking.

***

### column

> **column**: `number`

Defined in: [transforms/presets/flows.ts:39](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L39)

Column index, `0` for the first column.

***

### count

> **count**: `number`

Defined in: [transforms/presets/flows.ts:45](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L45)

How many rows are in the category.

***

### key

> **key**: `string`

Defined in: [transforms/presets/flows.ts:37](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L37)

Node key, `<column>:<category>`.

***

### kind

> **kind**: `"node"`

Defined in: [transforms/presets/flows.ts:35](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L35)

Row kind discriminator.

***

### label

> **label**: `string`

Defined in: [transforms/presets/flows.ts:41](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L41)

Category label.

***

### value

> **value**: `number`

Defined in: [transforms/presets/flows.ts:43](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L43)

Reduced numeric result over the rows in the category.
