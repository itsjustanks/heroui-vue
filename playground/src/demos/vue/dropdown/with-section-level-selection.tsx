import type { Selection } from "@itsjustanks/heroui-vue";
import { Button, Dropdown, Header, Kbd, Label, Separator } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const textStyles = ref(new Set(["bold", "italic"]));
  const textAlignment = ref(new Set(["left"]));
  return () => <Dropdown>
      <Button aria-label="Menu" variant="secondary">
        Styles
      </Button>
      <Dropdown.Popover class="min-w-[256px]">
        <Dropdown.Menu>
          <Dropdown.Section>
            <Header>Actions</Header>
            <Dropdown.Item id="cut" textValue="Cut">
              <Label>Cut</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>X</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item id="copy" textValue="Copy">
              <Label>Copy</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>C</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item id="paste" textValue="Paste">
              <Label>Paste</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>U</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
          </Dropdown.Section>
          <Separator />
          <Dropdown.Section selectedKeys={textStyles.value} selectionMode="multiple" onSelectionChange={v => textStyles.value = v}>
            <Header>Text Style</Header>
            <Dropdown.Item id="bold" textValue="Bold">
              <Dropdown.ItemIndicator />
              <Label>Bold</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>B</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item id="italic" textValue="Italic">
              <Dropdown.ItemIndicator />
              <Label>Italic</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>I</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item id="underline" textValue="Underline">
              <Dropdown.ItemIndicator />
              <Label>Underline</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="command" />
                <Kbd.Content>U</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
          </Dropdown.Section>
          <Separator />
          <Dropdown.Section selectedKeys={textAlignment.value} selectionMode="single" onSelectionChange={v => textAlignment.value = v}>
            <Header>Text Alignment</Header>
            <Dropdown.Item id="left" textValue="Left">
              <Dropdown.ItemIndicator type="dot" />
              <Label>Left</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="alt" />
                <Kbd.Content>A</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item id="center" textValue="Center">
              <Dropdown.ItemIndicator type="dot" />
              <Label>Center</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="alt" />
                <Kbd.Content>H</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
            <Dropdown.Item id="right" textValue="Right">
              <Dropdown.ItemIndicator type="dot" />
              <Label>Right</Label>
              <Kbd class="ms-auto" slot="keyboard" variant="light">
                <Kbd.Abbr keyValue="alt" />
                <Kbd.Content>D</Kbd.Content>
              </Kbd>
            </Dropdown.Item>
          </Dropdown.Section>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>;
});
export default WithSectionLevelSelection;
