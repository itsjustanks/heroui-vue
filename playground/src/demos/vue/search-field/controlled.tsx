import { Button, Description, Label, SearchField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [value, setValue] = React.useState("");
  return () => <div class="flex flex-col gap-4">
      <SearchField name="search" value={value} onChange={setValue}>
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input class="w-[280px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
        <Description>Current value: {value || "(empty)"}</Description>
      </SearchField>
      <div class="flex gap-2">
        <Button variant="tertiary" onPress={() => setValue("")}>
          Clear
        </Button>
        <Button variant="tertiary" onPress={() => setValue("example query")}>
          Set example
        </Button>
      </div>
    </div>;
});
