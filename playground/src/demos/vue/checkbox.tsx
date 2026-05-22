import { defineComponent } from 'vue'
import { Checkbox, Label } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-row">
    <Checkbox id="terms">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label for="terms">Accept terms and conditions</Label>
      </Checkbox.Content>
    </Checkbox>
  </div>
))
