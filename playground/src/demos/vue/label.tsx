import { defineComponent } from 'vue'
import { Input, Label } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="flex flex-col gap-1">
    <Label for="name">Name</Label>
    <Input class="w-64" id="name" placeholder="Enter your name" type="text" />
  </div>
))
