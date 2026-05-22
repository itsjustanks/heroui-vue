import { useState } from 'react'
import { Description, Input, Label, TextField } from '@heroui/react'

export default function InputDemo() {
  const [value, setValue] = useState('')

  return (
    <div className="demo-col">
      <TextField className="w-full max-w-64" name="email" type="email">
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
      </TextField>
      <TextField className="w-full max-w-64" name="username">
        <Label>Username</Label>
        <Input placeholder="Enter username" />
        <Description>Choose a unique username for your account</Description>
      </TextField>
      <TextField className="w-full max-w-64" value={value} onChange={setValue}>
        <Label>Controlled</Label>
        <Input placeholder="Type something…" />
      </TextField>
      <TextField className="w-full max-w-64" isDisabled>
        <Label>Disabled</Label>
        <Input placeholder="Disabled input" />
      </TextField>
    </div>
  )
}
