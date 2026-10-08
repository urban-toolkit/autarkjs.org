---
name: update-autark-release
description: Update this site after an Autark release. Use when the user says that Autark was updated or asks to update the site for an Autark version.
user-invocable: true
argument-hint: "[version, optional — resolves the latest coordinated release when omitted]"
---

# Update site for an Autark release

## Scope and safety

This workflow covers every public Autark module: `autk-core`, `autk-db`,
`autk-map`, `autk-plot`, and `autk-compute`.

Do not add or modify GitHub Actions. Do not deploy, merge into `main`, or push a
production-changing branch without the user's explicit validation and authorization.

Create a dedicated branch named `release/autark-<version>` before changing files.
If the user did not provide a version, resolve the newest coordinated
`@urban-toolkit/autk@<version>` tag from `urban-toolkit/autark`; report the selected
version before applying changes.

## 1. Prepare the exact release

1. Confirm that the target coordinated tag exists in
   `https://github.com/urban-toolkit/autark`.
2. Run the safe tag check:

   ```bash
   npm run release:prepare -- --version <version> --dry-run
   ```

3. Read `.release/autark-<version>.md`, the GitHub release notes, and the source
   diff between the currently installed version and the target tag. Review all five
   module directories, not only those mentioned in release notes.
4. Run the update:

   ```bash
   npm run release:prepare -- --version <version>
   ```

   It pins `@urban-toolkit/autk`, regenerates TypeDoc API references for all five
   modules, and creates the local impact report. Do not commit `.release/`.

## 2. Update content affected by the API diff

1. Use `git diff` plus repository-wide search for changed exports, renamed types,
   removed methods, and changed behavior.
2. Update all affected tutorials and recipes in `guide/autk-*/`, `guide/recipes/`,
   `guide/introduction.md`, and Markdown code snippets.
3. Review runnable gallery content in `guide/gallery/*.md` and the shared Vue
   playground components in `guide/.vitepress/theme/components/`. Test the affected
   gallery pages in a browser; update their code and explanation together.
4. Review `guide/.vitepress/config.ts` so the API sidebar matches newly generated
   pages. Fix generated Markdown syntax that prevents VitePress from building.

Do not claim that tutorials or examples are compatible merely because TypeDoc was
regenerated: evaluate each changed contract and its use in the site.

## 3. Validate and hand off

Run, at minimum:

```bash
git diff --check
npm run build
```

Commit only intended tracked changes with a Conventional Commit message, for example:

```text
docs: update site for autark v<version>
```

Report to the user:

- target version and modules reviewed;
- meaningful API, tutorial, and gallery changes;
- commands that passed and any manual browser checks required;
- commit hash and branch name;
- that the site has **not** been deployed.

Wait for explicit approval such as “Validei a atualização da v<version>, pode fazer o
deploy.” Only then merge the reviewed branch into `main` and rely on the existing
`deploy.yml` workflow to publish GitHub Pages.
