import { Label, SearchField } from "@itsjustanks/heroui-vue";

/** SearchField demo — HeroUI v3 React, mirrors the SearchField default story. */
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <SearchField name="search">
        <Label>Search</Label>
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input class="w-[280px]" placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>
    </div>);
