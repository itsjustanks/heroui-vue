import { defineComponent } from 'vue'
import { EmptyState } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <EmptyState class="w-full max-w-[320px]">
    No matching records
  </EmptyState>
))
