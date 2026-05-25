import { Bold, Italic, Strikethrough, Underline } from "@gravity-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Attached (default)</span>
        <ToggleButtonGroup selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <ToggleButtonGroup.Separator />
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <ToggleButtonGroup.Separator />
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <ToggleButtonGroup.Separator />
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Detached</span>
        <ToggleButtonGroup isDetached selectionMode="multiple">
          <ToggleButton isIconOnly aria-label="Bold" id="bold">
            <Bold />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Italic" id="italic">
            <Italic />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Underline" id="underline">
            <Underline />
          </ToggleButton>
          <ToggleButton isIconOnly aria-label="Strikethrough" id="strikethrough">
            <Strikethrough />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>);
