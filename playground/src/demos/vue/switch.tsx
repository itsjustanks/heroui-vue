import { defineComponent } from 'vue'
import { Label, Switch } from '@itsjustanks/heroui-vue'

export default defineComponent(() => () => (
  <div class="demo-row">
    <Switch>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label class="text-sm">Enable notifications</Label>
      </Switch.Content>
    </Switch>
  </div>
))
