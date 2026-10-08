[**@urban-toolkit/autk-core**](../index.md)

***

[@urban-toolkit/autk-core](../globals.md) / TypedArrayConstructor

# Type Alias: TypedArrayConstructor

> **TypedArrayConstructor** = `Float32ArrayConstructor` \| `Float64ArrayConstructor` \| `Int8ArrayConstructor` \| `Int16ArrayConstructor` \| `Int32ArrayConstructor` \| `Uint8ArrayConstructor` \| `Uint8ClampedArrayConstructor` \| `Uint16ArrayConstructor` \| `Uint32ArrayConstructor`

Defined in: [types-buffer.ts:34](https://github.com/urban-toolkit/autark/blob/30159045d4c004f98140fe4bd941e84bee5088b8/autk-core/src/types-buffer.ts#L34)

Constructors for the supported TypedArray views.

Use this alias when code needs to allocate or re-create buffer views from a
shared binary source without narrowing to a single numeric representation.
