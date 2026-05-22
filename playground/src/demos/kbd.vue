<script setup lang="ts">
import { Kbd, KbdAbbr, KbdContent } from '@itsjustanks/heroui-vue'
</script>

<template>
  <div class="demo-col">
    <div class="demo-row">
      <Kbd>
        <KbdAbbr key-value="command" />
        <KbdContent>K</KbdContent>
      </Kbd>
      <Kbd>
        <KbdAbbr key-value="shift" />
        <KbdContent>P</KbdContent>
      </Kbd>
      <Kbd>
        <KbdAbbr key-value="ctrl" />
        <KbdContent>C</KbdContent>
      </Kbd>
      <Kbd>
        <KbdAbbr key-value="option" />
        <KbdContent>D</KbdContent>
      </Kbd>
    </div>
    <div class="demo-row">
      <Kbd variant="light">
        <KbdAbbr key-value="command" />
        <KbdContent>K</KbdContent>
      </Kbd>
      <Kbd variant="light">
        <KbdAbbr key-value="shift" />
        <KbdContent>P</KbdContent>
      </Kbd>
      <Kbd variant="light">
        <KbdAbbr key-value="ctrl" />
        <KbdContent>C</KbdContent>
      </Kbd>
      <Kbd variant="light">
        <KbdAbbr key-value="option" />
        <KbdContent>D</KbdContent>
      </Kbd>
    </div>
  </div>
</template>
