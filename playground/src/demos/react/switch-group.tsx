import { Label, Switch, SwitchGroup } from '@heroui/react'

export default function SwitchGroupDemo() {
  return (
    <SwitchGroup>
      <Switch>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Product updates</Label>
        </Switch.Content>
      </Switch>
      <Switch>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          <Label className="text-sm">Security alerts</Label>
        </Switch.Content>
      </Switch>
    </SwitchGroup>
  )
}
