import { ColorField, Description, Label } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <ColorField class="w-[280px]" defaultValue="#3B82F6" name="color">
        <Label>Primary Color</Label>
        <ColorField.Group>
          <ColorField.Input />
        </ColorField.Group>
        <Description>Enter your brand's primary color</Description>
      </ColorField>
      <ColorField class="w-[280px]" defaultValue="#F59E0B" name="accent-color">
        <Label>Accent Color</Label>
        <ColorField.Group>
          <ColorField.Input />
        </ColorField.Group>
        <Description>Used for highlights and CTAs</Description>
      </ColorField>
    </div>);
