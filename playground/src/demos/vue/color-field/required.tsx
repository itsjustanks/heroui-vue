import { ColorField, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <ColorField isRequired class="w-[280px]" name="color">
        <Label>Brand Color</Label>
        <ColorField.Group>
          <ColorField.Input placeholder="#000000" />
        </ColorField.Group>
      </ColorField>
      <ColorField isRequired class="w-[280px]" name="theme-color">
        <Label>Theme Color</Label>
        <ColorField.Group>
          <ColorField.Input placeholder="#000000" />
        </ColorField.Group>
        <Description>Required field</Description>
      </ColorField>
    </div>);
export default Required;
