import { Envelope } from "@gravity-ui/icons";
import { InputGroup, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <TextField isDisabled class="w-full max-w-[280px]" defaultValue="name@email.com" name="email">
        <Label>Email address</Label>
        <InputGroup>
          <InputGroup.Prefix>
            <Envelope class="size-4 text-muted" />
          </InputGroup.Prefix>
          <InputGroup.Input class="w-full max-w-[280px]" />
        </InputGroup>
      </TextField>
      <TextField isDisabled class="w-full max-w-[280px]" defaultValue="10" name="price">
        <Label>Set a price</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <InputGroup.Input class="w-full max-w-[200px]" type="number" />
          <InputGroup.Suffix>USD</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>);
