<script setup lang="ts">
import { Link } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <Link href="#">
      Call to action
      <Link.Icon />
    </Link>

    <Link href="#" class="hover:underline">
      Hover to see underline
      <Link.Icon />
    </Link>

    <Link href="#" class="underline">
      Always underlined
      <Link.Icon />
    </Link>

    <Link href="#" :disabled="true">
      Disabled link
      <Link.Icon />
    </Link>
  </div>
</template>
