import { defineComponent } from 'vue'
import { Label, Switch } from '@itsjustanks/heroui-vue'
import { currentExample } from '../shared'

export default defineComponent(() => () => {
  const example = currentExample('basic')
  const disabled = example === 'disabled'
  const selected = example === 'default-selected' || example === 'controlled'
  const size = example === 'sizes' ? 'sm' : undefined

  return (
    <div class="demo-row">
      <Switch isDisabled={disabled} defaultSelected={selected} size={size}>
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
        <Switch.Content>
          {example !== 'without-label' && <Label class="text-sm">Enable notifications</Label>}
        </Switch.Content>
      </Switch>
      {example === 'sizes' && (
        <Switch size="lg" defaultSelected>
          <Switch.Control><Switch.Thumb /></Switch.Control>
          <Switch.Content><Label class="text-sm">Large switch</Label></Switch.Content>
        </Switch>
      )}
    </div>
  )
})
