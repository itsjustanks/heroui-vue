import { defineComponent } from 'vue'
import { Avatar, Badge } from '@itsjustanks/heroui-vue'
import { avatarUrls, currentExample } from '../../shared'

function AvatarBadge({ children, placement = 'top-right' }: { children?: string; placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' }) {
  return (
    <Badge.Anchor>
      <Avatar>
        <Avatar.Image alt="User avatar" src={avatarUrls.green} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Badge color="danger" placement={placement} size="sm">{children}</Badge>
    </Badge.Anchor>
  )
}

export default defineComponent(() => () => {
  const example = currentExample()

  if (example === 'colors') {
    return (
      <div class="demo-row">
        <Badge color="accent">Accent</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="danger">Danger</Badge>
      </div>
    )
  }

  if (example === 'sizes') {
    return (
      <div class="demo-row">
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    )
  }

  if (example === 'variants') {
    return (
      <div class="demo-row">
        <Badge variant="solid">Solid</Badge>
        <Badge variant="flat">Flat</Badge>
        <Badge variant="faded">Faded</Badge>
        <Badge variant="bordered">Bordered</Badge>
      </div>
    )
  }

  if (example === 'placements') {
    return (
      <div class="demo-row">
        <AvatarBadge placement="top-right">1</AvatarBadge>
        <AvatarBadge placement="top-left">2</AvatarBadge>
        <AvatarBadge placement="bottom-right">3</AvatarBadge>
        <AvatarBadge placement="bottom-left">4</AvatarBadge>
      </div>
    )
  }

  if (example === 'with-content') {
    return <AvatarBadge>99+</AvatarBadge>
  }

  if (example === 'dot') {
    return (
      <div class="demo-row">
        <AvatarBadge />
        <Badge color="success" />
        <Badge color="warning" />
      </div>
    )
  }

  return (
    <Badge.Anchor>
      <Avatar>
        <Avatar.Image alt="User avatar" src={avatarUrls.blue} />
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>
      <Badge color="danger" size="sm">5</Badge>
    </Badge.Anchor>
  )
})
