<script setup lang="ts">
import { Separator } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col" style="max-width: 400px">
    <div>
      <div style="font-size: 15px; font-weight: 500">HeroUI v3 Components</div>
      <div style="font-size: 13px; margin-top: 4px; opacity: 0.6">
        Beautiful, fast and modern Vue UI library.
      </div>
    </div>
    <Separator />
    <div style="display: flex; height: 20px; align-items: center; gap: 16px; font-size: 13px">
      <span>Blog</span>
      <Separator orientation="vertical" />
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
    </div>
    <Separator variant="secondary" />
    <div style="font-size: 13px; opacity: 0.5">Secondary variant above</div>
    <Separator variant="tertiary" />
    <div style="font-size: 13px; opacity: 0.5">Tertiary variant above</div>
  </div>
</template>
