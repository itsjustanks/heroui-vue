<script setup lang="ts">
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Select>
      <SelectTrigger style="min-width: 200px">
        <SelectValue placeholder="Select a state" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="florida">Florida</SelectItem>
        <SelectItem value="delaware">Delaware</SelectItem>
        <SelectItem value="california">California</SelectItem>
        <SelectItem value="texas">Texas</SelectItem>
        <SelectItem value="new-york">New York</SelectItem>
      </SelectContent>
    </Select>

    <Select variant="secondary">
      <SelectTrigger style="min-width: 200px">
        <SelectValue placeholder="Secondary variant" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="engineering">Engineering</SelectItem>
        <SelectItem value="product">Product</SelectItem>
      </SelectContent>
    </Select>
  </div>
</template>
