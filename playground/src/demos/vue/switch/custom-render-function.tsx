import { Label, Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Switch render={props => <label {...props} data-custom="foo" />}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Label class="text-sm">Enable notifications</Label>
    </Switch>);
