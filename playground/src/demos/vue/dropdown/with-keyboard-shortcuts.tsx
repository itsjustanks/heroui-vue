import { Button, Dropdown, Kbd, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        Actions
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={key => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new" textValue="New">
            <Label>New</Label>
            <Kbd class="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>N</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item id="open" textValue="Open">
            <Label>Open</Label>
            <Kbd class="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>O</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item id="save" textValue="Save">
            <Label>Save</Label>
            <Kbd class="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Content>S</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
          <Dropdown.Item id="delete" textValue="Delete" variant="danger">
            <Label>Delete</Label>
            <Kbd class="ms-auto" slot="keyboard" variant="light">
              <Kbd.Abbr keyValue="command" />
              <Kbd.Abbr keyValue="shift" />
              <Kbd.Content>D</Kbd.Content>
            </Kbd>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>);
