<script setup lang="ts">
import { ref } from 'vue'
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@itsjustanks/heroui-vue'

const page = ref(1)
</script>

<template>
  <div class="demo-row">
    <PaginationRoot
      v-model:page="page"
      :items-per-page="1"
      :total="10"
      :sibling-count="1"
      show-edges
    >
      <PaginationList v-slot="{ items }">
        <PaginationPrevious />
        <template v-for="(item, idx) in items" :key="item.type === 'page' ? item.value : `ellipsis-${idx}`">
          <PaginationListItem v-if="item.type === 'page'" :value="item.value" />
          <PaginationEllipsis v-else />
        </template>
        <PaginationNext />
      </PaginationList>
    </PaginationRoot>
  </div>
</template>
