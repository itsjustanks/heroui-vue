<script setup lang="ts">
import { Progress } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col" style="width: 280px">
    <div>
      <p style="font-size: 13px; margin-bottom: 6px">Loading… 60%</p>
      <Progress :model-value="60" />
    </div>
    <div>
      <p style="font-size: 13px; margin-bottom: 6px">Success</p>
      <Progress :model-value="80" color="success" />
    </div>
    <div>
      <p style="font-size: 13px; margin-bottom: 6px">Warning</p>
      <Progress :model-value="45" color="warning" />
    </div>
    <div>
      <p style="font-size: 13px; margin-bottom: 6px">Danger</p>
      <Progress :model-value="30" color="danger" />
    </div>
    <div>
      <p style="font-size: 13px; margin-bottom: 6px">Indeterminate</p>
      <Progress :model-value="null" />
    </div>
  </div>
</template>
