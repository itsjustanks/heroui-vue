<script setup lang="ts">
import { computed, ref } from 'vue'
import { diffLines } from './diff'

const props = defineProps<{ vueSource: string; reactSource: string }>()

const rows = computed(() => diffLines(props.vueSource, props.reactSource))
const vueHighlights = computed(() =>
  rows.value.filter((row) => row.vueParts.some((part) => part.added)).length
)

const copied = ref<'' | 'vue' | 'react'>('')
async function copy (which: 'vue' | 'react'): Promise<void> {
  try {
    await navigator.clipboard.writeText(which === 'vue' ? props.vueSource : props.reactSource)
    copied.value = which
    window.setTimeout(() => { copied.value = '' }, 1400)
  } catch {
    /* clipboard unavailable */
  }
}
</script>

<template>
  <div class="pg-diff">
    <div class="pg-diff-bar">
      <span class="pg-diff-label pg-diff-label--vue"><span class="dot" />demos/vue · heroui-vue</span>
      <button class="pg-copy" @click="copy('vue')">{{ copied === 'vue' ? 'Copied' : 'Copy' }}</button>
      <span class="pg-diff-verdict" :class="vueHighlights === 0 ? 'is-match' : 'is-diff'">
        {{ vueHighlights === 0 ? 'no Vue-only text' : vueHighlights + ' Vue highlights' }}
      </span>
      <button class="pg-copy" @click="copy('react')">{{ copied === 'react' ? 'Copied' : 'Copy' }}</button>
      <span class="pg-diff-label pg-diff-label--react"><span class="dot" />demos/react · @heroui/react</span>
    </div>

    <!-- Highlighted spans on the Vue side show text present in the Vue demo but not in React. -->
    <div class="pg-diff-body">
      <div
        v-for="(row, idx) in rows"
        :key="idx"
        class="pg-diff-row"
        :class="`pg-diff-row--${row.type}`"
      >
        <div class="pg-diff-cell pg-diff-side-vue">
          <span class="pg-diff-mark">{{ row.vueParts.some((part) => part.added) ? '+' : '' }}</span>
          <code><span
              v-for="(part, partIdx) in row.vueParts"
              :key="partIdx"
              :class="{ 'pg-diff-token--added': part.added }"
            >{{ part.text }}</span></code>
        </div>
        <div class="pg-diff-cell pg-diff-side-react">
          <span class="pg-diff-mark">{{ row.type === 'react' ? '·' : '' }}</span>
          <code><span
              v-for="(part, partIdx) in row.reactParts"
              :key="partIdx"
            >{{ part.text }}</span></code>
        </div>
      </div>
    </div>
  </div>
</template>
