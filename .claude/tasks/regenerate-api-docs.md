# Regenerate API Reference Docs

Regenerate the TypeDoc-generated API reference for all Autark libraries and import them into the VitePress site.

---

## Path variables

Set these two variables before running any commands. They point to the root of each repository on your machine:

```bash
AUTARK_PATH=/home/lucas/projects/master-degree/dissertasao/autark
DOCS_PATH=/home/lucas/projects/master-degree/dissertasao/autarkjs.org
```

All commands below use `$AUTARK_PATH` and `$DOCS_PATH`.

---

## Libraries to process

| Library       | Source TypeDoc output dir              | Destination in site                          |
|---------------|----------------------------------------|----------------------------------------------|
| `autk-db`     | `$AUTARK_PATH/autk-db/docs/`          | `$DOCS_PATH/guide/api/autk-db/`             |
| `autk-map`    | `$AUTARK_PATH/autk-map/docs/`         | `$DOCS_PATH/guide/api/autk-map/`            |
| `autk-plot`   | `$AUTARK_PATH/autk-plot/docs/`        | `$DOCS_PATH/guide/api/autk-plot/`           |
| `autk-compute`| `$AUTARK_PATH/autk-compute/docs/`     | `$DOCS_PATH/guide/api/autk-compute/`        |

---

## Steps

### 1. Generate fresh TypeDoc output

For each library, run TypeDoc inside its directory:

```bash
cd "$AUTARK_PATH/autk-db"      && npx typedoc
cd "$AUTARK_PATH/autk-map"     && npx typedoc
cd "$AUTARK_PATH/autk-plot"    && npx typedoc
cd "$AUTARK_PATH/autk-compute" && npx typedoc
```

If a library has an `npm run docs` script, prefer that instead.

### 2. Delete the current API reference content

Remove everything inside each destination folder (but keep the folder itself):

```bash
rm -rf "$DOCS_PATH/guide/api/autk-db/"*
rm -rf "$DOCS_PATH/guide/api/autk-map/"*
rm -rf "$DOCS_PATH/guide/api/autk-plot/"*
rm -rf "$DOCS_PATH/guide/api/autk-compute/"*
```

### 3. Copy the new docs

Use `rsync` to copy each library's output, excluding the `_media/` folder:

```bash
rsync -a --exclude='_media' "$AUTARK_PATH/autk-db/docs/"      "$DOCS_PATH/guide/api/autk-db/"
rsync -a --exclude='_media' "$AUTARK_PATH/autk-map/docs/"     "$DOCS_PATH/guide/api/autk-map/"
rsync -a --exclude='_media' "$AUTARK_PATH/autk-plot/docs/"    "$DOCS_PATH/guide/api/autk-plot/"
rsync -a --exclude='_media' "$AUTARK_PATH/autk-compute/docs/" "$DOCS_PATH/guide/api/autk-compute/"
```

### 4. Rename README.md → index.md (if present)

TypeDoc may generate a `README.md` as the library entry point. If it exists in a destination folder, rename it:

```bash
for lib in autk-db autk-map autk-plot autk-compute; do
  f="$DOCS_PATH/guide/api/$lib/README.md"
  [ -f "$f" ] && mv "$f" "$DOCS_PATH/guide/api/$lib/index.md"
done
```

### 5. Replace index.md with a clean redirect stub

TypeDoc generates `index.md` (originally `README.md`) containing the full repository README — installation instructions, development setup, etc. This content is not appropriate for the API reference site.

Replace each `index.md` with a one-line redirect to `globals.md` (no heading — the page should start directly at the reference):

```bash
for lib in autk-db autk-map autk-plot autk-compute; do
  echo 'See [All Exports](globals.md) for the full API listing.' > "$DOCS_PATH/guide/api/$lib/index.md"
done
```

### 6. Fix README → index links

TypeDoc generates breadcrumb links pointing to `README.md` (e.g. `[**autk-db**](../README.md)`). Since we renamed those files to `index.md`, update all references:

```bash
cd "$DOCS_PATH/guide/api"
find . -name '*.md' -exec sed -i 's|](../README.md)|](../index.md)|g; s|](./README.md)|](./index.md)|g; s|](README.md)|](index.md)|g' {} +
```

### 7. Fix unescaped generics in markdown

TypeDoc sometimes writes bare generics like `Promise<FeatureCollection>` outside of backticks. VitePress/Vue parses the angle brackets as HTML tags and fails. Search for the pattern `<[A-Z][a-zA-Z]*>` in the API markdown files and wrap any matches in backticks.

### 8. Check the sidebar config

Open `$DOCS_PATH/guide/.vitepress/config.ts` and look for the sidebar entries under `/api/autk-db/`, `/api/autk-map/`, `/api/autk-plot/`, and `/api/autk-compute/`.

If any new classes, interfaces, or type-alias files were added in the new TypeDoc output that are not yet listed in the sidebar, add them. If any were removed, clean up their entries.

### 9. Verify with a production build

Always run a full VitePress build as the final validation step. The build will catch dead links, unescaped HTML/generics, and other errors that the dev server may not surface:

```bash
cd "$DOCS_PATH" && npx vitepress build guide
```

The build must complete with **zero errors**. Fix any issues before considering the task done.

---

## Notes

- Relative links between TypeDoc files (e.g. `[SpatialDb](classes/SpatialDb.md)`) are preserved as long as the folder structure stays intact — VitePress resolves them correctly.
- No frontmatter is needed in TypeDoc-generated files.
- The `_media/` folder only contains a logo image — always exclude it from the copy.
- Dark/light mode works automatically via VitePress.
