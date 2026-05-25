import { Autocomplete, Button, EmptyState, Label, ListBox, SearchField, useFilter } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const isOpen = ref(false);
  const {
    contains
  } = useFilter({
    sensitivity: "base"
  });
  const items = [{
    id: "florida",
    name: "Florida"
  }, {
    id: "delaware",
    name: "Delaware"
  }, {
    id: "california",
    name: "California"
  }, {
    id: "texas",
    name: "Texas"
  }, {
    id: "new-york",
    name: "New York"
  }, {
    id: "washington",
    name: "Washington"
  }];
  return () => <div class="space-y-4">
      <Autocomplete class="w-[256px]" isOpen={isOpen.value} placeholder="Select one" selectionMode="single" onOpenChange={v => isOpen.value = v}>
        <Label>State</Label>
        <Autocomplete.Trigger>
          <Autocomplete.Value />
          <Autocomplete.ClearButton />
          <Autocomplete.Indicator />
        </Autocomplete.Trigger>
        <Autocomplete.Popover>
          <Autocomplete.Filter filter={contains}>
            <SearchField autoFocus name="search" variant="secondary">
              <SearchField.Group>
                <SearchField.SearchIcon />
                <SearchField.Input placeholder="Search states..." />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>
            <ListBox renderEmptyState={() => <EmptyState>No results found</EmptyState>}>
              {items.map(item => <ListBox.Item key={item.id} id={item.id} textValue={item.name}>
                  {item.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Autocomplete.Filter>
        </Autocomplete.Popover>
      </Autocomplete>
      <Button onPress={() => isOpen.value = !isOpen.value}>{isOpen.value ? "Close" : "Open"} Autocomplete</Button>
      <p class="text-sm text-muted">Autocomplete is {isOpen.value ? "open" : "closed"}</p>
    </div>;
});
export default ControlledOpenState;
