import { Checkbox, CheckboxGroup, Label } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selected = ref(["coding"]);
  const allOptions = ["coding", "design", "writing"];
  return () => <div>
      <Checkbox isIndeterminate={selected.value.length > 0 && selected.value.length < allOptions.length} isSelected={selected.value.length === allOptions.length} name="select-all" onChange={(isSelected: boolean) => {
      selected.value = isSelected ? allOptions : [];
    }}>
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Content>
          <Label>Select all</Label>
        </Checkbox.Content>
      </Checkbox>
      <div class="ml-6 flex flex-col gap-2">
        <CheckboxGroup value={selected.value} onChange={setSelected}>
          <Checkbox value="coding">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label>Coding</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="design">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label>Design</Label>
            </Checkbox.Content>
          </Checkbox>
          <Checkbox value="writing">
            <Checkbox.Control>
              <Checkbox.Indicator />
            </Checkbox.Control>
            <Checkbox.Content>
              <Label>Writing</Label>
            </Checkbox.Content>
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>;
});
