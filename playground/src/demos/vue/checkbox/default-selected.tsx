import { Checkbox, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Checkbox defaultSelected id="default-notifications">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="default-notifications">Enable email notifications</Label>
      </Checkbox.Content>
    </Checkbox>);
export default DefaultSelected;
