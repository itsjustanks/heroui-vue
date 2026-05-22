<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback, Badge } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-row">
    <span class="badge-anchor">
      <Avatar>
        <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" alt="JD" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Badge color="danger" size="sm" placement="top-right">5</Badge>
    </span>

    <span class="badge-anchor">
      <Avatar>
        <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg" alt="AB" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Badge color="accent" size="sm" placement="top-right">New</Badge>
    </span>

    <span class="badge-anchor">
      <Avatar>
        <AvatarImage src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" alt="CD" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Badge color="success" size="sm" placement="bottom-right" :is-dot="true" />
    </span>
  </div>
</template>
