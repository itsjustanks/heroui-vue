<script setup lang="ts">
import { ref } from 'vue'
import { Textarea } from '@itsjustanks/heroui-vue'

const value = ref('')
</script>

<template>
  <div class="demo-col">
    <Textarea placeholder="Primary textarea (default)" />
    <Textarea variant="secondary" placeholder="Secondary textarea" />
    <Textarea v-model="value" placeholder="Controlled textarea" />
    <Textarea placeholder="Full width" :full-width="true" />
    <Textarea placeholder="Disabled" disabled />
  </div>
</template>
