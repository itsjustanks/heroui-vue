import { defineComponent } from 'vue'
import { FieldError } from '@itsjustanks/heroui-vue'

/** FieldError basic — Vue TSX. Renders validation errors when `errors` has
 *  any non-empty entry; otherwise renders nothing. */
export default defineComponent(() => () => (
  <FieldError errors={[{ message: 'Email is required' }]} />
))
