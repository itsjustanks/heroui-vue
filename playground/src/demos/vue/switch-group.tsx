import { Label, Switch, SwitchGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <SwitchGroup>
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
    </SwitchGroup>);
