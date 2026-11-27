# Type Alias: PlotAnnotation

> **PlotAnnotation** = `object` & `object` & `OnAxis`\<[`AnnotationCoordinate`](AnnotationCoordinate.md)\> \| \{ `fit`: `"linear"`; `type`: `"line"`; `x?`: `never`; `y?`: `never`; \} \| \{ `series?`: `never`; `type`: `"point"`; `x`: [`AnnotationCoordinate`](AnnotationCoordinate.md); `y`: [`AnnotationCoordinate`](AnnotationCoordinate.md); \} \| \{ `series`: `string`; `type`: `"point"`; `x`: `string`; `y?`: `never`; \} \| `object` & `OnAxis`\<`Interval`\>

Defined in: [annotations.ts:12](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-plot/src/annotations.ts#L12)

A reference mark. It does not contribute data, selection, or domain bounds.

## Type Declaration

### color?

> `optional` **color?**: `string`

### id

> **id**: `string`

### label?

> `optional` **label?**: `string`
