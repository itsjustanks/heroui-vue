import { defineComponent } from 'vue'
import { TextArea } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <TextArea
    aria-label="Quick project update"
    class="h-32 w-96"
    placeholder="Share a quick project update..."
  />
))
