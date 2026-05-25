import { Envelope } from "@gravity-ui/icons";
import { Description, InputGroup, Label, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField class="w-full max-w-[280px]" name="email">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" placeholder="name@email.com" />
        <InputGroup.Suffix>
          <Envelope class="size-4 text-muted" />
        </InputGroup.Suffix>
      </InputGroup>
      <Description>We don't send spam</Description>
    </TextField>);
