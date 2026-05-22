<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <Avatar>
      <AvatarImage src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <Avatar size="sm">
      <AvatarFallback color="accent">AB</AvatarFallback>
    </Avatar>
    <Avatar size="md">
      <AvatarFallback color="success">CD</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback color="danger">EF</AvatarFallback>
    </Avatar>
    <Avatar variant="soft">
      <AvatarFallback color="warning">GH</AvatarFallback>
    </Avatar>
  </div>
</template>
