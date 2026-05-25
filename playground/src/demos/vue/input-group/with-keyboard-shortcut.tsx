import { InputGroup, Kbd, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField aria-label="Command" class="w-full max-w-[280px]" name="command">
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" placeholder="Command" />
        <InputGroup.Suffix class="pr-2">
          <Kbd>
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>);
