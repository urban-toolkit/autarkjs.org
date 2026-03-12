# How to Add a New Example

## Example Structure

Each example consists of three parts:

| File | Description |
|---|---|
| `examples/exN.ts` | TypeScript logic (autk-db, autk-map, etc.) |
| `examples/exN.html` | HTML page that loads the compiled JS via `<script type="module" src="dist/exN.js">` |
| `guide/public/imgs/exN.png` | Screenshot to appear in the gallery |

---

## Step by Step

### 1. Create the TypeScript

Create `examples/exN.ts` with the example logic. See `examples/ex1.ts` as a reference.

### 2. Create the HTML

Copy an existing example as a base:

```bash
cp examples/ex2.html examples/ex4.html
```

Edit the HTML and adjust:
- The title (`<title>`)
- The side panel content (description, example code)
- The JS reference at the bottom: `<script type="module" src="dist/ex4.js" defer></script>`

### 3. Register in vite.config.js

Add the new entry in `vite.config.js`:

```js
rollupOptions: {
  input: {
    ex1: 'examples/ex1.ts',
    ex2: 'examples/ex2.ts',
    ex3: 'examples/ex3.ts',
    ex4: 'examples/ex4.ts', // add here
  },
  ...
}
```

### 4. Compile Examples and Sync

```bash
npm run examples:build
```

This compiles all `.ts` files to `examples/dist/` and automatically copies the output to `guide/public/examples/dist/`. The build clears the directory first, so all examples are recompiled together.

> `examples/dist/` is in `.gitignore` — compiled files are not committed. CI compiles automatically on deploy.

### 5. Copy the HTML to guide/public

```bash
cp examples/ex4.html guide/public/examples/
```

### 6. Add Screenshot

Take a screenshot of the working example and save it to:

```
guide/public/imgs/ex4.png
```

Recommended dimensions: 16:9 (e.g. 1280×720).

### 7. Add to the Gallery

Edit `guide/.vitepress/theme/components/HomeGallery.vue` and add the new example to the array:

```ts
const examples = [
  // ... existing examples ...
  {
    href: '/examples/ex4.html',
    img: '/imgs/ex4.png',
    title: 'Example Title',
    description: 'Short description of what the example does.',
    tags: [
      { label: 'autk-map', color: '#0ea5e9' },
      { label: 'autk-db', color: '#f59e0b' },
    ],
  },
]
```

---

## Available Tag Colors

| Package | Color |
|---|---|
| `autk-map` | `#0ea5e9` |
| `autk-db` | `#f59e0b` |
| `autk-compute` | `#8b5cf6` |
| `autk-plot` | `#22c55e` |

---

## Test Locally

```bash
npm run dev
# visit localhost:5173/examples/ex4.html to test the example in isolation
# visit localhost:5173 to see the updated gallery
```

## Deploy

GitHub Actions handles deployment automatically on push to the `main` branch. It runs `examples:build` internally, so just commit the source files (`.ts`, `.html`, imgs) — compiled files are generated in CI.
