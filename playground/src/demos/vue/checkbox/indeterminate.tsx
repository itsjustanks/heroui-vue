import { Checkbox, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isIndeterminate = ref(true);
  const isSelected = ref(false);
  return () => <Checkbox id="select-all" isIndeterminate={isIndeterminate.value} isSelected={isSelected.value} onChange={(selected: boolean) => {
    isSelected.value = selected;
    isIndeterminate.value = false;
  }}>
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="select-all">Select all</Label>
        <Description>Shows indeterminate state (dash icon)</Description>
      </Checkbox.Content>
    </Checkbox>;
});
export default Indeterminate;
