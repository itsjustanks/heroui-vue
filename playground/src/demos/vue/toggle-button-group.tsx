import { defineComponent } from 'vue'
import { ToggleButton, ToggleButtonGroup } from '@itsjustanks/heroui-vue'

/** ToggleButtonGroup demo — Vue TSX, mirrors HeroUI v3's toggle-button-group basic demo. */
export default defineComponent(() => () => (
  <div class="demo-row">
    <ToggleButtonGroup selectionMode="multiple">
      <ToggleButton isIconOnly aria-label="Bold" id="bold">B</ToggleButton>
      <ToggleButton isIconOnly aria-label="Italic" id="italic">
        <ToggleButtonGroup.Separator />
        I
      </ToggleButton>
      <ToggleButton isIconOnly aria-label="Underline" id="underline">
        <ToggleButtonGroup.Separator />
        U
      </ToggleButton>
    </ToggleButtonGroup>
  </div>
))
