import { FieldError, Input, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField isInvalid class="w-full max-w-64" name="email" type="email">
      <Label>Email</Label>
      <Input placeholder="user@example.com" />
      <FieldError>Please enter a valid email address</FieldError>
    </TextField>);
