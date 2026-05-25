import { Label, NumberField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => () => <NumberField class="w-full max-w-64" defaultValue={1024} minValue={0} name="width" render={props => <div {...props} data-custom="foo" />}>
      <Label>Width</Label>
      <NumberField.Group>
        <NumberField.DecrementButton />
        <NumberField.Input class="w-[120px]" />
        <NumberField.IncrementButton />
      </NumberField.Group>
    </NumberField>);
