import { defineComponent } from 'vue'
import { ComboBox, Input, Label, ListBox } from '@itsjustanks/heroui-vue'
import { currentExample } from '../shared'

/** ComboBox demo — Vue TSX, heroui-vue compound API. Composes ComboBox with the
 *  standalone Input + ListBox, matching HeroUI v3 React. */
export default defineComponent(() => () => {
  const example = currentExample('default')
  const variant = example === 'on-surface' ? 'secondary' : 'primary'
  const fullWidth = example === 'full-width'
  const disabled = example === 'disabled'
  const allowsCustomValue = example === 'allows-custom-value' || example === 'custom-value'
  const menuTrigger = example === 'menu-trigger' ? 'focus' : undefined

  return (
    <div class={fullWidth ? 'demo-col' : 'demo-row'}>
      <ComboBox
        class={fullWidth ? 'w-full' : 'w-[256px]'}
        variant={variant}
        fullWidth={fullWidth}
        isDisabled={disabled}
        allowsCustomValue={allowsCustomValue}
        menuTrigger={menuTrigger}
        defaultSelectedKey={example === 'default-selected-key' ? 'cat' : undefined}
      >
        <Label>Favorite Animal</Label>
        <ComboBox.InputGroup>
          <Input placeholder={allowsCustomValue ? 'Type a custom animal...' : 'Search animals...'} />
          <ComboBox.Trigger />
        </ComboBox.InputGroup>
        <ComboBox.Popover>
          <ListBox>
            <ListBox.Item id="aardvark" textValue="Aardvark" isDisabled={example === 'with-disabled-options'}>
              Aardvark
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cat" textValue="Cat">
              Cat
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="dog" textValue="Dog" isDisabled={example === 'with-disabled-options'}>
              Dog
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="kangaroo" textValue="Kangaroo">
              Kangaroo
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="panda" textValue="Panda">
              Panda
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="snake" textValue="Snake">
              Snake
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </ComboBox.Popover>
      </ComboBox>
    </div>
  )
})
