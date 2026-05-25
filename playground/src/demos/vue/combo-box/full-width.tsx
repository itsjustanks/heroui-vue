import { ComboBox, Input, Label, ListBox } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="w-[400px] space-y-4">
      <ComboBox fullWidth>
        <Label>Favorite Animal</Label>
        <ComboBox.InputGroup>
          <Input placeholder="Search animals..." />
          <ComboBox.Trigger />
        </ComboBox.InputGroup>
        <ComboBox.Popover>
          <ListBox>
            <ListBox.Item id="aardvark" textValue="Aardvark">
              Aardvark
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="cat" textValue="Cat">
              Cat
              <ListBox.ItemIndicator />
            </ListBox.Item>
            <ListBox.Item id="dog" textValue="Dog">
              Dog
              <ListBox.ItemIndicator />
            </ListBox.Item>
          </ListBox>
        </ComboBox.Popover>
      </ComboBox>
    </div>);
