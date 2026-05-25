import { Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Checkbox id="basic-terms">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="basic-terms">Accept terms and conditions</Label>
      </Checkbox.Content>
    </Checkbox>);
export default Basic;
