import { defineComponent } from 'vue'
import { InputGroup, Label, TextField } from '@itsjustanks/heroui-vue'

/** InputGroup demo — Vue TSX, heroui-vue compound API. */
export default defineComponent(() => () => (
  <div class="demo-col">
    <TextField class="w-full max-w-[280px]" name="email">
      <Label>Email address</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <svg class="size-4 text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 6.5L22 7" />
          </svg>
        </InputGroup.Prefix>
        <InputGroup.Input class="w-full max-w-[280px]" placeholder="name@email.com" />
      </InputGroup>
    </TextField>
    <TextField class="w-full max-w-[280px]" name="search">
      <Label>Search</Label>
      <InputGroup>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Suffix>
          <kbd class="text-xs text-muted">⌘K</kbd>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  </div>
))
