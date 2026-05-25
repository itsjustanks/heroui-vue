import { Button, Fieldset, Input, Label, TextField } from '@heroui/react'

/** Fieldset basic — React. */
export default function FieldsetBasic () {
  return (
    <Fieldset>
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
    </Fieldset>
  )
}
