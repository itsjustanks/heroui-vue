import { Card } from '@heroui/react'

export default function CardDemo() {
  return (
    <Card className="w-[400px]">
      <Card.Header>
        <Card.Title>Become an Acme Creator!</Card.Title>
        <Card.Description>
          Visit the Acme Creator Hub to sign up today and start earning credits from your fans and followers.
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <a
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
        </a>
      </Card.Footer>
    </Card>
  )
}
