# Type Alias: CollectedBucket

> **CollectedBucket** = [`ReducedBucket`](ReducedBucket.md) & `object`

Defined in: [transforms/kernel.ts:31](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/transforms/kernel.ts#L31)

Reduced bucket plus the input rows that were reduced into it.

## Type Declaration

### members

> **members**: `object`[]

Counted input rows, by index in `rows`, with the value each one contributed (`1` for count).
