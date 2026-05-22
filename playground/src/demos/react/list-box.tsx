import { ListBox } from '@heroui/react'

export default function ListBoxDemo() {
  return (
    <div className="demo-row">
      <ListBox aria-label="Fruits" className="w-[220px]" selectionMode="single">
        <ListBox.Item id="apple">
          Apple
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="banana">
          Banana
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="cherry">
          Cherry
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="mango">
          Mango
          <ListBox.ItemIndicator />
        </ListBox.Item>
        <ListBox.Item id="orange">
          Orange
          <ListBox.ItemIndicator />
        </ListBox.Item>
      </ListBox>
    </div>
  )
}
