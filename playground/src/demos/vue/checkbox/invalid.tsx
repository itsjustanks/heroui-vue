import { Checkbox, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Checkbox isInvalid name="agreement">
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Content>
        <Label htmlFor="agreement">I agree to the terms</Label>
        <Description>You must accept the terms to continue</Description>
      </Checkbox.Content>
    </Checkbox>);
