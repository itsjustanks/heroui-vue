import type { Key } from "@itsjustanks/heroui-vue";
import { Autocomplete, EmptyState, Label, ListBox, SearchField, useFilter } from "@itsjustanks/heroui-vue";
import { Icon } from "@iconify/react";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selectedKey = ref(null);
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
  return () => <Autocomplete class="w-[256px]" placeholder="Select one" selectionMode="single" value={selectedKey.value} onChange={setSelectedKey}>
      <Label>State</Label>
      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator class="size-3">
          <Icon icon="gravity-ui:chevrons-expand-vertical" />
        </Autocomplete.Indicator>
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
    </Autocomplete>;
});
