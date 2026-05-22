import { Label, Switch } from '@heroui/react'

export default function SwitchDemo() {
  return (
    <div className="demo-col">
      <Switch>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Enable notifications</Label>
        </Switch.Content>
      </Switch>

      <Switch defaultChecked>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Public profile</Label>
        </Switch.Content>
      </Switch>

      <Switch size="sm">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Small switch</Label>
        </Switch.Content>
      </Switch>

      <Switch size="lg">
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Large switch</Label>
        </Switch.Content>
      </Switch>

      <Switch disabled>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Disabled</Label>
        </Switch.Content>
      </Switch>
    </div>
  )
}
