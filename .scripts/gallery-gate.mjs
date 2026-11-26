import { readFileSync } from 'node:fs'

/**
 * Decides whether the vendored gallery can be built with the installed Autark.
 *
 * The gallery source tracks the Autark 5 API. Until the site pins those
 * packages, `npm run build` stays green by skipping the gallery with a warning;
 * after the release bump the same command builds it with no extra step.
 *
 * Exit contract, used as `node gallery-gate.mjs || vite build ...`:
 *   0 — do not build (Autark 5 is not installed yet)
 *   1 — build now
 */
const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'))
const version = manifest.dependencies?.['@urban-toolkit/autk'] ?? ''
const installed = version.match(/(\d+)\.(\d+)\.(\d+)/)

if (!installed) {
  console.error('package.json must declare @urban-toolkit/autk with a semantic version.')
  process.exit(1)
}

if (Number(installed[1]) < 5) {
  console.warn(`Autark ${version} is installed; the vendored gallery needs v5. Skipping gallery:build.`)
  process.exit(0)
}

process.exit(1)
