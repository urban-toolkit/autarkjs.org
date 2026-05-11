<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  value: unknown
  depth?: number
  label?: string
  index?: number
}>()

const currentDepth = props.depth ?? 0
const collapsed = ref(true)

const value = props.value
const isArray = Array.isArray(value)
const isObject = value !== null && typeof value === 'object' && !Array.isArray(value)

function typeOf(v: unknown): string {
  if (v === null) return 'null'
  if (Array.isArray(v)) return 'array'
  return typeof v
}

function isExpandable(v: unknown): boolean {
  const t = typeOf(v)
  return t === 'object' || t === 'array'
}

function toggle() {
  collapsed.value = !collapsed.value
}

function formatPrimitive(v: unknown): string {
  if (v === null) return 'null'
  if (v === undefined) return 'undefined'
  if (typeof v === 'string') return `"${v}"`
  return String(v)
}

function previewValue(v: unknown): string {
  if (v === null) return 'null'
  if (Array.isArray(v)) return `Array(${v.length})`
  if (typeof v === 'object') return `{${Object.keys(v).length} keys}`
  return formatPrimitive(v)
}
</script>

<template>
  <span class="json-tree">
    <template v-if="isExpandable(value)">
      <span class="json-tree__toggle" @click="toggle">
        {{ collapsed ? '▸' : '▾' }}
      </span>
      <span v-if="label !== undefined" class="json-tree__key">"{{ label }}"</span>
      <span v-if="index !== undefined" class="json-tree__idx">{{ index }}</span>
      <span v-if="label !== undefined || index !== undefined" class="json-tree__sep">: </span>
      <span v-if="collapsed" class="json-tree__preview" @click="toggle">{{ previewValue(value) }}</span>
      <template v-if="!collapsed && isObject">
        <span class="json-tree__bracket">{</span>
        <div class="json-tree__children">
          <div v-for="(val, key) in value as Record<string, unknown>" :key="key" class="json-tree__entry">
            <JsonTree :value="val" :depth="currentDepth + 1" :label="key" />
          </div>
        </div>
        <span class="json-tree__bracket">}</span>
      </template>
      <template v-if="!collapsed && isArray">
        <span class="json-tree__bracket">[</span>
        <div class="json-tree__children">
          <div v-for="(item, idx) in value as unknown[]" :key="idx" class="json-tree__entry">
            <JsonTree :value="item" :depth="currentDepth + 1" :index="idx" />
          </div>
        </div>
        <span class="json-tree__bracket">]</span>
      </template>
    </template>
    <template v-else>
      <span v-if="label !== undefined" class="json-tree__key">"{{ label }}"</span>
      <span v-if="index !== undefined" class="json-tree__idx">{{ index }}</span>
      <span v-if="label !== undefined || index !== undefined" class="json-tree__sep">: </span>
      <span :class="['json-tree__value', `json-tree__value--${typeof value}`]">{{ formatPrimitive(value) }}</span>
    </template>
  </span>
</template>

<style scoped>
.json-tree {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 14px;
  line-height: 1.6;
}

.json-tree__toggle {
  cursor: pointer;
  user-select: none;
  display: inline-block;
  width: 16px;
  text-align: center;
  color: var(--vp-c-text-2);
}

.json-tree__toggle:hover {
  color: var(--vp-c-text-1);
}

.json-tree__preview {
  cursor: pointer;
  color: var(--vp-c-text-2);
  font-style: italic;
}

.json-tree__preview:hover {
  color: var(--vp-c-text-1);
}

.json-tree__children {
  padding-left: 16px;
  border-left: 1px solid var(--vp-c-divider);
  margin-left: 4px;
}

.json-tree__entry {
  padding: 1px 0;
}

.json-tree__key {
  color: #9cdcfe;
}

.json-tree__idx {
  color: var(--vp-c-text-2);
  font-style: italic;
}

.json-tree__sep {
  color: var(--vp-c-text-3);
}

.json-tree__bracket {
  color: var(--vp-c-text-2);
}

.json-tree__value {
  word-break: break-word;
}

.json-tree__value--string {
  color: #ce9178;
}

.json-tree__value--number {
  color: #b5cea8;
}

.json-tree__value--boolean {
  color: #569cd6;
}

.json-tree__value--undefined {
  color: var(--vp-c-text-3);
  font-style: italic;
}
</style>
