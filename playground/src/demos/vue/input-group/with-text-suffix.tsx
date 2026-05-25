import { InputGroup, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField class="w-full max-w-[280px]" defaultValue="heroui" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" />
        <InputGroup.Suffix>.com</InputGroup.Suffix>
      </InputGroup>
    </TextField>);
