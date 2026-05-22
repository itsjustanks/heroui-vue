import { Button, Dropdown } from '@heroui/react'

export default function DropdownDemo() {
  return (
    <div className="demo-row">
      <Dropdown>
        <Button variant="secondary">Actions</Button>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item id="new-file">New file</Dropdown.Item>
            <Dropdown.Item id="copy-link">Copy link</Dropdown.Item>
            <Dropdown.Item id="edit-file">Edit file</Dropdown.Item>
            <Dropdown.Item id="delete-file" variant="danger">
              Delete file
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  )
}
