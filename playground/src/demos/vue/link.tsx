import { defineComponent } from 'vue'
import { Link } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-row">
    <Link href="#">
      Call to action
      <Link.Icon />
    </Link>
    <Link href="#" disabled>
      Disabled link
      <Link.Icon />
    </Link>
    <Link href="#" class="underline">
      Underline always
      <Link.Icon />
    </Link>
  </div>
))
