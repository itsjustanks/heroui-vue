import { Button, Description, Label, NumberField } from "@itsjustanks/heroui-vue";
import { defineComponent } from "vue";
export default defineComponent(() => {
  const [value, setValue] = React.useState(1024);
  return () => <div class="flex w-full max-w-64 flex-col gap-4">
      <NumberField minValue={0} name="width" value={value} onChange={setValue}>
        <Label>Width</Label>
        <NumberField.Group>
          <NumberField.DecrementButton />
          <NumberField.Input class="w-[120px]" />
          <NumberField.IncrementButton />
        </NumberField.Group>
        <Description>Current value: {value}</Description>
      </NumberField>
      <div class="flex gap-2">
        <Button variant="tertiary" onPress={() => setValue(0)}>
          Reset to 0
        </Button>
        <Button variant="tertiary" onPress={() => setValue(2048)}>
          Set to 2048
        </Button>
      </div>
    </div>;
});
