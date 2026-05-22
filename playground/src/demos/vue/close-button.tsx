import { defineComponent } from 'vue'
import { CloseButton } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-row">
    <CloseButton />
    <CloseButton aria-label="Dismiss" />
  </div>
))
