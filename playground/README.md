# Shared playground

`editor.js` mounts the site’s CodeMirror editor and toolbar. It handles file tabs,
Run, Reset, Copy, the keyboard shortcut, and browser-local edits. An example can
also supply Run all above. `runtime.js` executes JavaScript with host-supplied
bindings, captures console messages, and formats structured output. Syntax
highlighting recognizes TypeScript, but the runner does not compile it.

- `guide/.vitepress/theme/components/CodePlayground.vue` adds the User Guide and
  Grammar bindings, named mounts, canvas, console, and Grammar view layout.
- `tutorial/notebook.js` adds per-chapter context, ordered execution, tables,
  XML, and Overpass fallback. It uses the same editor in the standalone build.

Edits are restored only when the shipped source still matches. Restored edits
aren’t auto-run; click Run to execute them. Existing Tutorial storage keys and
single-file records are unchanged. The homepage preview and newly mirrored
Gallery examples are not editable playgrounds.

To verify: run `npm run build`, start `npm run preview`, then run
`npm run test:playground` with Chrome installed. Set `PLAYGROUND_URL` for a custom
port and `CHROME_BIN` for a nonstandard Chrome path.
