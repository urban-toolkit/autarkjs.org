[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / EXCLUDED\_ROADS\_VALUES

# Variable: EXCLUDED\_ROADS\_VALUES

> `const` **EXCLUDED\_ROADS\_VALUES**: readonly \[`"cycleway"`, `"elevator"`, `"footway"`, `"steps"`, `"pedestrian"`, `"proposed"`, `"construction"`, `"abandoned"`, `"platform"`, `"raceway"`\]

Defined in: [consts.ts:69](https://github.com/urban-toolkit/autark/blob/ace1b4c58f43d6ec5f6df6a8f89ec83b8006278b/autk-db/src/consts.ts#L69)

OSM road values excluded from road layer generation.

Filters out pedestrian-only, temporary, and non-road-like highway categories that should not appear in road analyses.
