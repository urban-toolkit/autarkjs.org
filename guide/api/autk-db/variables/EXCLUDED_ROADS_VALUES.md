[**@urban-toolkit/autk-db**](../index.md)

***

[@urban-toolkit/autk-db](../globals.md) / EXCLUDED\_ROADS\_VALUES

# Variable: EXCLUDED\_ROADS\_VALUES

> `const` **EXCLUDED\_ROADS\_VALUES**: readonly \[`"cycleway"`, `"elevator"`, `"footway"`, `"steps"`, `"pedestrian"`, `"proposed"`, `"construction"`, `"abandoned"`, `"platform"`, `"raceway"`\]

Defined in: [consts.ts:69](https://github.com/urban-toolkit/autark/blob/0ca848b459ec6c4e26521fd8e4539d654b74fd8f/autk-db/src/consts.ts#L69)

OSM road values excluded from road layer generation.

Filters out pedestrian-only, temporary, and non-road-like highway categories that should not appear in road analyses.
