import { ColorField, FieldError, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <ColorField isInvalid isRequired class="w-[280px]" name="color">
        <Label>Color</Label>
        <ColorField.Group>
          <ColorField.Input placeholder="#000000" />
        </ColorField.Group>
        <FieldError>Please enter a valid hex color</FieldError>
      </ColorField>
      <ColorField isInvalid class="w-[280px]" name="invalid-color">
        <Label>Background Color</Label>
        <ColorField.Group>
          <ColorField.Input defaultValue="not-a-color" />
        </ColorField.Group>
        <FieldError>Invalid color format. Use hex (e.g., #FF5733)</FieldError>
      </ColorField>
    </div>);
export default Invalid;
