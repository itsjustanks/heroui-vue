<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <Alert>
      <AlertTitle>New features available</AlertTitle>
      <AlertDescription>Dark mode support and improved accessibility have landed.</AlertDescription>
    </Alert>
    <Alert status="success">
      <AlertTitle>Profile updated successfully</AlertTitle>
    </Alert>
    <Alert status="danger">
      <AlertTitle>Unable to connect to server</AlertTitle>
      <AlertDescription>We're experiencing connection issues. Please try again.</AlertDescription>
    </Alert>
  </div>
</template>
