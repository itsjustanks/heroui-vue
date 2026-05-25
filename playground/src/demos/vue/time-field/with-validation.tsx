import type { Time } from "@internationalized/date";
import { Description, FieldError, Label, TimeField } from "@itsjustanks/heroui-vue";
import { parseTime } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const minTime = parseTime("09:00");
  const maxTime = parseTime("17:00");
  const isInvalid = value.value !== null && (value.value.compare(minTime) < 0 || value.value.compare(maxTime) > 0);
  return () => <div class="flex flex-col gap-4">
      <TimeField isRequired class="w-[256px]" isInvalid={isInvalid} maxValue={maxTime} minValue={minTime} name="time" value={value.value} onChange={setValue}>
        <Label>Time</Label>
        <TimeField.Group>
          <TimeField.Input>{segment => <TimeField.Segment segment={segment} />}</TimeField.Input>
        </TimeField.Group>
        {isInvalid ? <FieldError>Time must be between 9:00 AM and 5:00 PM</FieldError> : <Description>Enter a time between 9:00 AM and 5:00 PM</Description>}
      </TimeField>
    </div>;
});
