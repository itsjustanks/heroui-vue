import { Label, Switch } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [isSelected, setIsSelected] = React.useState(false);
  return () => <div class="flex flex-col gap-4">
      <Switch isSelected={isSelected} onChange={setIsSelected}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label class="text-sm">Enable notifications</Label>
        </Switch.Content>
      </Switch>
      <p class="text-sm text-muted">Switch is {isSelected ? "on" : "off"}</p>
    </div>;
});
