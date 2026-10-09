[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / EXCLUDED\_ROADS\_VALUES

# Variable: EXCLUDED\_ROADS\_VALUES

> `const` **EXCLUDED\_ROADS\_VALUES**: readonly \[`"cycleway"`, `"elevator"`, `"footway"`, `"steps"`, `"pedestrian"`, `"proposed"`, `"construction"`, `"abandoned"`, `"platform"`, `"raceway"`\]

Defined in: [consts.ts:78](https://github.com/urban-toolkit/autark/blob/2c8ba2bc3a76792db0e07ffa02bd5ab8613e2062/autk-db/src/consts.ts#L78)

OSM road values excluded from road layer generation.

Filters out pedestrian-only, temporary, and non-road-like highway categories that should not appear in road analyses.
