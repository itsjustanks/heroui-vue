import { defineComponent } from 'vue'
import { Button } from '@itsjustanks/heroui-vue'

/** Reference Vue demo — authored in Vue TSX, using the heroui-vue compound API. */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Button>Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="tertiary">Tertiary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="danger-soft">Danger Soft</Button>
  </div>
))
