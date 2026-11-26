<template>
  <p v-if="packageName" class="guide-eyebrow">{{ packageName }} - {{ pageTitle }}</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const packageName = computed(() => frontmatter.value.package as string | undefined)
const pageTitle = computed(() => (frontmatter.value.title as string | undefined) ?? '')
</script>
