import { ColorField, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <ColorField isDisabled class="w-[280px]" defaultValue="#0485F7" name="color">
        <Label>Color</Label>
        <ColorField.Group>
          <ColorField.Input />
        </ColorField.Group>
        <Description>This color field is disabled</Description>
      </ColorField>
      <ColorField isDisabled class="w-[280px]" name="color-empty">
        <Label>Color</Label>
        <ColorField.Group>
          <ColorField.Input placeholder="#000000" />
        </ColorField.Group>
        <Description>This color field is disabled</Description>
      </ColorField>
    </div>);
export default Disabled;
