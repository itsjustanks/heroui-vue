import { Avatar } from '@heroui/react'
import { avatarUrls, currentExample } from '../../shared'

function UserAvatar({ color, size, variant }: { color?: any; size?: any; variant?: any }) {
  return (
    <Avatar color={color} size={size} variant={variant}>
      <Avatar.Image alt="User avatar" src={avatarUrls.purple} />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  )
}

export default function AvatarExamples() {
  const example = currentExample()

  if (example === 'sizes') {
    return (
      <div className="demo-row">
        <UserAvatar size="sm" />
        <UserAvatar size="md" />
        <UserAvatar size="lg" />
      </div>
    )
  }

  if (example === 'colors') {
    return (
      <div className="demo-row">
        <UserAvatar color="default" />
        <UserAvatar color="primary" />
        <UserAvatar color="success" />
        <UserAvatar color="warning" />
        <UserAvatar color="danger" />
      </div>
    )
  }

  if (example === 'variants' || example === 'custom-styles') {
    return (
      <div className="demo-row">
        <UserAvatar variant="solid" />
        <UserAvatar variant="flat" />
        <UserAvatar variant="faded" />
        <UserAvatar variant="bordered" />
      </div>
    )
  }

  if (example === 'fallback') {
    return (
      <div className="demo-row">
        <Avatar><Avatar.Fallback>JD</Avatar.Fallback></Avatar>
        <Avatar color="primary"><Avatar.Fallback>AB</Avatar.Fallback></Avatar>
        <Avatar color="success"><Avatar.Fallback>CD</Avatar.Fallback></Avatar>
      </div>
    )
  }

  if (example === 'group') {
    return (
      <div className="demo-row">
        <UserAvatar />
        <Avatar><Avatar.Image alt="Blue" src={avatarUrls.blue} /><Avatar.Fallback>B</Avatar.Fallback></Avatar>
        <Avatar><Avatar.Image alt="Orange" src={avatarUrls.orange} /><Avatar.Fallback>O</Avatar.Fallback></Avatar>
      </div>
    )
  }

  return (
    <div className="demo-row">
      <UserAvatar />
      <Avatar><Avatar.Image alt="Blue" src={avatarUrls.blue} /><Avatar.Fallback>B</Avatar.Fallback></Avatar>
      <Avatar><Avatar.Fallback>JR</Avatar.Fallback></Avatar>
    </div>
  )
}
