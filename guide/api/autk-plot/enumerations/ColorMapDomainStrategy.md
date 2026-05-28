[**@urban-toolkit/autk-plot**](../index.md)

***

[@urban-toolkit/autk-plot](../globals.md) / ColorMapDomainStrategy

# Enumeration: ColorMapDomainStrategy

Defined in: autk-core/dist/src/types-colormap.d.ts:18

Strategies for deriving a colormap domain.

The selected strategy determines whether the domain is supplied directly,
computed from numeric min/max values, or computed from numeric percentiles.

## Enumeration Members

### MIN\_MAX

> **MIN\_MAX**: `"minMax"`

Defined in: autk-core/dist/src/types-colormap.d.ts:22

Derive the domain from the observed minimum and maximum values.

***

### PERCENTILE

> **PERCENTILE**: `"percentile"`

Defined in: autk-core/dist/src/types-colormap.d.ts:24

Derive the domain from lower and upper percentiles.

***

### USER

> **USER**: `"user"`

Defined in: autk-core/dist/src/types-colormap.d.ts:20

Use the caller-provided domain verbatim.
