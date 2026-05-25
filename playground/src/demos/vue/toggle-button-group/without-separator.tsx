import { Bold, Italic, Strikethrough, Underline } from "@gravity-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <ToggleButtonGroup selectionMode="multiple">
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
    </ToggleButtonGroup>);
