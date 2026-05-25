import type { DateValue } from "@internationalized/date";
import { Button, DateField, Description, Label } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  return () => <div class="flex flex-col gap-4">
      <DateField class="w-[256px]" name="date" value={value.value} onChange={v => value.value = v}>
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        <Description>Current value: {value.value ? value.value.toString() : "(empty)"}</Description>
      </DateField>
      <div class="flex gap-2">
        <Button variant="tertiary" onPress={() => value.value = today(getLocalTimeZone())}>
          Set today
        </Button>
        <Button variant="tertiary" onPress={() => value.value = null}>
          Clear
        </Button>
      </div>
    </div>;
});
export default Controlled;
