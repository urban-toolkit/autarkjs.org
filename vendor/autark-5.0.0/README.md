# Pinned Autark candidate

The site uses local 5.0.0 tarballs until the coordinated npm release is published.
`manifest.json` records the exact source commit and each tarball's SHA-512 integrity.
All six archives are committed so `npm ci` works without a sibling checkout.

This update pins source commit `8707a52c73dc32825e702f3a61de13def68d327e`.
Only `autk-plot` changed since the previous candidate
`7dc7dea6cf860d8a9eb6c1ac2a5f64b450865460`; its archive was rebuilt with
`npm run build` in that clean upstream checkout. A temporary packaging directory
contains its `dist/`, `README.md`, and package manifest, with the candidate version
and `@urban-toolkit/autk-core` dependency set to `5.0.0`. The other five archives
remain byte-identical because their source did not change.

The API references for all five modules were regenerated from the pinned source
with `npm run doc -- --skipErrorChecking`, imported into `guide/api/`, and polished
with `npm run api:polish`. The gallery is pinned to the same commit.

After the public release, follow the registry migration steps in the root
`AGENTS.md`. These archives are a site candidate, not a published npm release.
