import { defineComponent } from 'vue'
import { Button, Separator, Toolbar } from '@itsjustanks/heroui-vue'

/** Toolbar demo — Vue TSX, mirrors the React parity demo (HeroUI v3). */
export default defineComponent(() => () => (
  <div class="demo-row">
    <Toolbar aria-label="Text formatting">
      <Button isIconOnly aria-label="Bold" variant="ghost">B</Button>
      <Button isIconOnly aria-label="Italic" variant="ghost">I</Button>
      <Button isIconOnly aria-label="Underline" variant="ghost">U</Button>
      <Separator />
      <Button aria-label="Copy" variant="ghost">Copy</Button>
      <Button aria-label="Cut" variant="ghost">Cut</Button>
    </Toolbar>
  </div>
))
