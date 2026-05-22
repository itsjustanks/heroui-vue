import { defineComponent } from 'vue'
import { Spinner } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="flex items-center gap-4">
    <Spinner />
  </div>
))
