[**autk-map**](../index.md)

***

[autk-map](../globals.md) / ColorMapDomainStrategy

# Enumeration: ColorMapDomainStrategy

Defined in: [autk-core/src/types-colormap.ts:19](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L19)

Strategies for deriving a colormap domain.

The selected strategy determines whether the domain is supplied directly,
computed from numeric min/max values, or computed from numeric percentiles.

## Enumeration Members

### MIN\_MAX

> **MIN\_MAX**: `"minMax"`

Defined in: [autk-core/src/types-colormap.ts:23](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L23)

Derive the domain from the observed minimum and maximum values.

***

### PERCENTILE

> **PERCENTILE**: `"percentile"`

Defined in: [autk-core/src/types-colormap.ts:25](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L25)

Derive the domain from lower and upper percentiles.

***

### USER

> **USER**: `"user"`

Defined in: [autk-core/src/types-colormap.ts:21](https://github.com/urban-toolkit/autark/blob/be27d66c55f885979ab5d4dff54048f4e2c468a1/autk-core/src/types-colormap.ts#L21)

Use the caller-provided domain verbatim.
