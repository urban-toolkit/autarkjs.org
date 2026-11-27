# Variable: EXCLUDED\_ROADS\_VALUES

> `const` **EXCLUDED\_ROADS\_VALUES**: readonly \[`"cycleway"`, `"elevator"`, `"footway"`, `"steps"`, `"pedestrian"`, `"proposed"`, `"construction"`, `"abandoned"`, `"platform"`, `"raceway"`\]

Defined in: [autk-db/src/consts.ts:78](https://github.com/urban-toolkit/autark/blob/8707a52c73dc32825e702f3a61de13def68d327e/autk-db/src/consts.ts#L78)

OSM road values excluded from road layer generation.

Filters out pedestrian-only, temporary, and non-road-like highway categories that should not appear in road analyses.
