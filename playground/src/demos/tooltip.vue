<script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <TooltipProvider>
      <Tooltip :delay-duration="300">
        <TooltipTrigger as-child>
          <Button variant="secondary">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>This is a tooltip</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
