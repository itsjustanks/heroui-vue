import { Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Checkbox id="custom">
      <Checkbox.Control class="border-2 border-purple-500 data-[selected=true]:border-purple-500 data-[selected=true]:bg-purple-500">
        <Checkbox.Indicator class="text-white" />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="custom">Custom styled checkbox</Label>
      </Checkbox.Content>
    </Checkbox>);
export default CustomStyles;
