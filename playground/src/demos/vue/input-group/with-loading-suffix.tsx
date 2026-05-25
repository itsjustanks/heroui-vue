import { InputGroup, Spinner, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField class="w-full max-w-[280px]" defaultValue="Sending..." name="status">
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" />
        <InputGroup.Suffix>
          <Spinner class="size-4" />
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>);
export default WithLoadingSuffix;
