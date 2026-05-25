import { ColorField, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <ColorField class="w-[280px]" defaultValue="#0485F7" name="primary-color">
        <Label>Primary variant</Label>
        <ColorField.Group variant="primary">
          <ColorField.Input />
        </ColorField.Group>
      </ColorField>
      <ColorField class="w-[280px]" defaultValue="#F43F5E" name="secondary-color">
        <Label>Secondary variant</Label>
        <ColorField.Group variant="secondary">
          <ColorField.Input />
        </ColorField.Group>
      </ColorField>
    </div>);
export default Variants;
