<script setup lang="ts">
import { Switch } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <Switch>Enable notifications</Switch>

    <Switch default-checked>Public profile</Switch>

    <Switch size="sm">Small switch</Switch>

    <Switch size="lg">Large switch</Switch>

    <Switch disabled>Disabled</Switch>
  </div>
</template>
