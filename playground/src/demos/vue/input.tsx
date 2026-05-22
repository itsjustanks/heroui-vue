import { defineComponent } from 'vue'
import { Input } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <Input aria-label="Name" class="w-64" placeholder="Enter your name" />
))
