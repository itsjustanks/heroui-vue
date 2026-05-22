import { defineComponent } from 'vue'
import { Label, SearchField } from '@itsjustanks/heroui-vue'

/** SearchField demo — Vue TSX, mirrors HeroUI v3's SearchField default story. */
export default defineComponent(() => () => (
  <div class="demo-row">
    <SearchField name="search">
      <Label>Search</Label>
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input class="w-[280px]" placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  </div>
))
