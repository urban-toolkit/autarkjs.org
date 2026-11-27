# Shared playground

`editor.js` mounts the site’s CodeMirror editor and toolbar. It handles file tabs,
Run, Reset, Copy, the keyboard shortcut, and browser-local edits. `card.css`
shares the Tutorial’s card, output areas, and bottom status row with the
User Guide. Maps, plots, and console results have separate labeled areas stacked
vertically; the outer output never clips them into one shared scrolling viewport.
Visual areas fit their content, preserving the configured map and plot sizes.
Long console/text results scroll within their own area. Grammar views keep the
layout declared by the spec. The initial “Run this example to see the result.”
message lives in the footer, with no blank output before execution. An example
can also supply Run all above. `runtime.js` executes JavaScript with host-supplied
bindings and captures console messages. Interaction handlers can call
`console.clear()` to replace the previous result without clearing the chart or map.
`output.js` renders objects and arrays
as collapsed trees. Expand one branch at a time; plain text stays plain. Syntax
highlighting recognizes TypeScript, but the runner does not compile it.

- `guide/.vitepress/theme/components/CodePlayground.vue` adds the User Guide and
  Grammar bindings, named mounts, canvas, console, and Grammar view layout.
  Named Autark imports use the supplied package exports; `import * as d3 from
  'd3'` (including a different namespace alias) uses the Vite-bundled D3 module.
- `tutorial/notebook.js` adds per-chapter context, ordered execution, tables,
  XML, and Overpass fallback. It uses the same editor in the standalone build.

Edits are restored only when the shipped source still matches. Restored edits
aren’t auto-run; click Run to execute them. Existing Tutorial storage keys and
single-file records are unchanged. The homepage preview and newly mirrored
Gallery examples are not editable playgrounds.

To verify: run `npm run build`, start `npm run preview`, then run
`npm run test:playground` with Chrome installed. Set `PLAYGROUND_URL` for a custom
port and `CHROME_BIN` for a nonstandard Chrome path.
