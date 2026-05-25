import { InputGroup, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField class="w-full max-w-[280px]" defaultValue="heroui.com" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroup.Prefix>https://</InputGroup.Prefix>
        <InputGroup.Input class="w-full max-w-[280px]" />
      </InputGroup>
    </TextField>);
export default WithTextPrefix;
