<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent, Button } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Popover>
      <PopoverTrigger as-child>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div style="max-width: 16rem; padding: 16px">
          <p style="margin: 0; font-weight: 600">Popover title</p>
          <p style="margin: 8px 0 0; font-size: 14px; color: #6b7177">
            Built on reka-ui. The enter/exit animation is the data-attribute shim
            bridging reka-ui state to HeroUI's CSS.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
