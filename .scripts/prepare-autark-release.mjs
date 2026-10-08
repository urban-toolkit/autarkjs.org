#!/usr/bin/env node

import { cp, mkdir, mkdtemp, readFile, readdir, rename, rm, stat, writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const repository = 'https://github.com/urban-toolkit/autark.git'
const packages = ['autk-core', 'autk-db', 'autk-map', 'autk-plot', 'autk-compute']
const grammarPackage = '@urban-toolkit/autk-grammar'

function usage() {
  console.log(`Usage: npm run release:prepare -- --version <version> [--dry-run]

Downloads the exact coordinated Autark release, regenerates API references for all
five modules, and updates @urban-toolkit/autk in this site.

Examples:
  npm run release:prepare -- --version 4.0.0
  npm run release:prepare -- --version v4.0.0 --dry-run`)
}

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? root,
    encoding: 'utf8',
    stdio: options.capture ? ['ignore', 'pipe', 'pipe'] : 'inherit',
  })

  if (result.error) throw result.error
  if (result.status !== 0) {
    const detail = options.capture ? `\n${result.stderr}` : ''
    throw new Error(`${command} ${args.join(' ')} failed with exit code ${result.status}.${detail}`)
  }

  return options.capture ? result.stdout.trim() : undefined
}

function readArgument(name) {
  const index = process.argv.indexOf(name)
  return index === -1 ? undefined : process.argv[index + 1]
}

function normalizeVersion(value) {
  const version = value?.replace(/^v/, '')
  if (!version || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)) {
    throw new Error('Provide a valid release version, for example --version 4.0.0.')
  }
  return version
}

async function walkMarkdown(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walkMarkdown(path))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }

  return files
}

async function normalizeReference(destination) {
  const readme = join(destination, 'README.md')
  try {
    await rename(readme, join(destination, 'index.md'))
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }

  await writeFile(join(destination, 'index.md'), 'See [All Exports](globals.md) for the full API listing.\n')

  for (const file of await walkMarkdown(destination)) {
    const original = await readFile(file, 'utf8')
    const normalized = original
      .replaceAll('](../README.md)', '](../index.md)')
      .replaceAll('](./README.md)', '](./index.md)')
      .replaceAll('](README.md)', '](index.md)')
    if (normalized !== original) await writeFile(file, normalized)
  }
}

async function copyReference(source, destination) {
  await rm(destination, { recursive: true, force: true })
  await cp(source, destination, {
    recursive: true,
    filter: (path) => !relative(source, path).split('/').includes('_media'),
  })
  await normalizeReference(destination)
}

async function packageVersion() {
  const packageJson = JSON.parse(await readFile(join(root, 'package.json'), 'utf8'))
  const dependency = packageJson.dependencies?.['@urban-toolkit/autk']
  const match = dependency?.match(/\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?/)
  if (!match) throw new Error('package.json must declare @urban-toolkit/autk with a semantic version.')
  return match[0]
}

function dependencyMajor(range) {
  return range?.match(/\d+(?=\.)/)?.[0]
}

function compatibleGrammar(version) {
  const metadata = JSON.parse(run('npm', ['view', `${grammarPackage}@latest`, 'version', 'dependencies', '--json'], { capture: true }))
  const targetMajor = version.split('.')[0]
  const compatible = packages.every((packageName) =>
    dependencyMajor(metadata.dependencies?.[`@urban-toolkit/${packageName}`]) === targetMajor,
  )

  if (!compatible) {
    throw new Error(`${grammarPackage}@${metadata.version} is not compatible with Autark ${version}.`)
  }

  return metadata.version
}

async function writeReport({ previousVersion, version, source, previousTag, tag }) {
  const changedPaths = run('git', [
    '-C', source,
    'diff', '--name-status', previousTag, tag, '--', ...packages,
  ], { capture: true }) || '_No source paths changed in the five modules._'

  const reportDirectory = join(root, '.release')
  await mkdir(reportDirectory, { recursive: true })
  const report = join(reportDirectory, `autark-${version}.md`)
  await writeFile(report, `# Autark ${version} update report

- Previous site dependency: \`${previousVersion}\`
- Target tag: [\`${tag}\`](https://github.com/urban-toolkit/autark/tree/${encodeURIComponent(tag)})
- Compared modules: ${packages.map((name) => `\`${name}\``).join(', ')}

## Changed source paths

\`\`\`text
${changedPaths}
\`\`\`

## Required review

1. Read the GitHub release notes and inspect the API diff in the regenerated references.
2. Search all guides, recipes, gallery pages, and Vue playground components for changed exports and behavior.
3. Update affected explanations and runnable snippets; test each affected gallery example in the browser.
4. Review the API sidebar in \`guide/.vitepress/config.ts\` for added or removed generated pages.
5. Run \`npm run build\` before requesting human validation.

This report is local review material and is intentionally not published with the site.
`)
  return report
}

async function main() {
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    usage()
    return
  }

  const version = normalizeVersion(readArgument('--version'))
  const dryRun = process.argv.includes('--dry-run')
  const previousVersion = await packageVersion()
  const grammarVersion = compatibleGrammar(version)
  const tag = `@urban-toolkit/autk@${version}`
  const previousTag = `@urban-toolkit/autk@${previousVersion}`

  run('git', ['ls-remote', '--exit-code', '--tags', '--refs', repository, `refs/tags/${tag}`])
  run('git', ['ls-remote', '--exit-code', '--tags', '--refs', repository, `refs/tags/${previousTag}`])

  const temporaryDirectory = await mkdtemp(join(tmpdir(), 'autark-release-'))
  const source = join(temporaryDirectory, 'autark')

  try {
    run('git', ['clone', '--depth', '1', '--branch', tag, '--single-branch', repository, source])
    run('git', ['-C', source, 'fetch', '--depth', '1', 'origin', `refs/tags/${previousTag}:refs/tags/${previousTag}`])

    const report = await writeReport({ previousVersion, version, source, previousTag, tag })
    console.log(`Release impact report: ${report}`)

    if (dryRun) {
      console.log(`Validated release ${tag}; no site files were changed.`)
      return
    }

    run('npm', ['ci', '--ignore-scripts'], { cwd: source })
    run('npm', ['run', 'build'], { cwd: join(source, 'autk-core') })
    for (const packageName of packages) {
      run('npm', ['run', 'doc', '--', '--skipErrorChecking'], { cwd: join(source, packageName) })
    }

    for (const packageName of packages) {
      const docs = join(source, packageName, 'docs')
      if (!(await stat(docs)).isDirectory()) throw new Error(`TypeDoc did not create ${docs}.`)
      await copyReference(docs, join(root, 'guide', 'api', packageName))
    }

    const sitePackages = [
      `@urban-toolkit/autk@${version}`,
      ...packages.map((packageName) => `@urban-toolkit/${packageName}@${version}`),
      `${grammarPackage}@${grammarVersion}`,
    ]
    run('npm', ['install', '--save-exact', ...sitePackages])
    console.log(`Prepared Autark ${version}. Review ${report}, update affected guides and examples, then run npm run build.`)
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true })
  }
}

main().catch((error) => {
  console.error(`Release preparation failed: ${error.message}`)
  process.exitCode = 1
})
