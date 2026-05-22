<script setup lang="ts">
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldDecrementButton,
  NumberFieldIncrementButton,
} from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <NumberField :default-value="1024" :min-value="0" name="width">
      <label>Width</label>
      <NumberFieldGroup>
        <NumberFieldDecrementButton />
        <NumberFieldInput />
        <NumberFieldIncrementButton />
      </NumberFieldGroup>
    </NumberField>
  </div>
</template>
