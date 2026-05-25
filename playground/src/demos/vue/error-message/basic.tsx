import { defineComponent } from 'vue'
import { ErrorMessage } from '@itsjustanks/heroui-vue'

/** ErrorMessage basic — Vue TSX. Low-level primitive that always renders. */
export default defineComponent(() => () => (
  <ErrorMessage>
    Something went wrong. Please try again.
  </ErrorMessage>
))
