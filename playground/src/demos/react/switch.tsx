import { Label, Switch } from '@heroui/react'
import { currentExample } from '../shared'

export default function SwitchDemo() {
  const example = currentExample('basic')
  const disabled = example === 'disabled'
  const selected = example === 'default-selected' || example === 'controlled'
  const size = example === 'sizes' ? 'sm' : undefined

  return (
    <div className="demo-row">
      <Switch isDisabled={disabled} defaultSelected={selected} size={size}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          {example !== 'without-label' && <Label className="text-sm">Enable notifications</Label>}
        </Switch.Content>
      </Switch>
      {example === 'sizes' && (
        <Switch size="lg" defaultSelected>
          <Switch.Control><Switch.Thumb /></Switch.Control>
          <Switch.Content><Label className="text-sm">Large switch</Label></Switch.Content>
        </Switch>
      )}
    </div>
  )
}
