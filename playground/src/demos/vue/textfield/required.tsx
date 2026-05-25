import { Description, Input, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField isRequired class="w-full max-w-64" name="fullName">
      <Label>Full Name</Label>
      <Input placeholder="John Doe" />
      <Description>This field is required</Description>
    </TextField>);
