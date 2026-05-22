<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  label: string
  source: string
  variant: 'vue' | 'react'
}>()

const copied = ref(false)

async function copy (): Promise<void> {
  try {
    await navigator.clipboard.writeText(props.source)
    copied.value = true
    window.setTimeout(() => { copied.value = false }, 1400)
  } catch {
    /* clipboard unavailable — ignore */
  }
}
</script>

<template>
  <div class="pg-code" :class="`pg-code--${variant}`">
    <div class="pg-code-bar">
      <span class="pg-code-label">{{ label }}</span>
      <button class="pg-copy" @click="copy">{{ copied ? 'Copied' : 'Copy' }}</button>
    </div>
    <pre class="pg-code-body"><code>{{ source }}</code></pre>
  </div>
</template>
