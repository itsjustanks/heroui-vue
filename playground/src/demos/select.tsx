import { Label, ListBox, Select } from '@heroui/react'

export default function SelectDemo() {
  return (
    <div className="demo-row">
      <Select className="w-[200px]" placeholder="Select a state">
        <Label>State</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="florida" textValue="Florida">
              Florida
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="delaware" textValue="Delaware">
              Delaware
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="california" textValue="California">
              California
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="texas" textValue="Texas">
              Texas
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="new-york" textValue="New York">
              New York
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>

      <Select className="w-[200px]" placeholder="Select a team">
        <Label>Team</Label>
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="design" textValue="Design">
              Design
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="engineering" textValue="Engineering">
              Engineering
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="product" textValue="Product">
              Product
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  )
}
