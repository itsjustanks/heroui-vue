import type { Key } from "@itsjustanks/heroui-vue";
import { Autocomplete, EmptyState, Label, ListBox, SearchField, Tag, TagGroup, useFilter } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selectedKey1 = ref(null);
  const selectedKey2 = ref(null);
  const selectedKeys1 = ref([]);
  const selectedKeys2 = ref([]);
  const {
    contains
  } = useFilter({
    sensitivity: "base"
  });
  const items = [{
    id: "option1",
    name: "Option 1"
  }, {
    id: "option2",
    name: "Option 2"
  }, {
    id: "option3",
    name: "Option 3"
  }, {
    id: "option4",
    name: "Option 4"
  }];
  const onRemoveTags1 = (keys: Set<Key>) => {
    selectedKeys1.value = (prev => prev.filter(key => !keys.has(key)))(selectedKeys1.value);
  };
  const onRemoveTags2 = (keys: Set<Key>) => {
    selectedKeys2.value = (prev => prev.filter(key => !keys.has(key)))(selectedKeys2.value);
  };
  return () => <div class="flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold">Single Select Variants</h3>
        <div class="flex flex-col gap-4">
          <Autocomplete class="w-[256px]" placeholder="Select one" selectionMode="single" value={selectedKey1.value} variant="primary" onChange={setSelectedKey1}>
            <Label>Primary variant</Label>
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
                    <SearchField.Input placeholder="Search..." />
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
          <Autocomplete class="w-[256px]" placeholder="Select one" selectionMode="single" value={selectedKey2.value} variant="secondary" onChange={setSelectedKey2}>
            <Label>Secondary variant</Label>
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
                    <SearchField.Input placeholder="Search..." />
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
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-semibold">Multiple Select Variants</h3>
        <div class="flex flex-col gap-4">
          <Autocomplete class="w-[256px]" placeholder="Select multiple" selectionMode="multiple" value={selectedKeys1.value} variant="primary" onChange={keys => selectedKeys1.value = keys as Key[]}>
            <Label>Primary variant</Label>
            <Autocomplete.Trigger>
              <Autocomplete.Value>
                {({
                defaultChildren,
                isPlaceholder,
                state
              }) => {
                if (isPlaceholder || state.selectedItems.length === 0) {
                  return defaultChildren;
                }
                const selectedItemsKeys = state.selectedItems.map(item => item.key);
                return <TagGroup size="sm" onRemove={onRemoveTags1}>
                      <TagGroup.List>
                        {selectedItemsKeys.map(selectedItemKey => {
                      const item = items.find(s => s.id === selectedItemKey);
                      if (!item) return null;
                      return <Tag key={item.id} id={item.id}>
                              {item.name}
                            </Tag>;
                    })}
                      </TagGroup.List>
                    </TagGroup>;
              }}
              </Autocomplete.Value>
              <Autocomplete.ClearButton />
              <Autocomplete.Indicator />
            </Autocomplete.Trigger>
            <Autocomplete.Popover>
              <Autocomplete.Filter filter={contains}>
                <SearchField autoFocus name="search" variant="secondary">
                  <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search..." />
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
          <Autocomplete class="w-[256px]" placeholder="Select multiple" selectionMode="multiple" value={selectedKeys2.value} variant="secondary" onChange={keys => selectedKeys2.value = keys as Key[]}>
            <Label>Secondary variant</Label>
            <Autocomplete.Trigger>
              <Autocomplete.Value>
                {({
                defaultChildren,
                isPlaceholder,
                state
              }) => {
                if (isPlaceholder || state.selectedItems.length === 0) {
                  return defaultChildren;
                }
                const selectedItemsKeys = state.selectedItems.map(item => item.key);
                return <TagGroup size="sm" variant="surface" onRemove={onRemoveTags2}>
                      <TagGroup.List>
                        {selectedItemsKeys.map(selectedItemKey => {
                      const item = items.find(s => s.id === selectedItemKey);
                      if (!item) return null;
                      return <Tag key={item.id} id={item.id}>
                              {item.name}
                            </Tag>;
                    })}
                      </TagGroup.List>
                    </TagGroup>;
              }}
              </Autocomplete.Value>
              <Autocomplete.ClearButton />
              <Autocomplete.Indicator />
            </Autocomplete.Trigger>
            <Autocomplete.Popover>
              <Autocomplete.Filter filter={contains}>
                <SearchField autoFocus name="search" variant="secondary">
                  <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input placeholder="Search..." />
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
        </div>
      </div>
    </div>;
});
