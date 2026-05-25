import type { Selection } from "@itsjustanks/heroui-vue";
import { Check } from "../../../gravity-icons-vue";
import { Avatar, Description, Label, ListBox, Surface } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selected = ref(new Set(["1"]));
  const selectedItems = Array.from(selected.value);
  return () => <div class="space-y-4">
      <Surface class="w-[256px] rounded-3xl shadow-surface">
        <ListBox aria-label="Users" selectedKeys={selected.value} selectionMode="multiple" onSelectionChange={v => selected.value = v}>
          <ListBox.Item id="1" textValue="Bob">
            <Avatar size="sm">
              <Avatar.Image alt="Bob" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg" />
              <Avatar.Fallback>B</Avatar.Fallback>
            </Avatar>
            <div class="flex flex-col">
              <Label>Bob</Label>
              <Description>bob@heroui.com</Description>
            </div>
            <ListBox.ItemIndicator>
              {({
              isSelected
            }) => isSelected ? <Check class="size-4 text-accent" /> : null}
            </ListBox.ItemIndicator>
          </ListBox.Item>
          <ListBox.Item id="2" textValue="Fred">
            <Avatar size="sm">
              <Avatar.Image alt="Fred" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg" />
              <Avatar.Fallback>F</Avatar.Fallback>
            </Avatar>
            <div class="flex flex-col">
              <Label>Fred</Label>
              <Description>fred@heroui.com</Description>
            </div>
            <ListBox.ItemIndicator>
              {({
              isSelected
            }) => isSelected ? <Check class="size-4 text-accent" /> : null}
            </ListBox.ItemIndicator>
          </ListBox.Item>
          <ListBox.Item id="3" textValue="Martha">
            <Avatar size="sm">
              <Avatar.Image alt="Martha" src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg" />
              <Avatar.Fallback>M</Avatar.Fallback>
            </Avatar>
            <div class="flex flex-col">
              <Label>Martha</Label>
              <Description>martha@heroui.com</Description>
            </div>
            <ListBox.ItemIndicator>
              {({
              isSelected
            }) => isSelected ? <Check class="size-4 text-accent" /> : null}
            </ListBox.ItemIndicator>
          </ListBox.Item>
        </ListBox>
      </Surface>
      <p class="text-sm text-muted">
        Selected: {selectedItems.length > 0 ? selectedItems.join(", ") : "None"}
      </p>
    </div>;
});
export default Controlled;
