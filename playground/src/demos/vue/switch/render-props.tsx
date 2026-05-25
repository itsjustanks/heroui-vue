import { Label, Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Switch>
      {({
    isSelected
  }) => <>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>
          <Switch.Content>
            <Label class="text-sm">{isSelected ? "Enabled" : "Disabled"}</Label>
          </Switch.Content>
        </>}
    </Switch>);
export default RenderProps;
