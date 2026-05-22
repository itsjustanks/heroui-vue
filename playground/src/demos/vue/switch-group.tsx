import { defineComponent } from 'vue'
import { Label, Switch, SwitchGroup } from '@itsjustanks/heroui-vue'

/** SwitchGroup demo — Vue TSX, mirrors HeroUI v3's switch-group structure. */
export default defineComponent(() => () => (
  <SwitchGroup>
    <Switch>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label class="text-sm">Product updates</Label>
      </Switch.Content>
    </Switch>
    <Switch>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label class="text-sm">Security alerts</Label>
      </Switch.Content>
    </Switch>
  </SwitchGroup>
))
