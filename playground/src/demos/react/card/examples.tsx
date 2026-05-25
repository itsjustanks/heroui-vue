import { Avatar, Button, Card, Input, Label } from '@heroui/react'
import { avatarUrls, currentExample } from '../../shared'

function DefaultCard({ variant = 'default' }: { variant?: any }) {
  return (
    <Card className="w-[400px]" variant={variant}>
      <Card.Header>
        <Card.Title>Become an Acme Creator!</Card.Title>
        <Card.Description>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <a href="https://heroui.com" rel="noopener noreferrer" target="_blank">Creator Hub</a>
      </Card.Footer>
    </Card>
  )
}

export default function CardExamples() {
  const example = currentExample('default')

  if (example === 'horizontal') {
    return (
      <Card className="w-[480px]">
        <Card.Content className="flex flex-row items-center gap-4">
          <Avatar><Avatar.Image alt="Creator" src={avatarUrls.orange} /><Avatar.Fallback>AC</Avatar.Fallback></Avatar>
          <div>
            <Card.Title>Acme Creator</Card.Title>
            <Card.Description>Launch your first content subscription.</Card.Description>
          </div>
        </Card.Content>
      </Card>
    )
  }

  if (example === 'variants') {
    return (
      <div className="demo-grid demo-grid--2">
        <DefaultCard />
        <DefaultCard variant="surface" />
      </div>
    )
  }

  if (example === 'with-avatar') {
    return (
      <Card className="w-[400px]">
        <Card.Header className="flex items-center gap-3">
          <Avatar><Avatar.Image alt="Jane Doe" src={avatarUrls.purple} /><Avatar.Fallback>JD</Avatar.Fallback></Avatar>
          <div><Card.Title>Jane Doe</Card.Title><Card.Description>Product designer</Card.Description></div>
        </Card.Header>
      </Card>
    )
  }

  if (example === 'with-form') {
    return (
      <Card className="w-[400px]">
        <Card.Header><Card.Title>Join the waitlist</Card.Title></Card.Header>
        <Card.Content className="demo-col">
          <Label>Email</Label>
          <Input placeholder="you@example.com" />
        </Card.Content>
        <Card.Footer><Button>Submit</Button></Card.Footer>
      </Card>
    )
  }

  if (example === 'with-images') {
    return (
      <Card className="w-[400px]">
        <img alt="HeroUI gradient" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1557683316-973673baf926?w=800&auto=format&fit=crop" />
        <Card.Header><Card.Title>Visual Story</Card.Title><Card.Description>A media card with image content.</Card.Description></Card.Header>
      </Card>
    )
  }

  return <DefaultCard />
}
