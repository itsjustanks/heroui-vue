import type { Key } from "@itsjustanks/heroui-vue";
import { Autocomplete, Description, EmptyState, Label, ListBox, SearchField, useFilter } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
interface City {
  name: string;
  country: string;
}
export default defineComponent(() => {
  const allCities: City[] = [{
    country: "USA",
    name: "New York"
  }, {
    country: "USA",
    name: "Los Angeles"
  }, {
    country: "USA",
    name: "Chicago"
  }, {
    country: "UK",
    name: "London"
  }, {
    country: "France",
    name: "Paris"
  }, {
    country: "Japan",
    name: "Tokyo"
  }, {
    country: "Australia",
    name: "Sydney"
  }, {
    country: "Canada",
    name: "Toronto"
  }, {
    country: "Germany",
    name: "Berlin"
  }, {
    country: "Spain",
    name: "Madrid"
  }];
  const selectedKey = ref(null);
  const isLoading = ref(false);
  const {
    contains
  } = useFilter({
    sensitivity: "base"
  });

  // Simulate async filtering
  const customFilter = (text: string, inputValue: string) => {
    if (!inputValue) return true;
    isLoading.value = true;
    setTimeout(() => isLoading.value = false, 300);
    return contains(text, inputValue);
  };
  return () => <Autocomplete class="w-[256px]" placeholder="Search for a city" selectionMode="single" value={selectedKey.value} onChange={setSelectedKey}>
      <Label>City</Label>
      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>
      <Autocomplete.Popover>
        <Autocomplete.Filter filter={customFilter}>
          <SearchField autoFocus name="search" variant="secondary">
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input placeholder="Search cities..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <ListBox renderEmptyState={() => <EmptyState>{isLoading.value ? "Searching..." : "No cities found"}</EmptyState>}>
            {allCities.map(city => <ListBox.Item key={city.name} id={city.name} textValue={city.name}>
                <div class="flex flex-col">
                  <Label>{city.name}</Label>
                  <Description>{city.country}</Description>
                </div>
                <ListBox.ItemIndicator />
              </ListBox.Item>)}
          </ListBox>
        </Autocomplete.Filter>
      </Autocomplete.Popover>
    </Autocomplete>;
});
