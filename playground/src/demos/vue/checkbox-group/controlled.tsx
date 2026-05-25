import { Checkbox, CheckboxGroup, Label } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selected = ref(["coding", "design"]);
  return () => <CheckboxGroup class="min-w-[320px]" name="skills" value={selected.value} onChange={setSelected}>
      <Label>Your skills</Label>
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
      <Label class="my-4 text-sm text-muted">Selected: {selected.value.join(", ") || "None"}</Label>
    </CheckboxGroup>;
});
