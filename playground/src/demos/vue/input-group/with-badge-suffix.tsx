import { Chip, InputGroup, TextField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <TextField aria-label="Email address" class="w-full max-w-[280px]" name="email">
      <InputGroup>
        <InputGroup.Input class="w-full max-w-[280px]" placeholder="Email address" />
        <InputGroup.Suffix class="pr-2">
          <Chip color="accent" size="md" variant="soft">
            Pro
          </Chip>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>);
