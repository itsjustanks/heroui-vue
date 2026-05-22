import { defineComponent } from 'vue'
import { Button, Dropdown, Label } from '@itsjustanks/heroui-vue'

/**
 * Dropdown demo — Vue TSX, heroui-vue compound API.
 *
 * Matches HeroUI v3's `dropdown/default` demo: the first child of the Dropdown
 * root becomes the trigger automatically — no explicit trigger wrapper.
 */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        Actions
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key: string | number) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
            <Label>New file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Label>Copy link</Label>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="Edit file">
            <Label>Edit file</Label>
          </Dropdown.Item>
          <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
            <Label>Delete file</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  </div>
))
