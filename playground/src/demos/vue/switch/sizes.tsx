import { Label, Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex gap-6">
      <Switch size="sm">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label class="text-xs">Small</Label>
        </Switch.Content>
      </Switch>
      <Switch size="md">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label class="text-sm">Medium</Label>
        </Switch.Content>
      </Switch>
      <Switch size="lg">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label class="text-base">Large</Label>
        </Switch.Content>
      </Switch>
    </div>);
