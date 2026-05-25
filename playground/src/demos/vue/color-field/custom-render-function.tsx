import type { Color } from "@itsjustanks/heroui-vue";
import { ColorField, ColorSwatch, Label, parseColor } from "@itsjustanks/heroui-vue";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const color = ref(parseColor("#0485F7"));
  return () => <ColorField class="w-[280px]" name="color" render={props => <div {...props} data-custom="foo" />} value={color.value} onChange={setColor}>
      <Label>Color</Label>
      <ColorField.Group render={props => <div {...props} data-custom="foo" />}>
        <ColorField.Prefix>
          <ColorSwatch color={color.value ?? undefined} size="xs" />
        </ColorField.Prefix>
        <ColorField.Input />
      </ColorField.Group>
    </ColorField>;
});
