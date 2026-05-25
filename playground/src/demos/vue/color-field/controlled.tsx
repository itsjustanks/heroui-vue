import type { Color } from "@itsjustanks/heroui-vue";
import { Button, ColorField, ColorSwatch, Description, Label, parseColor } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(parseColor("#0485F7"));
  return () => <div class="flex flex-col gap-4">
      <ColorField class="w-[280px]" name="color" value={value.value} onChange={v => value.value = v}>
        <Label>Color</Label>
        <ColorField.Group>
          <ColorField.Prefix>
            <ColorSwatch color={value.value ?? undefined} size="xs" />
          </ColorField.Prefix>
          <ColorField.Input />
        </ColorField.Group>
        <Description>Current value: {value.value ? value.value.toString("hex") : "(empty)"}</Description>
      </ColorField>
      <div class="flex gap-2">
        <Button variant="tertiary" onPress={() => value.value = parseColor("#EF4444")}>
          Set Red
        </Button>
        <Button variant="tertiary" onPress={() => value.value = parseColor("#10B981")}>
          Set Green
        </Button>
        <Button variant="tertiary" onPress={() => value.value = null}>
          Clear
        </Button>
      </div>
    </div>;
});
export default Controlled;
