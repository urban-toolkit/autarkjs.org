---
name: add-gallery-example
description: Add or update a mirrored Autark gallery example on autarkjs.org, including its page, illustration, and catalog entries.
---

# Add a gallery example

The site does not keep its own gallery catalog: it mirrors the upstream Autark
gallery in `gallery/`, pinned by `gallery/manifest.json`. Adding an example starts
in the Autark repository, not here.

## Steps

1. Add the example to `gallery/src/<module>/` and to `catalog.ts` in the upstream
   `urban-toolkit/autark` repository, then land it there.
2. Sync this site from that commit:

   ```bash
   rsync -a --exclude node_modules --exclude dist --exclude package.json \
     ../autark/gallery/ gallery/
   ```

   Update `commit`, `source`, and `filesSha256` in `gallery/manifest.json`. Keep the
   site-only files listed in `modified` (the build config and the embed hooks).
3. Regenerate the pages and build:

   ```bash
   npm run gallery:pages
   npm run gallery:build
   npm run build
   ```

4. Capture the card illustration from a preview. The capture hides the site
   header, title, and footer, so the card shows only the map and its side panel:

   ```bash
   npm run preview
   node .scripts/capture-gallery.mjs guide/public/imgs/gallery <ID>
   ```

5. Check `/gallery/` and `/gallery/examples/<id>` in a browser: the card, the full
   embedded content (title, controls, API in focus, related examples), the sidebar
   entry, dark mode, and mobile widths.
6. Run `npm run test:gallery` and `npm run test:usecases`.

## Rules

- Do not copy an example into `guide/gallery/ex*.md`; that older catalog is being
  retired and is not linked from the gallery.
- Keep the example's own title, description, "API in focus", and related links: they
  are part of the page. `?embed=1` hides only the gallery's top navigation and back
  link, because the site already provides them.
- Keep edits to the vendored app limited to `vite.config.ts`, the embed hook in
  `src/example.ts`, and `example.css`. Prefer fixing the upstream source.
- Data comes from `gallery/public/data/`; never fetch `main` during a build.
