import { defineComponent } from 'vue'
import { Autocomplete } from '@itsjustanks/heroui-vue'

/** Autocomplete default — Vue TSX. Uses the canonical Autocomplete compound
 *  from `src/autocomplete/` (shared runtime with ComboBox). */
export default defineComponent(() => () => (
  <div class="demo-col" style={{ maxWidth: '280px' }}>
    <Autocomplete placeholder="Pick a fruit" aria-label="Fruit">
      <Autocomplete.Item value="apple">Apple</Autocomplete.Item>
      <Autocomplete.Item value="banana">Banana</Autocomplete.Item>
      <Autocomplete.Item value="cherry">Cherry</Autocomplete.Item>
      <Autocomplete.Item value="grape">Grape</Autocomplete.Item>
      <Autocomplete.Item value="mango">Mango</Autocomplete.Item>
      <Autocomplete.Item value="pear">Pear</Autocomplete.Item>
    </Autocomplete>
  </div>
))
