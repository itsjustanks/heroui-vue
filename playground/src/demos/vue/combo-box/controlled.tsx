import type { Key } from "@itsjustanks/heroui-vue";
import { ComboBox, Input, Label, ListBox } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const animals = [{
    id: "cat",
    name: "Cat"
  }, {
    id: "dog",
    name: "Dog"
  }, {
    id: "bird",
    name: "Bird"
  }, {
    id: "fish",
    name: "Fish"
  }, {
    id: "hamster",
    name: "Hamster"
  }];
  const selectedKey = ref("cat");
  const selectedAnimal = animals.find(a => a.id === selectedKey.value);
  return () => <div class="space-y-2">
      <ComboBox class="w-[256px]" selectedKey={selectedKey.value} onSelectionChange={key => selectedKey.value = key}>
        <Label>Animal (controlled)</Label>
        <ComboBox.InputGroup>
          <Input placeholder="Search animals..." />
          <ComboBox.Trigger />
        </ComboBox.InputGroup>
        <ComboBox.Popover>
          <ListBox>
            {animals.map(animal => <ListBox.Item key={animal.id} id={animal.id} textValue={animal.name}>
                {animal.name}
                <ListBox.ItemIndicator />
              </ListBox.Item>)}
          </ListBox>
        </ComboBox.Popover>
      </ComboBox>
      <p class="text-sm text-muted">Selected: {selectedAnimal?.name || "None"}</p>
    </div>;
});
