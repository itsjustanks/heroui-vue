import { Description, FieldError, Label, SearchField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [value, setValue] = React.useState("");
  const isInvalid = value.length > 0 && value.length < 3;
  return () => <div class="flex flex-col gap-4">
      <SearchField isRequired isInvalid={isInvalid} name="search" value={value} onChange={setValue}>
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input class="w-[280px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
        {isInvalid ? <FieldError>Search query must be at least 3 characters</FieldError> : <Description>Enter at least 3 characters to search</Description>}
      </SearchField>
    </div>;
});
