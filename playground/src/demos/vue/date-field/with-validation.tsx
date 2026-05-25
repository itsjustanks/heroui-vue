import type { DateValue } from "@internationalized/date";
import { DateField, Description, FieldError, Label } from "@itsjustanks/heroui-vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { defineComponent, ref } from "vue";
export default defineComponent(() => {
  const value = ref(null);
  const todayDate = today(getLocalTimeZone());
  const isInvalid = value.value !== null && value.value.compare(todayDate) < 0;
  return () => <div class="flex flex-col gap-4">
      <DateField isRequired class="w-[256px]" isInvalid={isInvalid} minValue={todayDate} name="date" value={value.value} onChange={setValue}>
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>{segment => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
        {isInvalid ? <FieldError>Date must be today or in the future</FieldError> : <Description>Enter a date from today onwards</Description>}
      </DateField>
    </div>;
});
