import { defineComponent } from 'vue'
import { Description, FieldError, Input, Label, TextArea, TextField } from '@itsjustanks/heroui-vue'
import { currentExample } from '../shared'

export default defineComponent(() => () => {
  const example = currentExample('basic')
  const fullWidth = example === 'full-width'
  const disabled = example === 'disabled'
  const invalid = example === 'with-error' || example === 'validation'
  const useTextarea = example === 'textarea'

  return (
    <TextField
      class={fullWidth ? 'w-full' : 'w-full max-w-64'}
      name="email"
      type="email"
      isDisabled={disabled}
      isInvalid={invalid}
      isRequired={example === 'required'}
    >
      <Label>Email</Label>
      {useTextarea
        ? <TextArea placeholder="Tell us more" />
        : <Input placeholder="Enter your email" defaultValue={example === 'controlled' ? 'hello@heroui.com' : undefined} />}
      {example === 'with-description' && <Description>We will never share your email.</Description>}
      {invalid && <FieldError>Enter a valid email address.</FieldError>}
    </TextField>
  )
})
