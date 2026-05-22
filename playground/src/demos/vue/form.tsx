import { defineComponent } from 'vue'
import { Button, Description, Form, Input, Label, TextField } from '@itsjustanks/heroui-vue'

export default defineComponent(() => {
  const onSubmit = (e: Event) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data: Record<string, string> = {}
    formData.forEach((value, key) => { data[key] = value.toString() })
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`)
  }

  return () => (
    <Form class="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField name="email" type="email">
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
      </TextField>

      <TextField name="password" type="password">
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
      </TextField>

      <div class="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </div>
    </Form>
  )
})
