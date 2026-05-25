import { Input, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField class="w-full max-w-64" name="email" render={props => <div {...props} data-custom="foo" />} type="email">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </TextField>);
