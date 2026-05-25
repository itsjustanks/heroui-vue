import { Bold, Italic, Strikethrough, TextAlignCenter, TextAlignLeft, TextAlignRight, Underline } from "../../../gravity-icons-vue";
import { ToggleButton, ToggleButtonGroup } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Single selection</span>
        <ToggleButtonGroup defaultSelectedKeys={["center"]} selectionMode="single">
          <ToggleButton id="left">
            <TextAlignLeft />
            Left
          </ToggleButton>
          <ToggleButton id="center">
            <ToggleButtonGroup.Separator />
            <TextAlignCenter />
            Center
          </ToggleButton>
          <ToggleButton id="right">
            <ToggleButtonGroup.Separator />
            <TextAlignRight />
            Right
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-sm text-muted">Multiple selection</span>
        <ToggleButtonGroup defaultSelectedKeys={["bold", "underline"]} selectionMode="multiple">
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
    </div>);
export default SelectionMode;
