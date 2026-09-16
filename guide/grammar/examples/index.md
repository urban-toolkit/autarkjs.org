---
title: Grammar Examples
aside: true
outline: false
---

<script setup>
import { GRAMMAR_EXAMPLES } from '../../.vitepress/theme/data/grammarExamples'

const examples = GRAMMAR_EXAMPLES.map((example) => ({
  href: `/grammar/examples/${example.slug}`,
  img: `/imgs/grammar/${example.slug}.png`,
  title: example.title,
  description: example.description,
  tags: example.tags,
}))

const filters = [
  { id: 'data', className: 'case-tag--data' },
  { id: 'compute', className: 'case-tag--compute' },
  { id: 'map', className: 'case-tag--map' },
  { id: 'plot', className: 'case-tag--plot' },
]
</script>

# Grammar Examples

Explore interactive examples built with **[autk-grammar](/grammar/)**. Each one is a single spec: open an example to edit its `data`, `compute`, `map`, and `plot` sections and run it live in the browser.

<GalleryPageGrid :examples="examples" :filters="filters" filter-label="Filter by spec section" />
