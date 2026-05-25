import { Copy } from "../../../gravity-icons-vue";
import { Button, InputGroup, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField class="w-full max-w-[280px]" defaultValue="heroui.com" name="website">
      <Label>Website</Label>
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" />
        <InputGroup.Suffix class="pr-0">
          <Button isIconOnly aria-label="Copy" size="sm" variant="ghost">
            <Copy class="size-4" />
          </Button>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>);
export default WithCopySuffix;
