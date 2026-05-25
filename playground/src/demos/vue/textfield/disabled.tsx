import { Description, Input, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField isDisabled class="w-full max-w-64" name="accountId" value="USR-12345">
      <Label>Account ID</Label>
      <Input placeholder="Auto-generated" />
      <Description>This field cannot be edited</Description>
    </TextField>);
export default Disabled;
