import { Label, NumberField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="demo-row">
      <NumberField class="w-full max-w-64" defaultValue={1024} minValue={0} name="width">
        <Label>Width</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input class="w-[120px]" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
    </div>);
