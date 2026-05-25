import { Description, Label, Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="max-w-sm">
      <Switch>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label class="text-sm">Public profile</Label>
          <Description>Allow others to see your profile information</Description>
        </Switch.Content>
      </Switch>
    </div>);
export default WithDescription;
