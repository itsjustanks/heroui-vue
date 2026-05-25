import { Label, NumberField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <div class="flex flex-col gap-4">
      <NumberField defaultValue={100} minValue={0} name="primary-width" variant="primary">
        <Label>Primary variant</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input class="w-[120px]" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
      <NumberField defaultValue={100} minValue={0} name="secondary-width" variant="secondary">
        <Label>Secondary variant</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input class="w-[120px]" />
          <NumberField.IncrementButton />
        </NumberField.Group>
      </NumberField>
    </div>);
