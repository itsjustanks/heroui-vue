import { Button, Fieldset, Input, Label, TextField } from "@itsjustanks/heroui-vue";

/** Fieldset basic — React. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <Fieldset>
      <Fieldset.Legend>Account</Fieldset.Legend>
      <Fieldset.Group>
        <TextField>
          <Label>Email</Label>
          <Input type="email" placeholder="you@example.com" />
        </TextField>
        <TextField>
          <Label>Display name</Label>
          <Input placeholder="Ada Lovelace" />
        </TextField>
      </Fieldset.Group>
      <Fieldset.Actions>
        <Button variant="primary">Save</Button>
      </Fieldset.Actions>
    </Fieldset>);
