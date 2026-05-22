import { Card } from '@heroui/react'

export default function CardDemo() {
  return (
    <div className="demo-col">
      <Card className="w-[320px]" variant="default">
        <Card.Header>
          <Card.Title>Default Card</Card.Title>
          <Card.Description>Standard card appearance (bg-surface)</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>The default card variant for most use cases.</p>
        </Card.Content>
      </Card>

      <Card className="w-[320px]" variant="secondary">
        <Card.Header>
          <Card.Title>Secondary Card</Card.Title>
          <Card.Description>Medium prominence (bg-surface-secondary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Use to draw moderate attention.</p>
        </Card.Content>
      </Card>

      <Card className="w-[320px]" variant="tertiary">
        <Card.Header>
          <Card.Title>Tertiary Card</Card.Title>
          <Card.Description>Higher prominence (bg-surface-tertiary)</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>Use for primary or featured content.</p>
        </Card.Content>
        <Card.Footer>
          <span>Footer action</span>
        </Card.Footer>
      </Card>
    </div>
  )
}
