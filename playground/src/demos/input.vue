<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@itsjustanks/heroui-vue'

const value = ref('')
</script>

<template>
  <div class="demo-col">
    <Input placeholder="Primary input (default)" />
    <Input variant="secondary" placeholder="Secondary input" />
    <Input placeholder="Controlled" v-model="value" />
    <Input placeholder="Full width" :full-width="true" />
    <Input placeholder="Disabled" disabled />
  </div>
</template>
