# Shared playground

`editor.js` mounts the site’s CodeMirror editor and toolbar. It handles file tabs,
Run, Reset, Copy, the keyboard shortcut, and browser-local edits. `card.css`
shares the Tutorial’s card, scrollable output, and bottom status row with the
User Guide. Text and console output grow when expanded, up to a scrollable
limit. Notebook figures can set `data-output="visual"` for a fixed, taller
viewport for maps and charts. An example can also supply
Run all above. `runtime.js` executes JavaScript with host-supplied
bindings and captures console messages. `output.js` renders objects and arrays
as collapsed trees. Expand one branch at a time; plain text stays plain. Syntax
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
