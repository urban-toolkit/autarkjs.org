# Site use cases

Source and datasets are vendored from the coordinated Autark 4.1.1 tag,
commit `1faf032b4fe83189246b9966c0ef324f5821c731`, in `urban-toolkit/autark`.
The application code is unchanged; `vite.config.ts` adapts the build for this site.
The `heat` URL runs the upstream `niteroi` application. Autark's MIT license applies
as declared by the upstream packages. OSM data is © OpenStreetMap contributors,
under the ODbL.

## Build and review on another machine

```bash
git fetch origin
git switch release/autark-4.1.1
npm ci
npm run build
npm run test:usecases
npm run preview
```

No sibling Autark checkout is needed. `npm run dev` also builds the apps first;
rerun `npm run usecases:build` after editing their source.

Vite builds the three apps and copies their datasets into the ignored
`guide/public/usecases/apps/` directory. VitePress publishes that directory along
with the navigation-only wrappers:

- `/usecases/live/urbane.html`
- `/usecases/live/shadows.html`
- `/usecases/live/heat.html`

The wrappers keep only the site's top navigation above a viewport-filling iframe.
Use a WebGPU-capable desktop browser on localhost or HTTPS. Imports and GPU
computation can take several minutes. Test initial rendering, map picking,
chart brushing, thematic/year controls, and Urbane neighborhood drill-down.
Inspect the browser console and network panel for errors. The app READMEs explain
analytical assumptions and limitations, especially Heat's missing-value policy.

## Validation for this update

- Passed: clean `npm ci`, `npm audit` (zero vulnerabilities), production build,
  and six published-output tests.
- Browser layout checks passed at 1440px and 390px: full viewport below the top
  navigation, no sidebar/footer or page scrolling, and all three gallery links.
- Initial application rendering was checked with WebGPU-enabled Chromium.
  Manual picking, brushing, drill-down, and analytical-result review are still
  required before deployment.

## Release gate

Building, committing, and pushing this review branch do **not** publish the site.
Do not merge to `main` or dispatch the existing deployment workflow until the user
has reviewed the commit and explicitly authorized the release. No release or
deployment workflow changes are needed.
