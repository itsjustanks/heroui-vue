import { Label, SearchField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <SearchField name="search" render={props => <div {...props} data-custom="foo" />}>
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input class="w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>);
