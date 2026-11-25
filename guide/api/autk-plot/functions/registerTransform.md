[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / registerTransform

# Function: registerTransform()

> **registerTransform**(`definition`): `void`

Defined in: [transforms/registry.ts:150](https://github.com/urban-toolkit/autark/blob/7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460/autk-plot/src/transforms/registry.ts#L150)

Adds a transform to the registry, used as `transform: { preset: 'registered', name }`.

## Parameters

### definition

[`TransformDefinition`](../type-aliases/TransformDefinition.md)

Transform contract: name, row shape, and `run`.

## Returns

`void`

## Throws

If the name is empty or taken, the shape is unknown, or `run` is not a function.

## Example

```ts
// Regions grouped by the initial of a column: many regions per bar (N:1).
registerTransform({
  name: 'by-initial',
  shape: 'category-value',
  run(rows, _options, columns) {
    const buckets = collectBuckets({
      rows,
      bucketOf: row => String(row[columns[0]] ?? '').charAt(0).toUpperCase() || null,
      reducer: 'count',
    });
    const keys = buckets.map(b => b.key);
    return {
      rows: buckets.map(b => ({ label: b.key, value: b.value, autkIds: b.autkIds })),
      provenance: binnedProvenance({
        rows, buckets, bins: indexedBins(keys, keys, 'initial'),
        binLabel: 'initials', rowKeys: keys, reducer: 'count',
      }),
    };
  },
});
```
