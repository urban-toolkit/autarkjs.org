---
name: add-gallery-example
description: Add a VitePress gallery example to autarkjs.org, including its runnable code, card metadata, data, and screenshot.
---

# Add a Gallery Example

Gallery examples are VitePress pages, not standalone HTML files. Each example is
implemented in `guide/gallery/exN.md`; its runnable code normally uses
`<CodePlayground>`, and its card is registered in both gallery components.

## Steps

1. Copy a comparable `guide/gallery/exN.md` page and update its title, description,
   package tags, runnable code, and explanatory text.
2. If the example needs a new static dataset, add it under `guide/public/data/` and
   refer to it with an absolute `/data/...` URL in the code.
3. Add a 16:9 screenshot to `guide/public/imgs/exN.png`.
4. Add matching card metadata to both:
   - `guide/.vitepress/theme/components/HomeGallery.vue`
   - `guide/.vitepress/theme/components/GalleryPageGrid.vue`
5. Run `npm run dev` and test `/gallery/exN` in the browser. Verify the card appears
   on the home page and the gallery page.
6. Run `npm run build` before committing.

Keep the runnable source and the explanation on the Markdown page consistent. If an
Autark release affected the example, also follow `update-autark-release` before
claiming compatibility.
