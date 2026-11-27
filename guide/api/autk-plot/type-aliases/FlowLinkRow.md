# Type Alias: FlowLinkRow

> **FlowLinkRow** = `object`

Defined in: [transforms/presets/flows.ts:51](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L51)

A step between categories of two consecutive columns.

## Properties

### autkIds

> **autkIds**: `number`[]

Defined in: [transforms/presets/flows.ts:69](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L69)

Merged source feature ids taking this step, used for selection linking.

***

### column

> **column**: `number`

Defined in: [transforms/presets/flows.ts:57](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L57)

Column index of the source node.

***

### count

> **count**: `number`

Defined in: [transforms/presets/flows.ts:67](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L67)

How many rows take this step.

***

### key

> **key**: `string`

Defined in: [transforms/presets/flows.ts:55](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L55)

Link key, `JSON.stringify([column, source category, target category])`.

***

### kind

> **kind**: `"link"`

Defined in: [transforms/presets/flows.ts:53](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L53)

Row kind discriminator.

***

### label

> **label**: `string`

Defined in: [transforms/presets/flows.ts:59](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L59)

Readable label, `"<source> → <target>"`.

***

### source

> **source**: `string`

Defined in: [transforms/presets/flows.ts:61](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L61)

Key of the source node.

***

### target

> **target**: `string`

Defined in: [transforms/presets/flows.ts:63](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L63)

Key of the target node.

***

### value

> **value**: `number`

Defined in: [transforms/presets/flows.ts:65](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/presets/flows.ts#L65)

Reduced numeric result over the rows that take this step.
