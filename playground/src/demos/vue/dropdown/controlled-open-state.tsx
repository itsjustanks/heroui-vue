import { Button, Dropdown, Label } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const open = ref(false);
  return () => <div class="flex min-w-sm flex-col items-center justify-center gap-4">
      <p class="text-sm text-muted">
        Dropdown is: <strong>{open.value ? "open" : "closed"}</strong>
      </p>
      <Dropdown isOpen={open.value} onOpenChange={v => open.value = v}>
        <Button aria-label="Menu" variant="secondary">
          Actions
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu>
            <Dropdown.Item id="new-file" textValue="New file">
              <Label>New file</Label>
            </Dropdown.Item>
            <Dropdown.Item id="open-file" textValue="Open file">
              <Label>Open file</Label>
            </Dropdown.Item>
            <Dropdown.Item id="save-file" textValue="Save file">
              <Label>Save file</Label>
            </Dropdown.Item>
            <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
              <Label>Delete file</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>;
});
export default ControlledOpenState;
