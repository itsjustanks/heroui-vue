import { Avatar } from '@heroui/react'

export default function AvatarDemo() {
  return (
    <div className="demo-row">
      <Avatar>
        <Avatar.Image src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" alt="John Doe" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar size="sm">
        <Avatar.Fallback color="accent">AB</Avatar.Fallback>
      </Avatar>
      <Avatar size="md">
        <Avatar.Fallback color="success">CD</Avatar.Fallback>
      </Avatar>
      <Avatar size="lg">
        <Avatar.Fallback color="danger">EF</Avatar.Fallback>
      </Avatar>
      <Avatar variant="soft">
        <Avatar.Fallback color="warning">GH</Avatar.Fallback>
      </Avatar>
    </div>
  )
}
