import { ColorField, Description, Label, Surface } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <Surface class="w-[320px] p-4">
      <ColorField defaultValue="#3B82F6" name="color">
        <Label>Theme Color</Label>
        <ColorField.Group variant="secondary">
          <ColorField.Input />
        </ColorField.Group>
        <Description>Select your theme color</Description>
      </ColorField>
    </Surface>);
