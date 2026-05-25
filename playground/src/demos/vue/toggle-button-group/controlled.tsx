import type { Key } from "@itsjustanks/heroui-vue";
import { Bold, Italic, Strikethrough, Underline } from "@gravity-ui/icons";
import { ToggleButton, ToggleButtonGroup } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const selectedKeys = ref(new Set<Key>(["bold"]));
  return () => <div class="flex flex-col gap-4">
      <ToggleButtonGroup selectedKeys={selectedKeys.value} selectionMode="multiple" onSelectionChange={setSelectedKeys}>
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
      <p class="text-sm text-muted">
        Selected:{" "}
        <span class="font-medium">
          {selectedKeys.value.size > 0 ? [...selectedKeys.value].join(", ") : "None"}
        </span>
      </p>
    </div>;
});
