import { Label, Switch } from '@heroui/react'

export default function SwitchDemo() {
  return (
    <div className="demo-row">
      <Switch>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Enable notifications</Label>
        </Switch.Content>
      </Switch>
    </div>
  )
}
