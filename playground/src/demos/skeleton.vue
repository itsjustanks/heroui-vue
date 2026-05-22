<script setup lang="ts">
import { Skeleton } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <div style="width: 250px; padding: 16px; border-radius: 8px; background: var(--color-surface-1, #fff); box-shadow: var(--shadow-panel, 0 1px 4px rgba(0,0,0,.1))">
      <Skeleton style="height: 128px; border-radius: 8px" />
      <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 12px">
        <Skeleton style="height: 12px; width: 60%; border-radius: 8px" />
        <Skeleton style="height: 12px; width: 80%; border-radius: 8px" />
        <Skeleton style="height: 12px; width: 40%; border-radius: 8px" />
      </div>
    </div>

    <div style="width: 250px; padding: 16px; border-radius: 8px; background: var(--color-surface-1, #fff); box-shadow: var(--shadow-panel, 0 1px 4px rgba(0,0,0,.1))">
      <Skeleton animation-type="pulse" style="height: 128px; border-radius: 8px" />
      <div style="margin-top: 20px; display: flex; flex-direction: column; gap: 12px">
        <Skeleton animation-type="pulse" style="height: 12px; width: 60%; border-radius: 8px" />
        <Skeleton animation-type="pulse" style="height: 12px; width: 80%; border-radius: 8px" />
        <Skeleton animation-type="pulse" style="height: 12px; width: 40%; border-radius: 8px" />
      </div>
    </div>
  </div>
</template>
