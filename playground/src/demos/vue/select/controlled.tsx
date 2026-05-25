import type { Key } from "@itsjustanks/heroui-vue";
import { Label, ListBox, Select } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const states = [{
    id: "california",
    name: "California"
  }, {
    id: "texas",
    name: "Texas"
  }, {
    id: "florida",
    name: "Florida"
  }, {
    id: "new-york",
    name: "New York"
  }, {
    id: "illinois",
    name: "Illinois"
  }, {
    id: "pennsylvania",
    name: "Pennsylvania"
  }];
  const state = ref("california");
  const selectedState = states.find(s => s.id === state.value);
  return () => <div class="space-y-2">
      <Select class="w-[256px]" placeholder="Select a state" value={state.value} onChange={value => state.value = value}>
        <Label>State (controlled)</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            {states.map(state => <ListBox.Item key={state.value.id} id={state.value.id} textValue={state.value.name}>
                {state.value.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>)}
          </ListBox>
        </Select.Popover>
      </Select>
      <p class="text-sm text-muted">Selected: {selectedState?.name || "None"}</p>
    </div>;
});
export default Controlled;
