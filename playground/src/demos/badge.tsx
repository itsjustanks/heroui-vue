import { Avatar, Badge } from '@heroui/react'

const GREEN_URL = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg'
const ORANGE_URL = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg'
const BLUE_URL = 'https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg'

export default function BadgeDemo() {
  return (
    <div className="demo-row">
      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={GREEN_URL} alt="JD" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
        <Badge color="danger" size="sm">5</Badge>
      </Badge.Anchor>

      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={ORANGE_URL} alt="AB" />
          <Avatar.Fallback>AB</Avatar.Fallback>
        </Avatar>
        <Badge color="accent" size="sm">New</Badge>
      </Badge.Anchor>

      <Badge.Anchor>
        <Avatar>
          <Avatar.Image src={BLUE_URL} alt="CD" />
          <Avatar.Fallback>CD</Avatar.Fallback>
        </Avatar>
        <Badge color="success" placement="bottom-right" size="sm" />
      </Badge.Anchor>
    </div>
  )
}
