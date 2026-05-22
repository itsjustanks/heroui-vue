<script setup lang="ts">
import { ButtonGroup, ButtonGroupSeparator, Button } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <ButtonGroup>
      <Button>Previous</Button>
      <Button><ButtonGroupSeparator />Next</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button>Left</Button>
      <Button><ButtonGroupSeparator />Center</Button>
      <Button><ButtonGroupSeparator />Right</Button>
    </ButtonGroup>
  </div>
</template>
