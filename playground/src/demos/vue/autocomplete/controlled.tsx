import type { Key } from "@itsjustanks/heroui-vue";
import { Autocomplete, EmptyState, Label, ListBox, SearchField, useFilter } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const states = [{
    id: "california",
    name: "California"
  }, {
    id: "texas",
    name: "Texas"
  }, {
    id: "florida",
    name: "Florida"
  }, {
    id: "new-york",
    name: "New York"
  }, {
    id: "illinois",
    name: "Illinois"
  }, {
    id: "pennsylvania",
    name: "Pennsylvania"
  }];
  const state = ref("california");
  const {
    contains
  } = useFilter({
    sensitivity: "base"
  });
  const selectedState = states.find(s => s.id === state.value);
  return () => <div class="space-y-2">
      <Autocomplete class="w-[256px]" placeholder="Select a state" selectionMode="single" value={state.value} onChange={v => state.value = v}>
        <Label>State (controlled)</Label>
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
              {states.map(state => <ListBox.Item key={state.value.id} id={state.value.id} textValue={state.value.name}>
                  {state.value.name}
                  <ListBox.ItemIndicator />
                </ListBox.Item>)}
            </ListBox>
          </Autocomplete.Filter>
        </Autocomplete.Popover>
      </Autocomplete>
      <p class="text-sm text-muted">Selected: {selectedState?.name || "None"}</p>
    </div>;
});
export default Controlled;
