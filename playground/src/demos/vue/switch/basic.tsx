import { Label, Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Switch>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Content>
        <Label class="text-sm">Enable notifications</Label>
      </Switch.Content>
    </Switch>);
