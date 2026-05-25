import { Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isSelected = ref(true);
  return () => <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3">
        <Checkbox id="email-notifications" isSelected={isSelected.value} onChange={setIsSelected}>
          <Checkbox.Control>
            <Checkbox.Indicator />
          </Checkbox.Control>
          <Checkbox.Content>
            <Label htmlFor="email-notifications">Email notifications</Label>
          </Checkbox.Content>
        </Checkbox>
      </div>
      <p class="text-sm text-muted">
        Status: <span class="font-medium">{isSelected.value ? "Enabled" : "Disabled"}</span>
      </p>
    </div>;
});
