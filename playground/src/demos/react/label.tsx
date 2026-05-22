import { Input, Label } from '@heroui/react'

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="name">Name</Label>
      <Input className="w-64" id="name" placeholder="Enter your name" type="text" />
    </div>
  )
}
