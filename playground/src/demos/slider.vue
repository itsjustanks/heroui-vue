<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@itsjustanks/heroui-vue'

const volume = ref([30])
const range = ref([200, 700])
</script>

<template>
  <div class="demo-col">
    <div>
      <p style="font-size: 14px; margin-bottom: 8px">Volume: {{ volume[0] }}</p>
      <Slider v-model="volume" :min="0" :max="100" :step="1" style="width: 300px" />
    </div>
    <div>
      <p style="font-size: 14px; margin-bottom: 8px">
        Price Range: ${{ range[0] }} – ${{ range[1] }}
      </p>
      <Slider v-model="range" :min="0" :max="1000" :step="50" style="width: 300px" />
    </div>
  </div>
</template>
